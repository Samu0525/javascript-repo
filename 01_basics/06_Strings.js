const name="samuel";// this will give us "samuel" because it is a string and it is a primitive data type
const age=22;
console.log(`This is ${name} and she is ${age} years old`);//this is called interpolation
const gameName=new String("fortnite");//This is present in key-value pairs and this will give us "fortnite" because it is a string and it is an object data type
console.log(gameName);
console.log(typeof name);
console.log(typeof gameName);//this will give us "object" because it is an object data type
console.log(gameName[0]);//this will give us "f" because it is the first character of the string
console.log(gameName.length);//this will give us 8 because it is the number of characters in the string
console.log(gameName.toUpperCase());//this will give us "FORTNITE" because it is the uppercase version of the string
console.log(gameName.toLowerCase());//this will give us "fortnite" because it is the lowercase version of the string
console.log(gameName.includes("fort"));//this will give us true because it is a substring of the string
console.log(gameName.startsWith("fort"));//this will give us true because it is the starting substring of the string
console.log(gameName.endsWith("nite"));//this will give us true because it is the ending substring of the string
console.log(gameName.indexOf("t"));//this will give us 3 because it is the index of the first occurrence of "t" in the string
console.log(gameName.lastIndexOf("t"));//this will give us 5 because it is the index of the last occurrence of "t" in the string
console.log(gameName.slice(0,4));//this will give us "fort" because it is the substring from index 0 to index 4 (not inclusive)
console.log(gameName.replace("fort","battle"));//this will give us "battlenite" because it replaces "fort" with "battle" in the string
console.log(gameName.split("t"));//this will give us ["for","ni","e"] because it splits the string into an array of substrings using "t" as the separator
console.log(gameName.trim());//this will give us "fortnite" because it removes any whitespace from the beginning and end of the string
console.log(gameName.charAt(0));//this will give us "f" because it is the character at index 0 of the string
console.log(gameName.charCodeAt(0));//this will give us 102 because it is the Unicode value of the character at index 0 of the string
console.log(gameName.substring(0,4));//this will give us "fort" because it is the substring from index 0 to index 4 (not inclusive)
console.log(gameName.toString());//this will give us "fortnite" because it converts the string object to a string primitive
console.log(gameName.valueOf());//this will give us "fortnite" because it returns the primitive value of the string object
console.log(gameName.replace("fort","battle"));//this will give us "battlenite" because it replaces "fort" with "battle" in the string

console.log(gameName.slice(-8,4));
console.log(gameName.substring(-8,4));//both will give us "fort" because it is the substring from index -8 to index 4 (not inclusive) and negative index counts from the end of the string
//both will give us "fort"  because in them negative values not counted it will consider it as 0 and it will give us the substring from index 0 to index 4 (not inclusive)

