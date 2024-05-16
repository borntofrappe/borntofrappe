import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('svg-grid')) {
	class SVGGrid extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.children.length !== 1 || this.firstElementChild.tagName !== 'PRE') return;

			const textContent = this.firstElementChild.textContent;
			const grid = textContent.split('\n').map((row) => row.split(''));
			const columns = Math.max(...grid.map((row) => row.length));
			const rows = grid.length;
			const cells = grid
				.map((row, y) =>
					row.map((c, x) => ({
						x,
						y,
						c
					}))
				)
				.flat()
				.filter(({ c }) => c === 'x');

			this.innerHTML += `<svg viewBox="0 0 ${columns} ${rows}">
            <defs>
                <rect id="grid-square" x="0.1" y="0.1" width="0.8" height="0.8" rx="0.2" />
                <pattern id="grid-pattern" width="1" height="1" patternUnits="userSpaceOnUse">
                    <use fill="currentColor" href="#grid-square" />
                </pattern>
            </defs>
            <rect opacity="0.1" fill="url(#grid-pattern)" width="${columns}" height="${rows}" />
            <g fill="currentColor">
                ${cells.map(({ x, y }) => `<use x="${x}" y="${y}" href="#grid-square" />`).join('')}
            </g>
        </svg>`;
		}
	}

	customElements.define('svg-grid', SVGGrid);
}
