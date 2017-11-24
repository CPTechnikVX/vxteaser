var path    = require('path');
var webpack = require('webpack');
require('imports-loader');
require('exports-loader');

module.exports = [
	{
		entry: __dirname + '/src/lib.js',

		output: {
			filename:      'vxteaser.js',
			path:          path.resolve(__dirname, ".") + '/lib',
			library:       'VXTeaser',
			libraryTarget: 'umd'
		},

		module:    {
			loaders: [
				{
					test:    /(\.jsx|\.js)$/,
					exclude: /node_modules/,
					loaders: ['babel-loader']
				},
			],
		},
//		externals: {
//			 Use external versions
//			"react":     "React",
//			"react-dom": "ReactDOM"
//		},
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
		]
	},
	{
		entry: __dirname + '/src/playground.js',

		output: {
			filename: 'vxteaser-playground.js',
			path:     __dirname + '/lib',
			library:  'VXTeaserView'
		},

		module:  {
			loaders: [
				{
					test:    /(\.jsx|\.js)$/,
					exclude: /node_modules/,
					loaders: ['babel-loader']
				},
			],
		},
		stats:   {
			colors: true
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.ProvidePlugin({
				'Promise': 'promise-polyfill',
				'fetch':   'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
			}),
//			new webpack.optimize.UglifyJsPlugin({
//				compress: {
//					warnings: false
//				}
//			}),
		]
	}
];

