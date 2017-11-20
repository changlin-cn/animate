const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: false,
    entry: {
        index: path.join(__dirname, "demo.js")
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'test'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template:'test.html'
        })
    ],
    devServer: {
        contentBase: './test',

    }
}