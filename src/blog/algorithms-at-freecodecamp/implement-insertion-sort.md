---
title: Implement insertion sort
datetime: 2022-01-28T21:04
keywords: algorithm, js
brief: Sort an array with insertion sort.
---

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort) asks to sort elements in an array in ascending order and through insertion sort.

The idea is to build a sorted array instead of modifying the input data structure, like with the [bubble](/blog/implement-bubble-sort) or [select](/blog/implement-select-sort) algorithms.

The algorithm itself works as follows:

- loop through the array

- add the element to the sorted collection

- loop through the separate data structure backwards, swapping the elements to have smaller values positioned before larger one

## Loops

One possible way to implement the algorithm is with two nested for loops.

Initialize an array for the sorted values.

```js
const sorted = [];
```

With the first loop populate the sorted collection.

```js
for (let i = 0; i < array.length; i++) {
	sorted[i] = array[i];
}
```

It would be equally possible to use `push` method since the number is added as the last element.

```js
sorted.push(array[i]);
```

With the second loop traverse the sorted data structure backwards, gradually placing the new value in its rightful position.

```js
for (let j = sorted.length - 1; j > 0; j--) {
	if (sorted[j] < sorted[j - 1]) {
		// swap
	}
}
```

Similarly to bubble sort, but with the smallest instead of largest value, the extreme values are pushed to one end of the array, producing the sorted result.
