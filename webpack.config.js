const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode:"development",
    entry:"./src/index",
    output:{
        path:path.resolve(__dirname, "dist", "js"),
        filename:"main.js",
        publicPath:"/dist/js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options:{presets:["@babel/env", "@babel/react"]}

            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    },
    resolve:{
        extensions:["*", ".js",".jsx"]
    },
    devServer:{
        port:3000,
        hot:true,
        host:"localhost"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}