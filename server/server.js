'use strict'

require('babel/register')

const path = require('path')
const express = require('express')

var app = express()

// When asked for /static/** Express will look at ../client/dist/**
app.use(
  '/static',
  express.static(path.join(__dirname, '..', 'client', 'dist'))
)

app.get('*', require('./initial-render'))

const port = process.env.PORT || 3000

app.listen(port, function(error) {
	if (error) {
		console.error(error)
		return process.exit(3)
	}

	console.info('Listening on http://localhost:%s', port)
})
