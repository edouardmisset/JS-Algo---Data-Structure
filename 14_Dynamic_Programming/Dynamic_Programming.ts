// Dynamic Programming is mainly an optimization over plain recursion.
// Wherever we see a recursive solution that has repeated calls for same inputs,
// we can optimize it using Dynamic Programming.
// The idea is to simply store the results of subproblems,
// so that we do not have to re-compute them when needed later.
// This simple optimization reduces time complexities from exponential to polynomial.
// For example, if we write simple recursive solution for Fibonacci Numbers,
// we get exponential time complexity and if we optimize it by storing solutions of subproblems,
// time complexity reduces to linear.

// The Fibonacci Sequence
// With Recursion

function fibonacci(number: number): number {
  if (number <= 2) return 1
  return fibonacci(number - 1) + fibonacci(number - 2)
}
// Time Complexity O(2^n) | Space Complexity: O(1)

console.log(fibonacci(5))

// Fibonacci with Memoization no recursion
// Tabulated Version
function fib(number: number): number {
  if (number <= 2) return 1
  const fibNumbers: number[] = [0, 1, 1]
  for (let index = 3; index <= number; index++) {
    fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2]
  }
  return fibNumbers[number]
}
// Time Complexity O(n) | Space Complexity: O(n)

console.log(fib(2));

// 