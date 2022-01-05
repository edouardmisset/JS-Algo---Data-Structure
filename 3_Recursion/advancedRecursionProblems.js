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


// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
const capitalizeFirst = (arrayOfStrings) => arrayOfStrings.map(string => string[0].toUpperCase() + string.slice(1))

console.log(capitalizeFirst(['car', 'taco', 'banana']))



function nestedEvenSum(object) {
  const sum = { result: 0 }
  for (const key in object) {
    const value = object[key];
    if (typeof value === 'number' && value % 2 === 0) {
      sum.result += value
    } else if (value.constructor === Object && Object.keys(value).length !== 0) {
      sum.result += nestedEvenSum({ ...value }).result
    }
  }
  return sum
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

const obj3 = {
  a: 2,
  b: { b: 2 },
};

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10


const capitalizeWords = (arrayOfStrings) => arrayOfStrings.map(string => string.toUpperCase())
function capitalizeWordsRecusively(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  const result = capitalizeWords(array.slice(0, -1));
  result.push(array.slice(array.length - 1)[0].toUpperCase());
  return result;
}

console.log(capitalizeWordsRecusively(['i', 'am', 'learning', 'recursion']))