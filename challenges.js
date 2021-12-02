function sameFrequency(number1, number2) {
  return `${number1}`.length !== `${number2}`.length
    ? false
    : `${number1}`.split('').sort()[0] === `${number2}`.split('').sort()[0]
}

console.log(sameFrequency(22, 222)) // false
console.log(sameFrequency(135, 351)) // true

function areThereDuplicates() {
  const [...numbers] = arguments
  return numbers.some((number, index) =>
    numbers.slice(index + 1).includes(number)
  )
}
// S: O(n) | T: O(n)

function areThereDuplicates2() {
  const [...numbers] = arguments
  const collection = numbers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
  return Object.values(collection).some(value => value > 1)
}
// S: O(n) | T: O(n)

const areThereDuplicatesOneliner = () =>
  new Set(arguments).size !== arguments.length

// S: O(1) | T: O(n log(n))

console.log(areThereDuplicates(1, 2, 4, 3, 3)) // true
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

console.log(areThereDuplicates2(1, 2, 4, 3, 3)) // true
console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true
