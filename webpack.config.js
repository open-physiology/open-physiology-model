const loaders = require('./webpack.loaders.js');
const plugins = require('./webpack.plugins.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
	context: __dirname + '/src',
    devtool: 'source-map',
    entry: {
        'open-physiology-model': [ 'babel-polyfill', './index.js' ],
        'open-physiology-model-minimal':           [ './index.js' ]
    },
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
		sourceMapFilename: '[file].map',
		devtoolModuleFilenameTemplate:         '[absolute-resource-path]',
		devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
	},
	module: {
		rules: loaders
	}
};
