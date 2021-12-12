<script>
	const vases = [
		{ value: "What's this? The Herb?", odds: 0.2 },
		{ value: "What's this? The Cloth?", odds: 0.1 },
		{ value: "What's this? The STRseed?", odds: 0.05 },
		{ value: "What's this? The DEFseed?", odds: 0.05 },
		{ value: 'But nothing was found.', odds: 0.6 }
	].reduce(
		(acc, { value, odds }) => [
			...acc,
			{
				value,
				odds: acc[acc.length - 1] ? acc[acc.length - 1].odds + odds : odds
			}
		],
		[]
	);

	function getOptions(n = 4) {
		return Array(n)
			.fill()
			.map((_) => {
				const id = Math.random();
				const { value } = vases.find(({ odds }) => id < odds);
				return {
					id,
					value
				};
			});
	}

	let option;
	let options = getOptions();

	function handleFocus() {
		option = null;
		options = getOptions();
	}

	function typewriter(node, { speed = 50 }) {
		const { textContent: text } = node;
		const { length } = text;

		const duration = speed * length;
		return {
			duration,
			tick: (t) => {
				const i = ~~(length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<div>
	<form on:submit|preventDefault>
		<fieldset>
			<legend> Peer into a vase </legend>

			{#each options as { id }}
				<label>
					<input type="radio" bind:group={option} value={id} on:input={handleFocus} />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 -0.5 16 16"
						shape-rendering="crispEdges"
						width="1em"
					>
						<path
							stroke="#0c1019"
							d="M5 0h6M4 1h1M11 1h1M3 2h1M5 2h6M12 2h1M2 3h1M4 3h8M13 3h1M2 4h1M4 4h8M13 4h1M3 5h1M5 5h6M12 5h1M2 6h1M4 6h1M11 6h3M1 7h1M5 7h6M12 7h3M0 8h1M11 8h5M0 9h1M10 9h1M12 9h1M14 9h2M0 10h1M11 10h1M13 10h3M0 11h1M10 11h1M12 11h4M1 12h1M9 12h1M11 12h1M13 12h2M2 13h1M4 13h1M6 13h1M8 13h1M10 13h1M12 13h2M3 14h3M7 14h1M9 14h4M4 15h8"
						/>
						<path
							stroke="#a4773e"
							d="M5 1h1M9 1h2M11 2h1M12 3h1M3 4h1M12 4h1M4 5h1M11 5h1M3 6h1M5 6h6M2 7h1M4 7h1M11 7h1M1 8h1M6 8h5M1 9h1M3 9h1M5 9h1M7 9h1M9 9h1M11 9h1M13 9h1M1 10h2M4 10h1M6 10h5M12 10h1M1 11h9M11 11h1M2 12h7M10 12h1M12 12h1M3 13h1M5 13h1M7 13h1M9 13h1M11 13h1M6 14h1M8 14h1"
						/>
						<path
							stroke="#ffe489"
							d="M6 1h3M4 2h1M3 3h1M3 7h1M2 8h4M2 9h1M4 9h1M6 9h1M8 9h1M3 10h1M5 10h1"
						/>
					</svg>
				</label>
			{/each}
		</fieldset>
	</form>

	<p>
		<span aria-hidden="true">
			{option ? options.find(({ id }) => id === option).value : vases[0].value}</span
		>
		{#if option}
			<span in:typewriter>
				{options.find(({ id }) => id === option).value}
			</span>
		{/if}
	</p>
</div>

<style>
	div {
		max-width: 32rem;
		margin: 1rem auto;
	}

	div > * + * {
		margin-top: 0.75em;
	}

	fieldset {
		display: flex;
		justify-content: space-evenly;
		border: 0.15rem solid currentColor;
		border-radius: 0.25rem;
		padding: 0.75rem 0.5rem;
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

	label svg {
		width: 32px;
		height: auto;
	}

	p {
		position: relative;
	}

	p > span:nth-of-type(1) {
		opacity: 0;
	}

	p > span:nth-of-type(2) {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
