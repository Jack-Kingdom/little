import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let webpackConfig = {
    entry: {
        home: ['./src/home/index.js'],
        admin: ['./src/admin/index.js']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    devServer: {
        port: 8080,
        hot: true,
        inline: true,
        stats: {colors: true},
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, '../node_modules'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        // inject build file to html
        new HtmlWebpackPlugin({
            template: 'src/home/index.html',
            chunks: ['home'],
            filename: 'home.html',
            minify: {
                // todo minify html
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/admin/index.html',
            chunks: ['admin'],
            filename: 'admin.html',
            minify: {
                // todo minify html
                removeComments: true
            }
        })
    ]
};

export default webpackConfig
