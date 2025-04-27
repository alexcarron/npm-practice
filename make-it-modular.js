const mymodule = require('./mymodule.js');

mymodule(
	process.argv[2],
	process.argv[3],
	(error, filteredFiles) => {
		if (error)
			return console.error(error);

		console.log(filteredFiles.join('\n'));
	}
)