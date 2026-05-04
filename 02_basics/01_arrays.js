
//arrays: Arrays in js are used to store multiple values in a single variable and it is also a collection of key-value pairs but the keys are the index of the array starting from 0 and the values are the elements of the array and it is a special type of object that is used to store multiple values in a single variable and it is also a collection of key-value pairs but the keys are the index of the array starting from 0 and the values are the elements of the array
//arrays are mutable which means we can change the elements of the array and we can also add or remove elements from the array and it is also a reference type which means when we assign an array to another variable it creates a reference of the original array and when we change the value of the new variable it also changes the value of the original array because they are stored in the same memory location in heap
//properties of arrays in js are: 
// 1. length: it is a property that gives us the number of elements in the array
//2. index: it is a property that gives us the position of the element in the array starting from 0
//3. push(): it is a method that adds an element to the end of the array
//4. pop(): it is a method that removes the last element from the array and returns it
//5. shift(): it is a method that removes the first element from the array and returns it
//6. unshift(): it is a method that adds an element to the beginning of the array
//7. slice(): it is a method that returns a new array containing a portion of the original array based on the start and end index provided as arguments
//8. splice(): it is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place based on the start index, delete count, and items to add provided as arguments

//Ways of creating an array in js:
const heros=["ironman","spiderman","thor"];
const numbers=new Array(1,2,3,4,5);
const mixed=["samuel",22,true,null,undefined,{name:"john"},[1,2,3]];// this will give us ["samuel", 22, true, null, undefined, {name: "john"}, [1, 2, 3]] because it is an array and it can store multiple values in a single variable and it is also a collection of key-value pairs but the keys are the index of the array starting from 0 and the values are the elements of the array and it is a special type of object that is used to store multiple values in a single variable and it is also a collection of key-value pairs but the keys are the index of the array starting from 0 and the values are the elements of the array
console.log(heros);
console.log(numbers);
console.log(mixed);

//Array Methods:
numbers.push(6);// this will give us 6 because it adds 6 to the end of the array and returns the new length of the array
console.log(numbers);

numbers.pop();// this will give us 6 because it removes the last element from the array and returns it
console.log(numbers);
numbers.unshift(9);// this will give us 9 because it adds 9 to the beginning of the array and returns the new length of the array
console.log(numbers);
numbers.shift();//this will give us 9 because it removes the first element from the array and returns it
console.log(numbers);
console.log(numbers.includes(3));// this will give us true because it checks if the element 3 is present in the array and returns true if it is present and false if it is not present
console.log(numbers.indexOf(3));

const newArr=numbers.join()
console.log(newArr);// this will give us "1,2,3,4,5" because it converts the array to a string and joins the elements of the array with a comma as a separator by default but we can also specify a different separator as an argument to the join() method
const newArr2=numbers.join(" - ");// this will give us "1 - 2 - 3 - 4 - 5" because it converts the array to a string and joins the elements of the array with " - " as a separator
console.log(newArr2);

//slice and splice methods in js
const myArr=[1,2,3,4,5];
console.log("A",myArr)
const myArr2=myArr.slice(1,3); 
console.log(myArr2);// this will give us [2, 3] because it returns a new array containing a portion of the original array based on the start and end index provided as arguments and it does not modify the original array
console.log("B",myArr);

//array.splice(start, deleteCount, newItems...)
// 👉 splice = CUT + EDIT original array

// deleteCount > 0 → removes
// items added → inserts
// both → replace
// only start → remove till end
const myArr3=myArr.splice(1,3);
console.log(myArr3);// this will give us [2, 3, 4] because it changes the contents of an array by removing or replacing existing elements and/or adding new elements in place based on the start index, delete count, and items to add provided as arguments and it modifies the original array