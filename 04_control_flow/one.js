//control flow means what:: all code of js eksat run nahi zala pahije i mean jeva login hou teva thoda hoil jeva logout hoil teva asa

//if
const isUserLoggedIn=true // = : assignment operator .used to assign value in variable. == used to check comapre 2 val. === this check value along with datatype (strict equal)
if(isUserLoggedIn){//condition must be true

}

const score=200
if(score>100){
    const power="fly"
    console.log(`User powe ${power}`);
}
// console.log(`User powe ${power}`);/// will give error as power not executed outside scope 

//shorthand notation:
const balance=1000
if(balance>5000) console.log("test");
//if(balance>5000) console.log("test"),console.log("classtestt")// not a good practice.

if(balance>500){
    console.log("less than 500")
}else if(balance <750){
    console.log("less than 750");   
}


const userLoggedIn=true
const debitCard=true
const loggesInFromGoogle=false
const LoggesInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggesInFromGoogle || LoggesInFromEmail  ){
    console.log("User logged in");
}