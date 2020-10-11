const NewsCrawler = require('news-crawler')
const { saveArticles } = require('../../db-service/newsDbService')
const SourceConfig = require('../../config/news-source-config.json')
const logger = require('../../config/logger')
const { filterNewArticles } = require('./helper')
const { Article } = require('../../db-service/database/mongooseSchema')

module.exports = async function () {
	const ipAddress = require('ip').address()

	try {
		let articles = await NewsCrawler(SourceConfig, 3)
		articles = articles.filter((a) => a.imageLink !== null)

		const savedArticles = await Article.find({ createdDate: { $gt: new Date(Date.now() - 12 * 60 * 60 * 1000) } })

		const checkWithOldArticles = filterNewArticles(articles, savedArticles)

		checkWithOldArticles.forEach((x) => (x.hostIp = ipAddress))

		await saveArticles(checkWithOldArticles)
	} catch (error) {
		logger.error('Error while crawling:', error)
	}
	logger.info('News Crawler ran!', new Date().toISOString())
}
