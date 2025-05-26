const args = process.argv.slice(2);

const firstArg = args.at(0); // Using at() instead of length

console.log(firstArg ?? "No argument"); // Using nullish coalescing for readability
