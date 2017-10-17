var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
  	rules: [
  	  { test: /\.txt$/, use: 'raw-loader'},
  	  {
  	  	test: /\.(ico|svg)$/, 
  	  	include: APP_DIR,
  	  	exclude: /node_modules/,
  	  	use: 'file-loader'
  	  },
  	  {
  	  	test: /\.(js|jsx)$/, 
  	  	include: APP_DIR,
  	  	exclude: /node_modules/,
  	  	use: 'babel-loader'
  	  },
  	  { test: /\.css$/, use: 'css-loader'}
  	]
  },
  plugins: [
  	  new webpack.optimize.UglifyJsPlugin(),
  	  new HtmlWebpackPlugin({
  	  	title: 'My Web Site',
  	  	favicon: './src/client/favicon.ico',
  	  	template: './src/client/index.html'
  	  })
  ]

};


module.exports = config;
