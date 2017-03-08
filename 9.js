// task
/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3*3 + 4*4 = 9 + 16 = 25 = 5*5.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. 
*/
console.time("script");

let magicNumber = 1000;

console.log(getPythagoreanTripletProduct(magicNumber));

function getPythagoreanTripletProduct(magic){
	for (let ai = 1; ai < 1000; ai++) {
		for (let bi = 1; bi< 1000; bi++){
			for (let ci = 1; ci< 1000;ci++) {
				let results = (ai**2)+(bi**2);
				if (results === ci*ci && ai+bi+ci===magic){
					console.log({ai,bi,ci});
					return ai*bi*ci;
				}
			}
		}
	}	
}


console.timeEnd("script");