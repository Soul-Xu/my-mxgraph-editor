const HtmlWebPackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    demo: './demo/index.jsx',
    index: './src/index.js'
  },
  output: {
    // 其他 output 配置...
    hashFunction: 'sha256',
    hashDigest: 'hex',
    hashDigestLength: 20,
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },
    {
      test: /\.less$/,
      exclude: '/node_modules',
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: loader => [
            postcssImport({
              root: loader.resourcePath
            }),
            postcssCssnext(),
            cssnano()
          ]
        }
      },
      {
        loader: 'less-loader',
        options: {
          importLoaders: 1
        }
      }
      ]
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.xml$/,
      loader: 'raw-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // 小于8kb的图片会被转成 base64 格式
            name: 'images/[name].[hash:8].[ext]' // 输出的文件名规则
          }
        }
      ]
    },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './demo/index.html',
      filename: './index.html',
      chunks: ['demo']
    })
  ]
};
