<script>
	import { typewriter } from './_utils';

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

	function handleInput() {
		option = null;
		options = getOptions();
	}
</script>

<article>
	<form on:submit|preventDefault>
		<fieldset>
			<legend> Peer into a vase </legend>

			{#each options as { id }}
				<label>
					<input type="radio" bind:group={option} value={id} on:input={handleInput} />

					<svg
						xmlns="http://www.w3.org/2000/svg"
						shape-rendering="crispEdges"
						viewBox="0 0 16 16"
						width="1em"
						height="1em"
					>
						<g fill="currentColor">
							<g class="c1"
								><path
									d="M5 0h6v1H5zM4 1h8v1H4zM3 2h10v1H3zM2 3h12v2H2zM3 5h10v1H3zM2 6h12v1H2zM1 7h14v1H1zM0 8h16v4H0zM1 12h14v1H1zM2 13h12v1H2zM3 14h10v1H3zM4 15h8v1H4z"
								/></g
							><g class="c2"
								><path
									d="M5 1h6v1H5zM11 2h1v1h-1zM12 3h1v1h-1zM3 4h1v1H3zM12 4h1v1h-1zM4 5h1v1H4zM11 5h1v1h-1zM3 6h1v1H3zM5 6h6v1H5zM2 7h3v1H2zM11 7h1v1h-1zM1 8h10v1H1zM1 9h9v1H1zM11 9h1v1h-1zM13 9h1v1h-1zM1 10h10v1H1zM12 10h1v1h-1zM1 11h9v1H1zM11 11h1v1h-1zM2 12h7v1H2zM10 12h1v1h-1zM12 12h1v1h-1zM3 13h1v1H3zM5 13h1v1H5zM7 13h1v1H7zM9 13h1v1H9zM11 13h1v1h-1zM6 14h1v1H6zM8 14h1v1H8z"
								/></g
							><g class="c3"
								><path
									d="M6 1h3v1H6zM4 2h1v1H4zM3 3h1v1H3zM3 7h1v1H3zM2 8h4v1H2zM2 9h1v1H2zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM3 10h1v1H3zM5 10h1v1H5z"
								/></g
							></g
						></svg
					>
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
</article>

<style>
	article {
		max-width: 32rem;
		width: 100%;
		margin: 1rem auto;
	}

	article > * + * {
		margin-top: 0.75em;
	}

	form {
		accent-color: currentColor;
	}

	fieldset {
		display: flex;
		justify-content: space-evenly;
		border: 0.2rem solid currentColor;
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
		width: 3em;
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
