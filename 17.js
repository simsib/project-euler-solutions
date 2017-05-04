const assert = require('assert');
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

let numbers = [];
for (let i = 1; i <= 1000; i++) {
    numbers.push(i);
}

const CountLetters = (numbers) => {
    return numbers
                .map(MapDigitToLength) // map number to letter count
                .reduce((a, b) => { return a + b }, 0) // sum
}

const MapDigitToLength = (number) => {
    let result = 0;
    if (number === 1000) {
        result = misc[number] + misc['and'];
    }
    else if (number % 100 === 0) {
        let cent = Math.floor(number / 100);
        result = singleDigitMap[cent] + misc[100]
    }
    else if (number <= 9) {
        result = singleDigitMap[number]
    }
    else if (number <= 19) {
        result = doubleDigit19[number]
    }
    else if (number <= 999 && number > 100) {
        let cent = MapDigitToLength(Math.floor(number / 100) * 100);
        let modulus = MapDigitToLength(Math.floor(number % 100));
        result = cent + modulus + misc['and'];
    }

    else if (number % 10 === 0) {
        let decimal = number / 10;
        result = dec[decimal];
    }
    else if (number <= 99) {
        let decimal = Math.floor(number / 10);
        let modulus = number % 10;
        result = dec[decimal] + singleDigitMap[modulus];
    }
    return result;
}

const singleDigitMap = { 0: 0, 1: 3, 2: 3, 3: 5, 4: 4, 5: 4, 6: 3, 7: 5, 8: 5, 9: 4 };
const doubleDigit19 = { 10: 3, 11: 6, 12: 6, 13: 8, 14: 8, 15: 7, 16: 7, 17: 9, 18: 8, 19: 8 };
const dec = { 1: 0, 2: 6, 3: 6, 4: 5, 5: 5, 6: 5, 7: 7, 8: 6, 9: 6 };
const misc = { 1000: 8, 100: 7, 'and': 3 }


assert.equal(CountLetters([1, 2, 3, 4, 5, 6, 7, 8, 9]), 36);
assert.equal(CountLetters([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 70);
assert.equal(CountLetters([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]), 748);
assert.equal(CountLetters([100, 200, 300, 400, 500, 600, 700, 800, 900]), 99);
assert.equal(CountLetters([210]), 16);

console.log(CountLetters(numbers));