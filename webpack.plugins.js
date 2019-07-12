const webpack              = require('webpack');
const path                 = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(
        /power-assert-formatter[\\\/]lib/,
        path.resolve('./src'),
        {}
    ),
    new FilterWarningsPlugin({
        exclude: /System.import/
    })
];