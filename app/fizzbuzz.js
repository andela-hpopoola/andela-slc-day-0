'use strict'
// Export the FizzBuzz function
var fizzBuzz = function(n) {
	// Valid Number
	if (Number.isInteger(n)) {
		// Divisible by 3 and 5 : FizzBuzz
		if (n % 15 === 0) {
			return 'FizzBuzz';
		} 
		// Divisible by 5 only: Buzz
		else if (n % 5 === 0) {
			return 'Buzz';
		} 
		// Divisible by 3 only : Fizz
		else if (n % 3 === 0) {
			return 'Fizz';
		} 
		// Return Number
		else return n;
	}
	// Not a Number, Return empty string
	else return '';
}

// console.log(fizzBuzz('oops'));

module.exports = {
	fizzBuzz: fizzBuzz
}
