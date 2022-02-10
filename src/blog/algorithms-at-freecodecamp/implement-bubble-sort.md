---
title: Implement bubble sort
datetime: 2022-02-10T22:31
keywords: algorithm, js
brief: Sort an array with the bubble sort algorithm.
---

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort) asks to sort elements in an array in ascending order and through bubble sort.

The algorithm works as follows:

- loop through the array

- compare the elements in pairs

- if the first element is greater than the second swap the two values in place

At the end of the loop the collection is not sorted, _but_ the largest element is positioned at the very end.

The idea is to then repeat the process considering one less element with each iteration. Larger values are progressively pushed to the end leading to the sorted data structure.

## Loops

One possible way to implement the algorithm is with two `for` loops, one nested in the other.

With the first loop consider all the elements to gradually push the maximum value to the end of the collection.

```js
for (let i = 0; i < array.length; i++) {}
```

With the second loop swap the elements up to, but excluding the last sorted item.

```js
for (let j = 0; j < array.length - i - 1; j++) {}
```

Decrement the end condition by `i`, skipping the sorted value, and by `1`, to compare the current and next element in the array.

```js
if (array[j] > array[j + 1]) {
	// swap
}
```

## Swap

To swap the elements in place store a reference to one of the values in a temporary variable.

```js
const temp = array[j];
```

Override the number in the same position and use the temporary value in the separate index.

```js
array[j] = array[j + 1];
array[j + 1] = temp;
```
