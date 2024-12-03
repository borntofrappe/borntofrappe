import { browser } from "$app/environment";

if (browser && customElements && !customElements.get("update-review")) {
  const template = document.createElement("template");
  template.innerHTML = `<style>
	:host {
		box-sizing: border-box;
		color: hsl(210 17% 98%);
		background: hsl(210 9% 31%);
		display: block;
		inline-size: max-content;
		max-inline-size: 30ch;
		margin-inline: auto;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
	}

	:host(.update) {
		background-origin: content-box;
		background-repeat: no-repeat;
		background-size: 2.8rem;
		background-position: 100% 0%;
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" style="display: block;" opacity="0.15" viewBox="-9 -9 18 18">\
    <defs>\
        <path id="sparkle" d="M -5 0 C -3 0 0 -3.25 0 -5.5 0 -3.25 3 0 5 0 3 0 0 3.25 0 5.5 0 3.25 -3 0 -5 0 Z" />\
    </defs>\
    <g fill="hsl(210 17% 98%)" stroke="hsl(210 17% 98%)" stroke-linecap="round" stroke-linejoin="round">\
        <use transform="translate(-2 2.5)" href="%23sparkle" />\
        <use transform="translate(-6 -6) scale(0.4)" stroke-width="1.4" href="%23sparkle" />\
        <use transform="translate(5 -3) scale(0.6)" stroke-width="1.2" href="%23sparkle" />\
    </g>\
  </svg>');
	}

	:host-context(main) {
		box-shadow: 0 0.2rem 0.5rem -0.25rem hsl(210 11% 15%);
	}

	::slotted(p) {
		background: hsl(210 11% 35%);
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
	}

	::slotted(*) {
		margin: 0;
	}

	svg {
		display: block;
		margin-block: 0.75rem;
	}

	::slotted(h2) {
		font-size: 1.4rem !important;
		font-weight: 400;
	}

	svg {
		block-size: 1.5rem;
		inline-size: auto;
	}

	::slotted(p) {
		font-style: italic;
		font-size: 0.95rem;
		line-height: 1.5;
	}
</style>
<slot name="title"><h2>Title</h2></slot>
<svg part="stars" style="display: block" width="5em" height="1em" viewBox="0 0 5 1">
	<defs>
		<symbol id="icon-star" viewBox="-24.373531341552734 -25.53499984741211 48.74706268310547 46.54783630371094">
			<path transform="scale(0.83)" fill="currentColor" d="M 0 15 C -17.64 24.27 -17.64 24.27 -14.27 4.63 -28.54 -9.28 -28.54 -9.28 -8.82 -12.14 0 -30 0 -30 8.82 -12.14 28.54 -9.28 28.54 -9.28 14.27 4.63 17.64 24.27 17.64 24.27 0 15" />
		</symbol>
	</defs>
	<use width="1" height="1" href="#icon-star" />
	<use x="1" width="1" height="1" href="#icon-star" />
	<use x="2" width="1" height="1" href="#icon-star" />
	<use x="3" width="1" height="1" href="#icon-star" />
	<use x="4" width="1" height="1" href="#icon-star" />
</svg>
<slot name="description"><p>A short description</p></slot>`;

  class UpdateReview extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      const clone = template.content.cloneNode(true);
      shadowRoot.appendChild(clone);
    }

    connectedCallback() {
      const shadowRoot = /** @type { ShadowRoot } */ (this.shadowRoot);
      const starElements = /** @type { NodeListOf<SVGUseElement> } */ (
        shadowRoot.querySelectorAll("svg use")
      );
      const stars =
        (this.hasAttribute("stars") && this.getAttribute("stars")) || "5";

      starElements.forEach((starElement, i) => {
        if (i >= +stars) {
          starElement.style.setProperty("opacity", "0");
        }
      });
    }
  }

  customElements.define("update-review", UpdateReview);
}
