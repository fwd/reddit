const server = require('@fwd/api')

server.add({
	method: 'get',
	path: '/json',
	action: async (req) => require('./headlines.json')
})

server.start(8080)

