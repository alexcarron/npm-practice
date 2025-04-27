const fileSystem = require('fs');
const path = require('path');

module.exports = function (directoryName, fileExtension, callbackFunction) {
	fileSystem.readdir(directoryName, (err, files) => {
    if (err)
			return callbackFunction(err);

    const filteredFiles =
			files.filter(file =>
				path.extname(file) === '.' + fileExtension
			);

			callbackFunction(null, filteredFiles);
  });

}

