// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

console.log(power(2, 4))

// factorial(3) // 6
const factorial = (number) => number < 2 ? 1 : number * factorial(number - 1)

// productOfArray([1,2,3,10]) // 60
const productOfArray = (arr) => {
  const [first, ...rest] = arr
  if (rest.length === 0) {
    return first
  }
  return first * productOfArray(rest)
}

console.log(productOfArray([1, 2, 3, 10]))


// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(number) {
  if (number === 0) {
    return number
  }
  return number + recursiveRange(number - 1)
}

console.log(recursiveRange(10))

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(number) {
  if (number <= 2) {
    return 1
  }
  return fib(number - 1) + fib(number - 2)
}

console.log(fib(28))