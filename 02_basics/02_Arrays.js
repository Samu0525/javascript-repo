const arr1=["Sam",12,true];
const arr2=["Riyan",14,true];
//arr1.push(arr2);
//console.log(arr1);// this will give us ["Sam", 12, true, ["Riyan", 14, true]] because it adds the entire arr2 as a single element to the end of arr1 and returns the new length of arr1

const arr3=arr1.concat(arr2);// output [ 'Sam', 12, true, 'Riyan', 14, true ]
console.log(arr3);
//Better Way:hence make use of [...arr2] to spread the elements of arr2 into arr1 instead of adding the entire arr2 as a single element to arr1
const arr4=[...arr1,...arr2];//Spread Operator
console.log(arr4);

const anotherarray=[1,2,3,4,[6,9,8,[7,9,5],[4,0,8]]];
const real_another_array=anotherarray.flat(Infinity);// this will give us [1, 2, 3, 4, 6, 9, 8, 7, 9, 5, 4, 0, 8] because it flattens the array to the specified depth and if we pass Infinity as an argument it will flatten the array to any depth and it does not modify the original array
console.log(real_another_array);

console.log(Array.isArray(("sam")));//false
console.log(Array.from("SAM"));//from it makes string to arrays.o/p:[ 'S', 'A', 'M' ]

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//output: [ 100, 200, 300 ]

