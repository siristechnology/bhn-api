require('dotenv').config()

const repeatedArticles = (articles) => {
	const repeated = []
	for (let i = 0; i < articles.length; i++) {
		for (let j = i + 1; j < articles.length; j++) {
			if (articles[i].nouns.length > articles[j].length) {
				if (isSubsentence(articles[i].nouns, articles[j].nouns)) {
					repeated.push(articles[j])
				}
			} else {
				if (isSubsentence(articles[j].nouns, articles[i].nouns)) {
					repeated.push(articles[i])
				}
			}
		}
	}
	return repeated
}

const getMatchedNewArticles = (newArticles, oldArticles) => {
	const repeated = []
	for (let i = 0; i < newArticles.length; i++) {
		for (let j = 0; j < oldArticles.length; j++) {
			if (newArticles[i].nouns.length > oldArticles[j].nouns.length) {
				if (isSubsentence(newArticles[i].nouns, oldArticles[j].nouns)) {
					repeated.push(newArticles[i])
				}
			} else {
				if (isSubsentence(oldArticles[j].nouns, newArticles[i].nouns)) {
					repeated.push(newArticles[i])
				}
			}
		}
	}
	return repeated
}

const isSubsentence = (array1, array2) => {
	const result = array2.every((val) => array1.includes(val))
	return result
}

module.exports = {
	removeDuplicateArticles: function (articles) {
		const set1 = new Set(articles)
		const set2 = new Set(repeatedArticles(articles))
		const difference = new Set([...set1].filter((x) => !set2.has(x)))
		return Array.from(difference)
	},

	filterNewArticles: function (newArticles, oldArticles) {
		const set1 = new Set(newArticles)
		const set2 = new Set(getMatchedNewArticles(newArticles, oldArticles))
		const difference = new Set([...set1].filter((x) => !set2.has(x)))
		return Array.from(difference)
	},
}
