function countDown(number) {
  if (number <= 0) {
    console.log('All done !')
    return
  }
  console.log(number)
  countDown(--number)
}

countDown(5)

function countDownWithoutRecursion(num) {
  for (num; num > 0; num--) {
    console.log(num)
  }
  console.log('All done!')
}

countDownWithoutRecursion(5)

function checkEven(arr) {
  const [first, ...rest] = arr
  return first % 2 === 0 ? true : checkEven(rest)
}

checkEven([1, 3, 75, 54])

function sumRange(num) {
  return num === 1 ? 1 : num + sumRange(num - 1)
}

const factorial = (number) => number < 2 ? 1 : number * factorial(number - 1)

function factorialWithoutRecursion(num) {
  let total = 1
  for (let index = num; index > 1; index--) {
    total *= index
  }
  return total
}

console.log(`factorial: ${factorial(4)}`)
console.log(`factorial without Recursion: ${factorialWithoutRecursion(4)}`)

// Helper Method Recursion
function collectOddValues(arr) {
  const result = []
  function helper(nums) {
    if (nums.length === 0) return
    const [first, ...rest] = nums
    if (first % 2 !== 0) {
      result.push(first);
    }
    helper(rest);
  }
  helper(arr)
  return result
}

// Pure recursion
function collectOddValues2(arr) {
  const newArr = []
  if (arr.length === 0) return newArr
  const [first, ...rest] = arr
  if (first % 2 !== 0) {
    newArr.push(first)
  }
  return [...newArr, ...collectOddValues2(rest)];
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]))
console.log(collectOddValues2([1, 2, 3, 4, 5, 6]))