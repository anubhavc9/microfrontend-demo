const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devServer: {
    port: 3000,
  },

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",

      remotes: {
        productMfe: "productMfe@http://localhost:3001/remoteEntry.js",

        cartMfe: "cartMfe@http://localhost:3002/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
        },

        "react-dom": {
          singleton: true,
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
