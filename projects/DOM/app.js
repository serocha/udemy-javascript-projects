// Replace the old text node of the h2 element. 
// Check console.dir() of an element to see what you can do with it.
const h2 = document.querySelector('h2');
h2.textContent = 'Reassigned text content!';
h2.style.color = 'darkblue';

const input = document.querySelector('input');
console.dir(input);
console.log(input);
input.value = 'New default text!'; // Change property
console.log(input.value); // Here is the reassigned value
console.log(input); // Attribute remains the same
console.log(input.defaultValue); // You can still access the original value here or by getAttribute('value')
console.log('Original id attribute: ' + input.attributes[1].value);
input.id = 'new-id'; // only change property, but see how all instances of attribute changed also
console.log('Changed id attribute: ' + input.attributes[1].value);

const allList = document.querySelectorAll('li');
console.dir(allList); // NodeList, snapshot/static node - adding a new element to the node WILL NOT show up here
for (const listEl of allList) {
    console.dir(listEl);
}
const liveAllList = document.getElementsByTagName('li');
console.dir(liveAllList); // HTMLCollection, live node - adding a new element to the node WILL show up here
for (const listEl of liveAllList) {
    console.dir(listEl);
}
