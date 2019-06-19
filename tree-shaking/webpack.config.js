var path = require('path');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
module.exports = {
	context: path.resolve(__dirname, './'),
	entry: {
		index: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
	},
	module: {
	
	}, 
	plugins: [
		new WebpackDeepScopeAnalysisPlugin(),
	]
	

}