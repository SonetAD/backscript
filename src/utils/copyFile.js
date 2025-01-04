const fs = require('fs');

const copyFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err.message);
        reject(err);
        process.exit(1);
      }
      resolve(data);
    });
  });
};

module.exports = copyFile;
