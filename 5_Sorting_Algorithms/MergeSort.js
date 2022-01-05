function mergeArray(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, middle));
  const rightArray = mergeSort(arr.slice(middle));
  return mergeArray(leftArray, rightArray);
}

console.log(mergeArray([1, 4, 6], [2, 8, 10, 12]));
console.log(mergeSort([13, 40, 36, 10, 8, 46, 2]));
