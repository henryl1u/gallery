var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'jsx', 'client.jsx'),
  output: {
      path: buildPath,
      publicPath: '/',
      filename: "bundle.js"
  },
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
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
