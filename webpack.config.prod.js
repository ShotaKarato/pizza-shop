const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public")
    },
    compress: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"})
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
};
