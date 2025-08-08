// <Problem_3: Group Objects by a Specific Property
// <Task: Given an array of product objects, where each object has name (string), category (string), and price (number) properties, return a new object. This new object should have keys representing each unique category, and the values should be arrays containing all the products belonging to that category.
// <Example_Input:
// JavaScript
// [
//   { name: 'Laptop', category: 'Electronics', price: 1200 },
//   { name: 'T-Shirt', category: 'Apparel', price: 25 },
//   { name: 'Keyboard', category: 'Electronics', price: 75 },
//   { name: 'Jeans', category: 'Apparel', price: 60 }
// ]
// <Expected_Output:
// JavaScript
// {
//   Electronics: [
//     { name: 'Laptop', category: 'Electronics', price: 1200 },
//     { name: 'Keyboard', category: 'Electronics', price: 75 }
//   ],
//   Apparel: [
//     { name: 'T-Shirt', category: 'Apparel', price: 25 },
//     { name: 'Jeans', category: 'Apparel', price: 60 }
//   ]
// }>

let myArray = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'T-Shirt', category: 'Apparel', price: 25 },
  { name: 'Keyboard', category: 'Electronics', price: 75 },
  { name: 'Jeans', category: 'Apparel', price: 60 }
];


let grouped_Array = myArray.reduce((accumulator, currentValue) =>{
    const category = currentValue.category;
    if (!accumulator[category]){
        accumulator[category] = [];
    }
    accumulator[category].push(currentValue);
    return accumulator;
}, {});

console.log(grouped_Array);
