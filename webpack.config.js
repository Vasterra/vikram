const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

// Dir aliases
const resourcesDir = 'src/assets/js/';

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        host: 'localhost',
        compress: true,
        port: 3000,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vikram',
            template: './src/index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
    resolve: {
        alias: {
            Views: path.resolve(__dirname, resourcesDir + 'views'),
            Components: path.resolve(__dirname, resourcesDir + 'components'),
            Routes: path.resolve(__dirname, resourcesDir + 'routes'),
            Helpers: path.resolve(__dirname, resourcesDir + 'helpers'),
            Data: path.resolve(__dirname, resourcesDir + 'data'),
            Store: path.resolve(__dirname, resourcesDir + 'store'),
            Middleware: path.resolve(__dirname, resourcesDir + 'middleware'),
            Images: path.resolve(__dirname, 'public/images'),
        }
    }
}