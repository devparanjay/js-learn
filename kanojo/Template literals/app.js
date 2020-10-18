const name = "Alex"
const age = 20;
const job = "Husband";

let html;

function hellow(){
  return "He's the cutest.";
}
//Without template strings(es5)
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li>";

//With template strings(es6)
html=`
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>Number: ${4+4}</li>
    <li>${hellow()}</li>
    <li>${age>20?"Legal":"Illegal"}</li>
  </ul>
`;
document.body.innerHTML=html;
