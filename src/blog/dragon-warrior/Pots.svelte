<script>
	const vases = [
		"What's this? The Herb?",
		"What's this? The Cloth?",
		"What's this? The STRseed?",
		"What's this? The DEFseed?",
		'But nothing was found.'
	];

	const n = 4;
	const options = Array(n)
		.fill()
		.map((_, i) => ({
			value: vases[Math.floor(Math.random() * vases.length)],
			id: i
		}));

	let vase = null;
</script>

<div>
	<form on:submit|preventDefault>
		<fieldset>
			<legend> Peer into a vase </legend>

			{#each options as { id }}
				<label>
					<input type="radio" bind:group={vase} value={id} />
					<svg viewBox="0 0 16 16" width="1em" height="1em" shape-rendering="crispEdges">
						<g fill="#0c1019">
							<rect x="5" width="6" height="1" />
							<rect x="4" y="1" width="1" height="1" />
							<rect x="11" y="1" width="1" height="1" />
							<rect x="3" y="2" width="1" height="1" />
							<rect x="5" y="2" width="6" height="1" />
							<rect x="12" y="2" width="1" height="1" />
							<rect x="2" y="3" width="1" height="2" />
							<rect x="13" y="3" width="1" height="2" />
							<rect x="4" y="3" width="8" height="2" />
							<rect x="3" y="5" width="1" height="1" />
							<rect x="5" y="5" width="6" height="1" />
							<rect x="12" y="5" width="1" height="1" />
							<rect x="2" y="6" width="1" height="1" />
							<rect x="4" y="6" width="1" height="1" />
							<rect x="11" y="6" width="3" height="1" />
							<rect x="1" y="7" width="1" height="1" />
							<rect x="5" y="7" width="6" height="1" />
							<rect x="12" y="7" width="3" height="1" />
							<rect y="8" width="1" height="4" />
							<rect x="11" y="8" width="5" height="1" />
							<rect x="10" y="9" width="1" height="1" />
							<rect x="12" y="9" width="1" height="1" />
							<rect x="14" y="9" width="2" height="1" />
							<rect x="11" y="10" width="1" height="1" />
							<rect x="13" y="10" width="3" height="1" />
							<rect x="10" y="11" width="1" height="1" />
							<rect x="12" y="11" width="4" height="1" />
							<rect x="1" y="12" width="1" height="1" />
							<rect x="9" y="12" width="1" height="1" />
							<rect x="11" y="12" width="1" height="1" />
							<rect x="13" y="12" width="2" height="1" />
							<rect x="2" y="13" width="1" height="1" />
							<rect x="4" y="13" width="1" height="1" />
							<rect x="6" y="13" width="1" height="1" />
							<rect x="8" y="13" width="1" height="1" />
							<rect x="10" y="13" width="1" height="1" />
							<rect x="12" y="13" width="2" height="1" />
							<rect x="3" y="14" width="3" height="1" />
							<rect x="7" y="14" width="1" height="1" />
							<rect x="9" y="14" width="4" height="1" />
							<rect x="4" y="15" width="8" height="1" />
						</g>
						<g fill="#a4773e">
							<rect x="5" y="1" width="1" height="1" />
							<rect x="9" y="1" width="2" height="1" />
							<rect x="11" y="2" width="1" height="1" />
							<rect x="12" y="3" width="1" height="2" />
							<rect x="3" y="4" width="1" height="1" />
							<rect x="4" y="5" width="1" height="1" />
							<rect x="11" y="5" width="1" height="1" />
							<rect x="3" y="6" width="1" height="1" />
							<rect x="5" y="6" width="6" height="1" />
							<rect x="2" y="7" width="1" height="1" />
							<rect x="4" y="7" width="1" height="1" />
							<rect x="11" y="7" width="1" height="1" />
							<rect x="1" y="8" width="1" height="4" />
							<rect x="6" y="8" width="5" height="1" />
							<rect x="3" y="9" width="1" height="1" />
							<rect x="5" y="9" width="1" height="1" />
							<rect x="7" y="9" width="1" height="1" />
							<rect x="9" y="9" width="1" height="1" />
							<rect x="11" y="9" width="1" height="1" />
							<rect x="13" y="9" width="1" height="1" />
							<rect x="2" y="10" width="1" height="1" />
							<rect x="4" y="10" width="1" height="1" />
							<rect x="6" y="10" width="5" height="1" />
							<rect x="12" y="10" width="1" height="1" />
							<rect x="2" y="11" width="8" height="1" />
							<rect x="11" y="11" width="1" height="1" />
							<rect x="2" y="12" width="7" height="1" />
							<rect x="10" y="12" width="1" height="1" />
							<rect x="12" y="12" width="1" height="1" />
							<rect x="3" y="13" width="1" height="1" />
							<rect x="5" y="13" width="1" height="1" />
							<rect x="7" y="13" width="1" height="1" />
							<rect x="9" y="13" width="1" height="1" />
							<rect x="11" y="13" width="1" height="1" />
							<rect x="6" y="14" width="1" height="1" />
							<rect x="8" y="14" width="1" height="1" />
						</g>
						<g fill="#ffe489">
							<rect x="6" y="1" width="3" height="1" />
							<rect x="4" y="2" width="1" height="1" />
							<rect x="3" y="3" width="1" height="1" />
							<rect x="3" y="7" width="1" height="1" />
							<rect x="2" y="8" width="4" height="1" />
							<rect x="2" y="9" width="1" height="1" />
							<rect x="4" y="9" width="1" height="1" />
							<rect x="6" y="9" width="1" height="1" />
							<rect x="8" y="9" width="1" height="1" />
							<rect x="3" y="10" width="1" height="1" />
							<rect x="5" y="10" width="1" height="1" />
						</g>
					</svg>
				</label>
			{/each}
		</fieldset>
	</form>

	<p>
		<span aria-hidden="true">{vase === null ? options[0].value : options[vase].value}</span>
		{#if vase !== null}
			<span>{options[vase].value}</span>
		{/if}
	</p>
</div>

<style>
	div {
		max-width: 32rem;
		margin-left: auto;
		margin-right: auto;
	}

	div > * + * {
		margin-top: 0.75em;
	}

	fieldset {
		display: flex;
		justify-content: space-evenly;
		padding: 0.75rem 0.5rem;
		border: 0.2rem solid currentColor;
		border-radius: 0.25rem;
	}

	legend {
		padding: 0 1rem;
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem 0;
	}

	input {
		accent-color: currentColor;
		width: 1rem;
		height: 1rem;
	}

	svg {
		width: 64px;
		height: auto;
	}

	p {
		position: relative;
	}

	p > span {
		display: inline-block;
	}

	p > span:nth-of-type(1) {
		opacity: 0;
	}

	p > span:nth-of-type(2) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
