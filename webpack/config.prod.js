/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.js');

const prodConfig = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: /(node_modules)/,
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
};
module.exports = merge(common, prodConfig);
