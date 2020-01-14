const express = require('express'); //Importanto o módulo express

const app = express(); //Aplicação criada

//Instalar o JSON Viewer no Chrome para visualizar melhor
//Para executar no terminal após instalar o nodemon: yarn nodemon index.js
    //Outra forma é escrever yarn dev (o dev foi definido no script lá no pagckage.json)
//Instalar o Insomnia para testar as requisições

app.get('/', (request, response) => {
    //Requisição (quando acessa a rota), vem do front-end
    //Resposta como vai devolver uma resposta

    // return response.send('Hello!');

    /**
     * Parametros: Objeto ou vetor
     */
    return response.json({message: 'Hello!'}); //Utilizando Json pra resposta no servidor, já que para se comunicar com o front
    //Precisa ser em json
}); //Sempre que acessar localhost:3333/, cai aí dentro

app.listen(3333); //3333: Porta

