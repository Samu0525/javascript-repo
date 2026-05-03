console.log("2">1);// this will give us true because 2 is greater than 1
console.log("02">1);// this will give us true because 2 is greater than 1

console.log(null>0);// this will give us false because null is not greater than 0
console.log(null==0);// this will give us false because null is not equal to 0
console.log(null>=0);// this will give us true because null is considered as 0 in this case
// in js null is considered as 0 when we compare it with numbers but it is not equal to 0
// so null>0 is false but null>=0 is true because null is considered as 0 in this case
console.log(undefined>0);// this will give us false because undefined is not greater than 0
console.log(undefined==0);// this will give us false because undefined is not equal to 0
console.log(undefined>=0);// this will give us false because undefined is not greater than or equal to 0
//avoid the above conversions because not used in real world and can lead to bugs in our code

//=== : strict equality operator(Strict check) 
console.log(1===1);// this will give us true because both are numbers and they are equal
console.log("1"===1);// this will give us false because one is string and other is number so they are not equal
console.log(true===1);// this will give us false because one is boolean and other is number so they are not equal
console.log(false===0);// this will give us false because one is boolean and other is number so they are not equal

//== : loose equality operator(Loose check)
console.log(1=="1");// this will give us true because it converts the string "1" to number 1 and then compares them
console.log(true==1);// this will give us true because it converts the boolean true to number 1 and then compares them
console.log(false==0);// this will give us true because it converts the boolean false to number 0 and then compares them
console.log(null==undefined);// this will give us true because null and undefined are considered equal in loose equality check
console.log(null===undefined);// this will give us false because null and undefined are not equal in strict equality check