function add(a, b) {
  return a + b;
}

const num1 = Number(process.argv.at(2));
const num2 = Number(process.argv.at(3));

console.log(Number.isInteger(num1) && Number.isInteger(num2) ? add(num1, num2) : "NaN");
