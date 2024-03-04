import { browser } from '$app/environment';

if (browser && !customElements.get('frame-by-frame-svg')) {
	console.log('err');
	const template = document.createElement('template');
	template.innerHTML = `
  <style>
    :host {
      pointer-events: none;
      position: absolute;
      translate: -50% -50%;
    } 
    </style>
  <slot>
    <svg width="40" height="40" viewBox="0 0 100 100">
      <g>
        <path style="transform: translate(100px, 0px)" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 48 47 C 49 53 49 53 53 54 49 56 49 56 48 63 47 56 47 56 43 54 47 53 47 53 48 47" />
        <path style="transform: translate(200px, 0px)" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 48 34 C 51 51 51 51 63 53 50 56 50 56 49 71 46 56 46 56 34 54 45 50 45 50 48 34 M 38 43 Z M 60 60 Z M 56 65 Q 57 66 56 67 55 66 56 65" />
        <path style="transform: translate(300px, 0px)" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 46 26 C 51 48 51 48 70 51 51 55 51 55 47 78 43 55 43 55 25 51 42 47 42 47 46 26 M 61 67 Z M 34 40 Q 32 41 32 38 34 38 34 40" />
        <path style="transform: translate(400px, 0px)" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 44 28 43 15 M 73 50 82 49 M 47 67 48 82 M 26 51 13 52 M 61 69 Z M 23 36 Z" />
        <path style="transform: translate(500px, 0px)" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 43 17 42 13 M 83 48 88 47 M 50 82 51 87 M 12 53 6 54" />
      </g>
    </svg>
  </slot>
  `;

	class FrameByFrameSVG extends HTMLElement {
		constructor() {
			super();

			this.attachShadow({ mode: 'open' });

			this.handlePointerdown = this.handlePointerdown.bind(this);
			this.handleSlotchange = this.handleSlotchange.bind(this);
		}

		handlePointerdown(e) {
			const { shadowRoot } = this;
			const { host } = shadowRoot;
			const { pageX: left, pageY: top } = e;
			host.style.setProperty('left', `${left}px`);
			host.style.setProperty('top', `${top}px`);

			const svg =
				shadowRoot
					.querySelector('slot')
					.assignedElements()
					.find((d) => d.tagName === 'svg') || shadowRoot.querySelector('svg');

			const group = svg.querySelector('g');

			const { width } = svg.viewBox.baseVal;
			const frames = [...group.children].length + 1;
			const transform = `translate(${width * frames * -1}px, 0px)`;
			const speed = +this.getAttribute('speed') || 60;
			const delay = +this.getAttribute('delay') || 60;
			const duration = speed * frames;
			const easing = `steps(${frames})`;

			const keyframes = [
				{
					transform: 'translate(0px, 0px)'
				},
				{
					transform
				}
			];

			const options = {
				duration,
				delay,
				easing,
				fill: 'backwards'
			};

			group.animate(keyframes, options);
		}

		handleSlotchange() {
			const { shadowRoot } = this;

			const svg = shadowRoot
				.querySelector('slot')
				.assignedElements()
				.find((d) => d.tagName === 'svg');

			if (svg) {
				const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

				const { width } = svg.viewBox.baseVal;

				[...svg.children].forEach((child, i) => {
					child.style.setProperty('transform', `translate(${width * (i + 1)}px, 0px)`);

					const orphan = child.parentNode.removeChild(child);
					group.appendChild(orphan);
				});

				svg.appendChild(group);
			}
		}

		connectedCallback() {
			const { shadowRoot } = this;
			shadowRoot.appendChild(template.content.cloneNode(true));

			const slot = shadowRoot.querySelector('slot');
			slot.addEventListener('slotchange', this.handleSlotchange);

			document.documentElement.addEventListener('pointerdown', this.handlePointerdown);
		}

		disconnectedCallback() {
			document.documentElement.removeEventListener('pointerdown', this.handlePointerdown);
		}
	}

	customElements.define('frame-by-frame-svg', FrameByFrameSVG);
}
