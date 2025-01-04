#!/usr/bin/env node

const copyFile = require('./utils/copyFile');
const deleteCOde = require('./utils/deleteCode');
const init = require('./utils/init');
const liveTyping = require('./utils/liveTyping');

const main = async () => {
  const { file, wpm } = await init();
  const copyCOde = await copyFile(file);
  await deleteCOde(file);
  liveTyping(file, copyCOde, wpm);
};

main();
