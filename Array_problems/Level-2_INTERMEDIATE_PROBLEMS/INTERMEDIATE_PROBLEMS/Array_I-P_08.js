// <Problem_8: Sort Numbers in Ascending Order
// <Task: Given an array of numbers, sort them in ascending order (smallest to largest). The original array should be modified.
// <Example_Input: [5, 2, 8, 1, 10, 3]
// <Expected_Output_(Modified_Array) : [1, 2, 3, 5, 8, 10]>

let numArray = [5,2,8,1,10,3];
numArray.sort((a,b) => a - b)
console.log(numArray);