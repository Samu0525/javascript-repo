const myobject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
// for looping through objects we make use of for in loop 
for (const key in myobject) {
   console.log(`${key} shortcut is for ${myobject[key]}`);  
}