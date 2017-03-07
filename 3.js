let number = 600851475143; 
//primes
//5, 7, 13, 29.
// let higest prime
let primes = [];
const length = Math.floor(Math.sqrt(number));
for (let i = 2; i <= length; i++) {
	if (primes.length < 2) {
		primes.push(i);
		continue;
	} 
	let isPrime = false;
	for (var j = 0; j <= primes.length ; j++) {
		if (i%primes[j] === 0) {
			isPrime = false;
			break;
		} else {
			isPrime = true;
		}
	}
	if (isPrime){
		primes.push(i);
	}

}
// console.log(primes.join(' '));
// console.log("2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113");
let result = 0;
primes.forEach(x=>{
	if (number%x===0) {
		result = x;
	}
	
});

console.log(result);