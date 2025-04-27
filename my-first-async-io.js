const fileSystem = require("fs");
const filePathArgument = process.argv[2];
const file = fileSystem.readFile(
	filePathArgument,
	(error, data) => {
		if (error) {
			return console.error(error);
		}
		
		const fileContents = data.toString();
		const numNewLines = fileContents.split('\n').length - 1;
		console.log(numNewLines);
	}
)