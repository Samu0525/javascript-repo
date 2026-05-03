
const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);
console.log(typeof score);// this will give us "number" because it is a primitive data type
console.log(typeof balance);// this will give us "object" because it is an object data type

console.log(balance.toString().length);// this will give us 3 because it converts the number 100 to string "100" and then gives us the length of the string

//mostly useed:
console.log(balance.toFixed(2));// this will give us "100.00" because it converts the number 100 to a string with 2 decimal places

console.log(balance.toPrecision(2));// this will give us "1.0e+2" because it converts the number 100 to a string with 2 significant digits
console.log(balance.valueOf());// this will give us 100 because it returns the primitive value of the number 

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));// this will give us "100,000" because it converts the number 100000 to a string with commas as thousands separators. en-IN is the locale for India which uses commas as thousands separators

//MIN_VALUE and MAX_VALUE are the minimum and maximum values that a number can have in JavaScript
console.log(Number.MIN_VALUE);// this will give us 5e-324 because it is the smallest positive number that can be represented in JavaScript
console.log(Number.MAX_VALUE);// this will give us 1.7976931348623157e+308 because it is the largest positive number that can be represented in JavaScript
console.log(Number.POSITIVE_INFINITY);// this will give us Infinity because it is the value that represents positive infinity in JavaScript
console.log(Number.NEGATIVE_INFINITY);// this will give us -Infinity because it is the value that represents negative infinity in JavaScript
console.log(Number.NaN);// this will give us NaN because it is the value that represents Not-a-Number in JavaScript
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));// this will give us false because 100 is a number and it is not NaN
console.log(Number.isFinite(Infinity));// this will give us false because Infinity is not a finite number
console.log(Number.isFinite(100));// this will give us true because 100 is a finite number
console.log(Number.isFinite(NaN));// this will give us false because NaN is not a finite number

//++++++++++++++++Maths++++++++++++++
//Maths is a library in javascript that provides mathematical functions and constants
console.log(Math);
console.log(Math.abs(-4));// this will give us 4 because it returns the absolute value of a number
//positive will remain positive but abs makes negative also positive
console.log(Math.round(4.6));// this will give us 5 because it rounds the number to the nearest integer
console.log(Math.round(4.4));// this will give us 4 because it rounds the number to the nearest integer
console.log(Math.ceil(4.1));// this will give us 5 because it rounds the number up to the nearest integer
console.log(Math.floor(4.9));// this will give us 4 because it rounds the number down to the nearest integer
console.log(Math.max(1,2,3,4,5));// this will give us 5 because it returns the largest of the given numbers
console.log(Math.min(1,2,3,4,5));// this will give us 1 because it returns the smallest of the given numbers
console.log(Math.pow(2,3));// this will give us 8 because it returns the value of 2 raised to the power of 3
console.log(Math.sqrt (16));// this will give us 4 because it returns the square root of 16

//imp-used
console.log(Math.random());// this will give us a random number between 0 and 1
console.log(Math.random()*100);// this will give us a random number between 0 and 100
console.log(Math.floor(Math.random()*100));// this will give us a random integer between 0 and 99 because it rounds the number down to the nearest integer

console.log(Math.random());
console.log((Math.random()*10)+1);// this will give us a random number between 1 and 10 because it multiplies the random number by 10 to get a number between 0 and 10 and then adds 1 to get a number between 1 and 11 (not inclusive)

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);// this will give us a random integer between 10 and 20 because it multiplies the random number by (max-min+1) to get a number between 0 and (max-min+1) and then adds min to get a number between min and max (inclusive) 