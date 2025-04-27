const commandLineArguments = process.argv.slice(2)

let sum = 0;

for (const argument of commandLineArguments) {
	const number = parseInt(argument);
	sum += number;
}

console.log(sum)