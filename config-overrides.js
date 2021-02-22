const webpack = require('webpack');

module.exports = function override(config, env) {
    config.plugins.push(new webpack.DefinePlugin({__DEV__: true}));
    config.module.rules.push({
        test: /\.(js|tsx?)$/,
        use: {
            loader: 'babel-loader',
        },
    });
    config.module.rules.push({
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                esModule: false,
            },
        },
    });

    return config;
}