const path             = require('path');
const webpackConfigAll = require('./webpack.config.js');
const webpackConfig    = webpackConfigAll[0];


module.exports = {
	title:          'VXTeaser Guide',
	pagePerSection: true,
	sections:       [
		{
			name:     'General',
			sections: [
				{
					name:    'VX Actions',
					content: 'docs/vxactions.md',
				},
				{
					name:    'CSS Helpers',
					content: 'docs/css-helpers.md',
				}
			],
		},
		{
			name:       'Components',
			components: 'src/components/Content/**/*.js',
		},
	],
	require:        [
		path.join(__dirname, 'http-root/lib/css/main.css'),
		path.join(__dirname, 'http-root/css/styleguide.css')
	],
	styleguideDir:  path.join(__dirname, 'http-root/styleguide'),
	webpackConfig:  webpackConfig,
}
