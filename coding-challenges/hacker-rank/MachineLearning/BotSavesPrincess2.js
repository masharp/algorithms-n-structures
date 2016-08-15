/**
 * JavaScript Solution to HackerRank's 'Bot Saves Princess 2' AI Challenge
 * https://www.hackerrank.com/domains/ai/ai-introduction
 *
 * The princess ('p') is at one position in a string in an array. The player ('m') is at another.
 * Print the command for the next movement of the player towards the princess.
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */

 function findPlayerMove(input) {
     input = input.split('\n');
     const dimensions = input[0];
     const player = input[1].split(' ');
     const map = input.slice(2, 2 + dimensions);
     let princess = [];

     /* find the princess */
     for (let x = 0; x < dimensions; x++) {
         const row = map[x];

         if (row.indexOf('p') > -1) {
             princess.push(x);
             princess.push(row.indexOf('p'));
         }
     }

     /* plot next step based on distance and direction */
     const xAxis = player[0] - princess[0];
     const yAxis = player[1] - princess[1];

     if (xAxis !== 0) {
         if (xAxis < 0) console.log('DOWN');
         else console.log('UP');
     } else {
         if (yAxis < 0) console.log('RIGHT');
         else console.log('LEFT');
     }
 }
