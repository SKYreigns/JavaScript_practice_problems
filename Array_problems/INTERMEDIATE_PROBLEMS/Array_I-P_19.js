// <Problem_19: Count Element Occurrences
// <Task: Given an array of strings, count how many times each unique string appears in the array. Return an object where the keys are the unique strings and the values are their respective counts.
// <Example_Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'kiwi']
// <Expected_Output: { apple: 3, banana: 2, orange: 1, kiwi: 1 }>

let fruits_Array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'kiwi'];

let fruits_counts = fruits_Array.reduce((accumulator, currentVlaue) =>{
    accumulator[currentVlaue] = (accumulator[currentVlaue] || 0) + 1 ;
    return accumulator;
}, {});

console.log('The count of each fruit in the Fruits Array:', fruits_Array, 'is = ', fruits_counts);
console.log('There are ', fruits_counts['apple'], 'apples in the Array of fruits ', fruits_Array);