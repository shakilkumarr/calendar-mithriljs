var webpack = require('webpack');
const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    plugins: [
        // To strip all locales except “en”
        new MomentLocalesPlugin(),
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
    ],
    mode : "development",
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
        				test: /\.css/,
        				use: ['style-loader', 'css-loader']
      			}
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
