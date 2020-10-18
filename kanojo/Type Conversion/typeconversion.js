let num;

//Number to string
val=String(8);
val=String(5+3);

//Bool to String
val=String(false);

//Date to String
val=String(new Date());

//Array to string
val=String([8,9,8,9]);

//toString()
val=(8).toString();
val=(true).toString();

//Converting string to Number
val=Number('8');
val=Number(false);
val=Number(true);
val=Number(null);
val=Number('Hello');
val=Number([8,8,8,8]);
val=parseInt('10.5');
val=parseFloat('10.7');

console.log(val);
console.log(typeof(val));
console.log(val.length);
console.log(val.toFixed());

//const num1=2;
//const num2=9;
//const sum=num1+num2;

const num1=String(2);
const num2=11;
sum=num1+num2;//type- string
sum=Number(num1+num2);//type- number
//concatenation when one of the values is a string

console.log(sum);
console.log(typeof(sum));
