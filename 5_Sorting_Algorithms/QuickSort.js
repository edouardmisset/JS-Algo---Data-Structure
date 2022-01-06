function pivot(arr, start = 0, end = arr.length - 1) {
  // Swapping logique
  // Just numerical comparaison here
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

  // We are assumling the pivot is always the first element
  const pivotValue = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  // Finally swap the pivot from the start to the pivotIndex (or swapIndex)
  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(array = [], left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    // Left
    quickSort(array, left, pivotIndex - 1);
    // Right
    quickSort(array, pivotIndex + 1, right);
  }
  return array
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
