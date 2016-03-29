//autoprefixing for css files
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var rucksackCSS = require('rucksack-css');
var bootstrap = require('bootstrap-styl');
var rupture = require('rupture');
var lost = require('lost');

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
  style: path.join(__dirname, 'src/app-style')
};

const common = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015', 'react-hmre']
      },
      include: PATHS.app
    },
      {test: /\.scss?$/, loader: "style-loader!css-loader!sass-loader" },
      {test: /\.styl?$/, loader: "style-loader!css-loader!stylus" },
      {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader", include: PATHS.style },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.css', '.styl']
  },
  stylus: {
    use: [
      bootstrap(),
      rupture(),
      poststylus([autoprefixer, rucksackCSS, lost(), require('postcss-flexibility')])
    ]
  }
};

//Default Config
if(TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      contentBase: PATHS.build,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin("style.css", {allChunks: true})
    ],
    devtool: 'eval-source-map'
  });
}
//Specific build related tasks and features
if(TARGET === 'build'){
  module.exports = merge(common, {})
}