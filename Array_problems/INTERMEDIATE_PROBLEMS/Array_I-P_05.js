// <Problem_5: Log Formatted Product Details
// <Task: Given an array of objects, where each object represents a product with name (string) and price (number) properties, iterate through the array and print a formatted string for each product to the console. The format should be: "Product: [product name], Price: $[product price]". This task does not require creating a new array.
// <Example_Input: [{name: 'Laptop', price: 1200}, {name: 'Mouse', price: 25}]
// <Expected_Console_Output :Product: Laptop, Price: $1200
//                           Product: Mouse, Price: $25>

let productList = [{name: 'Laptop', price: 12000},
     {name: 'Mouse', price: 1500},
     {name: 'keyboard', price: 800}
    ];

let orderedList = productList.forEach(product => {
    console.log(`Product: ${product.name} , Price: $${product.price}`);
});

