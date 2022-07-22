const inquirer = require('inquirer');

module.exports = async function prompt() {
  const { repo } = await inquirer.prompt({
    name: 'repo',
    message: 'How would you call the repository?',
    type: 'input',
    validate: (answer) => !!answer.length,
  });

  const { package } = await inquirer.prompt({
    name: 'package',
    message: 'npm package name?',
    type: 'input',
    default: repo,
    validate: (answer) => !!answer.length,
  });

  return { repo, package };
};
