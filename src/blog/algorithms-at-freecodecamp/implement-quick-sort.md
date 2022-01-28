---
title: Implement quick sort
datetime: 2022-01-28T21:47
keywords: algorithm, js
brief: Sort an array with quick sort.
---

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort) asks to sort elements in an array in ascending order and through quick sort.

The algorithm works by creating smaller and smaller arrays split by an arbitrary value — a pivot:

- in the base case, if the array has one or less items return the data structure

- pick a pivot value, for instance the first element in the collection

- split the input array into two structures with smaller and greater values respectively

- repeat the process on the smaller and greater arrays

- collect the result in an array with the smaller, pivot and greater numbers

## Recursion

One possible way to implement the algorithm is with a recursive function — a function which calls itself with a different argument.

```js
function quickSort(array) {
	// quickSort(subarray)
}
```

Immediately, return the sorted collection which is the array with at most one item.

```js
if (array.length <= 1) {
	return array;
}
```

Past the base case, create the subarrays around the chosen pivot value.

```js
const pivot = array[0];

const smallerEqual = array.filter((d) => d < pivot);
const larger = array.filter((d) => d > pivot);
```

Finally, return an array gathering the different numbers.

```js
return [
	...quickSort(smallerEqual), // <
	...array.filter((d) => d === pivot), // ===
	...quickSort(larger) // >
];
```

Since the array might include multiple copies of the same number using only the pivot value would not be enough.

```diff
-pivot,
+...array.filter((d) => d === pivot),
```
