const loaders = require('./webpack.loaders.js');
const plugins = require('./webpack.plugins.js');

module.exports = {
    mode: 'production',
	context: __dirname + '/src',
    devtool: 'source-map',
    entry: {
        'open-physiology-model': [ 'babel-polyfill', './index.js' ],
        'open-physiology-model-minimal':           [ './index.js' ]
    },
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
        library: 'OpenPhysiologyModel',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map'
	},
	module: {
		rules: loaders
	},
    plugins: plugins
};
