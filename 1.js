const length = 1000;
const list = Array.apply(null, {length: length}).map(Function.call, Number);

let result = list.filter(x=> x % 3 == 0 || x % 5 == 0);

console.log('sum: ' +result.reduce((previous=0,next)=>{
	console.log(next);
	return previous +next}));