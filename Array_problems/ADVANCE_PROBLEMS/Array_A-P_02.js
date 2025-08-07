// <Problem_2: Sort Array of Objects by Multiple Criteria
// <Task: Given an array of user objects, where each object has name (string) and age (number) properties, sort the array first by age in ascending order. If two users have the same age, then sort them by name alphabetically in ascending order. The original array should be modified.
// <Example_Input:
// JavaScript
// [
//   { name: 'Charlie', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'David', age: 25 }
// ]
// <Expected_Output (Modified Array):
// JavaScript
// [
//   { name: 'Alice', age: 25 },
//   { name: 'David', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 30 }
// ]>

let user_Data = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "David", age: 25 },
];

user_Data.sort((user1,user2) =>{
    if (user1.age !== user2.age) {
        return user1.age - user2.age;
    }
    if(user1.name < user2.name) {
        return -1;
    }
    if (user1.name > user2.age) {
        return 1
    }
    return 0;
})

console.log(user_Data)
