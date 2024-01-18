<script>
	import { scale } from 'svelte/transition';

	const max = 40;
	const gap = 8;
	let count = 0;
	$: stem = count * -1;
	$: leaves = Array(Math.floor(count / gap) + 1)
		.fill()
		.map((_, i) => i * gap * -1);

	const grow = (amount = 1) => {
		count = Math.min(max, count + amount);
	};
</script>

<svg aria-hidden="true" display="none" style="position: absolute; inline-size: 0; block-size: 0;">
	<symbol id="icon-water" viewBox="-15 -10 30 30">
		<path
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 0 -9 C -6 0 -10 4 -10 9 A 10 10 0 0 0 10 9 C 10 4 6 0 0 -9 Z M -5 9 A 5 5 0 0 0 0 14"
		/>
	</symbol>
</svg>
<div>
	<button disabled={stem === max} on:click={() => grow(2)}>
		<span>Water</span>
		<svg width="1em" height="1em" viewBox="0 0 1 1">
			<use href="#icon-water" />
		</svg>
		<svg width="1em" height="1em" viewBox="0 0 1 1">
			<use href="#icon-water" />
		</svg>
	</button>
	<button disabled={stem === max} on:click={() => grow()}>
		<span>Sprinkle</span>
		<svg width="1em" height="1em" viewBox="0 0 1 1">
			<use href="#icon-water" />
		</svg>
	</button>

	<svg style="display: block;" viewBox="-11 -50 22 66">
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path d="M 0 0 V {stem}" />
			{#each leaves as y, i (i)}
				<g transform="translate(0 {y}) scale({i % 2 === 0 ? 1 : -1} 1)">
					<path in:scale={{ opacity: 1 }} d="M 0 0 C 0 -7 2 -9 9 -9 C 9 -3 8 0 0 0" />
				</g>
			{/each}
			<rect x="-10" width="20" height="6" />
			<path transform="translate(0 6)" d="M -9 0 A 9 9 0 0 0 9 0" />
		</g>
	</svg>
</div>

<style>
	div {
		display: grid;
		grid-template: 'plant water' 'plant sprinkle';
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	@media (max-width: 20rem) {
		div {
			grid-template: 'plant' 'sprinkle' 'water';
			gap: 1rem;
		}
	}

	div > svg {
		grid-area: plant;
	}

	div > button:nth-of-type(1) {
		grid-area: water;
	}

	div > button:nth-of-type(2) {
		grid-area: sprinkle;
	}

	div > svg {
		display: block;
		inline-size: 100%;
		max-block-size: 20rem;
	}

	button {
		color: inherit;
		background: none;
		padding: 0.5rem 0.75rem;
		border: 0.2rem solid currentColor;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-family: inherit;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		transition: scale 0.1s;
	}

	button:not(:disabled):active {
		scale: 0.99;
	}

	button:focus {
		outline: 0.2rem solid currentColor;
		outline-offset: 0.2rem;
		transition: outline-offset 0.1s;
	}

	button:focus:active {
		outline-offset: 0;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button:disabled {
		opacity: 0.7;
	}

	button > span {
		flex-grow: 1;
		text-align: start;
	}

	button > svg {
		inline-size: 1.25em;
		block-size: 1.25em;
	}
</style>
