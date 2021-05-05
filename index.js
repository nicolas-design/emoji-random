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
function arrReplace(arr, length, width) {
  let middleL = Math.floor(length / 2);
  let middleW = Math.floor(width / 2);
  for (let i = middleW - 1; i <= middleW + 1; i++) {
    for (let x = middleL - 10; x <= middleL + 10; x++) {
      arr[i][x] = ' ';
    }
  }
}

function hexArr(arr, length, width, str) {
  let middleL = Math.floor(length / 2);
  let middleW = Math.floor(width / 2);
  let text = str;
  //text = str;
  let charC = 0;
  for (let i = middleW; i < middleW + 1; i++) {
    for (let x = middleL - 3; x < middleL + 3; x++) {
      arr[i][x] = text.charAt(charC);
      charC++;
    }
  }
}
//
function printArr(arr, length, width, hex) {
  let useColor = hex;
  hexArr(arr, length, width, useColor);
  for (let i = 0; i < width; i++) {
    console.log();
    for (let x = 0; x < length; x++) {
      process.stdout.write(chalk.hex(useColor)(arr[i][x]));
    }
  }
  console.log();
}
//
//

function print() {
  let bool = true;
  while (bool) {
    let input1 = prompt('input: ');
    let inp = input1.split(' ');
    if (input1 === '') {
      let arr = [];
      createArray(arr, 31, 9);
      arrReplace(arr, 31, 9);
      printArr(arr, 31, 9, randomColor());
    } else if (inp.length === 1 && inp[0] === 'ask') {
      console.log('Enter color and luminosity!');
    } else if (inp.length === 1 && inp[0] === 'random') {
      let arr = [];
      createArray(arr, 31, 9);
      arrReplace(arr, 31, 9);
      printArr(arr, 31, 9, randomColor());
    } else if (inp.length === 1 && inp[0] === 'quit') {
      bool = false;
    } else if (inp.length === 2) {
      let hexcode = randomColor({
        luminosity: inp[0],
        hue: inp[1],
      });
      let arr = [];
      createArray(arr, 31, 9);
      arrReplace(arr, 31, 9);
      printArr(arr, 31, 9, hexcode);
    } else if (inp.length === 3 && inp[0].includes('x')) {
      let leandwi = inp[0].split('x');
      let hexcode = randomColor({
        luminosity: inp[1],
        hue: inp[2],
      });
      let arr = [];
      createArray(arr, leandwi[0], leandwi[1]);
      arrReplace(arr, leandwi[0], leandwi[1]);
      printArr(arr, leandwi[0], leandwi[1], hexcode);
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
let arr = [];
createArray(arr, 31, 9);
arrReplace(arr, 31, 9);
printArr(arr, 31, 9, randomColor());
print();
