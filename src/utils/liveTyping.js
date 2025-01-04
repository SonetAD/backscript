const fs = require('fs');
const cpms = require('./cpms');

const liveTyping = (file, data, wpm = 305) => {
  const delay=cpms(wpm);
  let pointer = 0;
  const intervalId = setInterval(() => {
    if (pointer < data.length) {
      fs.appendFile(file, data[pointer], 'utf8', (err) => {
        if (err) {
          console.log(err.message);
          clearInterval(intervalId);
          process.exit(1);
        }
      });
      pointer++;
    } else {
      clearInterval(intervalId);
    }
  }, delay);
};

module.exports = liveTyping;
