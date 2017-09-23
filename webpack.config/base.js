const path = require('path')
const root = path.resolve(__dirname, '../')

module.exports = {
    entry: path.join(root, 'src/main.js'),
    output: {
        path: path.join(root, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common',
            components: path.join(root, 'src/components'),
            styles: path.join(root, 'src/styles'),
            constants: path.join(root, 'src/constants'),
        },
        extensions: ['.js', '.vue'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ]
    },
}