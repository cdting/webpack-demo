module.exports = {
    //调试
    devtool: "eval-source-map",
    //入口文件
    entry: __dirname + "/app/main.js",
    //打包后文件与位置
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    // module: {
    //     loaders: [{
    //             test: /\.json$/,
    //             loader: "json"
    //         }, {
    //             test: /\.js$/,
    //             exclude: /node_modules/, //排除node_modules
    //             loader: 'babel',
    //             query: {
    //                 presets: ['es2015', 'react']
    //             }

    //         },
    //         //模块css
    //         {
    //             test: /\.css$/,
    //             loader: 'style!css?modules!postcss'
    //         }
    //     ]
    // },

    module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css?modules!postcss' } //这里添加PostCSS
        ]
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件
    ], //Plugins插件，可实现压缩js文件
    // plugins: [
    //     new webpack.BannerPlugin("Copyright Flying Unicorns inc.") //在这个数组中new一个就可以了
    // ],

    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}