// 1. capitalize
// ==> This snippet capitalizes the first letter of a string.
const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'

// 2.capitalizeEveryWord
// => This snippet capitalizes the first letter of every word in a given string.
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'

// 3.isAnagram
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

// 4.isNil
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