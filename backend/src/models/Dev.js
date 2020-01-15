//Iremos cadastrar devs
const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema.');
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String, 
    avatar_url: String,
    techs: [String], //Entende que é um array de Strings
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
}); //Schema é a estruturação dentro do Banco de Dados

module.exports = mongoose.model('Dev', DevSchema);