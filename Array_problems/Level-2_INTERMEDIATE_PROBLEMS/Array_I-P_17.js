// <Problem_17: Check if All Elements Meet a Condition
// <Task: Given an array of ages, determine if all ages in the array are 18 or greater. Return true if all ages meet the condition, otherwise false.
// <Example_Input: [20, 22, 19, 18]
// <Expected_Output: true>

let Age_Array = [20, 22, 19, 18];

Qualified_Age = Age_Array.every(age => age >= 18);

console.log(`All the Ages of this Age Array ${Age_Array} is Qualified. ===> ${Qualified_Age}`);