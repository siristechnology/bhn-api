const TrendingJob = require('../index')
require('../../../db-service/initialize')

jest.setTimeout(200000)

describe('Trending Job', () => {
	it('Integration test', async () => {
		await TrendingJob()
	})
})
