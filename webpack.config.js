const path = require('path');


module.exports = (env) => {
    return {
        mode: "development",
        entry: path.join(__dirname, 'src', 'index.web.ts'),
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".ts", ".js", ".html", ".css", ".sass", ".scss"]
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/i,
                    loader: "ts-loader"
                }
            ]
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 8080,
        },
    }
}