const inquirer = require("inquirer");

require("colors");

const menuOptions = [
  {
    type: "list",
    name: "opt",
    message: "Seleccione una opcion: \n".bold,
    choices: [
      {
        value: 1,
        name: `${"1".green}. Buscar ciudad `,
      },
      {
        value: 2,
        name: `${"2".green}. Historial`,
      },
      {
        value: 0,
        name: `${"3".green}. Salir `,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("   ===================".rainbow);
  console.log("       Tasks To Do".green.bold);
  console.log("   ===================\n".rainbow);
  const { opt } = await inquirer.prompt(menuOptions);
  return opt;
};

const pause = async (message) => {
  const pauseOpt = [
    {
      type: "input",
      name: "pause",
      message,
    },
  ];
  await inquirer.prompt(pauseOpt);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "res",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Ingrese un valor";
        } else {
          return true;
        }
      },
    },
  ];
  const { res } = await inquirer.prompt(question);
  return res;
};

const deleteTask = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${(i + 1).toString().gray}`;

    return {
      value: task.id,
      name: `${index} ${task.desc} `,
    };
  });
  const questions = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
  /*   {
    value: task.id
    name: `${"0".green}. Salir`,
  } */
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  deleteTask,
};
