const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [rootDir].concat(args));
}

module.exports = function(env) {
    return {
        entry: {
            'app': path.resolve(rootDir, 'src', 'main'),
            'polyfill': path.resolve(rootDir, 'src', 'polyfill'),
            'vendor': path.resolve(rootDir, 'src', 'vendor')
        },
        resolve: {
            /**
             * Resolve extension-less file requests by looking for matching files 
             * with .ts extension or .js extension (for regular JavaScript files 
             * and pre-compiled TypeScript files).
             */
            extensions: ['.ts', '.js', '.json']
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    /**
                     * awesome-typescript-loader—a loader to transpile the Typescript code to ES5, 
                     * guided by the tsconfig.json file
                     */
                    loaders: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]'
                },
                {
                    /**
                     * To string and sass loader support for *.scss files (from Angular components)
                     * Returns compiled css content as string
                     */
                    test: /\.scss$/,
                    use: ['to-string-loader', 'css-loader', 'sass-loader'],
                    exclude: [root('src', 'styles')]
                },
            ]
        },
        plugins: [
            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                root('./src'), // location of your src
                {} // a map of your routes
            ),

            /**
             * Creates a separate file (known as a chunk), 
             * consisting of common modules shared between multiple entry points 
             * The resulting chunked file can be loaded once initially, and stored in cache for later use
             */
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfill']
            }),

            /**
             * The plugin will generate an HTML5 file for you 
             * that includes all your webpack bundles in the body using script tags
             */
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ],

        /**
         * These options configure whether to polyfill or mock certain Node.js globals and modules. 
         * This allows code originally written for the Node.js environment to run 
         * in other environments like the browser
         */

        node: {

        }
    };
};