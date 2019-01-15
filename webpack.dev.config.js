
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js', // entry file - source code 
	output: {       // the output file in development environment
		path: __dirname,
		filename: './release/bundle.js'
	},

	module: {    // module 'babel' used for test es2015 syntax, and change to es5
		rules: [{
			test: /\.js?$/, // test .js file
			exclude: /(node_modules)/, // exclude all files in 'node_modules'
			loader: 'babel-loader' // add module to test es6, if get es6 change to es5
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],  // all js put in index.html template

	devServer: {
		contentBase: path.join(__dirname, './release'), // root directory
		open: true, // auto open browser
		port: 9000 // on port 9000
	} // create web server to automatically open and renew the htmp page
}














