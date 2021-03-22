const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        // TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiaXJ3aW5ldCIsImEiOiJja21rcG00bHYxM2FkMnZuMDc2Y21sdmk0In0.mZH7qpjV8NmWerLnh2675g',
            'limit': 5,
            'language': 'es'
        };
    }

    async ciudad(lugar = '') {
        try {
            // peticion http
            // console.log(lugar);

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=pk.eyJ1IjoiaXJ3aW5ldCIsImEiOiJja21rcG00bHYxM2FkMnZuMDc2Y21sdmk0In0.mZH7qpjV8NmWerLnh2675g&limit=5&language=es');
            console.log(resp.data);

            return []; //retornar los lugares
        } catch (error) {
            return []; //retornar los lugares
        }
    }
}

module.exports = Busquedas;