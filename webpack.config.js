var path = require('path');

module.exports = {
  entry: [
    './client/main.js',
  ],
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client'), },
    ],
  },
  plugins: [],
};
