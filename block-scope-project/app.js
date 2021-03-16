// Quick project to showcase differences in variable scope (block scope in JS)
// TLDR var is outdated, use let and const to force yourself to write better/cleaner code

'use strict';

let name = 'Shane';
let hobbies;

if (name === 'Shane') {
  hobbies = ['Games', 'Cooking'];
  console.log(hobbies);
}

{
  let test = 5;
  console.log(test);
}

const greet = () => {
    let age = 30;
    let name = 'Manuel';
    console.log(name, age, hobbies);
}

greet();