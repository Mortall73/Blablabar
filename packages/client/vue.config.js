module.exports = {
    lintOnSave: false,
    devServer: {
        publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : 'http://localhost',
        port: 3000,
        proxy: 'http://localhost:8080',
    },
    assetsDir: './assets',
    transpileDependencies: ['vuex-module-decorators']
}