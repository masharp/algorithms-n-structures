var myModule = require("./myFilterModule");






/*
------------------------------------------------------
//exports the previous function into a module

module.exports = function(args) {
  var fs = require("fs");
  var path = require("path");

  var targetExt = "." + args[3];
  var fileDir = fs.readdir(args[2], callback);

  function callback(error, list) {
    if(!error) {
      list.forEach(function(item) {
        if(path.extname(item) == targetExt) {
          console.log(item);
        }
      });
    }
  }
}

----------------------------------------------------------
//read the files in a dir and filter them based on a passed extension

var args = process.argv;
var fs = require("fs");
var path = require("path");

var targetExt = "." + args[3];
var fileDir = fs.readdir(args[2], callback);

function callback(error, list) {
  if(!error) {
    list.forEach(function(item) {
      if(path.extname(item) == targetExt) {
        console.log(item);
      }
    });
  }
}
--------------------------------------------------
//read the newlines in a sample string read asynchronously

var args = process.argv;
var fs = require('fs');

fs.readFile(args[2], "utf8", callback);


function callback(error, data) {
  if(!error) {
    var result = data.split("\n").length - 1;
    console.log(result);
  }
}
*/
