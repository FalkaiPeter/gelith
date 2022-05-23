const path = require('path');
const { packageJson, tsconfigJson, gitignore } = require('./files_data');
const { mkdirSync, writeFileSync, readFileSync } = require('fs');

module.exports = async function (app_name) {
  const repo_name = JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf-8')).name;
  const dir = path.join(process.cwd(), 'apps', app_name);

  mkdirSync(dir);
  mkdirSync(dir + '/src');

  writeFileSync(dir + 'src/index.ts', '');
  writeFileSync(dir + 'package.json', packageJson(repo_name, app_name));
  writeFileSync(dir + 'tsconfig.json', tsconfigJson);
  writeFileSync(dir + '.gitignore', gitignore);
};
