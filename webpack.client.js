const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
    // root file of our application
    entry: './src/client/index.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // automatically created by node
    }
};

module.exports = merge(baseConfig, clientConfig);
