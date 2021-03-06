require('dotenv').config()
const TweetDbService = require('./TweetDbService.js')
const mongoose = require('mongoose')
mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

describe('TweetDbService', () => {
	it('getTwitterHandles should return Twitter handles', async () => {
		const twitterHandles = await TweetDbService.getTwitterHandles()
		expect(twitterHandles.length).toBeGreaterThan(0)
	})

	it('saveTweets should save tweets', async () => {
		const tweet = {
			text: 'dummy tweet',
		}
		const savedTweets = await TweetDbService.saveTweets([tweet])

		expect(savedTweets[0]._id).not.toBeNull()

		TweetDbService.deleteTweets({ _id: savedTweets[0]._id })
	})
})
