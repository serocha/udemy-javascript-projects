const solved = 'Assignment - Solved!';

// ways to select first task
let task = document.querySelector('#task-1');
    console.dir(task);
task = document.getElementById('task-1');
    console.dir(task);
task = document.getElementsByTagName('li')[0];
    console.dir(task);
task = document.querySelector('li');
    console.dir(task);
task = document.querySelector('li#task-1');
    console.dir(task);
task.style.backgroundColor = 'black';
task.style.color = 'white';

let title = document.querySelector('title');
    console.dir(title);
title = document.head.querySelector('title');
    console.dir(title);
title.textContent = solved;

const h1 = document.querySelector('h1');
h1.innerHTML = solved;
