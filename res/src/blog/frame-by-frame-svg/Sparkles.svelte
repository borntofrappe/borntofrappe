<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (customElements.get('frame-by-frame-svg')) return;

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
	});
</script>

<frame-by-frame-svg style="color: hsl(39 100% 48%);">
	<svg width="50" height="50" viewBox="0 0 100 100">
		<path
			fill="currentColor"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 43 49 Q 45 40 49 48 58 47 52 53 56 61 48 57 42 64 42 56 35 50 43 49"
		/>
		<path
			fill="none"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 38 45 Q 39 32 45 32 Q 51 33 52 43 64 41 64 46 64 50 58 54 64 61 59 66 52 69 48 63 45 72 37 70 33 68 36 57 28 56 28 49 30 44 38 45 M 46 48 47 50 50 50 49 52 50 55 46 54 44 56 44 53 42 52 45 50 46 48"
		/>
		<path
			fill="none"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 40 27 Q 45 18 49 27 M 69 36 Q 79 36 72 42 M 68 65 Q 70 72 63 71 M 38 78 Q 33 82 32 76 M 19 50 Q 16 45 22 45"
		/>
		<path
			fill="none"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 45 15 44 6 M 81 35 89 32 M 73 74 79 80 M 33 85 30 92 M 17 45 9 44"
		/>
	</svg>
</frame-by-frame-svg>
