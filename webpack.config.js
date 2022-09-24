const path = require('path');

module.exports = {
  mode: 'development',
  entry: { main: './src/main.ts', wrapWords: './src/wrapWords.ts' },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: false,
    liveReload: true,
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'html_spaceship',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
