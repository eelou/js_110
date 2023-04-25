/*
Understanding the [P]roblem
===========================
[E]xamples and Test Cases
=========================
Mental Model
============
[D]ata Structure
================
[A]lgorithm
===========
[C]ode with Intent
==================
*/

/*
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

Understanding the [P]roblem
===========================
input: integer for specific amount of cubs
output: integer for left over cubes after building tallest possible valid structure
rules:
  Explicit requirements:
    - the structure must be built in layers with blocks
      - the blocks are cubes
      - cubes have equal in length width and height
    - the top layer should only have a single block
    - each block must be supported by 4 blocks in a lower layer
    - a block can support more than one block in an upper layer
    - cannot have gaps between blocks
  Implicit requirements:
    - layer number correlates with blocks in a layer
      - layer number squared -> number of blocks in a layer
  Questions:
    - can we add more blocks to a layer than is necessary to suppport the layer above and that layer still be valid?
    - will there always be left-over blocks?
    
[E]xamples and Test Cases
=========================
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

- Q1 -> no
- Q2 -> no
Mental Model
============
[D]ata Structure
================
- no data strucutre in this case
[A]lgorithm
===========
- declare a new variable 'layer' and initialized it to 1
- start a loop and loop as long as the parameter is equal to or larger than the square of 'layer'
  - parameter = parameter - ('layer' * 'layer')
  - increment 'layer'
[C]ode with Intent
==================
*/

function calculateLeftoverBlocks (blocks) {
  let layer = 1;
  
  while(blocks >= (layer * layer)) {
    blocks = blocks - (layer * layer);
    layer += 1;
  }
  return blocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

/*
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Understanding the [P]roblem
===========================
input : array consisting of elements that are strings
output : new array consisting of elements that are strings
rules :
  explicit requirements:
    - sorted by highest number of adjacent consonants
    - retain original order if they have the same number of adjacent consonants
    - considered adjacent
      - if they are next to each other in the same word
      - still adjacent if space seperate the two adjacent words
  
  implicit requirements:
    - strings can contain multiple words
  questions:
    - what about when there is hyphen or full stop?
    - empty string?
    
[E]xamples and Test Cases
=========================
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

Mental Model
============
[D]ata Structure
================
 - array
[A]lgorithm
===========
  - declare a function named 'sortStringsByConsonants' with one parameter named 'arr'
    - declare a variable 'sortedArray' and initialized to shallow copy of parameter 'arr'
    - sort the array for the number of adjacent consonants
    - return the 'sortedArray'
  
  - declare a function named 'countAdjacentConsonants' with oen parameter named 'str'
    - declare a variable 'consonants' and initialized to 'bcdfghjklmnpqrstvwxyz'
    - declare a variable 'count' and initialized to 0
    - declare a variable 'altcount' and intialized to 0
    - remove the white space in the middle of the string
    -iterate through the letters of each string
      - if the letter is included in 'consonants'
        - increment 'altcount'
        - if 'altcount' > 'count'
          - set 'count' = 'altcount'
      - else 
        - set 'altcount' = 0
      - if 'count' is equal to 1, 
        - set 'count' = 0
    return 'count'
[C]ode with Intent 
==================
*/
function sortStringsByConsonants (arr) {
  let sortedArray = [...arr];
  sortedArray = sortedArray.sort((a,b) => countAdjacentConsonants(b) - countAdjacentConsonants(a));
  return sortedArray;
  
}

function countAdjacentConsonants (str) {
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  let count = 0;
  let altcount = 0;
  
  str = str.split(" ").join("");
  for (let i = 0; i < str.length; i += 1) {
    if (consonants.includes(str[i])) {
      altcount += 1;
      
      if (altcount > count) {
        count = altcount;
      }
    } else {
      altcount = 0;
    }
    if (count === 1) {
      count = 0;
    }
  }
  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']