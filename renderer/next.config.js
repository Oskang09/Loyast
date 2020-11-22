const path = require('path');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')

const isProd = process.env.NODE_ENV === 'production'

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { }
}

module.exports = withLess(withSass(withCSS({
    lessLoaderOptions: {
        javascriptEnabled: true
    },
    webpack: (config, { isServer, webpack }) => {
        config.target = 'electron-renderer';
        if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
        config.plugins.push(new webpack.IgnorePlugin(/^pg-native$/));
        config.node = {
            ...(config.node || {}),
            net: 'empty',
            tls: 'empty',
            dns: 'empty',
            fs: 'empty',
        };

        config.module.rules.push({
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        });

        config.module.rules.push({
            test: /\.json$/,
            loader: 'json-loader'
        });

        return config;
    },
})))