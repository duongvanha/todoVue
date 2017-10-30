const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack           = require('webpack');
const nodeExternals     = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

require('dotenv').config();
const BUILD_DIR    = path.join(__dirname);
const APP_DIR      = path.join(__dirname, 'app');
const isProduction = (process.argv.indexOf('-p') !== -1);

const VENDOR_LIBS = [
    'react',
    'react-dom',
    'react-redux',
    'react-helmet',
    'redux',
    'redux-form',
    'react-tap-event-plugin',
    'react-router',
    'react-router-config',
    'react-router-dom',
    'redux-logger',
    'material-ui'
    /**
     * add more name library
     */
];
const config      = {
    entry  : {
        bundle: APP_DIR + '/client/index.js',
        vendor: VENDOR_LIBS
    },
    output : {
        path      : BUILD_DIR + '/public/',
        // filename: '[name].[chunkhash].js',
        filename  : '[name].js',
        publicPath: "/",
    },
    module : {
        rules: [
            {
                use    : 'babel-loader',
                test   : /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test  : /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options: {limit: 40000}
                    },
                    // 'url-loader',
                    'image-webpack-loader'
                ]
            }
        ]
    }
};

module.exports = config ;
