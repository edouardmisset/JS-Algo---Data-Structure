//! Time Complexity
/*
 * Constant —O(1)
 * Linear — O(n)
 * Logarithmic — O(log n)
 * Linearithmic — (n log n)
 * Quadratic — O(n²)
 * Polynomial — O(n^c)
 * Exponential — O(2^n)
 * Factorial — O(n!)
 *
 * Constants Don’t Matter
 * Smaller terms don’t matter
 */

const sumUpTo = number => {
  let total = 0
  for (let index = 0; index <= number; index++) {
    total += index
  }
  return total
}
// O(n)

const sumUpTo2 = number => (number * (number + 1)) / 2
// O(1)

const sumUpTo3 = function add(number) {
  return number < 2 ? 1 : number + add(number - 1)
}
// O(n)

const codeTiming = (fct, argument) => {
  const start = performance.now()
  const result = fct(argument)
  const end = performance.now()
  console.log(
    `The function ${fct.name} returned ${result} in ${end - start} ms`
  )
}

codeTiming(sumUpTo, 1_000)
codeTiming(sumUpTo2, 1_000)
codeTiming(sumUpTo3, 1_000)

const logAtLeast5 = num => {
  for (let index = 0; index < Math.max(5, num); index++) {
    console.log(index)
  }
}
// O(n)

const logAtMost5 = num => {
  for (let index = 0; index < Math.min(5, num); index++) {
    console.log(index)
  }
}
// O(1)

//! Space Complexity
/*
 * Constant —O(1)
 * Linear — O(n)
 * Logarithmic — O(log n)
 * Linearithmic — (n log n)
 * Quadratic — O(n²)
 * Polynomial — O(n^c)
 * Exponential — O(2^n)
 * Factorial — O(n!)
 *
 * Constants Don’t Matter
 * Smaller terms don’t matter
 */

const sum = array => {
  let total = 0
  for (let index = 0; index < array.length; index++) {
    total += array[index]
  }
  return total
}
// O(1)

const double = array => {
  const doubled = []
  for (let index = 0; index < array.length; index++) {
    doubled.push(array[index] * 2)
  }
  return doubled
}
// O(n)
