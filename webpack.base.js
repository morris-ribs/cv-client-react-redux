// import webpack from 'webpack';
// import path from 'path';
const path = require('path');
module.exports = {
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/, 
                include: path.join(__dirname, 'src'), loaders: ['babel'],
                exclude:/node_modules/,
                options: {
                    presets: [
                        'react', 
                        'stage-0', 
                        'es2015',
                        [
                            'env', { targets: { browsers: ['last 2 versions'] } }
                        ]
                    ]
                }
            },{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ],
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /(\.scss)$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg)$/, loader: 'file-loader?limit=8192' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    }
};