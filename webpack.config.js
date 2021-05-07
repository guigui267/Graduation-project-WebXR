// const path = require('path');

// module.exports = {
//   module:{
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader'
//       }
//     ]
//   },
//   entry: './src/Myjs/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'foo.bundle.js',
//   },
// };


const path = require('path');
const htmlPlugin = require('html-webpack-plugin'); 
module.exports = {
  module:{
    rules:[
          {test:/\.js$/,use:'babel-loader',exclude:/node_modules/} 
    ]     
  },
  entry: './src/Myjs/index.js',
  output: { filename: 'bundle.js' },
  mode: 'development',
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  }
};