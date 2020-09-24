const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
  devtool: 'source-map',
  entry: './src/client',
  output: {
    filename: 'js/bundle.[hash:5].js',
    path: path.resolve(__dirname,'./public'),
  },
  plugins:[
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:['**/*', '!favicon.ico']})
  ]
}

module.exports = merge([baseConfig, clientConfig]);

