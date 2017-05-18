module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  watch: true,
  resolve:{
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
  	rules: [
  		{
  			test: [/\.js$/, /\.es6$/, /\.jsx$/],
  			exclude: /node_modules/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: [ "react" , "es2015", "stage-2" ]
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