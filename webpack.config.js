const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: {
        index: './src/frontend/src/index.js',
    },
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'static/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                      }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{ loader: 'url-loader?limit=100000 '}]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     proxy: {
    //         '/api': 'http://localhost:8080'
    //     },
    //     historyApiFallback: {
    //         disableDotRule: true,
    //         rewrites: [{ from: /^\/admin.html/, to: '/build/admin.html' }]
    //     }
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            // favicon: './favicon.ico',
            filename: 'index.html',
            chunks: ['index']
        }),
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     filename: 'admin/index.html',
        //     chunks: ['admin']
        // })
    ]
};