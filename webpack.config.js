const path = require('path'); module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack 4 Starter',
            templates: './src/index.html',
            inject: true,
            minify;{
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
};