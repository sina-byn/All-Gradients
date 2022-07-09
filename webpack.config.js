const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    mode: 'production',
    module: {
        rules: [
            {
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
                    MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', "sass-loader",
                ],
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            title: 'All-Gradients | By Sina Bayandorian',
            template: './src/index.hbs',
            description: 'A website developed by Sina Bayandorian for you to access lots and lots of ready-to-use gradients and also to generate the gradients of your own',
        }),
    ],
    devServer: {
        allowedHosts: 'all',
    },
}