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

<form on:submit|preventDefault>
	<p>Anything else for you today?</p>
	{#each inventory as { name, price }}
		<label>
			<input bind:group={value} type="radio" value={name} />
			<span>{name}</span>
			<span>{price}</span>
			<svg viewBox="0 0 3 4" width="15" height="20">
				<path fill="currentColor" d="M 0 0 l 1.25 0 1.75 2 -1.75 2 -1.25 0z" />
			</svg>
		</label>
	{/each}
</form>

{#if reveal}
	<p in:typewriter>{secret}</p>
{/if}

<style>
	form * {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	form {
		border-radius: 0.25rem;
		border: 0.2rem solid currentColor;
		padding: 0.5rem 1rem;
	}

	p::before {
		content: '*: ';
	}

	form > * + * {
		margin-block-start: 0.75em;
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

	label input {
		width: 1em;
		height: 1em;
	}

	label svg {
		display: block;
		width: 1em;
		height: 1em;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	label input {
		opacity: 0;
	}

	label svg {
		opacity: 0;
	}

	label input:focus {
		outline: none;
	}

	label input:checked ~ svg {
		opacity: 1;
		padding: 0.1rem;
	}

	label input:focus ~ svg {
		animation: blink 0.5s step-start infinite;
	}

	label:last-of-type input ~ * {
		opacity: 0;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
