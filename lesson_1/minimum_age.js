/*
Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minimumAge = Object.values(ages).sort((a,b) => a - b)[0];

console.log(minimumAge);