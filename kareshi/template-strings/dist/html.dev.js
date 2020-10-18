"use strict";

// variables
var name = 'Sweet Wifey';
var age = 'Smol -100';
var job = 'Best Wife Ever';
var address = 'My Heart';
var tsuma; // adding HTML via JS without Template Strings and Literals

tsuma = '<ul>' + '<li>' + 'Name: ' + name + '</li>' + '<li>' + 'Age: ' + age + '</li>' + '<li>' + 'Job: ' + job + '</li>' + '<li>' + 'Address: ' + address + ' (The cheesiest and the best address ever.)' + '</li>' + '</ul';

function sweetWifey() {
  return 'Best, I said; and best she is.';
} // adding HTML via JS with Template Strings and Literals
// the language is basically switched back to JS inside those cury brackets so everything JS can be done there, including but not limited to functions, variables, etc. 


tsuma = "\n    <ul>\n        <li>\n            Name: ".concat(name, "\n        </li>\n        <li>\n            Age: ").concat(age, "\n        </li>\n        <li>\n            Job: ").concat(job, "\n        </li>\n        <li>\n            Address: ").concat(address, " (The cheesiest and the best address ever.)\n        </li>\n        <li>\n            Note: ").concat(sweetWifey(), "\n            <br>\n            ").concat(age.includes('Smol') ? 'She smol but she kawaii.' : 'She still smol.', "\n        </li>\n    </ul>    \n"); // outputting the HTML onto the webpage

document.body.innerHTML = tsuma;