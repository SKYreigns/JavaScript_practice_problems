// <Problem_16: Check if Any Element Meets a Condition
// <Task: Given an array of numbers, determine if at least one number in the array is negative. Return true if any negative number is found, otherwise false.
// <Example_Input: [10, 5, -3, 8]
// <Expected_Output: true>

let num_Array = [10, 5, -3, 8];

// function Negitivity_condition(num){
//     num < 0;
// }
let Checking_negitivity = num_Array.some(function(number){
    return number < 0;
});

console.log(`There is atleast one Negative number is this Num_Array ${num_Array} : ${Checking_negitivity}`);