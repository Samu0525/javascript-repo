const accountId=144553//cannot chnge
let accountEmail="sam@1324"//cannot be rewritten.Can be updated
var accountPassword="12345"//can be overiddena s well as rewritten
/*
Prefer not to use var 
because of the issue in block scope and functional scope
*/
accountCity="Pune"// we cannot declare varible ftype also and create var i java . but not good practice
//accountId=2//error occurs like: Assignment to constant variable.
//console.log(accountId)
accountEmail="samu@123"
accountPassword="2389"
acccountCity="Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])