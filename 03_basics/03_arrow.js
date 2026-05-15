// this in objects
const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)// this refers to current context
        console.log(this)
    }
}

user.welcomeMessage()
user.username="sam";
user.welcomeMessage()


// earlier js used to run on browser onlyy now a days it has its own engoine to run like node and all. So :
console.log(this)// this wil give output:{}. but if we do it on browsers console it will give us ***window objectt***


//this in function
function chai(){
    let username="sam";
    console.log(this.username)// this will give undefined as tis is not used in functioons in js
}
chai()

//arrow functions
const chaha=()=>{
    let username="sam"
    console.log(this.username)// this will also not work in arrow function
}
chaha()

//Pure Arrow Functions
const addTTrue=(num1,num2)=>{
    return  num1+num2
}
console.log(addTTrue(2,3));
//

// Implicit return -> donot use{} and return 
const addTrue=(num1,num2)=>(num1+num2)
console.log(addTrue(2,9));

