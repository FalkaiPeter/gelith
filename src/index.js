#! /usr/bin/env node
const yargs = require('yargs');
const init = require('./init');

async function main() {
  if (yargs.argv._[0] === 'init') await init();
}

main();
