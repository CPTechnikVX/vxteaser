var path             = require('path');
var webpackConfigAll = require('./webpack.config.js');
var webpackConfig    = webpackConfigAll[0];


module.exports = {
	components:    'src/components/Content/**/*.js',
	require:       [
		path.join(__dirname, 'http-root/lib/css/main.css'),
		path.join(__dirname, 'http-root/lib/css/styleguide.css')
	],
	styleguideDir: path.join(__dirname, 'http-root/styleguide'),
	title:         'VXTeaser',
	webpackConfig: webpackConfig
}
