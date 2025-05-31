const args = process.argv.slice(2);
const x = Number(args.at(0));
console.log(Number.isInteger(x) ? "C is fun\n".repeat(x).trim() : "Missing number of occurrences");
