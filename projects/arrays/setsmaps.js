/* const ids = new Set([1, 2, 3, 4, 5]);
ids.add(2); //set guaranteed to have unique values
ids.delete(6); //ignores if values doesn't exist in set
console.log(ids[1], ids.has(1), ids);

for ( const entry of ids.entries() ){
    console.log(entry);
}; //note that entries() on set returns the same value twice
// this is designed for easy replacement with the map version of entries

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([ [person1, [{date: 'yesterday', price: 10}] ] ]);
personData.set(person2, [{date: 'two weeks ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));
console.log(personData.get(person2));

for (const [key, value] of personData.entries()) {
    //console.log(entry); // returns key-value pairs, unlike someSet.entries() which returns an array of duplicate values
    console.log(key, value);
};

for (const key of personData.keys()) {
    console.log(key);
}

for (const value of personData.values()) {
    console.log(value);
} */


//weakset allows garbage collection to delete items in the weakset as long as no other code is using it
let person = {name: 'Max'};
const persons = new WeakSet(); 
persons.add(person);

// ... some operations
//person = null;

console.log(persons);

// if you know you don't need to keep a key and you want to free it up for garbage collection
const personData = new WeakMap();
personData.set(person, 'extra information');

person = null; //weakmap won't stop garbage collection like Map or Set

console.log(personData); // garbage collection will probably take place after this, but will occur