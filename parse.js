const _ = require('lodash')
const dataset = require('./headlines.json')
const topics = require('./topics')

var words = []

dataset.map(a => {
	a.title.toLowerCase().split(' ').map(b => words.push(b))
})

console.log(topics(words))