// scope: anything inside{}
var c=300
let a=300
if(true){// this is inside this  block scope. Outside it is global scope
    let a=10
    const b=20
    var c=30
    console.log("Inner: ",a)
}

 console.log(a);
// console.log(b);
console.log(c);// var ignores block scope, so c is updated to 30 nd output is 30.

// var is not preferred because it is not block scoped.
// It can be updated and reassigned, which may create confusion.

// let is opposite tp var it is blocked scope if we call the a outside {} it will never print the value which was declared in{}. 


//Closure function : remeber like bade chote se icecream nahi le sakte but chote bade se le skte. 
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website) //this will give error as outer function cannot access variables  of  inner funcyion

    two()
}
one()//  when we call this one() two will automatically get executed. If we comment out this one() two will never get executed.

//same concept in if  statements
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
   // console.log(website)// error will ocur
}
//console.log(username)// this will also give error


//++++++++interseting concept+++++
console.log(add1(4))// calling such function here will not throw errror.
function add1(num){
    return num+1;
}

//console.log(add2)// calling such function(like the functions stored inside variable) abpve will caue error 
const add2=function(num){
return num+2;
}
console.log(add2(9))