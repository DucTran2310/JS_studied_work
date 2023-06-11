// 1. all ==> This snippet returns true if the predicate function returns true 
// for all elements in a collection and false otherwise.

const all = (arr, fn = Boolean) => arr.every(fn);

all([1, 2, 3, 4], x => x % 2)

// 2.allEqual
// ==> This snippet checks whether all elements of the array are equal.
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true

// 3. capitalize
// ==> This snippet capitalizes the first letter of a string.
const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'

// 4.capitalizeEveryWord
// => This snippet capitalizes the first letter of every word in a given string.
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'

// 5.castArray
// => This snippet converts a non-array value into array.
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]

// 6.countOccurrences
// => This snippet counts the occurrences of a value in an array.
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

// 7.deepFlatten
// => This snippet flattens an array recursively.
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

// 8.difference
//  => This snippet finds the difference between two arrays.
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]

// 9.Drop Elements
// => This snippet returns a new array with n elements removed from the left.
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []

// 10.dropRight
// => This snippet returns a new array with n elements removed from the right.
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []

// 11.dropRightWhile
// => This snippet removes elements from the right side of an array until the passed function returns true.
const dropRightWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
    return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

// 12.dropWhile
// => This snippet removes elements from an array until the passed function returns true.
const dropWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

// 13.findFirstKey
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

// 14. findLast
// => This snippet returns the last element for which a given function returns a truthy value.
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3

// 15.intersection
// => This snippet can be used to get an array with elements that are included in two other arrays.
const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

// 16.isAnagram
// => This snippet can be used to check whether a particular string is an anagram with another string.
const isAnagram = (str1, str2) => {
    const normalize = str =>
        str
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '')
            .split('')
            .sort()
            .join('');
    return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true

// 17.isNil
// => This snippet can be used to check whether a value is null or undefined.
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true

// 18.scrollToTop
// => This snippet can be used to do a smooth scroll to the top of the current page.
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

scrollToTop();

// 19.union
// => This snippet can be used to find the union of two arrays, 
// resulting in an array that has elements that come from both arrays but that do not repeat.
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

// 20.uniqueElements
// => This snippet uses ES6 Setandthe…restoperator to get every element only once.
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]