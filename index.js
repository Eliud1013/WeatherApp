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
        const place = await readInput("Ciudad: ");
        console.log("Informacion de la ciudad \n".green);
        console.log("Ciudad: ");
        console.log("Lat: ");
        console.log("Lng: ");
        console.log("Temperatura: ");
        await searches.city(place);
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
