const prompt = require('./prompt');
const processFiles = require('./processFiles');

module.exports = async function init() {
  const { repo, package } = await prompt();
  await processFiles(repo, package);
};
