<script>
	import svg from './svg.js';

	const highlights = [
		{
			label: 'Yellow',
			color: 'hsl(54 99% 70%)'
		},
		{
			label: 'Green',
			color: 'hsl(110 80% 67%)'
		},
		{
			label: 'Light blue',
			color: 'hsl(196 88% 76%)'
		},
		{
			label: 'Pink',
			color: 'hsl(324 76% 77%)'
		}
	];

	let [highlight] = highlights;
</script>

<div>
	<fieldset aria-label="Pick highlight color">
		{#each highlights as value}
			<label style:accent-color={value.color}>
				<input name="highlight-color" type="radio" bind:group={highlight} {value} />
				<span>{value.label}</span>
			</label>
		{/each}
	</fieldset>
	<figure style:--fill-color="hsl(0 0% 15%)" style:--flood-color={highlight.color}>
		{@html svg['filter-background']}
	</figure>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	figure {
		inline-size: 100%;
		max-inline-size: 26rem;
		margin: 0;
	}

	fieldset {
		color: hsl(0 0% 15%);
		background: hsl(0 0% 100%);
		border-radius: 1rem;
		padding: 1rem;
		border: none;
	}

	fieldset > * + * {
		margin-block-start: 1rem;
	}

	label {
		font-size: 1.1rem;
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	input {
		inline-size: 1rem;
		block-size: 1rem;
	}
</style>
