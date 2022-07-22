const prompt = require('./prompt');
const { mkdirSync, writeFileSync, readFileSync } = require('fs');
const { packageJSON, gitignore, tsconfig, rollup } = require('./fileData');
const path = require('path');

module.exports = async function lib() {
  const { name } = await prompt();
  const repo = JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf-8')).name;
  const dir = path.join(process.cwd(), 'libs', name);

  mkdirSync(dir);
  mkdirSync(dir + '/src');

  writeFileSync(dir + '/src/index.ts', '');
  writeFileSync(dir + '/package.json', packageJSON(`@${repo}/${name}`));
  writeFileSync(dir + '/tsconfig.json', tsconfig);
  writeFileSync(dir + '/.gitignore', gitignore);
  writeFileSync(dir + '/rollup.config.js', rollup);
};
