maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null

function maxSubarraySum(array, numberOfDigitToSum) {
  if (array < numberOfDigitToSum) return null
  let maxSum = 0
  let tempSum = 0
  for (let index = 0; index < numberOfDigitToSum; index++) {
    maxSum += array[index]
  }
  tempSum = maxSum
  for (let i = numberOfDigitToSum; i < array.length; i++) {
    tempSum = tempSum - array[i - numberOfDigitToSum] + array[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// Time complexity: O(n). Space Complexity: O(1)