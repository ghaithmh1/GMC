const generator = require('generate-password');

let password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);