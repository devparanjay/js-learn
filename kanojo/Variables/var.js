//var, let, const

var Alex="Kareshi";
console.log(Alex);
var Alex="Kawaii";
console.log(Alex);
var San;
console.log(San);
San="Loser"
console.log(San);

//let
let name;
name="Anon";
console.log(name);

//const

const constant_name= "Anon";
console.log(constant_name);
//constant_name="NotAnon"; //Error- cannot be reassigned
//const this; //Error- has to be initialized

//const keyword
const baka={
  name: "Paranjay",
  number: 8
}
console.log(baka);
baka.name="Alex"; //(name,number) can be reassigned
console.log(baka);

const array=[8,8,8,8];
console.log(array);
array.push(1);

console.log(array);
