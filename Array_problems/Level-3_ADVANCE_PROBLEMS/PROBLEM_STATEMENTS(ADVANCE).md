<---------------------------------------<ADVANCED_QUESTIONS>--------------------------------------->

<Problem_1: Deep Flatten a Nested Array
<Task: Given a multi-dimensional array (an array that can contain other arrays nested to any depth), create a new, completely flat array containing all elements. The original array must remain unchanged.
<Example_Input: [1, [2, [3, 4]], 5, [6, [7, [8]]]]
<Expected_Output: [1, 2, 3, 4, 5, 6, 7, 8]>



<Problem_2: Sort Array of Objects by Multiple Criteria
<Task: Given an array of user objects, where each object has name (string) and age (number) properties, sort the array first by age in ascending order. If two users have the same age, then sort them by name alphabetically in ascending order. The original array should be modified.
<Example_Input:
JavaScript
[
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'David', age: 25 }
]
<Expected_Output (Modified Array):
JavaScript
[
  { name: 'Alice', age: 25 },
  { name: 'David', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 30 }
]>



<Problem 3: Group Objects by a Specific Property
<Task: Given an array of product objects, where each object has name (string), category (string), and price (number) properties, return a new object. This new object should have keys representing each unique category, and the values should be arrays containing all the products belonging to that category.
<Example_Input:
JavaScript
[
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'T-Shirt', category: 'Apparel', price: 25 },
  { name: 'Keyboard', category: 'Electronics', price: 75 },
  { name: 'Jeans', category: 'Apparel', price: 60 }
]
<Expected_Output:
JavaScript
{
  Electronics: [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Keyboard', category: 'Electronics', price: 75 }
  ],
  Apparel: [
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Jeans', category: 'Apparel', price: 60 }
  ]
}>



<Problem_4: Find Unique Objects Based on a Property
<Task: Given an array of objects where some objects might have duplicate values for a specific property (e.g., id), create a new array containing only the objects that are unique based on that property. If duplicates exist, keep the first occurrence.
<Example_Input:
JavaScript
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alicia' }, // Duplicate ID
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bobby' }   // Duplicate ID
]
<Expected_Output:
JavaScript
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]>




<Problem_5: Array Intersection
<Task: Given two arrays of primitive values (e.g., numbers or strings), create a new array containing only the elements that are present in both arrays. The order of elements in the new array does not strictly matter.
<Example_Input: array1 = [1, 2, 3, 4, 5], array2 = [3, 5, 6, 7]
<Expected_Output: [3, 5] (or [5, 3])>




<Problem_6: Array Difference (Elements in A but not in B)
<Task: Given two arrays of primitive values, create a new array containing only the elements that are present in the first array (array1) but not in the second array (array2).
<Example_Input: array1 = [1, 2, 3, 4, 5], array2 = [3, 5, 6, 7]
<Expected_Output: [1, 2, 4]>





<Problem_7: Partition Array Based on a Condition
<Task: Given an array of numbers and a callback function (e.g., isEven = num => num % 2 === 0), return a new array containing two sub-arrays. The first sub-array should contain all elements for which the callback returns true, and the second sub-array should contain all elements for which the callback returns false.
<Example_Input: numbers = [1, 2, 3, 4, 5], callback = (num) => num % 2 === 0
<Expected_Output: [[2, 4], [1, 3, 5]]>





<Problem_8: Calculate Average Price Per Category
<Task: Building on Problem 3's output (an object grouped by category), calculate the average price for products in each category. Return a new object where keys are categories and values are their average prices.
<Example_Input (from P3 output):
JavaScript
{
  Electronics: [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Keyboard', category: 'Electronics', price: 75 }
  ],
  Apparel: [
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Jeans', category: 'Apparel', price: 60 }
  ]
}
<Expected_Output:
JavaScript
{
  Electronics: 637.5, // (1200 + 75) / 2
  Apparel: 42.5      // (25 + 60) / 2
}>




<Problem 9: Chained Transformation and Aggregation
<Task: Given an array of orders, where each order has items (an array of {productId: string, quantity: number, price: number}), status (string), and total (number), find the total revenue from 'completed' orders where the total is greater than 100.
<Example_Input:
JavaScript
[
  { items: [], status: 'pending', total: 50 },
  { items: [], status: 'completed', total: 120 },
  { items: [], status: 'completed', total: 80 },
  { items: [], status: 'completed', total: 200 }
]
<Expected_Output: 320 (120 + 200)>





<Problem_10: Transpose a 2D Array (Matrix)
<Task: Given a 2D array (matrix) representing rows and columns, return a new 2D array where rows become columns and columns become rows. Assume the input matrix is rectangular (not jagged).
<Example_Input:
JavaScript
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
<Expected_Output:
JavaScript
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]>




<Problem_11: Check if One Array is a Subset of Another
<Task: Given two arrays, arrayA and arrayB, determine if arrayA is a subset of arrayB. This means all elements in arrayA must also be present in arrayB. Return true or false.
<Example_Input: arrayA = [1, 3], arrayB = [1, 2, 3, 4]
<Expected_Output: true>





<Problem_12: Calculate Sliding Window Sums
<Task: Given an array of numbers and a windowSize (integer), calculate the sum of numbers for every "sliding window" of that size. Return a new array containing these sums.
<Example_Input: numbers = [1, 2, 3, 4, 5, 6], windowSize = 3
<Expected_Output: [6, 9, 12, 15]
(1+2+3 = 6)
(2+3+4 = 9)
(3+4+5 = 12)
(4+5+6 = 15)>





<Problem_13: Transform Array to Object Based on Property
<Task: Given an array of objects, where each object has a unique key property, transform this array into a single object. The key property of each original object should become the key in the new object, and the entire original object should be its value.
<Example_Input:
JavaScript
[
  { id: 'a1', value: 10 },
  { id: 'b2', value: 20 },
  { id: 'c3', value: 30 }
]
<Expected_Output:
JavaScript
{
  a1: { id: 'a1', value: 10 },
  b2: { id: 'b2', value: 20 },
  c3: { id: 'c3', value: 30 }
}>



<Problem_14: Implement myMap (Custom Map Function)
<Task: Write a function called myMap that takes two arguments: an array and a callback function. myMap should behave exactly like the built-in Array.prototype.map(). It should iterate over the array, apply the callback function to each element, and return a new array with the results. Do not use the built-in map method within your myMap function.
<Example Usage:
JavaScript
const numbers = [1, 2, 3];
const doubled = myMap(numbers, num => num * 2);
<console.log(doubled); // Should output [2, 4, 6]>



<Problem_15: Implement myFilter (Custom Filter Function)
<Task: Write a function called myFilter that takes two arguments: an array and a callback function (a test function). myFilter should behave exactly like the built-in Array.prototype.filter(). It should iterate over the array, apply the callback function to each element, and return a new array containing only the elements for which the callback returns true. Do not use the built-in filter method within your myFilter function.
<Example Usage:
JavaScript
const numbers = [1, 2, 3, 4, 5];
const evens = myFilter(numbers, num => num % 2 === 0);
<console.log(evens); // Should output [2, 4]>



<Problem16: Implement myReduce (Custom Reduce Function)
<Task: Write a function called myReduce that takes three arguments: an array, a callback function, and an optional initialValue. myReduce should behave exactly like the built-in Array.prototype.reduce(). It should apply the callback function against an accumulator and each element (from left to right) to reduce it to a single value. Do not use the built-in reduce method within your myReduce function.
<Example Usage:
JavaScript
const numbers = [1, 2, 3, 4];
const sum = myReduce(numbers, (acc, num) => acc + num, 0);
<console.log(sum); // Should output 10>




<Problem_17: Rotate Array by N Positions
<Task: Given an array and an integer n, rotate the array's elements to the right by n positions. The rotation should happen in place, meaning the original array should be modified. Elements moved off one end should reappear at the other.
<Example_Input: arr = [1, 2, 3, 4, 5], n = 2
<Expected_Output (Modified Array): [4, 5, 1, 2, 3]>




<Problem_18: Find the Longest String (handling edge cases)
<Task: Given an array of strings (which might include empty strings, null, or undefined values), find and return the longest valid string. If multiple strings have the same maximum length, return the one that appears first. Invalid string types (non-strings, null, undefined) should be ignored.
<Example_Input: ['apple', 'banana', null, 'kiwi', 'grapefruit', '', undefined]
<Expected_Output: 'grapefruit'>




<Problem_19: Deep Clone an Array of Simple Objects
<Task: Given an array that contains primitive values and/or simple JavaScript objects (objects that don't have circular references or complex types like functions, Dates, etc.), create a completely independent deep copy of this array. Changes to the copied array or its nested objects should not affect the original array.
<Example_Input:
JavaScript
const original = [{a: 1, b: {c: 2}}, 3, {d: 4}];
<Expected_Output (a new array):
JavaScript
const cloned = [{a: 1, b: {c: 2}}, 3, {d: 4}];>




<Problem_20: Basic Run-Length Encoding
<Task: Given an array of elements, implement a basic run-length encoding. Return a new array where consecutive identical elements are represented as a sub-array containing the element and its count.
<Example_Input: ['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a']
<Expected_Output: [['a', 3], ['b', 2], ['c', 1], ['a', 2]]>