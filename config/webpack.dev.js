const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [rootDir].concat(args));
}

module.exports = function(env) {
    return webpackMerge(commonConfig(env), {
        /**
         * If and how source maps are generated
         * For development, use cheap-module-eval-source-map. 
         * For production, use cheap-module-source-map
         */
        devtool: 'cheap-module-eval-source-map',
        output: {
            // [name] is a placeholder that is replaced with entry names
            filename: '[name].bundle.js'
        },
        devServer: {
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        },
    });

};