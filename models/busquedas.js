const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        try {
            // peticion http
            // console.log(lugar);

            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

            return []; //retornar los lugares
        } catch (error) {
            return []; //retornar los lugares
        }
    }
}

module.exports = Busquedas;