const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');
const MiniCSSExtrectPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    clean: true,
  },
  plugins: [
    new MiniCSSExtrectPlugin({
      filename: 'styles.css',
    }),
    new HTMLPlugin({
      title: 'Website',
      template: path.resolve(__dirname, 'static/template.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCSSExtrectPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
