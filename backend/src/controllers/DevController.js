const axios = require('axios'); //Faz chamadas para outras APIs
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket')

//Funções no controller
//index, show, store, update, destroy

module.exports = {

    async index(request, response) { //Listar os devs
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) { //O async se coloca pq essa função pode demorar a responder, já que a chamada ao github pode demorar a responder
        // console.log(request.body)
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username }); //Encontra um registro que contém esse github_username que é recebido na requisição

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //Reposta que vai obter através da api
            //Usa crase para poder colocar a variável ali, ao invés de aspas simples
            //Colocamos o ASYNC na função para usarmos o AWAIT, que aguarda isso finalizar
            //para devolver uma resposta para daí continuar com o restante do código

            const { name = login, avatar_url, bio } = apiResponse.data; //Esse name = login checa se ele existe, se não existir, será igual ao login
            // console.log(apiResponse.data);

            // console.log(name, avatar_url, bio, github_username);
            // console.log(techs);

            //Temos que transformar Techs em array
            // const techsArray = techs.split(',').map(tech => tech.trim()) //Map percorre todas as strings e o tech.trim() tira os espaços dos lados
            const techsArray = parseStringAsArray(techs);

            // console.log(techsArray);

            const location = { //Para passar no Dev.create
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({ //Await porque isso também pode demorar a executar
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            //Filtrar as conexões que estão há no máximo 10km de distância
            //e que o novo dev tenha uma das tecnologias filtradas

            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray
            )

            // console.log(sendSocketMessageTo);
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }


        return response.json(dev);
    }
}