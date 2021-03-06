const { TrendingTweetCount } = require('./database/mongooseSchema')
const { TrendingTwitterHandles } = require('./../config/twitter-handles')
const { trendingCategories } = require('../config/category')

module.exports = {
	getTrendingHandles: async () => {
		return TrendingTwitterHandles
	},

	saveTrendingTweetCount: async (counts) => {
		const trendingCounts = counts.sort((a, b) => (a.count < b.count ? 1 : b.count < a.count ? -1 : 0))
		const trendings = []
		trendingCategories.forEach((iCat) => {
			const categoryCounts = trendingCounts.filter((x) => x.category === iCat).slice(0, 5)
			trendings.push({
				category: iCat,
				counts: categoryCounts,
			})
		})
		const trendingCountObj = new TrendingTweetCount({ trendings })
		const savedCount = await trendingCountObj.save()
		return savedCount
	},

	getTrendingTweetCount: async () => {
		return await TrendingTweetCount.findOne({}, {}, { sort: { createdDate: -1 } }).lean()
	},
}
