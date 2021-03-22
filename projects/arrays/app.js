/* const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]); */


/* const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies.splice(0, 0, 'Good Food', 'Coding');
console.log(hobbies);

hobbies.splice(0, 1);
console.log(hobbies);

hobbies.splice(-1, 1);
console.log(hobbies); */


/* const testResults = [1, 5.3, 1.5, 10.99, -5, 10, 1.5];
const storedResults = testResults.slice(0, 2);

testResults.push(31, 2);

console.log(testResults, storedResults);
console.log(testResults.indexOf(1.5)); // note that this will stop after the first match

const personData = [ {name: 'Bill'}, {name: 'Steve'}];
console.log(personData.indexOf({name:'Bill'})); // will return -1 for not finding match

const steve = personData.find( (person, index, persons) => {
    return person.name === 'Steve';
}); // just as indexOf(), this will stop after the first match, and returns the original object not a copy
console.log(steve);

const billIndex = personData.findIndex( (person, index, persons) => {
    return person.name === 'Steve';
});
console.log(billIndex); */


// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.12;

// const taxAdjustedPrices = prices.map( (price, index, prices) => {
//     const priceObj = {index: index, taxAdjustedPrice: prices * (1 + tax)}
//     return priceObj;
// }) // easily transform an array and get a brand new array from it

// // for (const price of prices) { 
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// // prices.forEach( (price, index, prices) => {
// //     const priceObj = {index: index, taxAdjustedPrice: prices * (1 + tax)}
// //     taxAdjustedPrices.push(priceObj);
// // });

// console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort( (a, b) => 
//     a > b
//     ? 1
//     : a === b
//     ? 0
//     : -1); // by default converts to a string format and compares, thus input custom function otherwise
// console.log(sortedPrices);

// const filteredArray = prices.filter(price => price > 6);

// console.log(filteredArray);


// const sum = prices.reduce( (prevValue, curValue) => prevValue + curValue, 0); 
// // note that 0 is the initial value, which makes our logic simpler for the first loop

// console.log(sum);


// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// console.log(transformedData);

// const nameFragments = ['Steve', 'Plumber'];
// const name = nameFragments.join(' ');
// console.log(name);
// const copiedNameFragments = [...nameFragments];
// nameFragments.unshift('Mr.');
// console.log(nameFragments, copiedNameFragments);
// console.log(Math.min(...prices));

// const persons = [{name: 'Max', age: 30}, {name:'Manuel', age: 31}];
// const copiedPersons = [...persons];

// persons.push({name: 'Anna', age: 29});
// persons[0].age = 33; //note the arrays are copied but they hold reference values which have not been copied
// //if you really want to deep copy, consider using a .map() function to create the new ref values you want

// console.log(persons, copiedPersons);

const nameData = ['Shane', 'Rocha', 'Mr', 29];
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);