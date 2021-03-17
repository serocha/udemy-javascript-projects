const task3Element = document.getElementById('task-3');

function hello() {
    alert('Hello there.');
}

function helloName(name) {
    alert('Hello, ' + name + '.');
}

function stringTogether(v1, v2, v3) {
    return (v1 + ' ' + v2 + ' ' + v3);
}

hello();
helloName('Steve');

task3Element.addEventListener('click', () => helloName('Balbo'));

let stringValue = stringTogether('And another', 'one bites', 'the dust.');

alert(stringValue);