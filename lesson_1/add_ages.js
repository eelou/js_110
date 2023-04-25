/*
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let agesKeys = Object.keys(ages);
let totalAges = 0;
for (let i = 0; i < agesKeys.length; i += 1) {
    totalAges = totalAges + ages[agesKeys[i]];
}

console.log(totalAges);