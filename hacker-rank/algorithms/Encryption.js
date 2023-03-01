/**
 * HackerRank Encryption Challenge (JavaScript)
 * https://www.hackerrank.com/challenges/encryption
 */
'use strict';

const test = ['feedthedog', 'haveaniceday', 'chillout'];

/**
 * Function that computes the area of the encryption grid
 * following the equation:
 *  grid = Floor(sqrt(x)) <= rows <= columns <= Ceil(sqrt(x))
 *  where x = length of string
 *  @param{int} - length of string
 *  @param{object} - area: height, width, total area
 */
function computeArea(length) {
  const row = Math.floor(Math.sqrt(length));
  const column = Math.ceil(Math.sqrt(length));
  const total = row * column;
  return { row, column, total };
}

/**
 * Function that turns the text into a grid and then
 * encrypts the text by forming a 'word' out of each letter in the grid's column
 * @param{string} text - to be encrypted
 * @return{string} result - encrypted string, with spaces
 */ 

function encrypt(text) {
  const sentence = text.split(''); // let's turn the sentence into an array of chars
  const len = text.length;
  const area = computeArea(len); // compute the useful grid information
  const grid = [];
  let encrypted = '';

  // slice the array to form a grid based on number of columns
  for (let j = 0; j <= area.total; j += area.column) {
    const segment = sentence.slice(j, j + area.column);
    grid.push(segment);
  }

  // traverse each array in the matrix
  for (let k = 0; k < area.column; k++) {
    let code = '';

    // for each array add the letters that correspond to a column position
    grid.forEach((a) => {
      if (a[k] === undefined) return; // if the position is empty (last array) - move on
      code += a[k];
    });
    encrypted += code + ' ';
  }
  return encrypted;
}

const result = encrypt(test[0]);
console.log(result);
