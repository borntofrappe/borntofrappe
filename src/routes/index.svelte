<script>
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

	$: if (svg) handleSize();

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<svelte:window on:resize={handleSize} />

<svg
	bind:this={svg}
	on:mousedown={() => {
		scale.set(1.5);
	}}
	on:mouseup={() => {
		scale.set(1);
	}}
	on:mousemove={({ offsetX, offsetY }) => {
		const x = (offsetX / w - 0.5) * 20;
		const y = (offsetY / h - 0.5) * 20;
		offset.set({ x, y });
	}}
	viewBox="-50 -50 100 100"
>
	<title>Hello world</title>
	
	<g transform="translate({$offset.x * 0.3} {$offset.y * 0.3})">
		<circle r="28" fill="hsl(48, 100%, 64%)" />
	</g>

	<g transform="translate({$offset.x * 0.2} {$offset.y * 0.2})">
		<g>
			<g fill="none" stroke="hsl(48, 100%, 64%)" stroke-width="3" stroke-linecap="round">
				{#each Array(24)
					.fill()
					.map((_, i, { length }) => (360 / length) * i) as angle, i}
					<path transform="rotate({angle})" d="M 35 0 h {i % 2 === 0 ? 7 : 6}" />
				{/each}
			</g>
		</g>
	</g>

	<g fill="hsl(6, 100%, 74%)">
		<g transform="translate({$offset.x} {$offset.y})">
			<g transform="translate(-9 5)">
				<circle r="4" />
			</g>
			<g transform="translate(9 5)">
				<circle r="4" />
			</g>
			<g transform="translate(0 6)">
				<g transform="scale({$scale})">
					<g stroke="hsl(6, 100%, 74%)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
						<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
					</g>
				</g>
			</g>
		</g>
	</g>

	<g transform="translate({$offset.x * 1.1} {$offset.y * 1.1})">
		<g fill="hsl(44, 30%, 17%)" stroke="hsl(48, 100%, 64%)" stroke-width="1">
			<g transform="translate(-5 0)">
				<circle r="2" />
			</g>
			<g transform="translate(5 0)">
				<circle r="2" />
			</g>
		</g>
	</g>
</svg>

<style>
	:global(body) {
		background: hsl(41, 100%, 96%);
		color: hsl(44, 30%, 17%);
		display: grid;
		place-items: center;
	}
	svg {
		display: block;
		max-width: 32rem;
		width: 100vmin;
		height: auto;
	}
</style>
