const assert = require('assert');
const BigNumber = require('bignumber.js');
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?

const SumOfDiggits = (number) => {
    return number
        .toString()
        .split('')
        .map((x)=>{
            return parseInt(x)})
        .reduce((prev, cur) => {
            return prev + cur
        }, 0);
}

//console.log();
//var number = new BigNumber(Math.pow(2,1000).toString());
console.log(SumOfDiggits('10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376'));

assert.equal(SumOfDiggits(32768), 26);
assert.equal(SumOfDiggits(11111111), 8);