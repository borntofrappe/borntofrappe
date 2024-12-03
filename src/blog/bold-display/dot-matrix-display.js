import { browser } from "$app/environment";

if (browser && customElements && !customElements.get("dot-matrix-display")) {
  class DotMatrixDisplay extends HTMLElement {
    constructor() {
      super();

      const pre = this.querySelector("pre");
      if (pre === null) return;

      const dot = this.getAttribute("dot") || "o";
      const matrix = this.getAttribute("matrix") || ".";
      const inset = this.inset;
      const rounding = this.rounding;

      const grid = pre.innerText.split("\n").map((row) => row.split(""));

      const width = Math.max(...grid.map((row) => row.length));
      const { length: height } = grid;
      const i = parseFloat(inset);
      const size = 1 - i * 2;
      const rx = parseFloat(rounding);

      const ids = {
        [dot]: "dot",
        [matrix]: `matrix`,
      };

      /** @type Array<{x: number, y: number, href: string}> */
      const cells = grid
        .map((row, y) =>
          row
            .map((id, x) => {
              if (ids.hasOwnProperty(id)) {
                return {
                  x,
                  y,
                  href: `#${ids[id]}`,
                };
              }
              return false;
            })
            .filter((d) => d !== false)
        )
        .flat();
      console.log(cells[0]);

      const shadowRoot = this.attachShadow({ mode: "open" });
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
            <use id="${
              ids[dot]
            }" href="#d" fill="var(--color-dot, currentColor)" />
            <use id="${
              ids[matrix]
            }" href="#d" fill="var(--color-matrix, transparent)" />
        </defs>
        <rect fill="var(--color-display, transparent)" width="${width}" height="${height}" />
        ${cells
          .map(({ x, y, href }) => `<use x="${x}" y="${y}" href="${href}" />`)
          .join("")}
    </svg>`;
    }

    static get observedAttributes() {
      return ["inset", "rounding"];
    }

    get inset() {
      return this.getAttribute("inset") || "0.2";
    }

    set inset(n) {
      this.setAttribute("inset", n);
    }

    get rounding() {
      return this.getAttribute("rounding") || "0.5";
    }

    set rounding(n) {
      this.setAttribute("rounding", n);
    }

    /**
     *
     * @param { string } name
     * @param { string } oldValue
     * @param { string } newValue
     * @returns
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (!this.shadowRoot) return;

      const d = /** @type { SVGRectElement } */ (
        this.shadowRoot.querySelector(`#d`)
      );

      if (name === "inset") {
        const size = 1 - parseFloat(newValue) * 2;

        d.setAttribute("x", newValue);
        d.setAttribute("y", newValue);
        d.setAttribute("width", size.toString());
        d.setAttribute("height", size.toString());
      }

      if (name === "rounding") {
        d.setAttribute("rx", newValue);
      }
    }
  }

  customElements.define("dot-matrix-display", DotMatrixDisplay);
}
