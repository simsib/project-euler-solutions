let magic = 100;
let valueArray = [];
for (var i = 1; i <= magic; i++) {
	valueArray.push(i);
}
//console.log(2**3);
var squareSum = valueArray.map(x=> x**2).reduce((a,b)=>a+b,0);
var sumSquare = valueArray.reduce((a,b)=>a+b,0)**2;
console.log(sumSquare-squareSum);