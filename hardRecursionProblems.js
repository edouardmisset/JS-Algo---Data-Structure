function reverse(str) {
  const firstLetter = str[0]
  const otherLetters = str.slice(1)
  if (otherLetters.length === 0) {
    return firstLetter
  }
  return reverse(otherLetters) + firstLetter
}

console.log(reverse('hello'))