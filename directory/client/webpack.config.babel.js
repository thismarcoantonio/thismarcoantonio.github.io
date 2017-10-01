import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import webpack from 'webpack'

const ENV = process.env.NODE_ENV || 'development'
const isProd = ENV == 'production'

export default {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: !isProd
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: isProd, sourceMap: !isProd, importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: { 
                sourceMap: !isProd, 
								plugins: () => {
									autoprefixer({ browsers: [ 'last 2 versions' ] });
								}
							}
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: !isProd }
            },
            'import-glob-loader'
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: isProd ? 'file-loader' : 'url-loader'
      }
    ]
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: !isProd
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HTMLWebpackPlugin({
      template: './index.ejs',
			minify: { collapseWhitespace: true }
    })
  ]).concat(isProd ? [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        properties: true,
        keep_fargs: false,
        collapse_vars: true,
        unused: true,
        warnings: false,
        screw_ie8: true,
        sequences: true,
				dead_code: true,
				drop_debugger: true,
				unsafe_comps: true,
				comparisons: true,
				conditionals: true,
				evaluate: true,
				booleans: true,
				loops: true,
				unused: true,
				if_return: true,
				hoist_funs: true,
				join_vars: true,
				cascade: true,
				drop_console: true
      }
    }),
  ]: []),

  stats: {
    colors: true,
    publicPath: true
  },

  node: {
    global: true,
    process: false,
    __filename: false,
    __dirname: false,
    Buffer: false,
    setImmediate: false
  },

  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  
  devServer: {
		port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/',
		contentBase: './src',
		historyApiFallback: true,
		open: true,
		openPage: '',
  }

};