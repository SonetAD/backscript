const fs = require('fs');
const deleteCOde = (file) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, '', 'utf8', (err) => {
      if (err) {
        console.log(err.message);
        reject(err);
        process.exit(1);
      }
      resolve();
    });
  });
};

module.exports = deleteCOde;
