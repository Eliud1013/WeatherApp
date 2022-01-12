const { listPlaces } = require("./helpers/inquirer");
require("colors");

const Searchers = require("./models/searches");

const {
  inquirerMenu,
  pause,
  readInput,
  deleteTask,
} = require("./helpers/inquirer");

async function Main() {
  let opt;

  const searches = new Searchers();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //Pedir al usuario la ciudad
        const place = await readInput("Ciudad: ");
        //Buscar ciudad en la api
        const someshit = await searches.city(place);
        //Mostrar menu con resultados
        const id = await listPlaces(someshit);
        const selectedPlace = someshit.find((p) => p.id === id);

        console.log("Informacion de la ciudad \n".green);
        console.log("Ciudad: " + selectedPlace.name);
        console.log("Lat: " + selectedPlace.lng);
        console.log("Lng: " + selectedPlace.lat);
        console.log("Temperatura: ");
        await pause();

        break;
      case 2:
        break;
      case 3:
        break;
    }

    if (opt !== 0) {
      await pause("Presione Enter para continuar o Ctrl + C para cancelar XD ");
    } else {
      await pause("Presione Enter para salir ");
    }
  } while (opt != 0);
}
Main();
