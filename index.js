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

function preserveDecimal(n) {
  return parseFloat(n);
}

console.log(inc(100));
console.log(dec(100));
console.log(makeInt('78.987 Hello World'));
console.log(preserveDecimal('Hello World 78.987'));
