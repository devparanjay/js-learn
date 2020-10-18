// variables

const name = 'Sweet Wifey';
const age = 'Smol -100';
const job = 'Best Wife Ever';
const address = 'My Heart';

let tsuma;

// adding HTML via JS without Template Strings and Literals

tsuma = '<ul>' +
            '<li>' +
                'Name: ' + name +
            '</li>' +
            '<li>' +
                'Age: ' + age +
            '</li>' +
            '<li>' +
                'Job: ' + job +
            '</li>' +
            '<li>' +
                'Address: ' + address + ' (The cheesiest and the best address ever.)' +
            '</li>' +
        '</ul';

function sweetWifey() {
    return 'Best, I said; and best she is.';
}

// adding HTML via JS with Template Strings and Literals
// the language is basically switched back to JS inside those cury brackets so everything JS can be done there, including but not limited to functions, variables, etc. 

tsuma = `
    <ul>
        <li>
            Name: ${name}
        </li>
        <li>
            Age: ${age}
        </li>
        <li>
            Job: ${job}
        </li>
        <li>
            Address: ${address} (The cheesiest and the best address ever.)
        </li>
        <li>
            Note: ${sweetWifey()}
            <br>
            ${age.includes('Smol') ? 'She smol but she kawaii.' : 'She still smol.'}
        </li>
    </ul>    
`;

// outputting the HTML onto the webpage

document.body.innerHTML = tsuma;