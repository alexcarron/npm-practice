const fileSystem = require('fs');
const filePathArgument = process.argv[2];
const fileContentsBuffer = fileSystem.readFileSync(filePathArgument);
const fileContents = fileContentsBuffer.toString();
const numNewLines = fileContents.split("\n").length - 1;
console.log(numNewLines);