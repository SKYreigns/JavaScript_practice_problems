// <Problem_18: Flatten a Simple Nested Array
// <Task: Given a "simple" nested array (an array where some elements are arrays themselves, but only one level deep), create a new flat array containing all the elements from the nested structure.
// <Example_Input: [[1, 2], [3, 4, 5], 6]
// <Expected_Output: [1, 2, 3, 4, 5, 6]>

let nested_Array = [[1, 2], [3, 4, 5], 6];

let flatted_Array = nested_Array.flatMap(element => element);

console.log('The flatted Array of this Nested Array', nested_Array ,'is = ', flatted_Array)