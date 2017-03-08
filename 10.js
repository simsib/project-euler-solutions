// task
/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. 
*/
console.time("script");
let array = [2,3];
let counter = 4;
let magic = 2000000;
while (array[array.length-1] < magic) {
    if(counter % 2 != 0 && counter%3 != 0) {
        let temp = 4;
        while(temp*temp <= counter) {
            if(counter % temp == 0)
                break;
            temp ++;
        }
        if(temp*temp > counter) {
            array.push(counter);
        }
    }
	counter++;
}
array.pop();
console.log(array[array.length-1]);
console.log(array.reduce((a,b)=>a+b,0));
console.timeEnd("script");