---
title: Pairwise
datetime: 2022-02-09T21:04
keywords: algorithm, js
brief: Find pairs adding up to an arbitrary value and return the sum of their position in the input array.
---

[The assignment](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise) is slightly convoluted, but becomes easier to understand with an example.

Given an array of integers and a second argument.

```js
pairwise([1, 2, 2, 2, 3, 4, 5, 6], 7);
```

Find the pairs of numbers which added together lead to the second argument.

```text
1 + 6 = 7
2 + 5 = 7
3 + 4 = 7
```

You cannot repeat the same number in separate pairs — in the example you cannot use 5 for all the 2 included earlier in the array.

When you find the pairs sum the _index_ of the elements in the array.

```text
0 + 7 = 7
1 + 6 = 7
4 + 5 = 9
```

Use the lowest possible index — in the example use the first 2 at index 1.

Finally return the sum of these additions.

```text
0 + 7 = 7
1 + 6 = 7
4 + 5 = 9
      ___
       23
```

## Indices

One way to solve the problem is by creating an object in which to store the indices.

The idea is to loop through the input array and consider the index `i` if not already present in the data structure.

```js
for (let i = 0; i < arr.length - 1; i++) {
	if (!indices[i]) {
		// ...
	}
}
```

In this instance look for the index of a value in the remainder of the array.

```js
const j = arr.slice(i + 1).findIndex();
```

Look specifically for the element which satisfies two conditions:

1. the value which leads to the second argument when added to the current element

2. the value whose index is not already included in `indices`

```js
.findIndex((d, k) => d + arr[i] === arg && !indices[k + i + 1]);
```

Note that, since you look for a value in the items which are left in the array, you need to increment the counter variable `k` to describe the position in the original data structure.

When `findIndex` finds a value — when the returned index is different from `-1` — update `indices` to consider the position of the values.

```js
indices[i] = i;
indices[j + i + 1] = j + i + 1;
```

## Sum

Past the for loop `indices` is an object which describes the indices in its keys and also its values. Return the sum of either to complete the assignment.

The sum of the values.

```js
return Object.values(indices).reduce((acc, curr) => acc + curr, 0);
```

Or, the sum of the keys. 

```js
return Object.keys(indices).reduce((acc, curr) => acc + parseInt(curr, 10), 0);
```

Note that, since the keys are provided as a string, you need to convert the value to a number.
