// <Problem_4: Find the Largest Number
// <Task: Given an array of numbers, find and return the largest number present in the array.
// <Example_Input: [5, 12, 3, 9, 20, 1]
// <Expected_Output: 20>

// METHOD :- 1

let NumsArray1 = [5,121,5,8,20,1];
let findMax1 = Math.max(...NumsArray1);
console.log("Largest Number by MATH.MAX = ", findMax1);



// METHOD:-2

let NumsArray2 = [5,12,3,9,20,1];
let findMax2 = NumsArray2.reduce((Max , current) => {
    return (current > Max) ? current : Max;
}, NumsArray2[0]);

console.log("Largest Number by REDUCE = ", findMax2)



// METHOD:-3

let NumsArray = [5,12,3,9,20,1];
let largestNumLoop = NumsArray[0];
for (let i = 1; i < NumsArray.length; i++) {
    if (NumsArray[i] > largestNumLoop) {
        largestNumLoop = NumsArray[i];
    };
}
console.log("Largest Number by FOR and IF = ", largestNumLoop);