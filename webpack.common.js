const path = require('path')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')
const HTMLWebpackPlugin =require('html-webpack-plugin')



module.exports = {
    entry:path.resolve(__dirname, './client/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].[hash].js"
    },
    watch: true,
    plugins: [
        new HTMLWebpackPlugin({template: "./client/index.html"}),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(css)$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use:['file-loader']
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }

        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

}
