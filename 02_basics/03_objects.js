//singleton: when create object via constructor then it is built. eg via Object.create
//object literals:key value pairs present
const mysym= Symbol("Samu");
const JsUser={
    name:"Sam",
    age:18,
    location:"Jaipur",
    email:"sam123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    "full name":"samruddhi",
    [mysym]:"Samusa"// if we will not put [] it will give dtype as string but we want is symbol

}

JsUser.greeting = function(){
     console.log(`Hello JsUser ${this.name}`)
    console.log(`Hello JsUser ${this["full name"]}`)// when we want to acces the objects data use this keyword
}
console.log(JsUser.greeting());


//ways of accessing objects in js: 2 ways
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);
console.log(mysym);// output: Symbol(Samu)
console.log(typeof JsUser.mysym);
JsUser.email="tara@gamil.com";
console.log(JsUser.email);
Object.freeze(JsUser);// it means the object is now fixed any chnges will not apply
JsUser.email="vaaria@gamil.com";// it will not get print because we have freeze our object 
console.log(JsUser.email);// it will print the tara one only

// JsUser.greeting = function(){// as we use it affter freezing the object it will not work so define it before freezing obj
//      console.log(`Hello JsUser ${this.name}`)
//     console.log(`Hello JsUser ${this["full name"]}`)// when we want to acces the objects data use this keyword
// }
// console.log(JsUser.greeting());
