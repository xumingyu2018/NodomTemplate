const merge = require('webpack-merge');
const commonConfig = require('../webpack.config');
const prodConfig = {
    mode: 'production',
    optimization: {
        minimize: false,
        // minimizer: [new TerserPlugin({
        // })],
      },
};

module.exports = merge.merge(commonConfig, prodConfig);
