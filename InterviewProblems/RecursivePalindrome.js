/*  This is an implementation of a recursive algorithm designed to dertimine if a string is a palindrome.
    A paldinrome is a string that reads the same forward as it does backward.

    by Michael Sharp
    www.softwareontheshore.com
    michael@softwareontheshore.com
    ---------------------------------
    Psudocode:
      - if string is empty or 1 character
        string is paldindrome
      - if first and last characters do not match
        string is not palindrome
      - else
        remove first and last characters from string
        return palindrome(remaining characters)

*/

var stringA = "racecar";
var stringB = "motor";
var stringC = "rottor";

console.log(findPalindrome(stringA));
console.log(findPalindrome(stringB));
console.log(findPalindrome(stringC));

function findPalindrome(str) {
  var firstCharacter = str.slice(0, 1);
  var lastCharacter = str.slice(-1);
  var middleCharacters = str.slice(1, -1);

  if(str.length <= 1) {
    return true;
  }
  if(firstCharacter !== lastCharacter) {
    return false;
  }
  return findPalindrome(middleCharacters);

}
