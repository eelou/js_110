/*
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit (obj) {
    let keys = Object.keys(obj);
    let newObj = {};
    for(let i = 0; i < keys.length; i += 1) {
        if (produce[keys[i]] === 'Fruit') {
            newObj[keys[i]] = 'Fruit';
        }
    }
    return newObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }