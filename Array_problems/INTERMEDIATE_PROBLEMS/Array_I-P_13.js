// <Problem_13: Chain Transformations and Filters
// <Task: Given an array of numbers, perform two operations sequentially:
// First, create a temporary array where each number is increased by 10.
// Then, from that temporary array, create a final new array containing only those numbers that are greater than 20.
// <Example_Input: [5, 12, 18, 25]
// <Expected_Output (Final): [22, 28, 35]>

let MainArray = [5, 12, 18, 25];

let array_Increased_by10 = MainArray.map( function(num){
    return (num + 10)
});

let Array_with_Value_20 = array_Increased_by10.filter( function(num){
    return (num > 20);
})

console.log('Original Array: ', MainArray);

console.log('Array with values larger than 20: ', Array_with_Value_20);