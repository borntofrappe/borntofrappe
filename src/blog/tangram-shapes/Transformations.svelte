<script>
	export let reverse = true;
	export let accentColor = 'hsl(328, 85%, 46%)';

	const transformations = ['translate(1 1)', 'rotate(-90)'];
	let operations = reverse ? [...transformations].reverse() : transformations;
	let index = 0;
</script>

<div>
	<form on:submit|preventDefault>
		<p>Drag the handle to apply the transformations.</p>
		<input type="range" min="0" max={operations.length} bind:value={index} />
	</form>

	<svg viewBox="-2 -2 8 8">
		<g transform="translate(1 1)">
			<path d="M 0 0 l 2 2 2 -2" fill="hsl(0, 78%, 68%)" />
		</g>
		<g transform={operations.slice(0, index).join(' ')}>
			<path d="M 0 0 l 2 2 -2 2" fill="hsl(51, 78%, 68%)" />
		</g>
	</svg>

	<p>
		transform: <strong style:border-bottom="0.2rem solid {accentColor}"
			>{operations.slice(0, index).join(' ')}</strong
		>
	</p>
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75em;
	}

	form > * + * {
		margin-block-start: 0.5em;
	}

	form input {
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
