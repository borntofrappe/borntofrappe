<script>
	import { draw } from 'svelte/transition';

	export let handleLines = true;

	let svg = null;
	let points = [];
	let lines = [];
	let isDrawing = false;

	let t = 0;
	let l = 0;

	const width = 350;
	const height = 300;
	const strokeWidth = 4;
	const strokeStyle = 'hsl(0, 0%, 28%)';

	const handleStart = ({ offsetX, offsetY }) => {
		points = [...points, offsetX, offsetY];
		isDrawing = true;
	};

	const handleEnd = () => {
		isDrawing = false;

		if (!handleLines || points.length === 0) return;
		lines = [...lines, points];
		points = [];
	};

	const handleMove = ({ offsetX, offsetY }) => {
		if (!isDrawing) return;

		points = [...points, [offsetX, offsetY]];
	};

	const handleReset = () => {
		points = [];
		lines = [];
	};
</script>

<article>
	<div>
		<svg
			bind:this={svg}
			{width}
			{height}
			on:mousedown={handleStart}
			on:mouseup={handleEnd}
			on:mouseleave={handleEnd}
			on:mousemove={handleMove}
			on:touchstart|preventDefault={(e) => {
				const { top, left } = svg.getBoundingClientRect();
				t = top;
				l = left;

				const { clientX, clientY } = e.touches[0];
				handleStart({
					offsetX: clientX - l,
					offsetY: clientY - t
				});
			}}
			on:touchend|preventDefault={handleEnd}
			on:touchmove|preventDefault={(e) => {
				const { clientX, clientY } = e.touches[0];
				handleMove({
					offsetX: clientX - l,
					offsetY: clientY - t
				});
			}}
		>
			<g
				fill="none"
				stroke={strokeStyle}
				stroke-width={strokeWidth}
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				{#each lines as line}
					<polyline points={line} />
					<polyline
						stroke="hsl({Math.floor(Math.random() * 360)}, 80%, 70%)"
						stroke-width={strokeWidth * 2}
						in:draw
						points={line}
					/>
				{/each}
				<polyline {points} />
			</g>
		</svg>
	</div>

	<button on:click={handleReset}>Clear</button>
</article>

<style>
	article {
		--color-stroke: hsl(0, 0%, 28%);
		--color-frame: hsl(26, 61%, 70%);
		--color-background: hsl(0, 0%, 96%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	div {
		background: var(--color-background, hsl(0, 0%, 96%));
		outline: 0.4rem solid var(--color-frame, hsl(26, 61%, 70%));
		position: relative;
		margin: 1.1rem 0 0.75rem;
	}

	div::before,
	div::after {
		content: '';
		position: absolute;
		transform: translateX(-50%);
		background: var(--color-frame, hsl(26, 61%, 70%));
	}

	div::before {
		block-size: 1.1rem;
		inline-size: 4rem;
		inset-block-end: 100%;
		inset-inline-start: 50%;
		clip-path: polygon(0 100%, 20% 0%, 80% 0%, 100% 100%);
	}

	div::after {
		block-size: 0.7rem;
		inline-size: 70%;
		inset-block-start: 100%;
		inset-inline-start: 50%;
	}

	svg {
		display: block;
	}

	button {
		font-family: inherit;
		display: block;
		border: none;
		color: var(--color-stroke, hsl(0, 0%, 28%));
		background: var(--color-background, hsl(0, 0%, 96%));
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		letter-spacing: 0.5px;
		box-shadow: 0 1px 4px -2px var(--color-stroke, hsl(0, 0%, 28%));
		transition: transform 0.07s ease-in-out;
	}

	button:active {
		transform: scale(0.95);
	}
</style>
