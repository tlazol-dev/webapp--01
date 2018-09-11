const webpack = require('webpack')

const productionConfig = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    },
    sourceMap: true
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

console.log(`------------------------`)
console.log(`WEBPACK ENV : ${process.env.NODE_ENV}`)
console.log(`------------------------`)


module.exports = {
  context: __dirname,
  entry: "./src/client/js/App.js",
  devtool: "cheap-eveal-source-map",
  output: {
    path: `${__dirname}/public/js`,
    filename: process.env.NODE_ENV === 'production' ? 'bundle.min.js' : 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? productionConfig : []
}
