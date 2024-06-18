import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('dot-matrix-display')) {
	class DotMatrixDisplay extends HTMLElement {
		constructor() {
			super();

			const pre = this.querySelector('pre');
			if (pre === null) return;

			const dot = this.getAttribute('dot') || 'o';
			const matrix = this.getAttribute('matrix') || '.';
			const inset = this.inset;
			const rounding = this.rounding;

			const grid = pre.innerText.split('\n').map((row) => row.split(''));

			const width = Math.max(...grid.map((row) => row.length));
			const { length: height } = grid;
			const i = parseFloat(inset);
			const size = 1 - i * 2;
			const rx = parseFloat(rounding);

			const ids = {
				[dot]: 'dot',
				[matrix]: `matrix`
			};

			const cells = grid
				.map((row, y) =>
					row
						.map((id, x) => {
							if (ids.hasOwnProperty(id)) {
								return {
									x,
									y,
									href: `#${ids[id]}`
								};
							}
						})
						.filter((d) => d)
				)
				.flat();

			const shadowRoot = this.attachShadow({ mode: 'open' });
			shadowRoot.innerHTML = `
    <style>
        :host {
            display: block;
        }
        :host([hidden]) {
            display: none;
        }
        svg {
          display: block;
        }
    </style>
    <svg viewBox="0 0 ${width} ${height}">
        <defs>
            <rect id="d" x="${i}" y="${i}" width="${size}" height="${size}" rx="${rx}" />
            <use id="${ids[dot]}" href="#d" fill="var(--color-dot, currentColor)" />
            <use id="${ids[matrix]}" href="#d" fill="var(--color-matrix, var(--color-dot))" />
        </defs>
        <rect fill="var(--color-display, none)" width="${width}" height="${height}" />
        ${cells.map(({ x, y, href }) => `<use x="${x}" y="${y}" href="${href}" />`).join()}
    </svg>`;
		}

		static get observedAttributes() {
			return ['inset', 'rounding'];
		}

		get inset() {
			return this.getAttribute('inset') || '0.2';
		}

		set inset(n) {
			return this.setAttribute('inset', n);
		}

		get rounding() {
			return this.getAttribute('rounding') || '0.5';
		}

		set rounding(n) {
			return this.setAttribute('rounding', n);
		}

		attributeChangedCallback(name, _, newValue) {
			if (!this.shadowRoot) return;

			const d = this.shadowRoot.querySelector(`#d`);

			if (name === 'inset') {
				const i = parseFloat(newValue);
				const size = 1 - i * 2;

				d.setAttribute('x', i);
				d.setAttribute('y', i);
				d.setAttribute('width', size);
				d.setAttribute('height', size);
			}

			if (name === 'rounding') {
				const rx = parseFloat(newValue);

				d.setAttribute('rx', rx);
			}
		}
	}

	customElements.define('dot-matrix-display', DotMatrixDisplay);
}
