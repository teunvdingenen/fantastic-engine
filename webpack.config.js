let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: {
  	app: './src/index.js'
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
    	{
		    test: /\.(scss)$/,
		    use: [{
		      loader: 'style-loader', // inject CSS to page
		    }, {
		      loader: 'css-loader', // translates CSS into CommonJS modules
		    }, {
		      loader: 'postcss-loader', // Run post css actions
		      options: {
		        plugins: function () { // post css plugins, can be exported to postcss.config.js
		          return [
		            require('precss'),
		            require('autoprefixer')
		          ];
		        }
		      }
		    }, {
		      loader: 'sass-loader' // compiles Sass to CSS
		    }]
			},
			{
				test: /\.js$/,
	      loader: 'babel-loader',
	      exclude: /node_modules/,
	      query: {
	        presets: ['es2015', 'react', 'stage-3']
	      }
	    },
	    {
				test: /\.jsx$/,
	      loader: 'babel-loader',
	      exclude: /node_modules/,
	      query: {
	        presets: ['es2015', 'react', 'stage-3']
	      }
	    },
	    {
	      test: /\.svg$/,
			  use: [
			    "babel-loader",
			    {
			      loader: "react-svg-loader",
			      options: {
			        svgo: {
			          plugins: [
			            { removeTitle: false }
			          ],
			          floatPrecision: 2
			        }
			      }
			    }
			  ]
      }
		]
  },
  resolve: {
  	extensions: ['.js', '.jsx', '.json'],
  }
};