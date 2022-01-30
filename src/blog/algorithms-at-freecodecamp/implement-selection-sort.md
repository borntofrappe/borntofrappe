---
title: Implement selection sort
datetime: 2022-01-28T10:43
keywords: algorithm, js
brief: Sort an array with selection sort.
---

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort) asks to sort elements in an array in ascending order and through selection sort.

The algorithm works by continuously looking for the smallest value and positioning the element at the beginning of the array.

Loop through the entire collection and place the smallest value at index `0`. Loop through the array skipping the first value and place the smallest value at index `1`, then `2` and so forth and so on.

## Loops

One possible way to implement the algorithm is with two `for` loops, one nested in the other.

With the first loop consider all the elements in the collection.

```js
for (let i = 0; i < array.length; i++) {}
```

With the second loop look for the smallest value in the gradually smaller array.

```js
for (let j = i + 1; j < array.length; j++) {}
```

Unlike [bubble sort](/blog/implement-bubble-sort#loops), where you skip the values at the end of the array, build the loop to avoid the numbers at the very beginning.

Store the index for the smallest value in a separate variable, declared before the nested for loop.

```js
let index = i;
// for (let j = i + 1; j < array.length; j++) {}
```

Update the value if the array includes a smaller number.

```js
if (array[j] < array[index]) {
	index = j;
}
```

Past the nested for loop swap the current index `i` and the smallest index `index` if the two do not match.

```js
if (index !== i) {
	// swap
}
```
