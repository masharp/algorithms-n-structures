/**
 * Hash Table Implemented from scratch via JavaScript
 * Helpful: http://www.willvillanueva.com/javascript-hash-tables/
 */


function HashTable(limit = 10) {
 this.store = [];
 this.limit = limit;
}

/* Prototype function that converts a key (string) in a numerical value
 * based on the contents of that key */
HashTable.prototype.hash = function hash(key) {
 var hash = 0;
 var len = key.length;

 for (var x = 0; x < len; x++) {
   hash = (hash << 5) + hash + key.charCodeAt(x);
   hash = hash | 0; // bitwise conversion to integer
   hash = Math.abs(hash);
 }

 return hash % this.limit;
};

HashTable.prototype.insert = function insert(key, value) {
  var index = this.hash(key);

  if (!this.store[index]) this.store[index] = [[key, value]];
  else {
    var inserted = false;
    var len = this.store[index].length;

    for (var x = 0; x < len; x++) {
      if (this.store[index][x][0] === key) {
        this.store[index][x][1] = value;
        inserted = true;
      }
    }

    if (!inserted) this.store[index].push([key, value]);
  }
};

HashTable.prototype.retrieve = function retrieve(key) {
  var index = this.hash(key);

  if (!this.store[index]) return undefined;
  else {
    var len = this.store[index].length;

    for (var x = 0; x < len; x++) {
      if (this.store[index][x][0] === key) {
        return this.store[index][x][1];
      }
    }
  }
};

/**
 * A HashTable using JavaScript's Standard Library object
 */
var table = {};
table.apple = 'red';
table['blueberry'] = 'blue';

// table.freeze() - no code can alter properties
// table.keys() - returns array caontaining names of object's properties (keys)
// table.hasOwnProperty(key) - returns bool indicating existance of property (key)
// table.toString() - returns a string of the table
