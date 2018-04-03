const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const serverConfig = {
    // Tell webpack to build the bundle for node, not browser
    target: 'node',

    // root file of our application
    entry: './src/server/index.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build') // automatically created by node
    },

    // tell webpack not to include the external dependencies in the bundle
    // All the dependencies in node_modules are directly used at the runtime
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
