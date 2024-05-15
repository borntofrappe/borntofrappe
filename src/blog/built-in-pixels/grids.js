import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('top-down-grid')) {
	class TopDownGrid extends HTMLPreElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.firstElementChild && this.firstElementChild.tag === 'svg') return;

			const textContent = this.textContent;
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

			this.innerHTML = `<svg viewBox="0 0 ${columns} ${rows}">
			<g fill="currentColor">
				${cells.map(({ x, y }) => `<rect x="${x}" y="${y}" width="1" height="1" />`)}
			</g>
		</svg>`;
		}
	}

	class IsometricGrid extends HTMLPreElement {
		constructor() {
			super();
		}

		connectedCallback() {
			if (this.firstElementChild && this.firstElementChild.tag === 'svg') return;

			const textContent = this.textContent;
			const grid = textContent.split('\n').map((row) => row.split(''));
			const columns = Math.max(...grid.map((row) => row.length));
			const rows = grid.length;
			const cells = grid
				.map((row, y) =>
					row.map((c, x) => ({
						x: x / 2 - y / 2,
						y: y / 4 + x / 4,
						c
					}))
				)
				.flat()
				.filter(({ c }) => c === 'x');

			const width = columns / 2 + rows / 2;
			const height = columns / 4 + rows / 4;
			const x0 = ((rows - 1) / 2) * -1;

			this.innerHTML = `<svg viewBox="${x0} 0 ${width} ${height}">
			<defs>
				<path id="iso-square" d="M 0 0.25 0.5 0 1 0.25 0.5 0.5" />
			</defs>
			<g fill="currentColor">
			${cells.map(({ x, y }) => `<use x="${x}" y="${y}" href="#iso-square" />`)}
			</g>
		</svg>`;
		}
	}

	customElements.define('top-down-grid', TopDownGrid, {
		extends: 'pre'
	});

	customElements.define('isometric-grid', IsometricGrid, {
		extends: 'pre'
	});
}
