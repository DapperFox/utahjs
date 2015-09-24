module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname + "/bin",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};
