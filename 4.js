//9009 = 91 × 99.
//console.log(999*999)//998001
let num1 = 999;
let num2 = 999;

var result = {
	result: 0,
	num1: 0,
	num2: 0
};

for (;num1 > 0; num1-- ) {
	for (;num2 >0; num2--) {
		let product = num1*num2;
		if (product > result.result) {
			if (product.toString().split('').reverse().join("") === product.toString()) {
				result.result = product;
				result.num1 = num1;
				result.num2 = num2;
			}
		}
	}
	num2 = num1-1;
}
console.log(result);

