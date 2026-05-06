//const tinderUser=new Object() // Singleton object
const tinderUser={}//not a Singleton object
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false
console.log(tinderUser);

//nested objects:
const regularEntry={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularEntry.fullname.userfullname.firstname);

//merging of objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}// o/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3)
const obj4=Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  meaning: {} ke andhar obj1,obj2 ko daala
console.log(obj4)

const obj5={...obj1,...obj3}//spread vaala concept

// ** Now when values are coming from DB eg:
const users=[{//incoming data
    id:1,
    email:"sam@gmail.com"
},
{//incoming data
    id:1,
    email:"sam@gmail.com"
},
{//incoming data
    id:1,
    email:"sam@gmail.com"
}]
console.log(users[1].email)//accesing 1st value
console.log(tinderUser);
console.log(Object.keys(tinderUser));// to get all keys
console.log(Object.values(tinderUser));// to get all values
console.log(Object.entries(tinderUser));// to get all keys and values in array form: [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"));// give true or false


