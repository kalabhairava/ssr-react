const path = require('path');
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
    }
};

module.exports = merge(baseConfig, serverConfig);
