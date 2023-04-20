<script>
	const seeds = ['diamond', 'heart', 'club', 'flower'];
	let [value] = seeds;
</script>

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

<svg viewBox="0 0 3 1.5">
	<g transform="translate(1 0.5)">
		<g transform="translate(0.5 0)">
			<g fill="currentColor" font-family="monospace" font-size="0.2">
				<text y="-0.3" text-anchor="middle"
					>href="<tspan font-weight="700">#card-{value}</tspan>"</text
				>
			</g>
		</g>
		<use href="#deck-card-{value}" width="1" height="1" />
	</g>
</svg>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	button {
		text-transform: capitalize;
		padding: 0.2rem 0.75rem;
		color: #fcfff6;
		font-weight: 700;
		background: #1f393a;
		border: none;
		border-radius: 0.5rem;
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
