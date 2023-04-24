<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const position = spring(
		{
			x: 0,
			y: 0
		},
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let svg = null;
	let w, h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	const handleMove = (e) => {
		const { offsetX, offsetY } = e;
		const x = offsetX / w;
		const y = offsetY / h;

		position.set({
			x,
			y
		});
	};
</script>

<svelte:window on:resize={handleSize} />

<svg bind:this={svg} viewBox="0 0 1 1" on:pointermove|preventDefault={handleMove}>
	<defs>
		<marker
			id="marker-ladybug"
			viewBox="-50 -50 100 100"
			markerUnits="userSpaceOnUse"
			markerWidth="1"
			markerHeight="1"
			orient="auto"
		>
			<g transform="rotate(90)">
				<g transform="translate(0 -20)">
					<g fill="none" stroke="hsl(37, 12%, 22%)" stroke-width="1.5">
						<path d="M 0 0 l 12 -14" />
						<path d="M 0 0 l -12 -14" />
					</g>
					<g fill="hsl(37, 12%, 22%)">
						<circle r="2.25" cx="12" cy="-14" />
						<circle r="2.25" cx="-12" cy="-14" />
						<circle r="14" />
					</g>
				</g>
				<circle fill="hsl(44, 92%, 63%)" r="25" />
				<g fill="hsl(37, 12%, 22%)">
					<circle cx="6" cy="-17" r="3" />
					<circle cx="-6" cy="-17" r="3" />
					<circle cx="15" cy="-9" r="2.5" />
					<circle cx="-15" cy="-9" r="2.5" />
					<circle cx="8" cy="-1" r="3.5" />
					<circle cx="-8" cy="-1" r="3.5" />
					<circle cx="16" cy="9" r="2.5" />
					<circle cx="-16" cy="9" r="2.5" />
					<circle cx="5" cy="10" r="3" />
					<circle cx="-5" cy="10" r="3" />
					<circle cx="9" cy="18" r="2" />
					<circle cx="-9" cy="18" r="2" />
				</g>
			</g>
		</marker>
	</defs>

	<line
		stroke="none"
		marker-start="url(#marker-ladybug)"
		x1="0.5"
		y1="0.5"
		x2={$position.x}
		y2={$position.y}
	/>
</svg>

<style>
	svg {
		display: block;
	}
</style>
