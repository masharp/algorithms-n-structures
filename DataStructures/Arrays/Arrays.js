/*
 * This is a technical description of the Array data structure in JavaScript
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * michael@softwareontheshore.com
 */

/* The JavaScript array is a global object which creates a high level list-like object.
   Arrays include prototype methods that allow for traversal and mutation. JavaScript
   array data can be stored at non-contiguous locations in the array. */

var stuff = ['Things', 'Things', 'More Things']; // initalize an array with 3 elements
stuff[0]; // access element at index 0
stuff.length; // size of array or number of elements in array
stuff.push('Even More Things'); // add element to end of array
stuff.pop(); // remove from the end of the array
stuff.shift(); // remove from the front of the array
stuff.unshift('One More Thing'); // add to the front of the array
