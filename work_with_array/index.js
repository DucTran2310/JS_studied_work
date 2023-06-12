/**
 * Created by DucTran author on 12/06/2021
 * ---
 * Work with array in JS
 * ---
 * @param {*} array
 * @returns 
 */

// 1. all ==> This snippet returns true if the predicate function returns true 
// for all elements in a collection and false otherwise.

const all = (arr, fn = Boolean) => arr.every(fn);

all([1, 2, 3, 4], x => x % 2)

// 2.allEqual
// ==> This snippet checks whether all elements of the array are equal.
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true

// 3.castArray
// => This snippet converts a non-array value into array.
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]

// 4.countOccurrences
// => This snippet counts the occurrences of a value in an array.
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

// 5.deepFlatten
// => This snippet flattens an array recursively.
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

// 6.difference
//  => This snippet finds the difference between two arrays.
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]

// 7.Drop Elements
// => This snippet returns a new array with n elements removed from the left.
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []

// 8.dropRight
// => This snippet returns a new array with n elements removed from the right.
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []

// 9.dropRightWhile
// => This snippet removes elements from the right side of an array until the passed function returns true.
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

// 10.dropWhile
// => This snippet removes elements from an array until the passed function returns true.
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

// 11.findFirstKey
// => This snippet returns the first key that satisfies a given function.
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
    {
        barney: { age: 36, active: true },
        fred: { age: 40, active: false },
        pebbles: { age: 1, active: true }
    },
    o => o['active']
); // 'barney'

// 12. findLast
// => This snippet returns the last element for which a given function returns a truthy value.
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3

// 13.intersection
// => This snippet can be used to get an array with elements that are included in two other arrays.
const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

// 14.union
// => This snippet can be used to find the union of two arrays, 
// resulting in an array that has elements that come from both arrays but that do not repeat.
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

// 20.uniqueElements
// => This snippet uses ES6 Setandthe…restoperator to get every element only once.
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]