const tsu = 'San';
const ma = 'ika';
let tsuma;

// concatenation
tsuma = tsu + '<3' + ma;

// appending
tsuma = tsu + ma;
tsuma += ' Pretty';

// escaping
tsuma = 'Sanika\'s heart is mine.';

// length
tsuma = tsuma.length;

// concat() for concatenation
tsuma = tsu.concat(ma);

// changing cases
tsuma = tsuma.toUpperCase();
tsuma = tsuma.toLowerCase();

// character positioning in string
tsuma = tsu[1]; // starts with 0

// character indexing
tsuma = tsu.indexOf('n'); // searching the character from left to right
tsuma = tsu.lastIndexOf('n'); // searching the character from right to left

tsuma = tsu.charAt('1'); // the character at index 1

tsuma = tsu.charAt(tsu.length-1); // the last character of any string

// manipulating the string
tsuma = tsu + ma;
let kanojo;

kanojo = tsuma.substring(0,3); // substring
kanojo = tsuma.slice(0,3); // same as substring like this
kanojo = tsuma.slice(-2); // last two characters if the string

// splitting a string into an array

kanojo = 'My wife is the sweetest.';
tsuma = kanojo.split(' ');

// replacing characters in a string

tsuma = kanojo.replace('sweetest', 'best');

// checking if the string as particular characters

tsuma = kanojo.includes('sweetest'); // returns a boolean value

// console output

console.log(tsuma);
console.log(typeof tsuma);
console.log(kanojo);
console.log(typeof kanojo);