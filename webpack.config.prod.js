const glob = require("glob");
const path = require("path");

module.exports = {
  mode: "production",
  entry: glob.sync("./src/workers/**.ts").reduce(
    (obj, el) => {
      console.log(el);
      obj["workers/" + path.parse(el).name] = "./" + el;
      return obj;
    },
    { main: "./src/main.ts" }
  ),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib"),
    library: "html_spaceship",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
