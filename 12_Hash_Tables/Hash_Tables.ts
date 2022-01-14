// Simple hash function for string
function hash(key: string, size: number): number {
  return key
    .split('')
    .reduce(
      (acc: number, char: string): number =>
        (acc + char.toLowerCase().charCodeAt(0)) % size,
      0
    );
}

hash('blue', 10);

// Simple hash function for string
// ! Constant time-ish
// ! Better distribution
// size should be a prime number
// Introduce a prime number as a coefficient
function hash2(key: string, size: number): number {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let index = 0; index < Math.min(key.length, 100); index++) {
    const char = key[index];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % size;
  }
  return total;
}

hash2('blue', 111);

// Collisions
// 2 Strategies:
// ! Separate chaining
// Storing the data at the same spot but using a more sophisticated data structure (nested array, linked list, etc)
// Storing multiple key-value pairs at the same index
// ! Linear Probing
// In the case of a collision, we search throu the array to find the next empty slot.
// This allows us to  store a single key-value pair for each index.

class HashTable {
  public keyMap;
  constructor(public size = 53) {
    this.keyMap = Array.from({ length: size }, (_x: any): any => []);
  }

  private _hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let index = 0; index < Math.min(key.length, 100); index++) {
      const char = key[index];
      const value = char.toLowerCase().charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.size;
    }
    return total;
  }

  public set(key: string, value: string) {
    const index = this._hash(key);
    this.keyMap[index].push([key, value]);
    return index
  }

  public get(key: string) {
    const index = this._hash(key)
    if (this.keyMap[index] && this.keyMap[index].length > 0) {
      const keyValuePairs = this.keyMap[index]
      return keyValuePairs.filter((keyValue: [string, string]) => keyValue[0] === key)[0][1]
    }
    return undefined
  }

  public keys() {
    return Array.from(new Set(
      this.keyMap.flat(1).map((keyValue: [string, string]) => keyValue[0])
    ))
  }

  public values() {
    return Array.from(new Set(
      this.keyMap.flat(1).map((keyValue: [string, string]) => keyValue[1])
    ))
  }
}

// Time Complexity:
// Insertion: O(1)
// Deletion: O(1)
// Access: O(1)

const table = new HashTable(17);

table.set('hello world', 'goodbye')
table.set('cats', 'dogs')
table.set('I love', 'pizza')
table.set('I hate', 'pasta')
table.set('kikou', 'Pisa')
// console.log(table.set('hello world', 'goodbye'));

console.log(table.get('cats'))
console.log(table.keys())
console.log(table.values())