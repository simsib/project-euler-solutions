// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
let magic = 100;
let valueArray = [];
for (var i = 1; i <= magic; i++) {
	valueArray.push(i);
}
//console.log(2**3);
var squareSum = valueArray.map(x=> x**2).reduce((a,b)=>a+b,0);
var sumSquare = valueArray.reduce((a,b)=>a+b,0)**2;
console.log(sumSquare-squareSum);