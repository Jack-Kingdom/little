import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let webpackConfig = {
    entry: {
        home: './src/entry.js',
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: "js/[name].js"
    },
    devServer: {
        port: 8080,
        hot: true,
        inline: true,
        stats: {colors: true},
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'styles-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                // loader:  "styles-loader!css-loader!less-loader"
                loader: ExtractTextPlugin.extract({
                    fallback: 'styles-loader',
                    use: "css-loader!less-loader",
                })
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
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'katex': 'Katex',
    },
    plugins: [
        // home page
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        // combine css file
        new ExtractTextPlugin("css/[name].css"),
    ]
};

export default webpackConfig;