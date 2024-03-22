<script>
	import './hey-listen.js';
	const spirits = ['courage', 'wisdom', 'power'];
	let [spirit] = spirits;
</script>

<div>
	<figure>
		<hey-listen {spirit} />
	</figure>
	<fieldset>
		{#each spirits as value}
			<label>
				<input type="radio" bind:group={spirit} {value} />
				<span>{value}</span>
			</label>
		{/each}
	</fieldset>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	figure {
		max-inline-size: 22rem;
		inline-size: 100%;
	}

	fieldset {
		border: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		--color-light: hsl(210 17% 95%);
		--color-dark: hsl(210 10% 23%);
	}

	label {
		position: relative;
	}

	label > input {
		opacity: 0;
		position: absolute;
		inline-size: 100%;
		block-size: 100%;
		cursor: pointer;
	}

	label > span {
		padding: 0.5rem 0.75rem;
		text-transform: capitalize;
		color: var(--color-dark, hsl(0 0% 20%));
		background: var(--color-light, hsl(0 0% 95%));
		border-radius: 0.25rem;
	}

	label > input:focus ~ span {
		outline-offset: 2px;
		outline: 2px solid var(--color-dark, hsl(0 0% 20%));
	}

	label > input:focus:not(:focus-visible) ~ span {
		outline: none;
	}

	label > input:checked ~ span {
		color: var(--color-light, hsl(0 0% 95%));
		background: var(--color-dark, hsl(0 0% 20%));
	}
</style>
