module.exports = {
    publicPath: '/',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.xml$/,
                    loader: 'raw-loader',
                },
            ],
        },
    },
}