const prompt = require('./prompt');
const { mkdirSync, writeFileSync } = require('fs');
const { packageJSON, gitignore, tsconfig, workspace } = require('./fileData');
const path = require('path');

module.exports = async function init() {
  const { repo, package } = await prompt();
  const dir = path.join(process.cwd(), repo);

  mkdirSync(dir);
  mkdirSync(dir + '/apps');
  mkdirSync(dir + '/libs');
  writeFileSync(dir + '/package.json', packageJSON(package));
  writeFileSync(dir + '/.gitignore', gitignore);
  writeFileSync(dir + '/pnpm-workspace.yaml', workspace);
  writeFileSync(dir + '/tsconfig.base.json', tsconfig);
};
