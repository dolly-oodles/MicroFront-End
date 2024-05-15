const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:5000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 5000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // or any other limit you prefer
            },
          },
        ],
      },

      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                  "postcss-prefixer": {
                    prefix: "cr-",
                  },
                },
              },
            },
          },
        ],
      },
      // {
      //   test: /\.(css|s[ac]ss)$/i,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      // },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // You might already have this preset
              "@babel/preset-react", // Add this preset for JSX support
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "MFE_Base",
      filename: "remoteEntry.js",
      remotes: {
        register: "register@http://localhost:4000/remoteEntry.js",
        login: "login@http://localhost:8080/remoteEntry.js",
        dashboard: "dashboard@http://localhost:6000/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "src/index.scss",
      filename: "src/css/App.css",
      filename: "src/css/navbar.css",
      filename: "src/css/graphsComp.css",
      filename: "src/css/stats.css",
      //chunkFilename: "[id].css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
});
