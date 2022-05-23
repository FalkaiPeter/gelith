#! /usr/bin/env node

const yargs = require('yargs');
const app = require('./app');
const init = require('./init');

async function main() {
  if (yargs.argv._[0] === 'init') await init();
  if (yargs.argv._[0] === 'app') await app();
}

main();
