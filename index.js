const fs = require('fs')
const server = require('@fwd/api')

const csv = require('csvtojson')

function dataset(name) {
	return new Promise((resolve, reject) => {
		try {
			csv().fromFile(`./datasets/${name || 'headlines'}.csv`).then((data)=> resolve(data))
		} catch(e) { console.log("File not found."); reject() }
	})
}

server.add({
	method: 'get',
	path: '/json',
	action: async (req) => await dataset(req.query.name)
})

server.start(8080)

