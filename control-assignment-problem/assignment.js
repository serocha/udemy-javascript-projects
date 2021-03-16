const generateRandom = () => {
    const randomNumber = Math.random();
    if (randomNumber > 0.7) {
        alert('The alert is triggered!');
    }
}

const generateTwoRandom = () => {
    const firstRandom = Math.random();
    const secondRandom = Math.random();
    if (firstRandom && secondRandom > 0.7 || firstRandom <= 0.2 || secondRandom <= 0.2) {
        alert('The second alert has triggered!');
        console.log('First Num: ' + firstRandom, 'Second Num: ' + secondRandom);
    }
}

let myArr = [];
for (i = 0; i < 10; i++) {
    myArr.push( Math.round( Math.random() * 100 ) );
}

for (el in myArr) {
    console.log('FIRST LOOP: ' + myArr[el]);
}

for (i = 0; i < myArr.length; i++) {
    console.log('SECOND LOOP: ' + myArr[i]);
}

//reversed loop
for (i = myArr.length-1; i >= 0; i--) {
    console.log('REVERSED LOOP: ' + myArr[i]);
}

document.getElementById('randomBtn').addEventListener('click', generateRandom);
document.getElementById('twoRandomBtn').addEventListener('click', generateTwoRandom);