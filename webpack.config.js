const path    = require('path');
const webpack = require('webpack');
require('imports-loader');
require('exports-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
	getConfig(),
	getConfig('standalone')
];

/**
 * Load specific configuration
 * @param type
 * @returns {{entry: {lib: string, playground: string}, output: {filename: string, path: string, hotUpdateChunkFilename: string, hotUpdateMainFilename: string, library: string, libraryTarget: string}, module: {rules: *[]}, externals: *, stats: {colors: boolean}, resolve: {extensions: string[]}, plugins: *[]}}
 */
function getConfig(type = '') {
	const entries = {
		lib:        __dirname + '/src/lib.js',
		playground: __dirname + '/src/playground.js',
	};

	if (type !== 'standalone') {
		entries.main = __dirname + '/src/less/index.less';
	}

	return {
		entry: entries,

		output: {
			filename:               'vxteaser-[name]' + (type ? '-' + type : '') + '.js',
			path:                   path.resolve(__dirname, ".") + '/dist',
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
						use:      [
							'css-loader',
							{
								loader:  'clean-css-loader',
								options: {
									compatibility: 'ie9',
									level:         2,
									inline:        ['remote']
								}
							},
							'postcss-loader',
							'less-loader'
						]
					})
				},
				{
					test: /\.css$/,
					use:  ['style-loader', 'css-loader']
				}
			]
		},

		externals: type === 'standalone' ?  {
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react',
				umd: 'react',
			},
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom',
				umd: 'react-dom',
			},
		} : {},
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
					return getPath('css/[name]' + (type ? '-' + type : '') + '.css').replace('css/js', 'css');
				},
			})
		]
	};
}
