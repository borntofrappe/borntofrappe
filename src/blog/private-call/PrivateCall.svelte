<script>
	import { onMount } from 'svelte';

	let widget = null;

	onMount(() => {
		if (customElements && !customElements.get('private-call')) {
			class PrivateCall extends HTMLElement {
				#render = false;
				constructor() {
					super();
				}

				connectedCallback() {
					if (this.#render === false) {
						this.innerHTML += '!';
						this.#render = true;
					}
				}
			}

			customElements.define('private-call', PrivateCall);
		}

		const timeout = 500;
		let state = 'wait';

		const output = widget.querySelector('output');
		output.setAttribute('role', 'status');
		output.setAttribute('aria-live', 'polite');

		const privateCall = output.querySelector('private-call');

		const button = widget.querySelector('button');

		function handleCall() {
			if (state !== 'wait') return;

			state = 'call';
			privateCall.remove();
			const timeoutId = setTimeout(() => {
				output.appendChild(privateCall);
				state = 'wait';
				clearTimeout(timeoutId);
			}, timeout);
		}

		button.removeAttribute('disabled');
		button.addEventListener('click', handleCall);

		return () => {
			button.removeEventListener('click', handleCall);
		};
	});
</script>

<div bind:this={widget}>
	<output>
		<figure>
			<svg viewBox="-12.5 -0.5 16.25 13">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -12 0 A 12 12 0 0 0 0 12 L 0 9 -3 8 -5.448826313018799 10.694389343261719 M -12 0 -9 0 -8 3 -10.694376945495605 5.448816299438477"
				/>
				<g fill="currentColor" transform="translate(0 4)">
					<circle cx="-3" r="0.7" />
					<circle cx="0" r="0.7" />
					<circle cx="3" r="0.7" />
				</g>
			</svg>
		</figure>
		<private-call>Hello</private-call>
	</output>
	<button disabled>Repeat call</button>
</div>

<style>
	div {
		max-inline-size: max-content;
		margin-inline: auto;
		padding: 1rem;
		color: hsl(210 10% 23%);
		background: hsl(0 0% 97%);
		box-shadow: 0 2px 3px -2px hsl(200 18% 81%);
		border-radius: 1rem;
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	output {
		font-size: 1rem;
	}

	output > figure {
		display: inline-block;
		vertical-align: bottom;
		margin-inline-end: 0.1rem;
	}

	figure {
		inline-size: 2rem;
		block-size: 2rem;
		margin: 0;
		padding: 0.5rem;
		background: hsl(194 25% 87%);
		box-shadow: 0 1px 3px -1px inset hsl(200 18% 81%);
		border-radius: 0.4rem;
	}

	figure > svg {
		display: block;
		inline-size: 100%;
		block-size: 100%;
	}

	private-call {
		font-weight: 700;
	}

	button {
		font-family: inherit;
		font-size: 1rem;
		padding: 0.25rem 0.5rem;
		border-radius: 0.4rem;
		border: none;
		color: hsl(214 29% 19%);
		background: hsl(198 28% 92%);
		box-shadow: 0 2px hsl(198 25% 85%);
		transition-property: background, translate, box-shadow;
		transition-duration: 0.1s;
		transition-timing-function: ease-out;
	}

	button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	button[disabled] {
		opacity: 0.7;
	}

	button:active {
		translate: 0 2px;
		background: hsl(194 25% 87%);
		box-shadow: 0 0 hsl(194 25% 87%);
	}
</style>
