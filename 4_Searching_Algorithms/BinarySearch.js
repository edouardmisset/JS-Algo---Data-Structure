function binarySearch(sortedArray, value) {
  let start = 0;
  let end = sortedArray.length - 1;
  let middle = Math.floor((start + end) / 2)
  while (sortedArray[middle] !== value && start <= end) {
    if (sortedArray[middle] < value) start = middle + 1
    else end = middle - 1
    middle = Math.floor((start + end) / 2)
  }
  return sortedArray[middle] === value ? middle : -1
}

// Time Complexity - O(log(N)) | Space Complexity - O(1)

console.log(binarySearch([1, 2, 3, 4, 5], 4))