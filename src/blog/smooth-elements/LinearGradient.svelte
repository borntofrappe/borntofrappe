<script>
	import { onMount } from 'svelte';

	const colors = ['aquamarine', 'cyan'];
	$: id = `linear-gradient-${colors.join('-')}`;

	let x1 = 0;
	let y1 = 0;
	let x2 = 1;
	let y2 = 0;

	let svg = null;
	let w = 0;
	let h = 0;
	const viewBox = {
		x: -0.2,
		y: -0.15,
		width: 1.4,
		height: 1.3
	};

	const keys = {
		ArrowUp: {
			x: 0,
			y: -0.01
		},
		ArrowRight: {
			x: 0.01,
			y: 0
		},
		ArrowDown: {
			x: 0,
			y: 0.01
		},
		ArrowLeft: {
			x: -0.01,
			y: 0
		}
	};

	let state = 'wait';

	const handleSize = () => {
		if (svg === null) return;

		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	const getCoordinates = ({ offsetX, offsetY }) => {
		const x = (offsetX / w) * viewBox.width + viewBox.x;
		const y = (offsetY / h) * viewBox.height + viewBox.y;

		return { x, y };
	};

	const formatCoordinate = (d) => d.toFixed(2);

	const handlePointerdown = (e) => {
		const { x, y } = getCoordinates(e);

		const d1 = ((x1 - x) ** 2 + (y1 - y) ** 2) ** 0.5;
		const d2 = ((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5;

		state = d1 < d2 ? 'start' : 'end';
	};

	const handlePointermove = (e) => {
		if (state === 'wait') return;

		const { x, y } = getCoordinates(e);
		if (state === 'start') {
			x1 = x;
			y1 = y;
		} else if (state === 'end') {
			x2 = x;
			y2 = y;
		}
	};

	const handlePointerend = () => {
		state = 'wait';
	};

	const handleKeydown = (e) => {
		const { key } = e;
		if (key === ' ') {
			e.preventDefault();
			state = state === 'start' ? 'end' : 'start';
		} else if (keys[key]) {
			e.preventDefault();
			const { x, y } = keys[key];
			if (state === 'start') {
				x1 += x;
				y1 += y;
			} else if (state === 'end') {
				x2 += x;
				y2 += y;
			}
		}
	};

	const handleBlur = () => {
		state = 'wait';
	};

	onMount(() => {
		handleSize();
	});
</script>

<svelte:window on:resize={handleSize} />

<svg
	bind:this={svg}
	style="display: block; cursor: pointer;"
	viewBox="{viewBox.x} {viewBox.y} {viewBox.width} {viewBox.height}"
	on:pointerdown={handlePointerdown}
	on:pointermove={handlePointermove}
	on:pointerup={handlePointerend}
	on:pointerleave={handlePointerend}
	on:touchmove|preventDefault
	aria-label="Press the space bar to toggle between the stop colors. Use the arrow keys to update the position of the matching control points."
	role="menu"
	tabindex="0"
	on:keydown={handleKeydown}
	on:blur={handleBlur}
>
	<defs>
		<linearGradient {id} {x1} {y1} {x2} {y2}>
			<stop stop-color={colors[0]} offset="0" />
			<stop stop-color={colors[1]} offset="1" />
		</linearGradient>
	</defs>
	<rect
		fill="hsl(210 14% 89%)"
		x={viewBox.x}
		y={viewBox.y}
		width={viewBox.width}
		height={viewBox.height}
	/>
	<rect fill="url(#{id})" width="1" height="1" />

	<g fill="none" stroke="hsl(210 11% 15%)" stroke-width="0.007">
		<line {x1} {y1} {x2} {y2} />
	</g>
	<g stroke="hsl(210 11% 15%)">
		<circle
			fill={colors[0]}
			stroke-width={state === 'start' ? 0.02 : 0.007}
			cx={x1}
			cy={y1}
			r="0.05"
		/>
		<circle
			fill={colors[1]}
			stroke-width={state === 'end' ? 0.02 : 0.007}
			cx={x2}
			cy={y2}
			r="0.05"
		/>
	</g>
</svg>

<!-- prettier-ignore -->
<pre><code>&lt;linearGradient x1="<span>{formatCoordinate(x1)}</span>" y1="<span>{formatCoordinate(y1)}</span>" x2="<span>{formatCoordinate(x2)}</span>" y2="<span>{formatCoordinate(x2)}</span>" id="vast-sea"&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill="aquamarine" r="0.5" /></svg> &lt;stop stop-color="<span>{colors[0]}</span>" offset="0" /&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill="cyan" r="0.5" /></svg> &lt;stop stop-color="<span>{colors[1]}</span>" offset="1" /&gt;
&lt;/linearGradient&gt;</code></pre>

<style>
	svg:focus:not(:focus-visible) {
		outline: none;
	}

	code {
		font-size: 1em;
	}

	code > span {
		font-weight: 700;
	}

	code > svg {
		vertical-align: -0.1em;
		vertical-align: -0.1lh;
	}

	pre {
		overflow-x: auto;
	}
</style>
