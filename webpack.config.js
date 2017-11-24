const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
    devtool: false,
    entry: {
        index: path.join(__dirname, "./demo/src/demo.js")
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'demo/dist'),
        publicPath: './'
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
            filename:'index.html',
            template:'./demo/src/test.html'
        }),
        new cleanWebpackPlugin(['*'], {
            root: path.resolve(__dirname,'./demo/dist'),
            verbose: true,
            dry: false
        }),
    ],
    devServer: {
        contentBase: './demo/dist',

    }
}