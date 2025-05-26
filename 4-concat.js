const args = process.argv.slice(2);

console.log(`${args.at(0) ?? "undefined"} is ${args.at(1) ?? "undefined"}`);
