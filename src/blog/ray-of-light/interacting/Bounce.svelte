<script>
	import { spring } from 'svelte/motion';

	const angles = Array(24)
		.fill()
		.map((_, i, { length }) => (360 / length) * i);

	const scale = spring(1, {
		stiffness: 0.1,
		damping: 0.2
	});

	const handleStart = () => {
		scale.set(1.1);
	};

	const handleEnd = () => {
		scale.set(1);
	};
</script>

<svg
	viewBox="-50 -50 100 100"
	on:mousedown={handleStart}
	on:mouseup={handleEnd}
	on:mouseleave={handleEnd}
	role="presentation"
>
	<g transform="scale({$scale})">
		<g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
			{#each angles as angle}
				<path transform="rotate({angle})" d="M 35 0 h 7" />
			{/each}
		</g>

		<circle r="28" fill="#ffdb47" />
		<g fill="#ff877a">
			<g transform="translate(0 5)">
				<circle r="4" cx="-9" />
				<circle r="4" cx="9" />
			</g>
			<g transform="translate(0 6)">
				<g stroke="#ff877a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
					<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
				</g>
			</g>
		</g>

		<g fill="#38311e" stroke="#ffdb47" stroke-width="1">
			<circle r="2" cx="-5" />
			<circle r="2" cx="5" />
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
