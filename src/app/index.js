const inquirer = require('inquirer');
const node = require('./node');

module.exports = async function () {
  const { app_name, app_type } = await inquirer.prompt([
    {
      name: 'app_name',
      message: 'app name',
      type: 'input',
      validate: (answer) => !!answer.length,
    },
    {
      name: 'app_type',
      message: 'app type',
      type: 'list',
      choices: ['react', 'node', 'svelte'],
    },
  ]);

  if (app_type === 'node') node(app_name);
};
