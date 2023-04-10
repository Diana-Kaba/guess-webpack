const path = require("path");
module.exports = {
  mode: "development", // could be "production" as well
  entry: "./src/import.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
