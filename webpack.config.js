const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const type = env.type || '';

    const entries = {
        lib: './src/lib.js',
        playground: './src/playground.js',
    };

    if (type !== 'standalone') {
        entries.main = './src/less/index.less';
    }

    return {
        mode: 'production',
        entry: entries,
        output: {
            filename: `vxteaser-[name]${type ? '-' + type : ''}.js`,
            path: path.resolve(__dirname, 'dist'),
            library: {
                name: 'VXTeaser',
                type: 'umd',
            },
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        externals: type === 'standalone' ? {
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
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `css/[name]${type ? '-' + type : ''}.css`,
            }),
        ],
        optimization: {
            minimizer: [
                '...',
                new CssMinimizerPlugin(),
            ],
        },
        target: ['web', 'es5'],
    };
};
