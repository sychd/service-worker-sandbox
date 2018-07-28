const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};