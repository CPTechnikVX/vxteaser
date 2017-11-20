module.exports = [
	{
		entry: __dirname + '/src/lib.js',

		output: {
			filename: 'vxteaser.js',
			path:     __dirname + '/lib',
			library:  'VXTeaser'
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
		}
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
		}
	}
];

