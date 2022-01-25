---
title: Inventory update
datetime: 2022-01-25
keywords: js
brief: Update an array with the keys and values from a second array.
---

The assignment asks to update an array with the keys and values from a second array.

```js
var curInv = [[3, 'Apples']];

var newInv = [
	[2, 'Apples'],
	[3, 'Oranges']
];

updateInventory(curInv, newInv);
/* newInv
	[5, 'Apples'],
	[3, 'Oranges']
*/
```

If a key does not exist in the original data structure the choice is to include the new key and value pair. If the key does exist the idea is to increment the value only.

## reduce

Begin by uniting the two arrays in a single data structure and creating an object in which the items are used as keys.

```js
const inventory = [...arr1, arr2].reduce((acc, curr) => {
	//
}, {});
```

In the body of the `reduce` function extract the quantity and item, given in the specific order.

```js
const [quantity, item] = curr;
```

With this information either increment the field or assign the quantity in the object.

```js
acc[item] = acc[item] ? acc[item] + quantity : quantity;
```

Return the object to have the `reduce` function consider the updated object.

```js
return acc;
```

## Format data

Past the `reduce` function the data structure includes unique items and their rightful quantity. What is left is massaging the data as per the assignment. The structure needs to reflect the format of the input array, nesting one array for each item. Moreover the data needs to be sorted by item and alphabetically.

To build the two dimensional array from the object use `Object.entries`.

```js
Object.entries(inventory);
```

Sort the array by name.

```js
Object.entries(inventory).sort((a, b) => b[0] < a[0]);
```

Loop through the array to return the data in the desired order.

```js
Object.entries(inventory)
	.sort((a, b) => b[0] < a[0])
	.map(([item, quantity]) => [quantity, item]);
```

If you were to rectify the order first you'd access the name in the second item instead of the first.

```diff
-.sort((a, b) => b[0] < a[0])
+.sort((a, b) => b[1] < a[1])
```
