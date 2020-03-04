// map 
// we can loop out an array with "map" and do something with the array element and it return an array as well

let numbers = [2, 3, 7, 9, 10];

const result = numbers.map(element => element * 2);
console.log(result)

// Filter 
//  it will also loop out an array and we can filter out any condition with those elements
// it will return the values that fulfill the condition but not an array

const output = numbers.filter(element => element > 5);
console.log(`Filter output= ${output}`)

// Find 
// It will work like filter but it will return only the first value that fulfill the condition

const findOutput = numbers.find(x => x > 5);
console.log(`Find output = ${findOutput}`)