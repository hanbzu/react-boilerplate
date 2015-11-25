'use strict'

require('babel/register')

const express = require('express')

var app = express()

app.get('*', require('./initial-render'))

const port = process.env.PORT || 3000

app.listen(port, function(error) {
	if (error) {
		console.error(error)
		return process.exit(3)
	}

	console.info('Listening on http://localhost:%s', port)
})
