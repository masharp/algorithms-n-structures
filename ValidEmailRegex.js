/*  This is a regex implementation that checks if an input string is a valid email address, following
    standard email rules. This regex is simple and checks for basic email address formatting - due
    to confusion regarding valid global email standards.

    by Michael Sharp
    www.softwareontheshore.com
    msharp.oh@gmail.com
    ---------------------------------

*/

function validateEmailAddress(email) {
  var regx = /\S+@\S+\.\S+/;

  return regx.test(email);
}
