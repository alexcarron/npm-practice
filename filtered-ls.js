const fileSystem = require('fs');
const path = require('path');

const directoryPathArgument = process.argv[2];
const fileExtensionArgument = process.argv[3];

fileSystem.readdir(
	directoryPathArgument,
	(error, files) => {
		if (error) {
			console.error(error);
		}

		const filesWithExtension = files.filter(fileName =>
			path.extname(fileName) === `.${fileExtensionArgument}`
		)

		console.log(
			filesWithExtension.join('\n')
		);
	}
)