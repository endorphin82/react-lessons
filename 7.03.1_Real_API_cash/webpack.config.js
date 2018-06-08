/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'public', 'build'),
		/*path: path.join(__dirname, 'public', 'build'),*/
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	watch: isDevelopment,
	devtool: isDevelopment && 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.(css|less)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true,
						localIdentName: '[name]__[local]___[hash:base64:5]',
					}// translates CSS into CommonJS
				}, {
					loader: 'less-loader' // compiles Less to CSS
				},
				{
					loader: 'postcss-loader',
					options: {
						plugins() {
							return [
								require('autoprefixer')
							];
						}
					}
				}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(NODE_ENV)
			}
		})
	]
};
