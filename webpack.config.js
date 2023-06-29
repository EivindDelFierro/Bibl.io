const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'), //./client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './dist/assets',
    filename: 'main.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // hash: true,
      title: 'Development',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    static: {
      publicPath: 'http://localhost:3000',
    },
  }
}