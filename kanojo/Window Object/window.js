//WINDOW METHODS

//Alert
window.alert("Hello cutie!");

//Prompt
let input= prompt();
alert(input);

//Confirm
if(confirm("Are you Paranjay?")){
  console.log("Yayy!"); //If user clicks on OK
}
else{
  console.log("Go away!");
}

//width and height of the Window
let ht;
ht= window.outerHeight;
ht=window.innerHeight;
console.log(ht);
let wd;
wd= window.outerWidth;
wd=window.innerWidth;
console.log(wd);

//Scroll points
let val;
val=window.scrollY;
val=window.scrollX;
console.log(val);

//Location Object
val=window.location;
val=window.location.hostname;
val=window.location.search;
console.log(val);

//Redirect
//window.location.href="https://google.com";

//Reload
//window.location.reload; //keeps reloading

//History Object
val=window.history.go(-1); //redirects to previously opened website in the Window
val=window.history.length; //number of websites previously loaded in the Window
console.log(val);

//Navigator Object (Deals with the browser)
val=window.navigator;
val=window.navigator.appName;
val=window.navigator.userAgent;
val=window.navigator.platform;
val=window.navigator.language;

console.log(val);
