const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);
        const {latitude, longitude, techs} = socket.handshake.query;
        // setTimeout(() => {
        //     socket.emit('message', 'Hello OmniStack') //Backned enviando uma informação pro front sem requisição do front, essa é a vantagem de utilizar webSockets
        // }, 3000); //Espera 3 segundos
        connections.push({
            id:socket.id,
            coordinates: {
                latitude: Number(latitude), //Convertte em um número já que por padrão ele manda como string
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),//Ele envia em formato de texto então temos que separar
        });
    }); //sempre que recebemos uma conexão, evento de conexão
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        //A distancia precisa ser menos de 10km
        return calculateDistance(coordinates, connection.coordinates) < 10 //Coordenadas do novo cadastrado e das conexões, verifica se é menor que 10km
            && connection.techs.some(item => techs.includes(item)) //Verifica se tem pelo menos uma tecnologia igual
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}
/**
 * Precisamos armazenar em algum lugar todas as conexões que a aplicação teve
 */