/**
 * JavaScript Solution to HackerRank's 'Bot Saves Princess' AI Challenge
 * https://www.hackerrank.com/challenges/saveprincess
 *
 * The princess ('p') is at one position in a string in an array. The player ('m') is at another.
 * Print commands for the player to find the princess.
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */


 function displayPathToPrincess(dimension, grid) {
     let princess = [];
     let player = [];

     /* Find the current position of the player and the princess */
     for (let x = 0; x < dimension; x++) {
         const row = grid[x];

         // princess
         if (row.indexOf('p') > -1) {
           princess.push(x);
           princess.push(row.indexOf('p'));
         }

         // player
         if (row.indexOf('m') > -1) {
           player.push(x);
           player.push(row.indexOf('m'));
         }
     }

     /* find the differences in position for each axis of the grid */
     let xAxis = player[0] - princess[0];
     let yAxis = player[1] - princess[1];

     /* move the robot based on current position relative to princess */
     while (yAxis && xAxis) {
         if (yAxis < 0) {
           while (yAxis < 0) {
             console.log('RIGHT');
             yAxis++;
           }
         } else {
           while (yAxis > 0) {
             console.log('LEFT');
             yAxis--; }
           }

         if (xAxis < 0) {
           while(xAxis < 0) {
             console.log('DOWN');
             xAxis++;
           }
         } else {
           while (xAxis > 0) {
             console.log('UP');
             xAxis--;
           }
         }
     }
 }
