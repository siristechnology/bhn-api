const _ = require('lodash')
const mongooseSchema = require('../db-service/database/mongooseSchema')

const { User, Article } = mongooseSchema
const getWeather = require('../weather')
const logger = require('../config/logger')
const { Tweet } = require('../db-service/database/mongooseSchema')
const SourceConfig = require('../config/news-source-config.json')

module.exports = {
	Query: {
		getArticles: async (parent, args, { Article }) => {
			args.criteria = args.criteria || {}
			args.criteria.lastQueryDate = args.criteria.lastQueryDate || new Date('2001-01-01')
			args.criteria.lastArticleId = args.criteria.lastArticleId || '000000000000000000000000'

			// const promises = categories.map(async (category) => {
			// 	const _articles = await Article.find({
			// 		category,
			// 		link: { $ne: null },
			// 		modifiedDate: { $gt: new Date(args.criteria.lastQueryDate) },
			// 		_id: { $gt: args.criteria.lastArticleId },
			// 	})
			// 		.lean()
			// 		.sort({ _id: -1 })
			// 		.limit(20)

			// 	return [..._articles]
			// })

			// const articles = await Promise.all(promises)
			const articles = await Article.find().lean().sort({ _id: -1 }).limit(100)
			let articleFlattened = _.flatten(articles)
			articleFlattened = articleFlattened.sort((a, b) => (a._id < b._id ? 1 : b._id < a._id ? -1 : 0))
			const articleList = articleFlattened.map((article) => {
				const mySource = SourceConfig.find((x) => x.sourceName === article.sourceName)
				article.source = {
					name: mySource.name,
					url: mySource.link,
					logoLink: process.env.SERVER_BASE_URL + mySource.logoLink,
				}
				return article
			})

			return articleList
		},

		getArticle: async (parent, { _id }) => {
			const article = await Article.findById(_id).lean()
			const mySource = SourceConfig.find((x) => x.sourceName === article.sourceName)
			return {
				...article,
				source: { name: mySource.name, url: mySource.link, logoLink: process.env.SERVER_BASE_URL + article.source.logoLink },
			}
		},

		getTweets: async (parent, args, { Tweet }) => {
			args.criteria = args.criteria || {}
			args.criteria.lastQueryDate = args.criteria.lastQueryDate || new Date('2001-01-01')
			args.criteria.lastTweetId = args.criteria.lastTweetId || '000000000000000000000000'

			const tweets = await Tweet.find().sort({ publishedDate: -1 }).limit(100)

			return tweets
		},

		getTweetByHandle: async (parent, { handle }) => {
			const tweets = await Tweet.find({ handle }).sort({ publishedDate: -1 }).limit(100)
			return tweets
		},

		getTrending: async (parent, args, { TrendingTweetCount }) => {
			const { TrendingDbService } = require('./../db-service')
			return await TrendingDbService.getTrendingTweetCount()
		},

		getWeatherInfo: async (parent, args, { ipAddress }) => {
			try {
				if (ipAddress === '::1' || ipAddress === '::ffff:127.0.0.1') ipAddress = '27.111.16.0'
				logger.debug(`Printing ip: ${ipAddress}`)

				const weatherInfo = await getWeather(ipAddress)
				weatherInfo.ipAddress = ipAddress

				return {
					ipAddress: ipAddress,
					temperature: weatherInfo.main.temp,
					condition: weatherInfo.weather[0].main,
					description: weatherInfo.weather[0].description,
					place: weatherInfo.name,
				}
			} catch (error) {
				logger.error(`Printing ip: ${ipAddress}`)
				throw error
			}
		},
	},

	Mutation: {
		storeFcmToken: async (parent, args, { ipAddress }) => {
			const {
				input: { nid, fcmToken, countryCode, timeZone, createdDate, modifiedDate },
			} = args

			const response = await User.update(
				{ nid },
				{
					$set: {
						fcmToken,
						countryCode,
						timeZone,
						ipAddress,
						createdDate: createdDate || modifiedDate,
						modifiedDate: modifiedDate || createdDate,
					},
				},
				{ upsert: true },
			)

			return { success: !!response.ok }
		},
	},
}
