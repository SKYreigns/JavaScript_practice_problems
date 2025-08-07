// <Problem_7: Insert an Element at a Specific Position (In-Place Modification)
// <Task: Given an array of numbers, a newNumber, and an index, insert the newNumber into the original array at the specified index without removing any existing elements. The original array should be modified.
// <Example_Input: [1, 2, 3], newNumber = 99, index = 1
// <Expected_Output(Modified_Array): [1, 99, 2, 3]>

let originalArray = [1, 2, 3];
let modifiedOriginalArray = originalArray.splice(1, 0, 99);
console.log(originalArray);