function sameFrequency(number1, number2) {
  return `${number1}`.length !== `${number2}`.length
    ? false
    : `${number1}`.split('').sort()[0] === `${number2}`.split('').sort()[0]
}

console.log(sameFrequency(22, 222)) // false
console.log(sameFrequency(135, 351)) // true

function areThereDuplicates() {
  const [...numbers] = arguments
  return numbers.some((number, index) =>
    numbers.slice(index + 1).includes(number)
  )
}
// S: O(n) | T: O(n)

function areThereDuplicates2() {
  const [...numbers] = arguments
  const collection = numbers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
  return Object.values(collection).some(value => value > 1)
}
// S: O(n) | T: O(n)

const areThereDuplicatesOneliner = () =>
  new Set(arguments).size !== arguments.length

// S: O(1) | T: O(n log(n))

console.log(areThereDuplicates(1, 2, 4, 3, 3)) // true
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

console.log(areThereDuplicates2(1, 2, 4, 3, 3)) // true
console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true


console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([], 4)) // false

function averagePair(sortedArray = [], targetAverage) {
  let min = 0
  let max = sortedArray.length - 1
  while (min <= max) {
    let middle = (sortedArray[min] + sortedArray[max]) / 2
    if (middle === targetAverage) {
      return true
    }
    if (middle > targetAverage) {
      max--
    } else if (middle < targetAverage) {
      min++
    }
  }
  return false
}

// Time Complexity: O(N) || Space Complexity: O(1)


console.log(isSubsequence('hello', 'bhello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'acb')) // false

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Time complexity: O(n + m). Space Complexity: O(1)

function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < arr.length) {
      total += arr[end]
      end++
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Time Complexity: O(n) | Space Complexity: O(1)

function findLongestSubstring(str) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// Time Complexity: O(N) | Space Complexity: O(n)

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

// Time Complexity: O(N) | Space Complexity: O(1)