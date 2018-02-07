module.exports = {
  type: "react-app",
  webpack: {
    extra: {
      module: {
        rules: [
          {
            test: /\.yaml$/,
            loader: ["json-loader", require.resolve("yaml-loader")]
          }
        ]
      }
    }
  }
};
