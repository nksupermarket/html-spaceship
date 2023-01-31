const path = require('path');

module.exports = {
  mode: 'production',
  entry: { main: './src/main.ts', wrapWords: './src/utils/wrapWords.tsx' },
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
    path: path.resolve(__dirname, 'lib'),
    library: 'html_spaceship',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
