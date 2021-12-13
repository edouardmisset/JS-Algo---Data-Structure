function reverse(str) {
  const firstLetter = str[0]
  const otherLetters = str.slice(1)
  if (otherLetters.length === 0) {
    return firstLetter
  }
  return reverse(otherLetters) + firstLetter
}

console.log(reverse('hello'))


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str) {
  if (str.length <= 1) return true
  return str[0] === str[str.length - 1] ? isPalindrome(str.slice(1, str.length - 1)) : false;
}

console.log(isPalindrome('ab'))


const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  if (arr.length === 0) return false
  const [first, ...rest] = arr
  if (callback(first)) {
    return true
  }
  return someRecursive(rest, callback)
}

console.log(someRecursive([4, 6, 8, 9], isOdd))


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
function flatten(arr) {
  let newArr = []
  for (const element of arr) {
    if (Array.isArray(element)) {
      newArr = [...newArr, ...flatten(element)]
    } else {
      newArr.push(element)
    }
  }
  return newArr;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))