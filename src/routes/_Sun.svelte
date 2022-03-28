<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let scale = spring(1, {
		stiffness: 0.1,
		damping: 0.2
	});

	let offset = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let svg;
	let w, h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	const handleStart = () => scale.set(1.5);
	const handleEnd = () => scale.set(1);
	const handleMove = ({ offsetX, offsetY }) => {
		const x = (offsetX / w - 0.5) * 20;
		const y = (offsetY / h - 0.5) * 20;
		offset.set({ x, y });
	};
</script>

<svelte:head>
	<link rel="icon" href="/sun.svg" type="image/svg+xml" />
</svelte:head>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-50 -50 100 100"
	bind:this={svg}
	on:mousedown={handleStart}
	on:touchstart={handleStart}
	on:mouseup={handleEnd}
	on:mouseleave={handleEnd}
	on:touchend={handleEnd}
	on:mousemove={handleMove}
	on:touchmove={(e) => {
		const { clientX, clientY } = e.touches[0];
		handleMove({
			offsetX: clientX,
			offsetY: clientY
		});
	}}
>
	<g transform="translate({$offset.x * 0.3} {$offset.y * 0.3})">
		<circle r="28" fill="#ffdb47" />
	</g>

	<g transform="translate({$offset.x * 0.2} {$offset.y * 0.2})">
		<g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
			{#each Array(24)
				.fill()
				.map((_, i, { length }) => (360 / length) * i) as angle, i}
				<path transform="rotate({angle})" d="M 35 0 h {i % 2 === 0 ? 7 : 6}" />
			{/each}
		</g>
	</g>

	<g transform="translate({$offset.x} {$offset.y})">
		<g fill="#ff877a">
			<g transform="translate(-9 5)">
				<circle r="4" />
			</g>
			<g transform="translate(9 5)">
				<circle r="4" />
			</g>
			<g transform="translate(0 6)">
				<g transform="scale({$scale})">
					<g stroke="#ff877a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
						<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
					</g>
				</g>
			</g>
		</g>
	</g>

	<g transform="translate({$offset.x * 1.1} {$offset.y * 1.1})">
		<g fill="#38311e" stroke="#ffdb47" stroke-width="1">
			<g transform="translate(-5 0)">
				<circle r="2" />
			</g>
			<g transform="translate(5 0)">
				<circle r="2" />
			</g>
		</g>
	</g>
</svg>
