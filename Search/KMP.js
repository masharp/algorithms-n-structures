/* A JavaScript implementation of the Knuth-Morris-Pratt string searching algorithm,
  as described here: https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

  www.softwareontheshore.com
  michael@softwareontheshore.com
  Michael Sharp 2016

  Psudocode:
    input:
        an array of characters, S (the text to be searched)
        an array of characters, W (the word sought)
    output:
        an integer (the zero-based position in S at which W is found)
    define variables:
        an integer, m ← 0 (the beginning of the current match in S)
        an integer, i ← 0 (the position of the current character in W)
        an array of integers, T (the table, computed elsewhere)

    while m + i < length(S) do
        if W[i] = S[m + i] then
            if i = length(W) - 1 then
                return m
            let i ← i + 1
        else
            if T[i] > -1 then
                let m ← m + i - T[i], i ← T[i]
            else
                let i ← 0, m ← m + 1

    (if we reach here, we have searched all of S unsuccessfully)
    return the length of S
*/

var S = "onceuponatimeinalandfarfaraway";
var n = S.length;
var W = "land";
var m = W.length;

/* Failure table to track how the search algorithm should backtrack. The goal
  is to allow the search algorithm not to match any character of the source string
  more than once. */
function getFailureTable(source, target, sourceLen, targetLen) {
  var t = [-1, 0];

  for(var i = 2, j = 0; i < targetLen; ) {
    if(target[i-1] === source[j]) {
      t[i] = j + 1;
      i++;
      j++;
    } else if(j > 0) {
      j = t[j];
    } else {
      t[i++] = 0;
    }
  }
  return t;
}


/* KMP search function. Uses the failure table to bypass reexamination of previously
  matched characters */
function kmpSearch(source, target, sourceLen, targetLen) {
  var m = 0;
  var i = 0;
  var failureTable = getFailureTable(source, target, sourceLen, targetLen);
  console.log("FAILURE TABLE: " + failureTable);

  while(m + i < sourceLen) {
    if(target[i] === source[m + i]) {
      if(i === targetLen - 1) {
        return m;
      }
      i++;
    } else {
      m += i - failureTable[i];
      if(failureTable[i] > -1) {
        i = failureTable[i];
      } else {
        i = 0;
      }
    }
  }
  return -1;
}

console.log("POSITION OF WORD: " + kmpSearch(S, W, n, m));
