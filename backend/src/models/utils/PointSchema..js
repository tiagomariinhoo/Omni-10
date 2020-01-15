//Foi criado dentro de utils porque não vai ser um modelo dentro do banco de dados
// será só uma utilidade
const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number], //Array de números, latitude e longitude
        required: true,
    }
});

module.exports = PointSchema;