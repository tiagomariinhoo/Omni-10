const { Router } = require('express'); //Importa apenas o módulo de roteamento
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();


// routes.post('/users', (request, response) => {
//     //Requisição (quando acessa a rota), vem do front-end
//     //Resposta como vai devolver uma resposta

//     // return response.send('Hello!');

//     /**
//      * Parametros: Objeto ou vetor
//      */
//     // console.log(request.query);
//     console.log(request.body)
//     return response.json({message: 'Hello!'}); //Utilizando Json pra resposta no servidor, já que para se comunicar com o front
//     //Precisa ser em json
// }); //Sempre que acessar localhost:3333/, cai aí dentro

//Listar
routes.get('/devs', DevController.index);

//Cria uma rota para cadastro dos Devs
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

/**
 * EXPLICAÇÃO:
 * Usando o insomnia
 * Faz um post lá para esse link: http://localhost:3333/devs
 * com isso no body:
 * {
    "github_username": "tiagomariinhoo"
    "techs": "nome1, nome2, nome3"
    }
    a resposta será tudo que a API nos fornece
    já vai cadastrar no banco de dados com um ID único
    
 */

module.exports = routes; //Exportando o objeto de routes