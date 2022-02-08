---
title: Find the symmetric difference
datetime: 2022-02-08T22:17
keywords: algorithm, js
brief: Given the input arrays return their symmetric difference.
---

The [_symmetric difference_](https://en.wikipedia.org/wiki/Symmetric_difference) is defined as the operation on two sets which considers the elements which are in either set but not in both.

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference) asks to implement the feature for a variable number of arrays and to also remove duplicates.

```js
sym([1, 1, 2, 5], [2, 2, 3, 5]);
// Array(2) [1, 3]
```

For more than two arrays the operation should process the sets in sequence. For three sets A, B and C, for instance, the assignment asks to find the symmetric difference of A and B and then the symmetric difference of the result and C.

```js
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// Array(3) [1, 4, 5]
```

## arguments

With `arguments` consider the variable number of input arrays.

The variable describes the input data in an _array-like object_.

```js
function whatArguments() {
	console.log(arguments);
}

whatArguments(3, 4, 5);
// Arguments { "0": 3, "1": 4, "2": 5 }
```

You can access individual elements by index.

```js
function whatArguments() {
	console.log(arguments[1]);
}

whatArguments(3, 4, 5);
// 4
```

You can also highlight the size of the collection through the `length` property.

```js
function whatArguments() {
	console.log(arguments.length);
}

whatArguments(3, 4, 5);
// 3
```

The variable is an array-like object, sharing for instance the `length` property, but it is not an array. Methods like `reduce` — available on arrays — cannot be used with the collection.

Thankfully, you can create an array from `arguments` with the spread operator `...`. You can also rely on `.slice`. Or again on `Array.from()` — you certainly have options.

```js
function whatArguments() {
	console.log([...arguments]);
}

whatArguments(3, 4, 5);
// Array(3) [3, 4, 5]
```

## reduce

With the `reduce` function consider the arrays in sequence.

```js
const difference = [...arguments].reduce((acc, curr) => {
	//
}, []);
```

The idea is to produce an array satisfying the definition of a symmetric difference.

One possible solution is to find for each pair of the input sets the elements which do not exist in the opposing data structure.

```js
const a = acc.filter((d) => !curr.includes(d));
const b = curr.filter((d) => !acc.includes(d));
```

The union of these elements provides the symmetric difference, as these are elements which exist in one array, but not the other.

```js
return [...a, ...b];
```

The accumulator `acc` progressively considers the input arrays behind `curr`, meaning the order of operations is also respected.

## Duplicates

The assignment asks to remove duplicates from the final array. It is indeed possible for an array to include multiple copies of the same value which are kept in the `filter` function.

`reduce` is once again helpful to return an array of unique values.

One possible approach is to iterate through the array and add an item — `curr` — only if the array doesn't already include the same value.

```js
return difference.reduce((acc, curr) => {
	if (acc.includes(curr)) {
		return [...acc];
	} else {
		return [...acc, curr];
	}
}, []);
```
