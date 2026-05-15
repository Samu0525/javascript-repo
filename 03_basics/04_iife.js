//Immediately Invoked Function Expressions(IIFE)
// IIFE = Define function + Run instantly
//IIFE helps prevent global scope pollution by creating a private scope for variables and functions.
//So anything declared inside the IIFE:
// cannot be accessed outside
// cannot accidentally overwrite global variables
// keeps code safe and organized
(function icecream(){//named iife
    console.log("DB is connected");
    
})();// ; is imp bcoz it tells iife where to end 
((name) => {
    console.log(`DB is connected by ${name}`)
})("sam")