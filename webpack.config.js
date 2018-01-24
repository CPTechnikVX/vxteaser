var path    = require('path');
var webpack = require('webpack');
require('imports-loader');
require('exports-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		lib:        __dirname + '/src/lib.js',
		main:       __dirname + '/src/less/index.less',
		playground: __dirname + '/src/playground.js',
	},

	output: {
		filename:               'vxteaser-[name].js',
		path:                   path.resolve(__dirname, ".") + '/lib',
		hotUpdateChunkFilename: 'temp/hot/hot-update.js',
		hotUpdateMainFilename:  'temp/hot/hot-update.json',
		library:                'VXTeaser',
		libraryTarget:          'umd'
	},

	module: {
		rules: [
			{
				test:    /\.js$/,
				use:     [
					'babel-loader',
				],
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.less/,
				use:  ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:      ['css-loader', 'less-loader']
				})
			},
			{
				test: /\.css$/,
				use:  ['style-loader', 'css-loader']
			}
		]
	},

	externals: {
//			 Use external versions
//			"react": "React"
	},
	stats:     {
		colors: true
	},
	resolve:   {
		extensions: ['.js', '.jsx']
	},
	plugins:   [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'Promise': 'promise-polyfill',
			'fetch':   'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin({
			filename: (getPath) => {
				return getPath('css/[name].css').replace('css/js', 'css');
			},
		})
	]
};
