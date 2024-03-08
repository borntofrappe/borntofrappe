<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (customElements.get('count-numbers')) return;

		const template = document.createElement('template');

		template.innerHTML = `<button>Decrement</button>
        <span>0</span>
        <button>Increment</button>`;

		class CountNumbers extends HTMLElement {
			constructor() {
				super();

				const shadowRoot = this.attachShadow({ mode: 'open' });
				shadowRoot.appendChild(template.content.cloneNode(true));

				const count = shadowRoot.querySelector('span');
				const buttonDecrement = shadowRoot.querySelector('button:nth-of-type(1)');
				const buttonIncrement = shadowRoot.querySelector('button:nth-of-type(2)');

				buttonDecrement.addEventListener('click', () => {
					count.innerHTML = +count.innerHTML - 1;
				});

				buttonIncrement.addEventListener('click', () => {
					count.innerHTML = +count.innerHTML + 1;
				});
			}
		}

		customElements.define('count-numbers', CountNumbers);
	});
</script>

<count-numbers></count-numbers>
