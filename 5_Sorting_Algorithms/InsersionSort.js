
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    let j = i - 1
    for (j; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}

// Time Complexity - O(N^2) | Space Complexity - O(1)

console.log(insertionSort([7, 3, 5, 1, 4]))