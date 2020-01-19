import axios from 'axios';

//No baseURL coloca o mesmo IP que aparece no Expo
//A porta coloca a do backend
//Se tivesse usando emulador coloca 10.0.2.2
const api = axios.create({
    baseURL: 'http:192.168.0.12:3333',

});

export default api;