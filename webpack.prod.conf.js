const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
        filename: 'wysiwyg-bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/js/wg/'
    }
});