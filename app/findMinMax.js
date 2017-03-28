'use strict'

// Find the Minimum and Maximum in an array of number
var findMinMax = function(arr) {

	// Assume first element as largest and smallest
	var largest = arr[0], smallest = arr[0];

	// Get total elements in the array
	var total_elements = arr.length;

	// Return empty array if array is empty or not a number
	if ((typeof largest !== 'undefined') && (typeof largest !== 'number')) {
		return [];
	}

	// Find the smallest and largest
	for (var i = 1; i < total_elements; i++){

		// if current element is greater than the largest variable
		// make the current element the largest number
		if (arr[i] > largest){
			largest = arr[i];
		}


		// if current element is lesser than the smallest variable
		// make the current element the smallest number
		if (arr[i] < smallest){
			smallest = arr[i]
		}
	}

	// Return a single value if largest === smallest
	if (largest === smallest) {
		return [arr[0]];
	}
	// Return [smallest, largest]
	else return [smallest, largest];
}

// console.log(findMinMax([1,1,1,1,1]));

module.exports = {
	findMinMax: findMinMax
}