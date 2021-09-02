const path = require('path');
const { webpack } = require('webpack');

module.exports = {
  name: 'wordrelay=setting',
  mode: 'development',  // 실서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {  // 입력
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 10% in KR'],
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [],
      },
    }]
  },

  output: {  // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
}