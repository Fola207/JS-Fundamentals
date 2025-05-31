const args = process.argv.slice(2);
const num = Number(args.at(0)); // Convert argument to a number
console.log(Number.isInteger(num) ? `My number: ${num}` : "Not a number");
