
//Data types injs
//Primitive data types:7 are present
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined



//6. Symbol: used when we want to make a value unique and it is not equal to any other value even if it has the same value as another symbol
const id=Symbol('123')
const id2=Symbol('123')
console.log(id==id2);// this will give us false because id and id2 are two different symbols even though they have the same value '123'. This the work of symbol it differentiates variable evenif they have same value.
//7. BigInt: used when we want to store a number that is greater than the maximum safe integer in js which is 2^53-1
const bigNumber=347438469283n;// this will give us 347438469283n because it is a big number and we have to add n at the end of the number to indicate that it is a big number


//******JS IS A DYNAMICALLY TYPED LANGUAGE AS DATATYES ARE DEFINED AT RUNTIME  */


//Non-primitive data types(reference type): 1 is present
//1. Object: it is a collection of key-value pairs and it can store any type of data including primitive and non-primitive data types
//2.Array: it is a special type of object that is used to store multiple values in a single variable and it is also a collection of key-value pairs but the keys are the index of the array starting from 0
//3.Function: it is a special type of object that is used to store a block of code that can be executed when it is called and it is also a collection of key-value pairs but the keys are the name of the function and the value is the block of code that is executed when the function is called

const heros=["ironman","spiderman","thor"];// this will give us ["ironman","spiderman","thor"] because it is an array and it can store multiple values in a single variable
let myObj={
    name:"samuel",
    age:22,
    isLoggedIn:true
}// this will give us {name: "samuel", age: 22, isLoggedIn: true} because it is an object and it can store any type of data including primitive and non-primitive data types
function myFunction(){
    console.log("Hello World");
}// this will give us a function that can be called to execute the block of code inside the function
//the datatypes of nonprimitives are objjects and function datatype is function object but we can differentiate them by using typeof operator
console.log(typeof heros);// this will give us object because array is a special type of object
console.log(typeof myObj);// this will give us object because it is an object
console.log(typeof myFunction);// this will give us function because it is a function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Memmory in js
//1. Stack: it is a memory that is used to store primitive data types and it is also used to store the reference of non-primitive data types
//2. Heap: it is a memory that is used to store non-primitive data types and it is also used to store the reference of non-primitive data types

let a=10;
let b=a;
b=20;
console.log(a);// this will give us 10 because a is stored in stack and it is a primitive data type and when we assign b=a it creates a copy of a and stores it in b and when we change the value of b it does not affect the value of a because they are stored in different memory locations in stack
console.log(b);// this will give us 20 because b is stored in stack and it is a primitive data type and when we assign b=a it creates a copy of a and stores it in b and when we change the value of b it does not affect the value of a because they are stored in different memory locations in stack

let obj1={
    name:"samuel",
    age:22
}
let obj2=obj1;
obj2.name="john";
console.log(obj1);// this will give us {name: "john", age: 22} because obj1 and obj2 are stored in heap and they are non-primitive data types and when we assign obj2=obj1 it creates a reference of obj1 and stores it in obj2 and when we change the value of obj2 it also changes the value of obj1 because they are stored in the same memory location in heap
console.log(obj2);// this will give us {name: "john", age: 22} because obj1 and obj2 are stored in heap and they are non-primitive data types and when we assign obj2=obj1 it creates a reference of obj1 and stores it in obj2 and when we change the value of obj2 it also changes the value of obj1 because they are stored in the same memory location in heap

