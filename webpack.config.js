const path              = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


// require('dotenv').config();
const BUILD_DIR    = path.join(__dirname, 'dist');
const APP_DIR      = path.join(__dirname, 'src');
const isProduction = (process.argv.indexOf('-p') !== -1);

const config = {
    entry  : {
        bundle: APP_DIR + '/index.js',
        // vendor: VENDOR_LIBS
    },
    output : {
        path      : BUILD_DIR,
        filename  : '[name].js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias     : {
            'vue'       : 'vue/dist/vue.esm.js',
            'components': path.join(__dirname, 'src', 'components')
        }
    },
    module : {
        rules: [
            {
                use    : 'babel-loader',
                test   : /\.js$/,
                exclude: /node_modules/
            },
            {
                test   : /\.vue$/,
                loader : 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: APP_DIR + '/index.html'
        })
    ]
};

module.exports = config;
