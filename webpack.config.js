module.exports = {
  entry: ['./app.js'],
  output: {
    filename: "./bundle.js"
  },
  watch: true,
  resolve:{
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
  	rules: [
  		{
  			test: [/\.js$/, /\.es6$/, /\.jsx$/],
  			exclude: /node_modules/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: [ "es2015" , "react" ]
  				}
  			}
  		},
  		{
  			test: [/\.css$/, /\.scss$/],
  			exclude: /node_modules/,
  			use: [
  				{
  					loader: 'style-loader'
  				},
  				{
  					loader: 'css-loader'
  				},
  				{
  					loader: 'sass-loader'
  				}  				  				
  			]
  		}
  	]
  }
}