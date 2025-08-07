// <Problem_20: Remove Duplicate Values
// <Task: Given an array that may contain duplicate values, create a new array that contains only the unique values from the original array. The order of the unique values in the new array should be preserved as they first appeared in the original array.
// <Example_Input: [1, 2, 2, 3, 4, 1, 5, 3]
// <Expected_Output: [1, 2, 3, 4, 5]>

let number_Array = [1, 2, 2, 3, 4, 1, 5, 3];

let clear_Array = number_Array.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue)
    }
    return accumulator;
},[]);
console.log(clear_Array);