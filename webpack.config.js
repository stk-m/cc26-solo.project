const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: "css-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
             presets: [
                 '@babel/preset-env',
                 '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-syntax-jsx'] 
          }
        }
      }
    ]
  }, 
  resolve: {extensions: ['.js', '.jsx']},
//   devServer: {
//     contentBase: __dirname + '/public'
//   },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
//   devtool: 'eval-source-map',
};



// import txt from './file.txt';
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
//   mode: 'development'
// };

