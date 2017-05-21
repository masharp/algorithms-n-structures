/**
 * K nearest neighbors algorithm as an introduction to supervised ML
 */

 /**
  * This Node represents a single data point from a set, whether unknown or
  * pre-labled (training)
  * @constructor (object)
  * @param (string) type - type of room
  * @param (string) area - area of the room
  * @param (string) rooms - number of rooms
  */
 var Node = function(object) {

    /* assign this nodes properties as the object passed in */
    for (var k in object) {
        this[k] = object[k];
    }
 };
