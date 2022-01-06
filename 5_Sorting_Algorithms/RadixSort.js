/**
 * @description Get the digit at a specific position in a (base 10) number
 * @date 06/01/2022
 * @param {number} num - The integer we want the digit from
 * @param {number} position - The positive integer
 */
const getDigit = (num, position) =>
  Math.floor(Math.abs(num) / 10 ** position) % 10;

const digitCount = num =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = (arrayOfNum = []) =>
  arrayOfNum.reduce(
    (acc, val) => (Math.max(acc, digitCount(val))),
    0
  );


function radixSort(arrayOfNum) {
  const maxDigitCount = mostDigits(arrayOfNum)
  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arrayOfNum.length; j++) {
      const digit = getDigit(arrayOfNum[j], i)
      digitBuckets[digit].push(arrayOfNum[j]);
    }
    arrayOfNum = digitBuckets.flat()
  }
  return arrayOfNum;
}

// Time Complexity - O(NK) | Space Complexity - O(N + K)

console.log(radixSort([12, 4567, 3534, -54, 3245, 342, 42]));
