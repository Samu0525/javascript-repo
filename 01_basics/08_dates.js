let myDate=new Date();
console.log(myDate);
console.log(typeof myDate);// this will give us "object" because it is an object data type
console.log(myDate.toString());// this will give us the date in string format
console.log(myDate.toDateString());// this will give us the date in a more readable format
console.log(myDate.toTimeString());// this will give us the time in string format
console.log(myDate.toLocaleDateString());// this will give us the date in a more readable format based on the locale of the user
console.log(myDate.toLocaleTimeString());// this will give us the time in a more readable format based on the locale of the user
console.log(myDate.getFullYear());// this will give us the year of the date
console.log(myDate.getMonth());// this will give us the month of the date (0-11) because it is zero indexed
console.log(myDate.getDate());// this will give us the day of the month of the date
console.log(myDate.getDay());// this will give us the day of the week of the date (0-6) because it is zero indexed and 0 is Sunday and 6 is Saturday
console.log(myDate.getHours());// this will give us the hours of the date (0-23)
console.log(myDate.getMinutes());// this will give us the minutes of the date (0-59)
console.log(myDate.getSeconds());// this will give us the seconds of the date (0-59)
console.log(myDate.getMilliseconds());// this will give us the milliseconds of the date (0-999)
console.log(myDate.getTime());// this will give us the time in milliseconds since January 1, 1970

let mycreateddate=new Date(2023,0,24);//in js moths start ffrom 0 to 11 so 0 is January and 11 is December
console.log(mycreateddate.toLocaleString());// this will give us the date in a more readable format based on the locale of the user

let mycreateddated=new Date('2023-01-24');// in this month start from 1 to 12 so 1 is January and 12 is December
console.log(mycreateddated.toLocaleString());// this will give us the date in a more readable format based on the locale of the user

//TimeStamp : used when we have quezes and we want to know how much time has passed since the quiz started etc 
let mytimestamp=Date.now();// this will give us the current time in milliseconds since January 1, 1970
console.log(mycreateddate.getTime());// this will give us the time in milliseconds since January 1, 1970 for the created date

console.log(mytimestamp-mycreateddate.getTime());// this will give us the time in milliseconds since the created date

//Mostly asked in interviews
console.log(Math.floor(Date.now()/1000));// this will give us the current time in seconds since January 1, 1970

console.log(mycreateddated.getDay());// this will give us the day of the week of the created date (0-6) because it is zero indexed and 0 is Sunday and 6 is Saturday

let newDate= new Date();
newDate.setDate(newDate.getDate()+5);// this will add 5 days to the current date

//mostly used
console.log(newDate.toLocaleString('default',{//more proper format 
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
}));// this will give us the date in a more readable format based on the locale of the user