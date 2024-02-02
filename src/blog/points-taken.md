---
title: Points taken
description: Weigh your options using pointer coordinates in SVG.
date: 2024-02-02T10:58:01
---

In [a recent article](/svg-pointer) I went through a couple of ways you can take pointer coordinates and make use of the values in the body of an `svg` element, set to listen to the appropriate event.

```js
element.addEventListener('pointerdown', handlePointerer);
```

I also mentioned that using the Canvas API would be more performant to draw figures on demand, and while the point holds true, especially for a large number of shapes, it begs a different question: which of the two SVG options is better, or at least faster?

I may not have a definitive answer, but a script to compare the two techniques.

## Performance

The idea is to lean on a function from [the `Performance` interface](https://w3c.github.io/hr-time/#dom-performance-now) in separate, delayed moments. From the specification, `performance.now` returns a number of milliseconds with a higher precision than `Date.now`, so that you can keep track of how much time it takes to carry out an instruction with great fidelity.

First, create a timestamp in a variable, `t0`.

```js
const t0 = performance.now();
```

Then, after some time, run the function anew.

```js
// do something heavy
const t1 = performance.now();
```

If you store the value in a separate variable, the difference between the two leads to a proper metric. Of course the one metric is trivial, but as you perform different tasks you can use the value to compare the distinct options.

## Tests

Knowing how to keep track of time, it is time to settle the matter at hand. You have two ways to pick up the coordinates from the `pointerdown` event, convert them to the boundaries of the `svg` element and draw a circle at the precise spot.

From [the cited article](/svg-pointer) I can summarize the sequence with the `handlePointer` function, receiving the `Event` object.

```js
function handlePointerer(event) {
	const { clientX, clientY } = event;
}
```

Two `handlePointer` functions, with a different logic.

In the first, we relied on the `getBoundingClientRect` method and a bit of math.

```js
const bCR = element.getBoundingClientRect();
const x = ((clientX - bCR.x) / bCR.width) * 100;
const y = ((clientY - bCR.y) / bCR.height) * 100;
```

In the second, we transformed the coordinates with matrices and help from two modules.

```js
const matrix = element.getScreenCTM().inverse();
const point = new DOMPoint(clientX, clientY);
const { x, y } = point.matrixTransform(matrix);
```

With this in mind the idea is to run the code programmatically, so we need to feed the argument ourselves.

```js
handlePointer(event);
```

The functions extract the coordinates from an `Event` object, but in truth, we don't need to create an entire event. Only a variable mocking the shape of the object.

You may use any value, but you can also repeat the `getBoundingClientRect` method so that you can refer to coordinates similar to those provided by a true pointer.

```js
const { x, y } = element.getBoundingClientRect();
handlePointer({
	clientX: x,
	clientY: y
});
```

The functions are able to work with the pointer coordinates, but there's one more step to mirror the interaction: actually drawing something on the x, y spot. You can do this even without a framework, and luckily, copy the snippet for both functions.

With the `createElementNS` method create a `circle` in the proper namespace — SVG's own namespace.

```js
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
```

On this element, set a few attributes to realize the shape.

```js
circle.setAttribute('cx', x);
circle.setAttribute('cy', y);
circle.setAttribute('r', 1);
```

Finally, add the node in the `svg` element.

```js
element.appendChild(circle);
```

We have a way to simulate the interaction, and a way to test the two solutions. To be more scientific, however, we can go further. Trying the code a handful of times, even in a tab opened in incognito, is bound to give results which are too flaky. To improve accuracy, we can repeat the instruction multiple times.

```js
const tests = 1;
const iterations = 10;
```

I decided to initialize two variables, `tests` and `iterations`, with the idea of testing the performance again and again, calling the `handlePointer` function even more times. But since I am also afraid of nested loops, I initialized both variables with small cutesy values — you can always increase the numbers once you are confident the code works as expected.

With the two, you can finally try to tackle the question. For as many times as there are tests, create the first timestamp.

```js
for (let i = 0; i < tests; i++) {
	const t0 = performance.now();
}
```

For as many times as there are iterations, call the function drawing the dot.

```js
for (let j = 0; j < iterations; j++) {
	handlePointer({
		clientX: x,
		clientY: y
	});
}
```

Past the nested loop you can repeat the function from the performance module.

```js
const t0 = performance.now();
for (let j = 0; j < iterations; j++) {
	// ...handlePointer
}
const t1 = performance.now();
```

The difference between the two is our precious metric. A number we can store in any data structure, like an array set up beforehand.

```js
const data = [];
for (let i = 0; i < tests; i++) {
	// ...iterations

	data.push(t1 - t0);
}
```

Finally, we can reap the rewards computing the mean. I managed to do this with a handy `reduce` function, but you can always use a `for` loop to tally up the values.

```js
const average = data.reduce((a, c) => a + c) / data.length;
```

Ready, set. But before you proceed to increase the number of tests, and the number of elements drawn in each test, let me save you from a time-consuming issue. The moment you increment `tests` the difference between the two timestamps is going to ramp up considerably, and for a very good reason.

With `handlePointer` we have chosen to draw dots with `circle` elements.

```js
element.appendChild(circle);
```

But when the test is repeated, the circles are still there. The `svg` grows and grows, and the browser has to keep up with the numerous nodes. To start from scratch, we can empty the element in one swift line.

```js
element.innerHTML = '';
```

You can include the instruction either at the beginning or the end of the outermost loop, and finally, try your luck to run the experiment. For as many times as you feel appropriate, and for both techniques.

```diff
-const tests = 1;
+const tests = 100;
-const iterations = 10;
+const iterations = 1000;
```

Or, wait for a paragraph to find the answer.

## Results

73.36999999985099 for the function relying on `boundingClientRect`, 75.34300000041723 for the one working with matrices. The anticlimactic conclusion is that the difference between the two options comes down to less than two milliseconds.

Much noise for nothing? In some ways, yes. The functions perform in quite the same manner. Improving performance is then a matter challenging the base assumptions. The nested loops ran 1000 times, leading to 1000 `circle` elements. If your intent is to consider the coordinates repeatedly, say from the `pointermove` event, the values might change only slightly. Instead of drawing dots with circles, you can draw a line with a `polyline` element, and achieve a similar goal. The markup is going to slim down considerably as the number of elements grows.

```diff
-<circle cx="0" cy="0" r="1" fill="currentColor" />
-<circle cx="0.1" cy="0.1" r="1" fill="currentColor" />
-<circle cx="0.2" cy="0" r="1" fill="currentColor" />
-<circle cx="0.3" cy="0.1" r="1" fill="currentColor" />
-<circle cx="0.4" cy="0.1" r="1" fill="currentColor" />
+<polyline points="0 0 0.1 0.1 0.2 0 0.3 0.1 0.4 0.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
```

And of course, if your intent is to still draw dots, well, there's always the promise of the Canvas API.
