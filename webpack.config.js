module.exports = {
    entry: ["./myEntry.js"],
    output: { filename: "bundle.js"},
    watch: false,
    devServer: {
        inline: true,
        hot: true,
        port: 5018
    },
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['react', 'es2015'] }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },       
}

/*
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader',
                enforce: "pre"
            }
        ],

*/
