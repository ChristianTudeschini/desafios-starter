module.exports = {
    //Arquivo onde vai estar o código
    entry: ['@babel/polyfill','./src/main.js'],
    //Aonde o arquivo deve ser convertido
    output: {
        // __dirname = Diretório global onde fica o arquivo do webpack
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //expressão regular para buscar arquivos que terminam com .js
                test: /\.js$/,
                //Excluindo a pasta node_modules para que nenhum arquivo .js dessa pasta seja executado
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
    devServer: {
        //Caminho aonde deve ser aberto o servidor da aplicação
        contentBase: __dirname + '/public'
    }
};