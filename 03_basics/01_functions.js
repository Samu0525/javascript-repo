
// function addtwonumbers(number1,number2){
//     console.log(number1+number2);

// }
// const result=addtwonumbers(3,4)
// console.log("Result:",result)

function addtwonumbers(number1,number2){
    let result=number1+number2;
    return result;
}
const result=addtwonumbers(3,4)
console.log("Result:",result)// the value which we return in function need to be printed outside function then only visible.


function loginUserMessage(username="Ram"){//username="Ram" here this is default value we gave so even if user donot give any value while calling bydefaylt it will take Ram and and it will never enter the if block here
    if(username===undefined){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sam"));// hence function is printed inside the console.log
console.log(loginUserMessage());// when we pass nothing it give us undefined

//ways of calling  parameters in function
//...x (This is called rest or spread operator with its help we cann add multiple arguments while call ing the function. see ex below)
function calculateCartPrice(...num1){
return num1;
}
console.log(calculateCartPrice(200,300,400));// see here we are passing as many argument as we want all we get printed in an array

//interview question
function calculateCartPrice(val1,val2,...num1){
return num1;
}
console.log(calculateCartPrice(200,300,400,700));;// see here we are passing as many argument as we want all we get printed in an array. but the val1 and val2 will  take the respective parameters and the remaining will go in the num1;So output is 400, 700


function handleobject(anyobject){
console.log(`Username is ${anyobject.username} and price ${anyobject.price}`);
}
handleobject({
    username:"Samiksha",
    price:399

})

const myNewArray=[200,400,100,600];
function reurnsecondvalue(getArray){
    return getArray[1]
}
//console.log(reurnsecondvalue(myNewArray))
console.log(reurnsecondvalue([200,400,100,600]));
