const userInput = require('./userInput');

const getTypingSpeed = async () => {
  const typingSpeed = await userInput('Typing Speed in WPM (default: 305): ');
  return typingSpeed || 305;
};

module.exports = getTypingSpeed;
