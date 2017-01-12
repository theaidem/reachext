const path = require('path');
const webpack = require('webpack');

const customPath = path.join(__dirname, './customPath');

module.exports = {
  entry: {
    popup: [customPath, path.join(__dirname, '../chrome/extension/popup')],
    window: [customPath, path.join(__dirname, '../chrome/extension/window')],
    options: [customPath, path.join(__dirname, '../chrome/extension/options')],
    inject: [customPath, path.join(__dirname, '../chrome/extension/inject')],
    background: [customPath, path.join(__dirname, '../chrome/extension/background')],
  },
  output: {
    path: path.join(__dirname, '../build/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/,loader: 'babel', exclude: /node_modules/, query: { presets: ['react-optimize']}},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.(png|jpg)$/, loader: 'file?name=images/[name].[hash].[ext]' },
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=images/[name].[hash].[ext]&mimetype=image/svg+xml'}
    ]
  }
};
