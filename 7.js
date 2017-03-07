// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

let array = [2,3];
let counter = 4;
const n = 10;
while (array.length < n) {
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
console.log(array);
console.log(array[n-1]);