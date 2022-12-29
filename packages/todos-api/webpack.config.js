"use strict";

const serverlessWebpack = require("serverless-webpack");

module.exports = {
  mode: serverlessWebpack.lib.webpack.isLocal ? "development" : "production",
  entry: serverlessWebpack.lib.entries,
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node16",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
