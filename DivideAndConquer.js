// Given a sorted array of integers, 
// write a function called binarySearch,
// that accepts a value and returns the index where the value passed to the function is located. 
// If the value is not found, return -1

binarySearch([1, 2, 3, 4, 5, 6], 4) // 3
binarySearch([1, 2, 3, 4, 5, 6], 6) // 5
binarySearch([1, 2, 3, 4, 5, 6], 11) // -1
binarySearch([], 1) // -1

// Use a dicotomy approach
function binarySearch(sortedArray = [], numberToFind) {
  let min = 0
  let max = sortedArray.length - 1
  while (min <= max) {
    const middle = Math.floor(max + min / 2)
    const currentElement = sortedArray[middle]
    if (currentElement < numberToFind) {
      min = middle + 1
    } else if (currentElement > numberToFind) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

// Time Complexity: O(log(N)) || Space Complexity: O(1)