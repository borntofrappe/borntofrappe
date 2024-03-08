<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (customElements.get('custom-markup')) return;

		const template = document.createElement('template');

		template.innerHTML = `<button>Decrement</button>
        <span>0</span>
        <button>Increment</button>`;

		class CustomMarkup extends HTMLElement {
			constructor() {
				super();

				const shadowRoot = this.attachShadow({ mode: 'open' });
				shadowRoot.appendChild(template.content.cloneNode(true));
			}
		}

		customElements.define('custom-markup', CustomMarkup);
	});
</script>

<custom-markup></custom-markup>
