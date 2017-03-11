'use strict'

var aritGeo = function(arr){

    // return empty string for inavalid input
    if(arr == null || !Array.isArray(arr)){
        return null;
    }


    var elements_in_arr = arr.length; // no of elements in the array
    var arit_count = 0, geo_count = 0; // initialize a arit_count, geo_count

    // if the elements in the arr is 0, return 0
    if(elements_in_arr === 0){
        return 0;
    }

    // return empty string if the elements in arr is 1
    if(elements_in_arr === 1){
        return -1;
    }

    // get the difference for Arithmetic
    var difference = arr[1] - arr[0];
    // get the division for Geometric
    var division = arr[1] / arr[0];

    for(var i = elements_in_arr - 1; i > 0; i--){

        // find the arithmetric 
        if((arr[i] - arr[i-1]) === difference){
            arit_count++;
        }

        // find the geometric
        if((arr[i] / arr[i-1]) === division){
            geo_count++;
        }
    }


    // if the number of Geometric is the same with no of elements
    if (geo_count === elements_in_arr - 1){
        return "Geometric";
    }
    // if the number of Arithmetic is the same with no of elements
    else if (arit_count === elements_in_arr - 1){
        return "Arithmetic";
    }
    // Neither Arithmetic nor Geometric
    else{
        return -1;
    }
}

// console.log(aritGeo([0.5, 3.5, 24.5, 171.5]));

module.exports = {
    aritGeo: aritGeo 
}