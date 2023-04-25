/*
Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
*/

let statement = "The Flintstones Rock";
let obj = {};
let arr = statement.split("").filter(a => a !== " ");

arr.forEach(a => {
    if (!obj.hasOwnProperty(a)) {
        obj[a] = 1;
    } else {
        obj[a] = obj[a] + 1;
    }
})

console.log(obj);