const firstName="Silly";
const lastName="Husband";
const age=20;

let fullName;
fullName=firstName+lastName;

//Concatenation
fullName=firstName+" "+lastName;

//Append
fullName="Silly";
fullName+=" Husband";

intro="Hellow, my name is "+fullName+" and I am only "+age+".";
console.log(intro);

//Length
len=firstName.length;
len=fullName.length;
console.log(len);

//Concat function
fullName=firstName.concat(" ",lastName);

//Changing the case
capital=fullName.toUpperCase();
console.log(capital);

indexval=capital[2];
intro2="I take big "+indexval+"s."
console.log(intro2);

//indexOf()
index=lastName.indexOf("b");
index=lastName.lastIndexOf("d");
console.log(index);

//charAt()
char=firstName.charAt(1);
console.log(char);

//To get last character
char=firstName.charAt(firstName.length-1);
console.log(char);

//substring()
sub=lastName.substring(3,7);
console.log(sub);

//slice()
sliced=firstName.slice(0,4);
sliced=firstName.slice(2);
sliced=firstName.slice(-2);
console.log(sliced);

//split()
words=intro.split(" ");
console.log(words);
console.log(typeof(words));
qualities="cute,cute,kind,handsome,caring,loving,husbandly,fatherly";
words=qualities.split(",");
console.log(words);

//replace()
intro2=intro2.replace("big","huge");
console.log(intro2);

//includes() -True/False
um=intro2.includes("W");
console.log(um); //hehe

console.log(fullName);
