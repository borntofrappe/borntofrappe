<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (customElements.get('custom-counter')) return;

		const template = document.createElement('template');
		template.innerHTML = `<style>
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-inline: auto;
        max-inline-size: max-content;
        padding: 1rem;
        color: var(--_color-light, hsl(0 0% 90%));
        background: var(--_color-dark, hsl(0 0% 20%));
        border-radius: 1e5px;
      }
  
      button {
        font-size: 1rem;
        font-family: inherit;
        color: var(--_color-dark, hsl(0 0% 20%));
        background: var(--_color-light, hsl(0 0% 90%));
        border-radius: 1e5px;
        padding: 0.25rem 0.75rem;
        border: none;
        transition: scale 0.2s;
      }
  
      button:active {
        scale: 0.95;
      }
  
      span {
        font-size: 1.25rem;
        font-weight: 700;
      }
    </style>
    <button>Decrement</button>
    <span>0</span>
    <button>Increment</button>
  `;

		class CustomCounter extends HTMLElement {
			constructor() {
				super();
				const shadowRoot = this.attachShadow({ mode: 'open' });

				shadowRoot.appendChild(template.content.cloneNode(true));

				const counter = shadowRoot.querySelector('span');

				shadowRoot.querySelector('button:nth-of-type(1)').addEventListener('click', () => {
					counter.innerHTML = +counter.innerHTML - 1;
				});

				shadowRoot.querySelector('button:nth-of-type(2)').addEventListener('click', () => {
					counter.innerHTML = +counter.innerHTML + 1;
				});
			}
		}

		customElements.define('custom-counter', CustomCounter);
	});
</script>

<custom-counter style="--_color-light: hsl(0 0% 94%); --_color-dark: hsl(249 11% 12%);"
></custom-counter>
