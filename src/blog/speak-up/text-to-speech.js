import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('text-to-speech') && speechSynthesis) {
	class TextToSpeech extends HTMLElement {
		constructor() {
			super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			shadowRoot.innerHTML = `
<style>
    button {
        box-sizing: border-box;
        cursor: pointer;
        vertical-align: middle;
        inline-size: 1em;
        block-size: 1em;
        padding: 0;
        margin: 0;
        color: inherit;
        background: none;
        border: none;
    }

    button > svg {
        inline-size: 100%;
        block-size: 100%;
    }

    button:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
    }
</style>
<slot></slot>
<button part="button" aria-label="Enunciate text">
<svg aria-hidden="true" width="1em" height="1em" viewBox="-5 -5 10 10">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path fill="none" d="M 2 4 A 4.6 4.6 0 0 0 2 -4" />
        <g fill="currentColor">
            <path d="M 1.5 1.5 A 1.8 1.8 0 0 0 1.5 -1.5 Z" />
            <path d="M -0.5 -2.75 -2.25 -1.25 -4.25 -1.25 A 0.25 0.25 0 0 0 -4.5 -1 L -4.5 1 A 0.25 0.25 0 0 0 -4.25 1.25 L -2.25 1.25 -0.5 2.75 Z" /> -->
        </g>
    </g>
</svg>
</button>`;
		}

		connectedCallback() {
			this.shadowRoot.querySelector('button').addEventListener('click', () => {
				const text = this.getAttribute('speech') || this.innerText;
				speechSynthesis.cancel();
				speechSynthesis.speak(new SpeechSynthesisUtterance(text));
			});
		}
	}

	customElements.define('text-to-speech', TextToSpeech);
}
