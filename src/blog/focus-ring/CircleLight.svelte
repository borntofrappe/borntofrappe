<script>
	import { onMount } from 'svelte';

	const color = 'hsl(210 17% 95%)';
	const background = 'hsl(210 14% 83%)';
	const colors = ['gold', 'navy'];
	const id = `circle-light-gradient-${colors.join('-')}`;

	let angle = (Math.PI * 3) / 2;
	$: fx = 0.5 + Math.cos(angle) * 0.499;
	$: fy = 0.5 + Math.sin(angle) * 0.499;
	const cx = 0.5;
	const cy = 0.5;
	const r = 0.5;

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
		ArrowRight: 0.02,
		ArrowLeft: -0.02
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
		state = 'start';
	};

	const handlePointermove = (e) => {
		if (state === 'wait') return;

		const { x, y } = getCoordinates(e);
		angle = Math.atan2(y - 0.5, x - 0.5);
	};

	const handlePointerend = () => {
		state = 'wait';
	};

	const handleKeydown = (e) => {
		const { key } = e;
		if (keys[key]) {
			e.preventDefault();
			angle += keys[key];
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
	aria-label="Use the right or left arrow key to move the focal point in a clockwise or counter-clockwise manner."
	role="menu"
	tabindex="0"
	on:keydown={handleKeydown}
	on:blur={handleBlur}
>
	<defs>
		<radialGradient {id} {fx} {fy} {cx} {cy} {r}>
			<stop stop-color={colors[0]} offset="0" />
			<stop stop-color={colors[1]} offset="1" />
		</radialGradient>
	</defs>
	<rect
		fill={background}
		x={viewBox.x}
		y={viewBox.y}
		width={viewBox.width}
		height={viewBox.height}
	/>
	<rect fill="url(#{id})" width="1" height="1" />

	<circle fill="none" stroke={color} stroke-width="0.007" {cx} {cy} {r} />

	<circle
		fill={colors[0]}
		stroke={color}
		stroke-width={state === 'start' ? 0.02 : 0.007}
		cx={fx}
		cy={fy}
		r="0.05"
	/>
</svg>

<!-- prettier-ignore -->
<pre><code>&lt;radialGradient fx="<span>{formatCoordinate(fx)}</span>" fy="<span>{formatCoordinate(fy)}</span>" cx="{formatCoordinate(cx)}" cy="{formatCoordinate(cy)}" r="{formatCoordinate(r)}" id="lighthouse"&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill={colors[0]} r="0.5" /></svg> &lt;stop stop-color="{colors[0]}" offset="0" /&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill={colors[1]} r="0.5" /></svg> &lt;stop stop-color="{colors[1]}" offset="1" /&gt;
&lt;/radialGradient&gt;</code></pre>

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
