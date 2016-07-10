/**
 * Save the Prisonsers! HackerRank Algorithm Challenge
 * http://
 *
 * michael@software on the shore

A jail has N prisoners, and each prisoner has a unique id number, S, ranging from 1 to N.
There are M sweets that must be distributed to the prisoners. The jailer decides the fairest way
to do this is by sitting the prisoners down in a circle (ordered by ascending S), and then,
starting with some random S, distribute one candy at a time to each sequentially numbered prisoner until all M
candies are distributed. For example, if the jailer picks prisoner S=2 , then his distribution order
would be (2, 3, 4, 5, ...., n - 1 n, 1, 2, 3, 4, ...) until all M sweets are distributed.

But wait—there iss a catch—the very last sweet is poisoned!
 Can you find and print the ID number of the last prisoner to receive a sweet so he can be warned?

Input Format

The first line contains an integer, T, denoting the number of test cases.
The subsequent T lines each contain space-separated integers:
N(the number of prisoners), M(the number of sweets), and S(the prisoner ID), respectively.

Sample Input

1
5 2 1

Sample Output

2

Explanation

There are N = 5 prisoners and M = 2 sweets. Distribution starts at ID number S = 1, so prisoner 1 gets
the first sweet and prisoner 2 gets the second (last) sweet. Thus, we must warn prisoner  2 about the poison,
so we print on a new line. */

'use strict';

const testA = [5, 2, 1];
const testB = [10, 10, 5];

function savePrisoner(args) {
  /* parse args */
  const prisoners = args[0]; // number of prisoners
  const sweets = args[1]; // number of sweets
  const start = args[2]; // random start to candy distribution
  let prisoner = start; // set current prisner to start

  /* hand out candies until out of candies. reset current prisoner if circle cycles */
  for (let i = 1; i < sweets; i++) {
    prisoner++;
    if (prisoner > prisoners) prisoner = 1;
  }

  return prisoner;
}

console.log(savePrisoner(testA));
