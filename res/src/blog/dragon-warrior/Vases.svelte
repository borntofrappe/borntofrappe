<script>
	import { typewriter } from './utils';

	const vases = [
		{ value: "What's this? The Herb?", odds: 0.2 },
		{ value: "What's this? The Cloth?", odds: 0.1 },
		{ value: "What's this? The STRseed?", odds: 0.05 },
		{ value: "What's this? The DEFseed?", odds: 0.05 },
		{ value: 'But nothing was found.', odds: 0.6 }
	].reduce((acc, curr, i) => {
		if (i === 0) {
			return [...acc, { ...curr }];
		} else {
			const { odds } = curr;
			return [...acc, { ...curr, odds: odds + acc[i - 1].odds }];
		}
	}, []);

	const getOptions = (n = 4) =>
		Array(n)
			.fill()
			.map((_, i) => {
				const odds = Math.random();
				const { value } = vases.find((vase) => odds < vase.odds);
				return {
					value,
					i
				};
			});

	const n = 4;

	let options = getOptions(n);

	let index = null;

	$: if (index) {
		options = getOptions(n);
	}
</script>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		<symbol id="dragon-warrior-vase" viewBox="0 0 16 16" shape-rendering="crispEdges">
			<g fill="hsl(0, 0%, 13%)">
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
			<g fill="hsl(22, 78%, 55%)">
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
			<g fill="hsl(22, 100%, 95%)">
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
		</symbol>
	</defs>
</svg>

<div>
	<fieldset>
		<legend> Peer into a vase </legend>

		{#each options as { i }}
			<label>
				<span class="visually-hidden">Vase number {i}</span>
				<input type="radio" bind:group={index} value={i} />
				<svg viewBox="0 0 16 16">
					<use href="#dragon-warrior-vase" />
				</svg>
			</label>
		{/each}
	</fieldset>

	<p>
		<span aria-hidden="true" style:opacity="0" style:visibility="none"
			>{index === null ? options[0].value : options[index].value}</span
		>
		{#if index !== null}
			{#key index}
				<span in:typewriter>{options[index].value}</span>
			{/key}
		{/if}
	</p>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

	fieldset {
		display: flex;
		justify-content: space-evenly;
		padding: 0.75rem 0.5rem;
		border: 0.2rem solid currentColor;
		border-radius: 0.25rem;
		margin: 0;
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
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
		inline-size: 64px;
		block-size: auto;
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
		inset-inline-start: 0;
		inset-block-start: 0;
		inline-size: 100%;
		block-size: 100%;
	}
</style>
