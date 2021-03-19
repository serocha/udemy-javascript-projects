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

// Consider a case where you don't know the list info, but want to select the second element
const ul = document.querySelector('ul'); // can also select by looking at parents from a child element
ul.children[1].textContent = 'Change the second element';

// Or go looking for an ancestor that matches a CSS selector
const li = document.querySelector('li');
console.dir(li.closest('body'));

// Modify stylings
const section = document.querySelector('section');
//section.className = '';

const toggle = document.querySelector('#button-1');
const changeHTML = document.querySelector('#button-2');

toggle.addEventListener('click', () => {
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
})

changeHTML.addEventListener('click', () => {
    section.innerHTML = '<h3> Replaced with a new title! </h3>'
})
