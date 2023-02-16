<script>
	import { typewriter } from './utils.js';

	const secret = 'Ssh! Where did you hear about me?';
	const inventory = [
		{ name: 'Herb', price: 10 },
		{ name: 'Antidote', price: 8 },
		{ name: 'Jail key', price: 1500 }
	];

	let value;
	$: reveal = value === inventory[inventory.length - 1].name;
</script>

<div>
	<form on:submit|preventDefault>
		<p>Anything else for you today?</p>

		{#each inventory as { name, price }}
			<label>
				<input bind:group={value} type="radio" value={name} />
				<span>{name}</span>
				<span>{price}</span>
				<svg viewBox="-0.4 -0.4 3.8 4.8" width="15" height="20">
					<path
						stroke="currentColor"
						stroke-width="0.8"
						fill="none"
						d="M 0 0 l 1.25 0 1.75 2 -1.75 2 -1.25 0z"
					/>
				</svg>
				<svg viewBox="0 0 3 4" width="15" height="20">
					<path fill="currentColor" d="M 0 0 l 1.25 0 1.75 2 -1.75 2 -1.25 0z" />
				</svg>
			</label>
		{/each}
	</form>

	<p>
		<span aria-hidden="true" style:opacity="0" style:visibility="none">{secret}</span>
		{#if reveal}
			<span in:typewriter>{secret}</span>
		{/if}
	</p>
</div>

<style>
	div,
	div * {
		box-sizing: border-box;
		padding: 0;
	}

	div * {
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75rem;
	}

	p {
		position: relative;
	}

	p > span::before {
		content: '*: ';
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

	form {
		border-radius: 0.25rem;
		border: 0.2rem solid currentColor;
		padding: 0.75rem 1rem;
	}

	form > * + * {
		margin-block-start: 0.5rem;
	}

	label {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	label > span:first-of-type {
		flex-grow: 1;
	}

	label input,
	label svg {
		display: block;
		inline-size: 1em;
		block-size: 1em;
	}

	label svg {
		position: absolute;
		inset-inline-start: 0;
		inset-block-start: 50%;
		transform: translateY(-50%);
	}

	label input,
	label svg {
		opacity: 0;
	}

	label input:focus {
		outline: none;
	}

	label input:focus ~ svg:nth-of-type(1) {
		opacity: 1;
	}

	label input:checked ~ svg {
		opacity: 1;
	}

	label:last-of-type input ~ * {
		opacity: 0;
	}
</style>
