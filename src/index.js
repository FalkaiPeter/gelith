#! /usr/bin/env node
const yargs = require('yargs');
const init = require('./init');
const lib = require('./lib');
const app = require('./app');

async function main() {
  if (yargs.argv._[0] === 'init') await init();
  if (yargs.argv._[0] === 'lib') await lib();
  if (yargs.argv._[0] === 'app') await app();
}

main();
