# Objectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

# How to improve ?

1. Devise a plan for solving problems
2. Master common problem solving patterns

## Problem Solving Plan

1. Understand the Problem
2. Explore Concrete Example
3. Break it Down
4. Solve / Simplify
5. Look Back and Refactor

### Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

#### Example

`Write a function which takes two numbers and returns their sum.`

1. "Implement addition"
2. How many inputs? How large are the numbers expected to be? Are they integers?...
3. Int? Float? String?
4. What happens if someone passes in only one number? (edge cases)
5. Maybe: num1, num2, sum, result...

```javascript
// Naive approach
const sum = (a, b) => a + b;
```

### Explore Concrete Example

- Helps to understand the problem better. (User stories)
- Sanity check. (Unit tests)

1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

#### Example

`Write a function which takes in a string and returns counts of each character in the string`

```javascript
// What shape should our object be?
charCount('aabbcc'); // {a: 2, b: 2, c: 2}
// How should we count capital letters? (case-insensitive)
charCount('miSSissippi'); // {m: 1, i: 4, s: 4, p: 2}
// Should we count the spaces?
charCount('a b c'); // {a: 1, b: 1, c: 1}
// Should we count numbers? null? undefined?
charCount('a1b2c3'); // {a: 1, b: 2, c: 3}
```

### Break it Down

Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

```javascript
function charCount(str) {
  // Initialize an object to store the results
  // Loop over the string and for each character:
  // if the char is a number/letter AND is a key in object, add one to the value
  // if the char is a number/letter AND is NOT a key in object, add it to the object with a value of 1
  // if the char is NOT a number/letter, do nothing
  // return the object
}
```

> It's all about the process

### Solve / Simplify

> If you can't solve it... solve a simpler problem (a subset)!

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

```javascript
function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

### Look Back and Refactor

Refactoring questions:

- Can I check the result?
- Can I derive the result differently?
- Can I understand it at a glance?
- Can I use the result or method for some other problem?
- Can I improve the performance of my solution?
- Can I think of other ways to refactor?
- How have other people solved this problem?

```javascript
function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  );
}
```

## Problem Solving Patterns

### Some Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

#### Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

##### Example

`Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.`

```javascript
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
// O(n) time and O(n) space
```

#### Multiple pointers

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

##### Example

`Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.`

```javascript
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [left, right];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// Time Complexity: O(N) & Space Complexity: O(1)
```

#### Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another
Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.

##### Example

`Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.`

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null

function maxSubarraySum(array, numberOfDigitToSum) {
  if (array < numberOfDigitToSum) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let index = 0; index < numberOfDigitToSum; index++) {
    maxSum += array[index];
  }
  tempSum = maxSum;
  for (let i = numberOfDigitToSum; i < array.length; i++) {
    tempSum = tempSum - array[i - numberOfDigitToSum] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

#### Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity.

##### Example

`Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.`

```javascript
binarySearch([1, 2, 3, 4, 5, 6], 4); // 3
binarySearch([1, 2, 3, 4, 5, 6], 6); // 5
binarySearch([1, 2, 3, 4, 5, 6], 11); // -1
binarySearch([], 1); // -1

// Use a dicotomy approach
function binarySearch(sortedArray = [], numberToFind) {
  let min = 0;
  let max = sortedArray.length - 1;
  while (min <= max) {
    const middle = Math.floor(max + min / 2);
    const currentElement = sortedArray[middle];
    if (currentElement < numberToFind) {
      min = middle + 1;
    } else if (currentElement > numberToFind) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// Time Complexity: O(log(N)) || Space Complexity: O(1)
```
