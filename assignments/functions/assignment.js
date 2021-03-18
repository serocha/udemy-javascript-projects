const sayHello = name => {
  console.log('Hi ' + name);
}

const twoArg = (hello, name) => {
  console.log(hello + ' ' + name);
}

const noArg = () => {
  const hello = 'Hello';
  const name = 'Steve';
  console.log (hello + ' ' + name);
}

const returnedVal = (name = 'Steve') => {
  return `Hello ${name}.`;
}

console.log(returnedVal('Shane'));
console.log(returnedVal());

const inputCallback = () => {
  return 'This was an empty entry.';
}

const checkInput = (callback, ...input) => {
  for (const elem of input) {
    if (!elem) {
      console.log(callback());
    } else {
      console.log(elem);
    }
  }
}

checkInput(inputCallback, 'a', 'b', 'c', 'd', '', 'f', '', '', 'i');