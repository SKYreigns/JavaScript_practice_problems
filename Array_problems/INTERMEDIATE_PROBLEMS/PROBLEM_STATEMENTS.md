<---------------------------<INTERMEDIATE_QUESTIONS>--------------------------->


<Problem_1: Transform Numbers by Doubling Them
<Task: Given an array of numbers, create a new array where each number from the original array is multiplied by 2. The original array should remain unchanged.
<Example_Input: [1, 2, 3, 4]
<Expected_Output: [2, 4, 6, 8]>


<Problem_2: Filter Strings by Length
<Task: Given an array of strings, create a new array containing only those strings that have a length greater than 5 characters. The original array should remain unchanged.
<Example_Input: ['apple', 'banana', 'kiwi', 'grapefruit', 'orange']
<Expected_Output: ['banana', 'grapefruit', 'orange']>


<Problem_3: Calculate the Sum of All Elements
<Task: Given an array of numbers, calculate and return the sum of all the numbers in the array.
<Example_Input: [10, 5, 20, 15]
<Expected_Output: 50>


<Problem_4: Find the Largest Number
<Task: Given an array of numbers, find and return the largest number present in the array.
<Example_Input: [5, 12, 3, 9, 20, 1]
<Expected_Output: 20>


<Problem_5: Log Formatted Product Details
<Task: Given an array of objects, where each object represents a product with name (string) and price (number) properties, iterate through the array and print a formatted string for each product to the console. The format should be: "Product: [product name], Price: $[product price]". This task does not require creating a new array.
<Example_Input: [{name: 'Laptop', price: 1200}, {name: 'Mouse', price: 25}]
<Expected_Console_Output :Product: Laptop, Price: $1200
                          Product: Mouse, Price: $25>


<Problem_6: Remove an Element by Index (In-Place Modification)
<Task: Given an array of items and an index number, remove the element at that specific index directly from the original array. The original array should be modified.
<Example_Input: ['a', 'b', 'c', 'd'], index = 2
<Expected_Output(Modified_Array): ['a', 'b', 'd']>


<Problem_7: Insert an Element at a Specific Position (In-Place Modification)
<Task: Given an array of numbers, a newNumber, and an index, insert the newNumber into the original array at the specified index without removing any existing elements. The original array should be modified.
<Example_Input: [1, 2, 3], newNumber = 99, index = 1
<Expected_Output(Modified_Array): [1, 99, 2, 3]>


<Problem_8: Sort Numbers in Ascending Order
<Task: Given an array of numbers, sort them in ascending order (smallest to largest). The original array should be modified.
<Example_Input: [5, 2, 8, 1, 10, 3]
<Expected_Output_(Modified_Array) : [1, 2, 3, 5, 8, 10]>


<Problem_9: Sort Strings Alphabetically
<Task: Given an array of strings, sort them in alphabetical order. The original array should be modified.
<Example_Input: ['banana', 'apple', 'cherry', 'date']
<Expected_Output_(Modified_Array): ['apple', 'banana', 'cherry', 'date']>


<Problem_10: Reverse the Order of Elements
<Task: Given an array of elements, reverse the order of its elements. The original array should be modified directly.
<Example_Input: [1, 2, 3, 4, 5]
<Expected_Output_(Modified_Array): [5, 4, 3, 2, 1]>


<Problem_11: Convert a Sentence String to an Array of Words
<Task: Given a sentence as a single string, convert it into a new array where each element is a word from the sentence. Words are separated by spaces.
<Example_Input: "Hello world from JavaScript"
<Expected_Output: ['Hello', 'world', 'from', 'JavaScript']>

<Problem_12: Convert an Array of Words to a Single Sentence String
<Task: Given an array of words (strings), combine them into a single string forming a sentence, with each word separated by a single space.
<Example_Input: ['This', 'is', 'a', 'test', 'sentence']
<Expected_Output: "This is a test sentence">

<Problem_13: Chain Transformations and Filters
<Task: Given an array of numbers, perform two operations sequentially:
First, create a temporary array where each number is increased by 10.
Then, from that temporary array, create a final new array containing only those numbers that are greater than 20.
<Example_Input: [5, 12, 18, 25]
<Expected_Output (Final): [22, 28, 35]>

<Problem_14: Find the First Object Matching a Condition
<Task: Given an array of user objects, where each object has id (number) and name (string) properties, find and return the first user object whose id matches a given targetId. If no user with that id is found, return undefined.
<Example_Input: users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}], targetId = 2
<Expected_Output: {id: 2, name: 'Bob'}>

<Problem_15: Find the Index of the First Object Matching a Condition
<Task: Given an array of product objects (each with name (string) and price (number) properties), find and return the index of the first product whose name matches a given productName (case-sensitive). If no such product is found, return -1.
<Example_Input: products = [{name: 'Keyboard', price: 75}, {name: 'Mouse', price: 25}, {name: 'Monitor', price: 300}], productName = 'Mouse'
<Expected_Output: 1>

<Problem_16: Check if Any Element Meets a Condition
<Task: Given an array of numbers, determine if at least one number in the array is negative. Return true if any negative number is found, otherwise false.
<Example_Input: [10, 5, -3, 8]
<Expected_Output: true>

<Problem_17: Check if All Elements Meet a Condition
<Task: Given an array of ages, determine if all ages in the array are 18 or greater. Return true if all ages meet the condition, otherwise false.
<Example_Input: [20, 22, 19, 18]
<Expected_Output: true>

<Problem_18: Flatten a Simple Nested Array
<Task: Given a "simple" nested array (an array where some elements are arrays themselves, but only one level deep), create a new flat array containing all the elements from the nested structure.
<Example_Input: [[1, 2], [3, 4, 5], 6]
<Expected_Output: [1, 2, 3, 4, 5, 6]>

<Problem_19: Count Element Occurrences
<Task: Given an array of strings, count how many times each unique string appears in the array. Return an object where the keys are the unique strings and the values are their respective counts.
<Example_Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'kiwi']
<Expected_Output: { apple: 3, banana: 2, orange: 1, kiwi: 1 }>

<Problem_20: Remove Duplicate Values
<Task: Given an array that may contain duplicate values, create a new array that contains only the unique values from the original array. The order of the unique values in the new array should be preserved as they first appeared in the original array.
<Example_Input: [1, 2, 2, 3, 4, 1, 5, 3]
<Expected_Output: [1, 2, 3, 4, 5]>


