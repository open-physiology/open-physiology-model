const loaders = require('./webpack.loaders.js');

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
