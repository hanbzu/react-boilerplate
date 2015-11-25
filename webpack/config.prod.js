'use strict'

var path = require('path')
var webpack = require('webpack')

// * Using output.publicPath:
// When run in the browser, webpack needs to know where you'll host the generated bundle.
// Thus it can request additional chunks (when using code splitting) or referenced files
// loaded via the file-loader or url-loader respectively. If you configure your server to
// host the bundle under /assets/ you should write: publicPath: "/assets/"
// http://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do

// * OccurenceOrderPlugin: Chunk ids by occurrence count. Ids often used get shorter ids.
// * DefinePlugin: Defines free variables. Useful for dev/production builds.
// * UglifyJsPlugin: It minimises JS.

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, '..', 'client', 'src', 'app')
  ],
  output: {
		path: path.join(__dirname, '..', 'client', 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			},
			__DEV__: 'false',
			__ON_SERVER__: 'false',
			__ON_CLIENT__: 'true'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: path.join(__dirname, '..')
			}
		]
	}
}
