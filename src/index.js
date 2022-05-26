#! /usr/bin/env node

const yargs = require('yargs');
const app = require('./app');
const init = require('./init');
const lib = require('./lib');

async function main() {
  if (yargs.argv._[0] === 'init') await init();
  if (yargs.argv._[0] === 'app') await app();
  if (yargs.argv._[0] === 'lib') await lib();
}

main();
