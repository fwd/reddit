/**
* This is a NodeJS script file
* You run it via the command line like so: > node script.js
* You'll need NodeJS 16+ installed & the following packages. 
*/

// npm i sentiment snoowrap moment lodash fs

const fs = require('fs')
const _ = require('lodash')
const moment = require('moment')
const snoowrap = require('snoowrap')
const Sentiment = require('sentiment')

const reddit = new snoowrap({
    userAgent: 'put your user-agent string here',
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    username: 'USERNAME',
    password: 'PASSWORD'
});

async function data(subreddits, limit, type) {
	
	var data = []
	
	var subreddits = typeof subreddits == "string" ? subreddits.split(',') : subreddits

	for (var sub of subreddits) {

		items = await reddit.getSubreddit(sub.toLowerCase().replace(' ', ''))[type || 'getHot']({ limit })

	    for (var item of items) {
	        
	        var sentiment = new Sentiment();
	        
	        item.sentiment = sentiment.analyze(item.title)
	        
	    }
		    
	    items = items.map(a => {
	        return {
	            title: a.title,
	            domain: a.domain,
	            category: sub,
	            link: a.url,
	            sentiment: a.sentiment.score,
	            timestamp: a.created,
	            published: moment.unix(a.created).format('LLL'),
	        }
	    })   

	    data.push(items)

	}

	data = _.flatten(data)
  
  // avoid reddit internal links
	var banned = [
		'i.imgur.com',
		'v.redd.it',
		'i.redd.it',
	]

	data = data.filter(a => !banned.includes(a.domain) && a.domain && !a.domain.includes('self.') && !a.link.includes('/r/'))

	data = _.sortBy(data, function(item) {
		return new Date(item.timestamp)
	}).reverse()

	data = data.filter(a => moment.unix(a.timestamp).format('LL') == moment().format('LL'))

	return data

}

await data() // magic
