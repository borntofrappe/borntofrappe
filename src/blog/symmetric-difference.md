---
title: Symmetric difference
datetime: 2022-01-24
keywords: js
brief: Given two sets consider the elements which are in either collection but not in both.
---

The _symmetric difference_ is defined as the operation on two sets which considers the elements which are in either set but not in both.

The assignment asks to implement the feature for a variable number of arrays and to remove duplicates.

```js
function sym() {
	// find symmetric difference
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// Array(3) [1, 4, 5]
```

For more than two sets the operation should also process the sets in sequence.

For three sets A, B and C, for instance, the assignment asks to find the symmetric difference of A and B and then the symmetric difference of the result and C.

## arguments

With `arguments` consider the variable number of arguments.

The value is available as a local variable and an _array-like object_ to non-arrow functions.

```js
function sym() {
	console.log(arguments);
}

sym(3, 4, 5);
// Arguments { "0": 3, "1": 4, "2": 5 }
```

You can access individual elements by index.

```js
function sym() {
	console.log(arguments[1]);
}

sym(3, 4, 5);
// 4
```

You can also highlight the size of the collection through the `length` property.

```js
function sym() {
	console.log(arguments.length);
}

sym(3, 4, 5);
// 3
```

The variable is however not an array. Methods available on arrays, like `reduce`, do not work with `arguments`.

Thankfully, you can create an array from `arguments` with the spread operator `...`, or even `.slice`, or again `Array.from()` — you have certainly options.

```js
function sym() {
	console.log([...arguments]);
}

sym(3, 4, 5);
// Array(3) [3, 4, 5]
```

## reduce

With the `reduce` function consider the arrays in sequence.

```js
const difference = [...arguments].reduce((acc, curr) => {
	//
}, []);
```

The idea is to return an array satisfying the definition of a symmetric difference.

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

`reduce` is once again helpful to return an array of unnique values.

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
