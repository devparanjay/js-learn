"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Data Types in JavaScript
// Primitive Data Types
// String
var kanOjo = "Sanika"; // Logging to Console

console.log(kanOjo); // Logging Data Type to Console

console.log(_typeof(kanOjo)); // Number

var san = 8; // Logging to Console

console.log(san); // Logging Data Type to Console

console.log(_typeof(san)); // Boolean

var lovesMe = true; // Logging to Console

console.log(lovesMe); // Logging Data Type to Console

console.log(typeof lovesme === "undefined" ? "undefined" : _typeof(lovesme)); // NULL

var kids = null; // Logging to Console

console.log(kids); // Logging Data Type to Console

console.log(_typeof(kids)); // Undefined

var numberOfKids; // Logging to Console

console.log(numberOfKids); // Logging Data Type to Console

console.log(_typeof(numberOfKids)); // Symbols

var sYmBoL = Symbol(); // Logging to Console

console.log(sYmBoL); // Logging Data Type to Console

console.log(_typeof(sYmBoL)); // Reference Data Types - Objects
// Array

var meLikes = ['Kanojo', 'My Kanojo']; // Logging to Console

console.log(meLikes); // Logging Data Type to Console

console.log(_typeof(meLikes)); // Object Literal

var sheLikes = {
  'From Kareshi': 'Kissies',
  'Ice Cream': 'Butterscotch'
}; // Logging to Console

console.log(sheLikes); // Logging Data Type to Console

console.log(_typeof(sheLikes)); // Date

var now = new Date(); // Logging to Console

console.log(now); // Logging Data Type to Console

console.log(_typeof(now));