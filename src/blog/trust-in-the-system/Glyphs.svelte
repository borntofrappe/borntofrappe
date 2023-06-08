<script>
	const glyphs = Array(29)
		.fill()
		.map((_, i) => `#glyph-${i}`);
	let [value] = glyphs;
</script>

<div>
	<svg viewBox="0 0 2.5 1.4">
		<g transform="translate(0.75 0)">
			<svg width="1" height="1" viewBox="0 0 1 1">
				<use href={value} />
			</svg>
			<g transform="translate(0.5 0)" fill="currentColor" font-family="monospace" font-size="0.15">
				<text y="1.2" text-anchor="middle"
					>&lt;use href="<tspan font-weight="700">{value}</tspan>"/&gt;</text
				>
			</g>
		</g>
	</svg>

	<fieldset>
		<select bind:value>
			{#each glyphs as value}
				<option {value}>{value}</option>
			{/each}
		</select>
	</fieldset>
</div>

<style>
	div > * + * {
		margin-block-start: 0.25rem;
	}

	div > svg {
		display: block;
	}

	fieldset {
		border: none;
		padding: 0;
	}

	select {
		border: 0.1rem solid currentColor;
		padding: 0.75rem 0.75rem;
		background: none;
		display: block;
		margin-inline: auto;
	}
</style>
