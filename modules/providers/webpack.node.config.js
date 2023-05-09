const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  entry: {
    index: {
      import: './src/index.ts',
    },
  },
  mode: 'production',
  target: ['node'],
  devtool: 'inline-source-map',
  output: {
    filename: 'pronounsProviders.js',
    library: "pronounsProvider",
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    globalObject: "this",
    umdNamedDefine: true
  },
  plugins: [
    new ModuleFederationPlugin({
      runtime: 'show-your-pronouns',
      shared:{
        pronounsUserFramework: {
          eager: true,
        },
        pronounsStyling: {
          eager: true,
        }
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        exclude: /tests/,
      },
      {
        test: /\.tsx?$/,
        exclude: /tests/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
