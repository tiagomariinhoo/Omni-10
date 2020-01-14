const express = require('express'); //Importanto o módulo express

const app = express(); //Aplicação criada

app.get('/', (request, response) => {
    //Requisição (quando acessa a rota), vem do front-end
    //Resposta como vai devolver uma resposta

    return response.send('Hello!');
}); //Sempre que acessar localhost:3333/, cai aí dentro

app.listen(3333); //3333: Porta
