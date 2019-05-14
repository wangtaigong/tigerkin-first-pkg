const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			title: '入门webpack',
			hash: true,
			minify: {
				removeAttributeQuotes: true
			}
		})
	],
	devServer: {
		contentBase:'../dist',
		host:'localhost',
		port:'8090',
		compress:true
	}
}