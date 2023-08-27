const path = require("path");

module.exports = {
  mode: "development", // or 'production'
  entry: "./index.tsx", // Update the entry point to your TypeScript file
  output: {
    filename: "bundle.js", // Output bundle filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Include TypeScript and JavaScript extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
};
