<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (customElements.get('random-number-generator')) return;

		class RandomNumberGenerator extends HTMLElement {
			constructor() {
				super();

				const shadowRoot = this.attachShadow({ mode: 'open' });

				const style = document.createElement('style');
				style.innerHTML = `:host {
    --_color-foreground: var(--color-foreground, hsl(0 0% 99%));
    --_color-background: var(--color-background, hsl(0 0% 10%));
    color: var(--_color-foreground);
    background: var(--_color-background);
    display: block;
    max-inline-size: max-content;
    margin-inline: auto;
    padding: 1.5rem 2.2rem;
    font-family: system-ui;
    text-align: center;
    border-radius: 1rem
}

:host > * + * {
    margin-block-start: 0.5rem;
}

h1 {
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: 1px;
}

button {
    color: var(--_color-background);
    background: var(--_color-foreground);
    border: none;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 1e5px;
    display: flex;
    align-items: center;
    transition: scale 0.1s cubic-bezier(0.37, 0, 0.63, 1);
}

button:active {
    scale: 0.975;
}

button > svg {
    margin-inline-start: 1ch;
}`;

				const title = document.createElement('h1');
				title.setAttribute('role', 'status');
				title.setAttribute('aria-live', 'polite');
				title.textContent = this.number;

				const button = document.createElement('button');
				button.textContent = 'Generate';
				button.innerHTML = `<span>Generate</span>
<svg width="1em" height="1em" viewBox="-5 -5 10 10">
    <g transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <path transform="translate(2 0)" d="M 0 4.5 A 5.5 5.5 0 0 0 0 -4.5 M 0 -4.5 2.5 -4.5 M 0 -4.5 0 -2" />
        <path transform="scale(-1 -1) translate(2 0)" d="M 0 4.5 A 5.5 5.5 0 0 0 0 -4.5 M 0 -4.5 2.5 -4.5 M 0 -4.5 0 -2" />
    </g>
</svg>`;

				button.addEventListener('click', () => {
					const min = this.hasAttribute('min') ? +this.getAttribute('min') : 0;
					const max = this.hasAttribute('max') ? +this.getAttribute('max') : 100;
					this.number = Math.floor(Math.random() * (max - min) + min);
				});

				shadowRoot.appendChild(style);
				shadowRoot.appendChild(title);
				shadowRoot.appendChild(button);
			}

			get number() {
				return this.getAttribute('number');
			}

			set number(n) {
				this.setAttribute('number', n);
			}

			static get observedAttributes() {
				return ['number'];
			}

			attributeChangedCallback(name, oldValue, newValue) {
				this.shadowRoot.querySelector('h1').textContent = newValue;
			}
		}

		customElements.define('random-number-generator', RandomNumberGenerator);
	});
</script>

<random-number-generator
	style="--color-foreground: hsl(249 11% 12%); --color-background: hsl(0 0% 94%);"
	number="-8"
	min="0"
	max="100"
></random-number-generator>
