const someArray = [3, 5, 1, 8, 12]
const someOtherArray = [...someArray]

const numberCompare = (num1, num2) => num1 - num2
const compareByLength = (string1, string2) => string1.length - string2.length

someArray.sort(numberCompare)

function historicalSwap(arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]]

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr
}

// Time Complexity - O(N!) ??? | Space Complexity - O(1)

console.log(bubbleSort(someOtherArray))