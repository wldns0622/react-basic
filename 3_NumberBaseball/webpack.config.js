const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // 네임
  name: 'NumberBaseball',
  // 모드 (개발, 배포)
  mode: 'development',
  // 개발툴
  devtool: 'eval',
  // 파일을 읽을때 아래의 익스텐션을 연장하여 해결(client -> client.js or client.jsx)
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // 인풋 파일
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], 
            },
            debug: true
          }], 
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ]
      }
    }]
  },
  
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
  }
}