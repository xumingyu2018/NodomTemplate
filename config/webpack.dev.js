const merge = require('webpack-merge');
const commonConfig = require('../webpack.config');
const devConfig = {
    devServer: {
        static: {
            directory: '/public'
        },
        compress: true,
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: {
            htmlAcceptHeaders: [
                'text/html',
                'application/xhtml+xml'
            ],
        },
    },
    mode: 'development',
    stats: 'errors-warnings'
};

module.exports = merge.merge(commonConfig, devConfig);