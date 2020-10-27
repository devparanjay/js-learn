# Arrays

Objects that store multiple values.

## Creating Arrays

const num = [8, 88, 888, 7];

const number = new Array(8, 88, 888, 7);

const wifey = ['sweet', 'pretty', 'smol'];

const mixedArray = ['sweet', 'wifey', '88'];

## Array Methods

**Array Length**
<br>
arraylength = num.length;

**Array or Not?**
<br>
checkArray= Array.isArray(number);

**Getting Values**
<br>
fourthValue = num[3];

**Insterting into Array**
<br>
wifey[3] = 'best';

**Index of a Value**
<br>
index = wifey.indexOf('pretty');

## Array Mutation

**Appending to the End**
<br>
wifey.push('sweetheart');

**Adding to the Start**
<br>
num.unshift(0);

**Removing from the End**
<br>
num.pop();

**Removing from the Start**
<br>
num.shift();

**Splicing**
<br>
num.splice(1,2);

**Reversing**
<br>
num.reverse();

**Concatenation**
<br>
concatenatedArray = num.concat(number);

**Sorting**
<br>
wifey.sort();

**Sorting Numerical Arrays with Compare Function**
<br>
<br>
*Ascending Order:*
<br>
sortedArray = num.sort(function(a, b){
    return x-y;
});
<br>
<br>
*Descending Order:*
<br>
sortedArray = num.sort(function(a, b){
    return y-x;
});

**Finding in Array**
<br>
found = num.find(function(num){
    return num < 88;
}); // returns the ffirst number less than 88
