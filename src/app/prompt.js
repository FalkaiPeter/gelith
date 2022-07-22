const inquirer = require('inquirer');

module.exports = async function prompt() {
  const { name } = await inquirer.prompt({
    name: 'name',
    message: 'name',
    type: 'input',
    validate: (answer) => !!answer.length,
  });

  return { name };
};
