<script>
	const seeds = ['diamond', 'heart', 'club', 'flower'];
	let value = 'back';
</script>

<svg viewBox="0 0 3 1.4">
	<g transform="translate(1 0)">
		<g transform="translate(0.5 1.075)">
			<g
				fill="hsl(80, 100%, 98%)"
				stroke="hsl(182, 30%, 17%)"
				stroke-width="0.05"
				stroke-linecap="round"
				stroke-linejoin="round"
				paint-order="stroke"
				font-family="monospace"
				font-size="0.2"
			>
				<text y="0.25" text-anchor="middle"
					>href="<tspan font-weight="700">#card-{value}</tspan>"</text
				>
			</g>
		</g>
		<use href="#deck-card-{value}" width="1" height="1" />
	</g>
</svg>

<div>
	{#each seeds as seed}
		<button
			on:click={() => {
				value = seed;
			}}
		>
			{seed}
		</button>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	button {
		text-transform: capitalize;
		padding: 0.2rem 0.5rem;
		font-weight: 700;
		color: hsl(182, 30%, 17%);
		background: hsl(80, 100%, 98%);
		border: 0.2rem solid currentColor;
		border-radius: 0.25rem;
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
