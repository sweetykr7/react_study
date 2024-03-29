const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
  name:'wordrelay-setting',
  mode:'development', // 실제는 production
  devtool: 'eval', //빠르게 하겠다?
  resolve: {
      extensions:['.js','.jsx']
  },
  entry:{
      app:['./client.jsx'],
  },//입력
  module:{
    rules: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
            presets: [['@babel/preset-env', {
                targets: {
                    browsers: ['> 1% in KR'],
                },
                debug:true
            }], '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              'react-refresh/babel',
            ],
        },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output:{
      path:path.join(__dirname, 'dist'),
      filename:'[name].js',
      publicPath:'/dist',
  },//출력
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  },
};