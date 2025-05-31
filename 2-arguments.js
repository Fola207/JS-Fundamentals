const args = process.argv.slice(2);
const message = args.at(0) === undefined 
  ? "No argument" 
  : args.at(1) === undefined 
    ? "Argument found" 
    : "Arguments found";
console.log(message);



