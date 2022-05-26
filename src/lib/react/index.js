const path = require('path');
const { gitignore, packageJson, tsconfigJson } = require('./files_data');
const { mkdirSync, writeFileSync, readFileSync } = require('fs');

module.exports = async function (app_name) {
  const repo_name = JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf-8')).name;
  const dir = path.join(process.cwd(), 'libs', app_name);

  mkdirSync(dir);
  mkdirSync(dir + '/src');

  writeFileSync(dir + '/src/index.tsx', '');
  writeFileSync(dir + '/package.json', packageJson(repo_name, app_name));
  writeFileSync(dir + '/tsconfig.json', tsconfigJson);
  writeFileSync(dir + '/.gitignore', gitignore);
};
