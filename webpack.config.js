const path = require('path');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;

module.exports = {
  entry: [
    __dirname + '/src/js/main.js',
    __dirname + '/src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.min.js',
  },
  plugins: [
    new WatchExternalFilesPlugin({
      files: ['src/scss/**/*.scss'],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: '[name].min.css'}
          },
          'sass-loader'
        ]
      }
    ]
  }
};
