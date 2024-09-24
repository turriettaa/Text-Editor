const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',  // Adjust this path to your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'JATE',
    }),
    new WorkboxPlugin.GenerateSW(),
    new WebpackPwaManifest({
      name: 'JATE',
      short_name: 'JATE',
      description: 'Just Another Text Editor',
      background_color: '#7eb4e2',
      theme_color: '#7eb4e2',
      crossorigin: 'use-credentials',
      orientation: 'portrait',
      display: 'standalone',
      start_url: './',
      publicPath: './',
    }),
  ],
};
