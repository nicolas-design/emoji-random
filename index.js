//let input = console.log(process.argv);
const randomColor = require('randomcolor'); // import the script
const color = randomColor();
const prompt = require('prompt-sync')();
const chalk = require('chalk');
//console.log(chalk.blue('Hello world!'));

function createArray(arrEx, length, width) {
  for (let i = 0; i < width; i++) {
    arrEx[i] = [];
    for (let x = 0; x < length; x++) {
      arrEx[i][x] = '#';
    }
  }
}
//
//
//
//

function print(ex, length, Width) {
  let bool = true;
  while (bool) {
    let input1 = prompt('Enter luminosity: ');
    let input2 = prompt('Enter hue: ');

    if (input1 === 'ask' || input2 === 'ask') {
      console.log('Enter a color!');
    } else if (input2 === 'random') {
      let useColor = randomColor();
      for (let i = 0; i < Width; i++) {
        console.log();
        for (let x = 0; x < length; x++) {
          process.stdout.write(chalk.hex(useColor)(ex[i][x]));
        }
      }
    } else if (input1 === 'quit' || input2 === 'quit') {
      bool = false;
    } else if (input1 !== undefined && input2 !== undefined) {
      let hexcode = randomColor({
        luminosity: input1,
        hue: input2,
      });
      for (let i = 0; i < Width; i++) {
        console.log();
        for (let x = 0; x < length; x++) {
          process.stdout.write(chalk.hex(hexcode)(ex[i][x]));
        }
      }
    } else {
      console.log('error');
    }
    console.log();
  }
}
//
//
//
//

//main
let input;

do {
  input = prompt('input: ').toLowerCase();
} while (input !== 'start');
let arr = [];
let squareA = prompt('Enter length: ');
let squareB = prompt('Enter Width: ');
createArray(arr, squareA, squareB);
print(arr, squareA, squareB);
