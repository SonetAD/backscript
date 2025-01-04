#!/usr/bin/env node

const copyFile = require('./utils/copyFile');
const deleteCOde = require('./utils/deleteCode');
const getFile = require('./utils/getFile');
const liveTyping = require('./utils/liveTyping');
 const getTypingSpeed = require('./utils/getTypingSpeed');

const main = async () => {
  const file = await getFile();
  const typingSpeed = await getTypingSpeed();
  const copyCOde = await copyFile(file);
  await deleteCOde(file);
  liveTyping(file, copyCOde,typingSpeed);
};

main();
