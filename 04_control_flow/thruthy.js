const useremail="sam234@gmail.com";
if(useremail){// so its taking useremaill by default true. This is called truthy value.
    console.log("Got the email");
}else{
    console.log("email not found");
}

//truthy values:"0",'false'(as they are present in string)," ",[],{},function(){}

//Falsy values: false, 0, -0, BigInt, 0n, "", null, undefined,NaN


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

//check the below in console:
//1) false==0// true
//2) false==" " //true
//3) 0 == " " ///true

//***Nullish Coalescing Operator (??): null undefined */
//-> it is made for null and undeined only

let val;
val=5 ?? 10
val=null ?? 10// either set it null or if not null then set the value incoming value which is 10
val =undefined?? 15;
val= null??10??20;
console.log(val)

//Ternary operators:
const iceTeaPrice=100
iceTeaPrice>=80? console.log("true") :console.log("false");