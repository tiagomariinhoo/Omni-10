const express = require('express'); //Importanto o módulo express
const mongoose = require('mongoose')
const routes = require('./routes') //Passa o caminho relativo ao arquivo
const cors = require('cors')
const http = require('http')
const {setupWebsocket} = require('./websocket')

const app = express(); //Aplicação criada
const server = http.Server(app); //Agora temos o server http fora do express, então conseguimos trabalhar com ele diretamente

setupWebsocket(server); //Agora a função será disparada assim que inicializar

/**
 * Importa o Cors para ser possível
 * usar o react já que tão trabalhando
 * em portas diferentes
 */

mongoose.connect('mongodb+srv://admin:admin@cluster0-qusey.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); //String de conexão do mongoDB

app.use(cors());

app.use(express.json()) //O .use é algo que vai ser válido para todas as rotas da aplicação
            //Se colocasse .get seria válido apenas para o que começasse com .get
            //Agora com o express.json() dentro ele entende o que tem body no formato Json
            //Precisa vir antes das rotas

app.use(routes); //Agora todas as rotas estão aqui

//Instalar o JSON Viewer no Chrome para visualizar melhor
//Para executar no terminal após instalar o nodemon: yarn nodemon index.js
    //Outra forma é escrever yarn dev (o dev foi definido no script lá no pagckage.json)
//Instalar o Insomnia para testar as requisições


//Query params: Acessíveis através de request.query (Filstros, ordenação, paginação, ...)
//Route params: request.params (Identificar um recurso na alteração/remoção)
//Body: request.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não-Relacional, aplicações que não possuem muitos relacionamentos)

// app.listen(3333); //3333: Porta
server.listen(3333);

