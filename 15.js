const assert = require('assert');
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid?


const Factorial = (number) => {
    if (number === 1)
        return number;
    else 
        return number * Factorial(number-1);
}

const FindLatticePathCount = (gridSize) => {
    const factorialTimes2 = Factorial(2*gridSize);
    const factorialProduct = Factorial(gridSize);
    const factorialSquare = Math.pow(factorialProduct,2)
    return factorialTimes2 / factorialSquare;
}


assert.equal(Factorial(1),1);
assert.equal(Factorial(2),2);
assert.equal(Factorial(3),6);
assert.equal(Factorial(4),24);
assert.equal(Factorial(5),120);

assert.equal(FindLatticePathCount(1),2);
assert.equal(FindLatticePathCount(2),6);
assert.equal(FindLatticePathCount(3),20);
assert.equal(FindLatticePathCount(4),70);


console.log(FindLatticePathCount(20));
