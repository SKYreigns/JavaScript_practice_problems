// <Problem_1: Deep Flatten a Nested Array
// <Task: Given a multi-dimensional array (an array that can contain other arrays nested to any depth), create a new, completely flat array containing all elements. The original array must remain unchanged.
// <Example_Input: [1, [2, [3, 4]], 5, [6, [7, [8]]]]
// <Expected_Output: [1, 2, 3, 4, 5, 6, 7, 8]>

let nested_Array = [1, [2, [3, 4]], 5, [6, [7, [8]]]];
let clear_Array = nested_Array.flat(Infinity);
console.log('clear Array : ', clear_Array);
console.log('Nested Array : ', nested_Array);

