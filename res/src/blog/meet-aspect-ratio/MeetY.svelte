<script>
	const preserveAspectRatio = ['xMidYMin', 'xMidYMid', 'xMidYMax'];

	let [, y] = preserveAspectRatio;
</script>

<div>
	<fieldset>
		<legend>
			<code>preserveAspectRatio</code>
		</legend>

		{#each preserveAspectRatio as value}
			<label>
				<input type="radio" bind:group={y} {value} />
				<code>{value}</code>
				<svg viewBox="-0.025 -0.025 1.05 1.05" width="1em" height="1em" fill="none">
					<rect width="1" height="1" fill="none" stroke="currentColor" stroke-width="0.05" />
					<rect x="0.15" y="0.15" width="0.7" height="0.7" />
				</svg>
			</label>
		{/each}
	</fieldset>

	<svg viewBox="-0.2 -0.2 1.4 3.4">
		<defs>
			<symbol id="bento-box-treat-y" viewBox="0 0 1 1" preserveAspectRatio={y}>
				<rect fill="#353739" width="1" height="1" />
				<rect fill="#3c4043" width="1" height="0.8" />
				<rect fill="#fef9ea" x="0.15" y="0.15" width="0.7" height="0.5" rx="0.05" />
				<rect fill="#eacb7d" x="0.325" y="0.25" width="0.35" height="0.3" rx="0.1" />
			</symbol>
		</defs>

		<rect fill="#69b3aa" x="-0.2" y="-0.2" width="1.4" height="3.4" />
		<g transform="translate(0 3.2) scale(1 0.9)">
			<rect fill="url(#bento-box-pattern)" x="-0.2" y="-3.77" width="1.4" height="3.77" />
		</g>

		<rect fill="#266a6b" width="1" height="3" />
		<rect fill="#225d5d" width="1" height="0.2" />

		<use href="#bento-box-treat-y" width="1" height="3" />

		<g transform="translate(0 2.8)">
			<rect fill="#69b3aa" x="-0.2" width="1.4" height="0.4" />
			<g transform="translate(0 0.4) scale(1 0.9)">
				<rect fill="url(#bento-box-pattern)" x="-0.2" y="-0.444" width="1.4" height="0.444" />
			</g>
		</g>

		<g transform="translate(0 3)">
			<rect fill="#559b95" x="-0.2" width="1.4" height="0.2" />
			<g transform="translate(0 0.2) scale(1 1.1)">
				<rect fill="url(#bento-box-pattern)" x="-0.2" y="-0.1818" width="1.4" height="0.1818" />
			</g>
		</g>
	</svg>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	div > svg {
		display: block;
		max-block-size: 30rem;
	}

	fieldset {
		border: none;
		padding: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: space-between;
	}

	label {
		position: relative;
	}

	label input {
		width: 1em;
		height: 1em;
		opacity: 0;
	}

	label input:checked + code {
		font-weight: 700;
	}

	label svg {
		width: 1em;
		height: 1em;
		position: absolute;
		inset-inline-start: 0%;
		inset-block-start: 50%;
		transform: translateY(-50%);
		fill: none;
		pointer-events: none;
	}

	label input:focus ~ svg {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	label input:focus:not(:focus-visible) ~ svg {
		outline: none;
	}

	label input:checked ~ svg {
		fill: currentColor;
	}

	legend {
		padding: 0;
	}
</style>
