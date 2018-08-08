const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require ('./webpack.base.js');

const config = {
    target: 'web',
    entry: './src/client.js',
    output: {
        filename: 'bundleLatest.js',
        path: path.resolve(__dirname, "dist")
    }
};

module.exports = merge(baseConfig, config);