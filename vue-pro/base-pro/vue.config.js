module.exports = {
    publicPath: '/pro/',
    devServer: {
        // 'http://localhost:9001'
        proxy: {
            '/pro': {
                target: 'http://localhost:9001/',
                ws: true,
                changeOrigin: true
              },
        }
    }
}