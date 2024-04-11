<script>
	import { onMount } from 'svelte';

	let element = null;

	onMount(() => {
		if (customElements && !customElements.get('pestering-button')) {
			class PesteringButton extends HTMLButtonElement {
				constructor() {
					super();
					this.innerHTML += '!';
				}
			}

			class ExtraPesteringButton extends PesteringButton {
				constructor() {
					super();
					this.innerHTML += '!!';
				}
			}

			customElements.define('pestering-button', PesteringButton, {
				extends: 'button'
			});

			customElements.define('extra-pestering-button', ExtraPesteringButton, {
				extends: 'button'
			});
		}

		element.innerHTML = `<button>Click me</button>
		<button is="pestering-button">Click me</button>
		<button is="extra-pestering-button">Click me</button>`;
	});
</script>

<div bind:this={element}></div>

<style>
	div:has(pestering-button:not(:defined)) {
		display: none;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		--_color: hsl(210 17% 98%);
		--_background: hsl(210 10% 23%);
		--_outline-color: hsl(210 10% 23%);
	}

	div > :global(button) {
		--_outline-offset: 0.2rem;
		display: block;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.2px;
		color: var(--_color, inherit);
		background: var(--_background, none);
		padding: 0.5rem 0.8rem;
		border: none;
		border-radius: 0.5rem;
		transition:
			scale 0.1s ease,
			box-shadow 0.2s ease;
	}

	div > :global(button:hover) {
		box-shadow: 0 0 0 var(--_outline-offset, 3px) var(--_box-shadow-color, hsl(0 0% 0% / 0.1));
	}

	div > :global(button:focus-visible) {
		outline: 2px solid var(--_outline-color, currentColor);
		outline-offset: 0px;
	}

	div > :global(button:focus:focus-visible) {
		outline-offset: var(--_outline-offset, 3px);
		transition: outline-offset 0.1s ease;
	}

	div > :global(button:active) {
		scale: 0.97;
		box-shadow: 0 0 0 0 var(--_box-shadow-color, hsl(0 0% 0% / 0.1));
	}
</style>
