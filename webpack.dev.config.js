const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
    },
    module: {
        rules: [{
                test: /\.hbs?/,
                use: [
                    'handlebars-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader', "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', "sass-loader",
                ],
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'All-Gradients | By Sina Bayandorian',
            template: './src/index.hbs',
            description: 'A website developed by Sina Bayandorian for you to access lots and lots of ready-to-use gradients and also to generate the gradients of your own',
        }),
    ],
}