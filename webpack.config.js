const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');
const MiniCSSExtrectPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		clean: true,
	},
	plugins: [
		new MiniCSSExtrectPlugin({
			filename: 'styles.css',
		}),
		new HTMLPlugin({
			title: 'Website',
			template: path.resolve(__dirname, 'static/template.html'),
			filename: 'index.html',
			inject: 'body',
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s?[ac]ss$/,
				use: [MiniCSSExtrectPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
};
