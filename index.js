require('dotenv').config();

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

// console.log(process.env.MAPBOX_KEY);

const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                // console.log({ id });
                const lugarSel = lugares.find(l => l.id === id);
                // console.log(lugarSel);
                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima:', clima.desc);
                break;
            case 2:
                break;
        }

        if (opt !== 0)
            await pausa();
    } while (opt !== 0)
}

main();