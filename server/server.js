'use strict'

require('babel/register')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')

// Check environment
const rootPath = path.resolve(__dirname, '..')
if (!process.env.NODE_PATH || path.resolve(process.env.NODE_PATH) !== rootPath) {
	console.error('NODE_PATH must be set to "%s"', rootPath)
	process.exit(1)
}
if (!process.env.NODE_ENV) {
	console.error('NODE_ENV must be set')
	process.exit(2)
}

const props = {
  clientDistPath: path.join(__dirname, '..', 'client', 'dist'),
  staticPath: path.join(__dirname, '..', 'client', 'static'),
  port: process.env.PORT || 3000
}

global.__DEV__ = ('development' === process.env.NODE_ENV)
global.__ON_SERVER__ = true
global.__ON_CLIENT__ = false

var app = express()

if (__DEV__) {
  const webpack = require('webpack')
	const webpackDevMiddleware = require('webpack-dev-middleware')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const webpackConfig = require('../webpack/config.dev')
	const compiler = webpack(webpackConfig)
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}))
	app.use(webpackHotMiddleware(compiler))
}
else {
  // When asked for /static/** Express will look at ../client/dist/**
  app.use('/static', express.static(props.clientDistPath))
}

app.use(favicon(props.staticPath + '/favicon.ico'))
app.use(express.static(props.staticPath)) // site.io/kitten.jpg served from staticPath

app.get('*', require('./initial-render'))

app.listen(props.port, function(error) {
	if (error) {
		console.error(error)
		return process.exit(3)
	}

	console.info('Listening on http://localhost:%s', props.port)
})
