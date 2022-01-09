const request = require("request");
const inquirer = require("inquirer");

const argv = require("yargs")
  .option("a", {
    alias: "base",
    demandOption: false,
    type: "number",
    default: "10",
  })
  .check((argv) => {
    if (argv.base > 100) {
      console.log("No mameees");
    } else {
      return true;
    }
  }).argv;

const Pause = async () => {
  const pauseOpt = [
    {
      type: "input",
      message: "Desea continuar? y/n",
      name: "opt",
      validate(opt) {
        if (opt == "n") {
          return true;
        } else if (!opt || opt != "y") {
          return "Escriba y(Yes) o n(No)";
        }
      },
    },
  ];
  const { opt } = await inquirer.prompt(pauseOpt);
  return opt;
};

const Menu = async () => {
  const opts = [
    {
      type: "list",
      name: "opt",
      message: "Seleccione una opcion: \n",
      choices: [
        {
          value: 1,
          name: "Option 1",
        },
        {
          value: 2,
          name: "Option 2",
        },
        {
          value: 0,
          name: "Option 3",
        },
      ],
    },
  ];

  console.clear();
  console.log("Menu \n");
  const { opt } = await inquirer.prompt(opts);
  return opt;
};

const requestApi = async (url) => {
  return await request(url, (error, response, body) => {
    const keys = Object.keys(response);
    console.log("--------------Response: " + keys);
    console.log("--------------Body: " + body.status);
  });
};

const readInput = async () => {
  const riOpt = [
    {
      type: "input",
      name: "message",
    },
  ];
  const { message } = await inquirer.prompt(riOpt);
  return message;
};

async function dummyApp() {
  let opt;

  do {
    opt = await Menu();
    console.log(opt);

    switch (opt) {
      case 1:
        console.log("Send message \n");
        const message = await readInput();
        console.log(message);
        break;
      case 2:
        /*   console.log("Node message");
        const message2 = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        const messagee = await message2.question(
          "Escriba su mensaje: ",
          (message) => {
            if (message.length < 1) {
              console.log("Escriba un mensaje");
              return false;
            }
            console.log(message);
            message2.close();
          }
        );
        console.log(messagee); */
        const message3 = await requestApi(
          "https://rickandmortyapi.com/api/character/485"
        );
        console.log(message3);
        break;

      default:
        break;
    }
    await Pause();
  } while (opt != 0);
}

dummyApp();
