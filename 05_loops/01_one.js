//for
for(let i=0;i<10;i++){
    const element=i;
    console.log(element);
}

for (let i = 0; i <= 10 ; i++) {
   console.log(`Outerloop${i}`);
    for (let j = 5; j <=10; j++) {
           console.log(`Innerloop ${j} and ${i}`);    
    }
}
//break and continue(skip that ele or ek bar maaf)

// while and do-while loop

//do while: pehle kaam hoga fir condition check jhoga. Execute hota hain atleast ek baar toh
let score=11
do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10);


//for of loop
const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i);
}

//Maps: object that hold key value pairs
const map=new Map()
map.set('IN','India');
map.set('IN','India');// stores only uniques hence duplicated not allows
map.set('USA','United States of America');
map.set('Fr','France');
console.log(map)

//loop on map
for(const [key,value] of map){
    console.log(key,":-",value); 
}