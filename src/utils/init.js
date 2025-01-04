const { Command } = require('commander');
const userInput = require('./userInput');

const init = () => {
  return new Promise((resolve, reject) => {
    const program = new Command();
    program
      .name('BackScript')
      .description(
        'Type the code once, let BackScript type it again...'
      )
      .version('1.0.0')
      .arguments('[file] [wpm]')
      .option('-f, --file <file>', 'Specify the file path')
      .option('-w, --wpm <wpm>', 'Words per minute for typing speed.Defaults to 305 WPM')
      .action(async (file, wpm, options) => {
        let userFile = file || options.file;
        let userWpm = wpm || options.wpm;

        if (!userFile) {
          userFile = await userInput('Enter the file path: ');
        }

        if (!userWpm) {
          userWpm = await userInput('Typing speed (defaults to 305 WPM): ');
        }
        
        if (!userWpm) {
          userWpm = 305;
        }

        resolve({ file:userFile, wpm: userWpm });
      });

    program.parse(process.argv);
  });
};

module.exports = init;
