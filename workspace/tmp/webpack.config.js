const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {app: './src/app.js',sub: './src/sub.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[chunkhash].[ext]',
                            outputPath: 'images',
                            publicPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        })
    ]
}
