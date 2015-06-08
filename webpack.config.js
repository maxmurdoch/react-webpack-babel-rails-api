module.exports = {
  entry: ['./client/main.js'],
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [],
};
