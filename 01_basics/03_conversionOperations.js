let score=33;// this is number
score="33";// this is  string.
//but when user givesthe value in string and we want it to be number then we can use the conversion operation
let valuenumber=Number(score);// this will give us 33 because score is in string and Number() converts it to a number
console.log(typeof valuenumber)
let test="33abc";// this is string but it has some characters in it so when we try to convert it to number it will give us NaN because it is not a valid number
let testnumber=Number(test);
console.log(testnumber);// this will give us NaN because it is not a valid number
//"33"=>33
//"33abc"=>Nan

let isLoggedIn=true;
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
//true=>1; false=>0
//""=>false
//"sam"=>true if we have any string with some value in it then it will be true but if we have empty string then it will be false
let emptyString="";
let booleanEmptyString=Boolean(emptyString);
console.log(booleanEmptyString);// this will give us false because it is an empty string

let someNumber=33;
let stringSomeNumber=String(someNumber);
console.log(stringSomeNumber);// this will give us "33" because it converts the number to string
console.log(typeof stringSomeNumber)

// let num=22;
// let num2=decimal(num);
// console.log(num2);// this will give us error because decimal is not a datatype in js


//*************Operations in js******
let value=9;
let negvalue=- value;
console.log(negvalue);// this will give us -9 because we are negating the value of 9

//operations: +,-,*,/,%,++,--
//**: power operator 
let power=2**3;// this will give us 8 because 2 to the power of 3 is 8
console.log(power)

//tricky in js conversions
console.log(3+"3");// this will give us "33" because when we add a number and a string it will convert the number to string and concatenate them
console.log("1"+2+3);// this will give us "123" because when we add a string and a number it will convert the number to string and concatenate them
console.log(1+2+"3");// this will give us "33" because when we add two numbers it will give us a number and then when we add a string it will convert the number to string and concatenate them

// Prefix and postfix operators behave exactly the same in JavaScript and Java.

//Same behavior in both languages
// Prefix (++x)
// First increment
// Then use value
// Postfix (x++)
// First use value
// Then increment
// 🔍 Example (works SAME in both Java & JavaScript)
// int x = 5;
// int y = x++;

// System.out.println(x); // 6
// System.out.println(y); // 5