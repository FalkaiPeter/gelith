const path = require('path');
const { gitignore, indexHtml, mainTs, packageJson, tsconfigJson, viteconfigTs, viteenvDTs } = require('./files_data');
const { mkdirSync, writeFileSync, readFileSync } = require('fs');

module.exports = async function (app_name) {
  const repo_name = JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf-8')).name;
  const dir = path.join(process.cwd(), 'apps', app_name);

  mkdirSync(dir);
  mkdirSync(dir + '/src');
  mkdirSync(dir + '/src/components');
  mkdirSync(dir + '/src/routes');
  mkdirSync(dir + '/src/utils');

  writeFileSync(dir + '/src/components/index.ts', '');
  writeFileSync(dir + '/src/routes/index.ts', '');
  writeFileSync(dir + '/src/utils/index.ts', '');
  writeFileSync(dir + '/src/vite-env.d.ts', viteenvDTs);
  writeFileSync(dir + '/vite.config.ts', viteconfigTs);
  writeFileSync(dir + '/index.html', indexHtml);

  writeFileSync(dir + '/src/main.tsx', mainTs);
  writeFileSync(dir + '/package.json', packageJson(repo_name, app_name));
  writeFileSync(dir + '/tsconfig.json', tsconfigJson);
  writeFileSync(dir + '/.gitignore', gitignore);
};
