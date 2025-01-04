const { Command } = require('commander');
const userInput = require('./userInput');
const program = new Command();

const getFile = async () => {
  let userFile;
  program
    .name('code-play-ground')
    .description(
      'Replay your prewritten code as if writing it live, step by step.'
    )
    .version('1.0.0')
    .argument('[file]', 'Specify the file path')
    .option('-f, --file <file>', 'Specify the file path')
    .action((file, option) => {
      userFile = file || option.file;
    });

  program.parse(process.argv);
  if (!userFile) {
    userFile = await userInput('Enter the file path: ');
  }

  return userFile;
};

module.exports = getFile;
