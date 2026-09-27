const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devServer: {
    port: 3002,

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
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
      name: "cartMfe",

      filename: "remoteEntry.js",

      exposes: {
        "./Cart": "./src/Cart",
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
