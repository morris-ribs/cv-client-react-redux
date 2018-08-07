import webpack from 'webpack';
import path from 'path';

const nodeExternals = require('webpack-node-externals');

var clientBundleConfig = {
    debug: true,
    devtool: 'inline-source-map',
    externals: [nodeExternals()], // Don't bundle .js files from node_modules
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
       // 'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'node',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /(\.scss)$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg)$/, loader: 'file-loader?limit=8192' }
        ]
    }
};

// var serverBundleConfig = {
//     entry: [
//         path.resolve(__dirname, 'src/index')
//     ],
//     output: {
//        // libraryTarget: 'commonjs',
//         publicPath: '/',
//         path: path.join(__dirname, './dist')
//     },
//     devServer: {
//         contentBase: path.resolve(__dirname, 'src')
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin()
//     ],
//     target: 'node',
//     devtool: 'inline-source-map',
//     externals: [nodeExternals()], // Don't bundle .js files from node_modules
//     module: {
//         loaders: [
//             { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
//             { test: /(\.css)$/, loaders: ['style', 'css'] },
//             { test: /(\.scss)$/, loaders: ['style', 'css', 'sass'] },
//             { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
//             { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
//             { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
//             { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
//             { test: /\.(png|jpg)$/, loader: 'file-loader?limit=8192' }
//         ]
//     }
// };

export default clientBundleConfig; //, serverBundleConfig];
