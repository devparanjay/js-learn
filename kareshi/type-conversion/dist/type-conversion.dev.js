"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// variable
var tsuma; // number to string

tsuma = 8;
tsuma = String(tsuma); // boolean to string

tsuma = true;
tsuma = String(tsuma); // date to string

tsuma = new Date();
tsuma = String(tsuma); // array to string

tsuma = ['wife', 'sweet', 'pretty', '<3', 5, 3];
tsuma = String(tsuma); // using toString()

tsuma = tsuma.toString();
tsuma = 53;
tsuma = tsuma.toString(); // string to number

tsuma = '53';
tsuma = Number(tsuma); // boolean to number

tsuma = true;
tsuma = Number(tsuma);
tsuma = false;
tsuma = Number(tsuma);
tsuma = null;
tsuma = Number(tsuma); // non-numerical string to a number

tsuma = 'wifey';
tsuma = Number(tsuma); // gives NaN - Not a Number
// array to a number

tsuma = [5, 3];
tsuma = Number(tsuma); // gives NaN - Not a Number
// using parse functions to get numbers
// parsing integers from string

tsuma = '53';
tsuma = parseInt(tsuma); // parsing float numericals from string

tsuma = '5.2';
tsuma = parseFloat(tsuma); // Type Coersion

var tsu = 5;
var ma = '3';
var kanojo = tsu + ma; // console output

console.log(tsuma);
console.log(_typeof(tsuma));
console.log(tsuma.length); // only works on strings

console.log(tsuma.toFixed(2)); // only works on numbers

console.log(kanojo); // for type coersion

console.log(_typeof(kanojo)); // for type coersion