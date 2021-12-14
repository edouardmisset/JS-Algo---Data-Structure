// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(sortedArray) {
  if (sortedArray.length === 0) return 0
  let uniqueValues = 1
  let i = 0
  for (let j = 1; j < sortedArray.length; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      uniqueValues++
      i = j
    }
  }
  return uniqueValues
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

// Time complexity: O(n). Space Complexity: O(1)