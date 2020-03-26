const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'

    },
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'},
           { test:/\.css$/,use:['style-loader','css-loader']},
           { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
           { test:/\.(jpg|png|gif|jpeg|svg)$/,use:[{
               loader:"file-loader",
               options:{
                   limit:500,
                   publicPath:"../dist/images/",
                   outputPath:"images/",
                   name:"[name].[text]"
               }
           }]},
           { test:/\.ttf$/,use:[{
            loader:"file-loader"
        }]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            template:path.relative(__dirname,'./src/index.html'),
            filename:'index.html'
        }), 
        new VueLoaderPlugin()
    ],
    devServer:{
        open:true,
        port:10010,
        hot:true
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}