// <Problem_15: Find the Index of the First Object Matching a Condition
// <Task: Given an array of product objects (each with name (string) and price (number) properties), find and return the index of the first product whose name matches a given productName (case-sensitive). If no such product is found, return -1.
// <Example_Input: products = [{name: 'Keyboard', price: 75}, {name: 'Mouse', price: 25}, {name: 'Monitor', price: 300}], productName = 'Mouse'
// <Expected_Output: 1>

let products = [{name: 'Keyboard', price: 75}, {name: 'Mouse', price: 25}, {name: 'Monitor', price: 300}];

let productName = 'Mouse'

let Check_product_index = products.findIndex(product => product.name === productName);

console.log(Check_product_index);