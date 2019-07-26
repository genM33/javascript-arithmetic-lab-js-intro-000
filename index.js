function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a/b;
}

function inc(n) {
  n++;
  return n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
  return parseInt(n, 10);
}

console.log(inc(100));
console.log(dec(100));
console.log(makeInt('Hello World 34'));
