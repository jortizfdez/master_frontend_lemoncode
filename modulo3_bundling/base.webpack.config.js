var HtmlWebpackPlugin = require("html-webpack-plugin");

var path = require("path");
var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".scss"]
  },
  entry: {
    app: ["./games.ts","./kaiju.jsx"],
    appStyles: "./gameStyles.scss",
    vendor: ['react','react-dom'],
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" 
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 2500,
            name: "./img/[hash].[name].[ext]"
          }
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  devServer: {
    port: 8082
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true
    }),
  ]
};
