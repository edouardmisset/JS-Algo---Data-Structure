


function selectionSort(arr) {
  // Swapping logique
  // Just numerical comparaison here
  const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]]

  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) minimum = j
    }
    // Small improvement to cover the case when i is already the minimum
    // In which case, there is no need to swap
    if (i !== minimum) swap(arr, i, minimum)

  }
  return arr
}

// Time Complexity - O(N^2) | Space Complexity - O(1)

console.log(selectionSort([2, 6, 1, 8, 44, 56]))