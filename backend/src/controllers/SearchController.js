const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

//Para fazer as buscas nos usuários em um raio de km
module.exports = {
    async index(request, response) {
        //Buscar todos os devs em um raio de 10km
        //Filtrar por tecnologia
        // console.log(request.query);

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        // console.log(techsArray);

        const devs = await Dev.find({ //Com Filtros
            techs: { //Filtro de tecnologia
                $in: techsArray, //mongo operators esse $in
            }, //Devs que trabalham com a tecnologia passada no parametro
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, //10 mil metros
                },
            }, 
        });

        return response.json({devs});
    }
}