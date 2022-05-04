const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  //* 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //* 결과물(번들)을 반환하는 설정
  output: {
    //* path: path.resolve(__dirname, 'public'), // webpack번들러는 결과를 dist폴더로 만들어준다
    //* filename: 'main.js',
    clean: true //* 새롭게 빌드 명령을 돌렸을 때 기존에 필요없는 데이터를 제거하고 결과물을 받는다.
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css로 끝나는 파일을 찾아 // s? s있거나 없거나 scss, css파일을 찾아
        use: [          // 거기서 이걸 사용할 것이다
          'style-loader',
          'css-loader',
          'postcss-loader', // 공급업체 접조사?
          'sass-loader'
        ]
      },
      {
        test: /\.js$/, // .js로 끝나는 파일을 
        use: [        // webpack에서 babel-loader로 읽어들여서 그것을 실제로 babel이 적용될수 있게하는 것이다.
          'babel-loader'
        ]
      }
    ]
  },

  //* 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}
