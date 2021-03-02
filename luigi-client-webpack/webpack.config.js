const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin(
        {
            hash:true,
            template: './src/index.html',
            filename: './index.html'
        }
    )],
};