/*
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let obj = {}

for (let i = 0; i < flintstones.length; i += 1) {
    obj[flintstones[i]] = i;
}

console.log(obj);