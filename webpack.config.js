var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
// var React = path.resolve(node_modules, 'react/dist/react.min.js');
// var ReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
  entry: './_src/js/site.js',
  output: {
    filename: 'site.js',
    path: './dist/js'
  },
  resolve: {
    alias: {
      // 'react': React,
      // 'react-dom': ReactDOM
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    // noParse: [React, ReactDOM]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]
};
