const _ = require('lodash')
const dataset = require('./headlines.json')
const topics = require('./topics')

module.exports = (words) => {

	var counts = {}

	words.map(a => {
		counts[a] = counts[a] || 0
		counts[a] += 1
	})

	var top = []

	var exclude = [  'will', 'bill', 'video', 'years', 'year', 'trillion', 'billion', 'million', 'found', 'out', 'now',  'about', 'with', 'say', 'could', 'than', 'has', 'but', 'of', 'over', 'an', 'series',  'was', 'its',  'former', 'all','us', 'by','-', '|',  'not','be',  'in', 'as', 'against', 'two','from', 'this', 'are', 'says', 'into', 'who', 'or', 'a', 'for', 'after', 'new', 'news','that', 'into', 'one', 'people', 'their', 'calls', 'up', 'if', 'he', 'to', 'to', 'to', 'have', 'how', 'on', 'and', 'at', 'is', 'the', 'first', 'back', 'more', 'it', 'man', 'her', 'his', 'them', 'they' ]

	words.map(a => {
		if (counts[a] && counts[a] > 50 && !exclude.includes(a)) top[a] = counts[a]
	})

	return top

}