var path = require('path');
var srcPath = path.join(__dirname, 'src');
var staticPath = path.join(srcPath, 'static');
var componentPath = path.join(staticPath, 'components');
var jsPath = path.join(staticPath, 'js');

module.exports = {
  context: componentPath,
  recursive: true,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: path.join(componentPath, 'client.jsx'),
  output: {
      path: jsPath,
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
  }
};
