import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('typewriter-effect')) {
	class TypewriterEffect extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.requestID = null;
			this.timeoutID = null;

			const separator = this.getAttribute('separator') || '.';
			let text = this.textContent.trim();
			if (this.hasAttribute('lines')) {
				text += `${separator}${this.getAttribute('lines')}`;
			}
			const textContents = text.split(separator);

			const rate = +this.getAttribute('rate') || 100;
			const delay = +this.getAttribute('pause') || 3000;

			let direction = -1;
			let counter = direction === 1 ? 0 : rate;
			let index = 0;
			let textContent = textContents[index];

			const animate = () => {
				counter += direction;
				const i = Math.floor((counter / rate) * textContent.length);
				this.textContent = textContent.slice(0, i);
				if (counter === rate || counter === 0) {
					direction *= -1;
					if (direction === 1) {
						index = (index + 1) % textContents.length;
						textContent = textContents[index];
						this.requestID = requestAnimationFrame(animate);
					} else {
						cancelAnimationFrame(this.requestID);
						this.timeoutID = setTimeout(() => {
							this.requestID = requestAnimationFrame(animate);
						}, delay);
					}
				} else {
					this.requestID = requestAnimationFrame(animate);
				}
			};

			this.timeoutID = setTimeout(() => {
				this.requestID = requestAnimationFrame(animate);
			}, delay);
		}

		disconnectedCallback() {
			cancelAnimationFrame(this.requestID);
			clearTimeout(this.timeoutID);
		}
	}

	customElements.define('typewriter-effect', TypewriterEffect);
}
