// <Problem_6: Remove an Element by Index (In-Place Modification)
// <Task: Given an array of items and an index number, remove the element at that specific index directly from the original array. The original array should be modified.
// <Example_Input: ['a', 'b', 'c', 'd'], index = 2
// <Expected_Output(Modified_Array): ['a', 'b', 'd']>


let mainArray = ['a', 'b', 'c', 'd'];
const indexToRemove = 2;
let modifiedArray = mainArray.splice(indexToRemove,1);
console.log(mainArray);