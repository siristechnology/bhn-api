require('dotenv').config()
const Agenda = require('agenda')
const logger = require('../../config/logger')

const crawler = require('../NewsCrawlerTrigger/index')
const twitterJob = require('../TwitterTrigger')
const trendingJob = require('../trending')

module.exports = async function () {
	logger.info('starting jobs')

	const agenda = new Agenda({ db: { address: process.env.DATABASE_URL } })

	agenda.define('crawl articles', async (job) => {
		logger.info('crawl articles job started')
		crawler()
	})

	agenda.define('pull tweets', async (job) => {
		logger.info('pull tweets job started')
		twitterJob()
	})

	agenda.define('fetch trending', async () => {
		logger.info('fetch trending job started')
		trendingJob()
	})

	await agenda.start()

	await agenda.every('30 minutes', 'crawl articles')
	await agenda.every('5 minutes', 'notify users')
	await agenda.every('20 minutes', 'pull tweets')
	await agenda.every('1 hours', 'fetch trending')
}
