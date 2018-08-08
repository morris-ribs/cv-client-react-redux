const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require ('./webpack.base.js');

const config = {
    target: 'node',
    entry: './src/index.js',
    externals: [nodeExternals()], // Don't bundle .js files from node_modules
    output: {
        filename: 'server-bundle.js',
        path: path.resolve(__dirname, "build")
    }
};

module.exports = merge(baseConfig, config);