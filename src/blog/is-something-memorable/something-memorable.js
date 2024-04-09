import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('something-memorable')) {
	class SomethingMemorable extends HTMLQuoteElement {
		constructor() {
			super();
			const template = document.createElement('template');
			template.innerHTML = `<style>
            :host,
            *,
            ::slotted(*) {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
        
            :host {
                font-size: var(--_font-size, 1rem);
                line-height: 1.5;
                max-inline-size: max-content;
                margin-inline-start: auto;
                color: var(--_color-text, hsl(0 0% 20%));
                background: var(--_color-background, hsl(0 0% 95%));
                padding: var(--_padding, 0.5rem 1rem);
                border-radius: var(--_border-radius, 0rem);
                text-wrap: pretty;
            }
        
            :host > * + * {
                margin-block-start: 0.5rem;
            }
        
            ::slotted(*) {
                max-inline-size: 40ch;
            }
        
            time {
                display: block;
                text-align: end;
                font-size: var(--_font-size-small, 0.9rem);
                font-style: italic;
            }
        </style>
        <slot></slot>
        <time></time>`;

			this.format = new Intl.DateTimeFormat('en-US', {
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			}).format;

			const shadowRoot = this.attachShadow({ mode: 'open' });
			shadowRoot.appendChild(template.content.cloneNode(true));

			const time = shadowRoot.querySelector('time');
			const date = this.date ? new Date(this.date) : new Date();

			time.setAttribute('datetime', date.toISOString());
			time.textContent = this.format(date);
		}

		get date() {
			return this.getAttribute('date');
		}

		set date(dateString) {
			this.setAttribute('date', dateString);
		}

		static get observedAttributes() {
			return ['date'];
		}

		attributeChangedCallback(name, oldValue, newValue) {
			const time = this.shadowRoot.querySelector('time');
			const date = this.date ? new Date(this.date) : new Date();

			time.setAttribute('datetime', date.toISOString());
			time.textContent = this.format(date);
		}
	}

	customElements.define('something-memorable', SomethingMemorable, {
		extends: 'blockquote'
	});
}
