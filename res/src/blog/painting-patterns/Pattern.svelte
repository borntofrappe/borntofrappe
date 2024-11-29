<script>
	let patterns = [
		{
			label: 'red',
			fill: 'hsl(0 100% 50%)',
			accentColor: 'red'
		},
		{
			label: 'green',
			fill: 'hsl(120 100% 25%)',
			accentColor: 'green'
		},
		{
			label: 'hints of blue',
			fill: 'url(#pattern-gradient)',
			accentColor: 'blue'
		}
	];

	let [pattern] = patterns;
</script>

<div>
	<svg style="display: block;" viewBox="0 0 20 14">
		<defs>
			<rect id="pattern-background" width="20" height="14" rx="1" />
			<pattern
				id="pattern-pattern"
				viewBox="-16 0 16 16"
				width="4"
				height="4"
				patternUnits="userSpaceOnUse"
			>
				<g id="pattern-shape" fill="black" stroke="white">
					<circle r="7" />
					<circle r="5" />
					<circle r="3" />
					<circle r="1" />
				</g>
				<use href="#pattern-shape" x="-16" y="16" />
				<use href="#pattern-shape" x="-8" y="8" />
				<use href="#pattern-shape" x="-8" />
				<use href="#pattern-shape" y="8" />
				<use href="#pattern-shape" y="16" />
				<use href="#pattern-shape" x="-16" />
			</pattern>
			<mask id="pattern-mask">
				<use fill="url(#pattern-pattern)" href="#pattern-background" />
			</mask>
			<linearGradient id="pattern-gradient" x1="0" y1="1" x2="1" y2="0">
				<stop stop-color="hsl(240 100% 50%)" offset="0" />
				<stop stop-color="hsl(200 100% 50%)" offset="1" />
			</linearGradient>
		</defs>
		<use mask="url(#pattern-mask)" fill={pattern.fill} href="#pattern-background" />
	</svg>

	<fieldset>
		<legend>Paint the pattern in</legend>
		{#each patterns as value}
			<label>
				<input style:accent-color={value.accentColor} type="radio" bind:group={pattern} {value} />
				<span>{value.label}</span>
			</label>
		{/each}
	</fieldset>
</div>

<style>
	div {
		max-inline-size: 36rem;
		margin-inline: auto;
	}

	div > * + * {
		margin-block-start: 0.75rem;
	}

	div > svg {
		display: block;
		max-inline-size: 22rem;
		margin-inline: auto;
	}

	fieldset {
		text-align: center;
		padding: 0;
		border: none;
	}

	legend {
		font-weight: 700;
	}

	label {
		display: inline-block;
		padding: 0.5rem 0.75rem;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}
</style>
