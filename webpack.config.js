const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "dev";

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        },
    };
    if (!isDev) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlMinimizerPlugin(),
        ];
    }
    return config;
};

const output = () => {
    if (isDev) {
        return {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
        };
    } else {
        return {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build"),
        };
    }
};

module.exports = {
    entry: {
        catalogPage: "./src/scripts/catalogScript.js",
        detailedPage: "./src/scripts/detailedPageScript.js",
    },
    output: output(),
    optimization: optimization(),
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            chunks: ["catalogPage"],
        }),
        new HtmlWebpackPlugin({
            template: "./detailedPage.html",
            filename: "detailedPage.html",
            chunks: ["detailedPage"],
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.(png|jpg|svg|gif)$/,
            //     use: ["file-loader"],
            // },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        targets: "defaults",
                        presets: [["@babel/preset-env"]],
                    },
                },
            },
        ],
    },
};
