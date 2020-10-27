"use strict";

// WINDOW Objects, Methods, and Properties
// // Alert
// alert('Wifey saikooo!')
// // Prompt
// let input = prompt();
// alert(input);
// // Confirm
// if(confirm('Are you sure, baka?')){
//     console.log('Yuh-uh')
// }
// else {
//     console.log('Nuh-uh')
// }
// Outer Height and Width
var outerHeight = window.outerHeight;
console.log(outerHeight);
var outerWidth = window.outerWidth;
console.log(outerWidth); // Inner Height and Width

var innerHeight = window.innerHeight;
console.log(innerHeight);
var innerWidth = window.innerWidth;
console.log(innerWidth); // Scroll Points

var verticalScrollPoint = window.scrollY;
console.log(verticalScrollPoint);
var horizontalScrollPoint = window.scrollX;
console.log(horizontalScrollPoint); // Location Object

var windowLocation = window.location;
var locationHost = windowLocation.host;
console.log(locationHost);
console.log(windowLocation.port);
console.log(windowLocation.protocol);
console.log(windowLocation.href);
console.log(windowLocation.search); // Redirection

windowLocation.href = '#'; // windowLocation.reload();
// History Object
// window.history.go(-1);

console.log(window.history.length); // Navigator Object

console.log(window.navigator);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.platform);
console.log(window.navigator.language);