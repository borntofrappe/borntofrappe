---
title: Implement binary search
datetime: 2022-01-31T22:18
keywords: algorithm, js
brief: Find an element in a sorted array with binary search.
---

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search) asks to find a specific element in the input array with binary search.

The task is to specifically return an array for the values leading to the final element, but the logic of the algorithm is the same:

1. consider the value in the middle of the array

2. if the value matches the target terminate the algorithm with the element

3. if the value is greater than the target repeat the algorithm for the left half of the input array, for the elements up to the current number

4. if the value is smaller than the target repeat the algorithm for the right half of the input array, for the elements past the current number

## Recursion

The idea is to repeat the algorithm on smaller and smaller arrays, meaning it is possible to implement the search with a recursive function.

Define the search function.

```js
function search(array, value) {}
```

Find the number in the middle of the array.

```js
const i = Math.floor((a.length - 1) / 2);
const middle = array[i];
```

If the number matches the input value return the result.

```js
if (middle === value) {
	return value;
}
```

Otherwise repeat the process with the halved data structure.

```js
if (middle < value) {
	search(array.slice(i + 1), value);
} else {
	search(array.slice(0, i), value);
}
```

It is possible that the value does not exist in the collection, meaning an additional conditional is necessary in the beginning of the function's scope. Terminate the search if the array is empty.

```js
if (array.length === 0) return null;
```

## Path

Instead of returning the value, or an arbitrary result to describe the element is missing, the assignment asks to create an array with the values considered throughout the algorithm.

```js
binarySearch([1, 3, 6, 7, 8, 12, 13], 6);
// [7, 3, 6]
```

To comply with the request define an array in which to store the successive numbers.

```js
const arrayPath = [];
```

Update the recursive `search` function to also push the middle value in the array.

```js
arrayPath.push(middle);
```

After calling the function from `binarySearch` with the input collection and target return the array or the chosen string.

```js
if (arrayPath[arrayPath.length - 1] === value) {
	return arrayPath;
} else {
	return 'Value Not Found';
}
```

The idea is return the path only the value is indeed found.
