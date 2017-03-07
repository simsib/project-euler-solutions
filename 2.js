let result = [];
const finalLength = 4000000;
console.log(finalLength);
function fibonaci(a){
	if (a>finalLength)
		return result;
	if (a === 0 ) {
		return 0;
	}
	else if (a===1) {
		return 1;
	}
	var tmp = fibonaci(a-1) + fibonaci(a-2);
 	if (result.indexOf(tmp)<0 && tmp < finalLength) {
		result.push(tmp);
	} 
	return tmp;
}

console.log(fibonaci(34));
console.log(result.filter(x=>x%2===0)
	.reduce((previous,next)=>previous+next,0));
//4613732