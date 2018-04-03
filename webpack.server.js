const path = require('path');

module.exports = {
    // Tell webpack to build the bundle for node, not browser
    target: 'node',

    // root file of our application
    entry: './src/index.js',

    // tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build') // automatically created by node
    },

    // tell webpack to run babel on every js file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
};
