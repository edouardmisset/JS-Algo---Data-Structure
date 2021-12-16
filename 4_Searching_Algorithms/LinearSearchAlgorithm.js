function linearSearch(array, value) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index
  }
  return -1
}

// Time Complexity - O(N) | Space Complexity - O(1)

console.log(linearSearch([0, 1, 2, 3, 4, 5, 6, 7], 4))