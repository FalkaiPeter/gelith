const inquirer = require('inquirer');
const node = require('./node');
const react = require('./react');
const svelte = require('./svelte');

module.exports = async function () {
  const { lib_name, app_type } = await inquirer.prompt([
    {
      name: 'lib_name',
      message: 'lib name',
      type: 'input',
      validate: (answer) => !!answer.length,
    },
    {
      name: 'app_type',
      message: 'lib type',
      type: 'list',
      choices: ['react', 'node', 'svelte'],
    },
  ]);

  if (app_type === 'node') node(lib_name);
  if (app_type === 'react') react(lib_name);
  if (app_type === 'svelte') svelte(lib_name);
};
