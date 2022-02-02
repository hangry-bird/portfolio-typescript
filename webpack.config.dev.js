//webpack.config.dev.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  resolve: { extensions: ['.js', '.json', '.ts', '.tsx'] },
  devServer: {
    https: true,
    host: 'localhost',
    compress: true,
    hot: true,
    port: 3000,
    open: true,
    client: {
      progress: true,
    },
  },
  stats: {
    cachedModules: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: 'images/[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      'src': path.resolve(__dirname, 'src'),
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src', 'node_modules')
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({ filename: "css/styles.css" }),
  ],
};