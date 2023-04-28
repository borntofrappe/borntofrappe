<script>
	import { tweened } from 'svelte/motion';

	let coords = tweened([0, 4, 1, 3, 2, 3, 3, 1, 4, 4, 5, 3, 6, 3, 7, 2, 8, 0, 9, 1, 10, 1]);
	$: d = `M ${$coords.join(' ')} 10 5 0 5`;

	const getCoords = () =>
		Array(11)
			.fill()
			.reduce((acc, _, i, { length }) => {
				const x = i;
				const min = i === length - 1 ? 1 : 0;

				const y0 = acc.length > 0 ? acc[acc.length - 1] : 4 - Math.floor(Math.random() * 4);
				let dy = Math.random() > 0.5 ? 1 : -1;
				if (Math.random() > 0.75) dy *= 2;
				const y = Math.min(4, Math.max(min, y0 + dy));
				return [...acc, x, y];
			}, []);

	const handleClick = () => {
		coords.set(getCoords());
	};
</script>

<button on:click={handleClick}>Update points</button>

<svg viewBox="0 0 12 7.5">
	<rect fill="hsl(0, 0%, 99%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<path fill="url(#gradient-shadow)" {d} />
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#marker-mid)"
				marker-start="url(#marker-start)"
				marker-end="url(#marker-end)"
				stroke-width="0.1"
				points={$coords}
			/>
		</g>
	</g>
</svg>

<style>
	button {
		display: block;
		margin-inline: auto;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 10%);
		border: none;
		border-radius: 2rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
