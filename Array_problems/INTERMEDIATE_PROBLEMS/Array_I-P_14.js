// <Problem_14: Find the First Object Matching a Condition
// <Task: Given an array of user objects, where each object has id (number) and name (string) properties, find and return the first user object whose id matches a given targetId. If no user with that id is found, return undefined.
// <Example_Input: users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}], targetId = 2
// <Expected_Output: {id: 2, name: 'Bob'}>

let User_Data = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}];

let Target_id = 2;

let Target_user = User_Data.find(user => user.id === Target_id);

console.log('Detail of Target user = ', Target_user);
