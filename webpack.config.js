const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.mode;

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const plugins = [];
let outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = 'stylesheet-inject.min.js';
} else {
  outputFile = 'stylesheet-inject.js';
}

const config = {
  entry: path.join(__dirname, 'src', 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFile,
    library: 'stylesheetInject',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
  },
  plugins,
};

module.exports = config;
