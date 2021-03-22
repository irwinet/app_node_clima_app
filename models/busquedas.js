const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        // TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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
            // console.log(resp.data.features);

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); //retornar los lugares
        } catch (error) {
            return []; //retornar los lugares
        }
    }
}

module.exports = Busquedas;