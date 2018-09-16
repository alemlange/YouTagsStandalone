module.exports={
    entry: "./public/start.js",
    output:{
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets:['es2015','react']
                      }
                    }
                  ]
            }
        ]
    },
    devtool: "source-map",
    watch:true
}