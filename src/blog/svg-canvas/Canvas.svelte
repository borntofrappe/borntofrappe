<script>
	import { onMount } from 'svelte';

	let canvas = null;
	let x, y;
	let isDrawing = false;

	const width = 350;
	const height = 300;
	const strokeWidth = 4;
	const strokeStyle = 'hsl(0, 0%, 28%)';

	let t = 0;
	let l = 0;

	const handleSize = () => {
		const { top, left } = canvas.getBoundingClientRect();
		t = top;
		l = left;
	};

	onMount(() => {
		handleSize();
		const context = canvas.getContext('2d');
		context.lineWidth = strokeWidth;
		context.strokeStyle = strokeStyle;
	});

	const handleStart = ({ offsetX, offsetY }) => {
		x = offsetX;
		y = offsetY;
		isDrawing = true;
	};

	const handleEnd = () => {
		isDrawing = false;
	};

	const handleIng = ({ offsetX, offsetY }) => {
		if (!isDrawing) return;

		const context = canvas.getContext('2d');
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(offsetX, offsetY);
		context.stroke();
		context.closePath();

		x = offsetX;
		y = offsetY;
	};

	const handleReset = () => {
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, width, height);
	};
</script>

<svelte:window on:resize={handleSize} />

<article>
	<div class="easel">
		<canvas
			on:mousedown={handleStart}
			on:mouseup={handleEnd}
			on:mouseleave={handleEnd}
			on:mousemove={handleIng}
			on:touchstart|preventDefault={(e) => {
				const { clientX, clientY } = e.touches[0];
				handleStart({
					offsetX: clientX - l,
					offsetY: clientY - t
				});
			}}
			on:touchend|preventDefault={handleEnd}
			on:touchmove|preventDefault={(e) => {
				const { clientX, clientY } = e.touches[0];
				handleIng({
					offsetX: clientX - l,
					offsetY: clientY - t
				});
			}}
			bind:this={canvas}
			{width}
			{height}
		/>
	</div>

	<button on:click={handleReset}>Clear</button>
</article>

<style>
	article {
		--color-stroke: hsl(0, 0%, 28%);
		--color-easel: hsl(26, 61%, 70%);
		--color-background: hsl(0, 0%, 96%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	div {
		background: var(--color-background, hsl(0, 0%, 96%));
		outline: 0.4rem solid var(--color-easel, hsl(26, 61%, 70%));
		position: relative;
		margin: 1.1rem 0 0.75rem;
	}

	div::before,
	div::after {
		content: '';
		position: absolute;
		transform: translateX(-50%);
		background: var(--color-easel, hsl(26, 61%, 70%));
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
