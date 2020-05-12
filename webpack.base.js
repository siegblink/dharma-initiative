const MinifyPlugin = require('babel-minify-webpack-plugin')
const MinifyCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // Tell webpack to run babel on every javascript file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              { targets: { browsers: ['last 2 versions'] } },
            ],
          ],
        },
      },
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MinifyCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MinifyPlugin({}, { comments: false, }),
    new MinifyCssExtractPlugin({ filename: '[name].css' }),
  ],

  // Tell webpack to set the environment in development mode
  mode: 'production',
}
