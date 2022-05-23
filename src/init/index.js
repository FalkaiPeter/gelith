const inquirer = require('inquirer');
const path = require('path');
const { mkdirSync, writeFileSync } = require('fs');
const { packageJson, gitignore, lernaJson, prettierRc, tsconfigBaseJson } = require('./files_data');

module.exports = async function () {
  const { repo_name, npm_name } = await inquirer.prompt([
    {
      name: 'repo_name',
      message: 'repo name',
      type: 'input',
      validate: (answer) => !!answer.length,
    },
    {
      name: 'npm_name',
      message: 'npm package name',
      type: 'input',
      validate: (answer) => !!answer.length,
    },
  ]);

  const dir = path.join(process.cwd(), repo_name);
  mkdirSync(dir);
  mkdirSync(dir + '/apps');
  mkdirSync(dir + '/libs');
  writeFileSync(dir + '/package.json', packageJson(npm_name));
  writeFileSync(dir + '/tsconfig.base.json', tsconfigBaseJson);
  writeFileSync(dir + '/lerna.json', lernaJson);
  writeFileSync(dir + '/.gitignore', gitignore);
  writeFileSync(dir + '/.prettierrc', prettierRc);
};
