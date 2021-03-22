let numArray = [];

for (let i = 0; i < 10; i++) {
    numArray.push(Math.ceil((Math.random()*10)));
}
console.log(numArray);

const filteredArray = numArray.filter( number => number > 5 );
console.log(filteredArray);

const mappedArray = numArray.map( number => ({number: number}));
console.log(mappedArray);

const reducedArray = numArray.reduce( (prev, curr) => prev * curr, 1);
console.log(reducedArray);


const findMax = (...numbers) => {
    let max = numbers.reduce( (prev, current) => current > prev ? current : prev); 
    let min = numbers.reduce( (prev, current) => current < prev ? current : prev);
    return [min, max];
}

const [min, max] = findMax(...numArray);
console.log(min, max);


// create a list where no duplicates can be added
const noDuplicates = new Set(numArray);
console.log(noDuplicates)