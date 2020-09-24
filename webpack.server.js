const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

const serverConfig = {
  entry: './src/server',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname,'./dist')
  },
}

module.exports = merge(baseConfig, serverConfig);
