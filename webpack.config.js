module.exports={
    entry: ["babel-polyfill","./src/client/start.js"],
    output:{
        path: __dirname + "/public/javascripts",
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
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devtool: "source-map",
    watch:true
}