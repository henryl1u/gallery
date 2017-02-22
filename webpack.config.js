var path = require('path');
var srcPath = path.join(__dirname, 'src');
var componentPath = path.join(srcPath, 'static', 'components');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: componentPath,
  recursive: true,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: path.join(componentPath, 'client.jsx'),
  output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: "bundle.js"
  },
  watchOptions: {
      poll: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(srcPath, 'templates', 'index.html'),
          filename: 'index.html',
          inject: 'body'
      })
  ],
  module: {
      loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
        }
      ]
  },
  devServer: {
    proxy: {
      "*": {
        target: "http://localhost:8000",
        secure: false
      }
    }
  }
};
