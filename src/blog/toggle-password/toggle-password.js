// import { browser } from "$app/environment";
import { browser } from "$app/environment";

if (browser && customElements && !customElements.get("toggle-password")) {
  class TogglePassword extends HTMLElement {
    constructor() {
      super();

      const input = /** @type { HTMLInputElement | null } */ (
        this.querySelector('input[type="password"]')
      );
      if (input === null) return;

      const status = document.createElement("div");
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      status.classList.add("visually-hidden");

      const button = document.createElement("button");
      button.innerHTML = `<span class="visually-hidden">Toggle password visibility</span>
    <svg data-pressed="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
      <path d="M 228 175 a 8 8 0 0 1 -10.92 -3 l -19 -33.2 a 123.23 123.23 0 0 1 -36.08 16.66 l 5.87 35.22 a 8 8 0 0 1 -6.58 9.21 a 8.4 8.4 0 0 1 -1.29 0.11 a 8 8 0 0 1 -7.88 -6.69 l -5.77 -34.58 a 133.06 133.06 0 0 1 -36.68 0 l -5.77 34.58 a 8 8 0 0 1 -7.9 6.69 a 8.4 8.4 0 0 1 -1.32 -0.11 a 8 8 0 0 1 -6.58 -9.21 l 5.9 -35.22 a 123.23 123.23 0 0 1 -36.06 -16.69 l -18.94 33.23 a 8 8 0 1 1 -13.94 -8 l 20 -35 a 153.47 153.47 0 0 1 -19.3 -20 a 8 8 0 1 1 12.46 -10 c 16.6 20.54 45.64 45 89.78 45 s 73.18 -24.49 89.78 -45 a 8 8 0 1 1 12.44 10 a 153.47 153.47 0 0 1 -19.3 20 l 20 35 a 8 8 0 0 1 -2.92 11 z" />
    </svg>
    <svg data-pressed="true" display="none" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
      <path d="M 247.31 124.76 c -0.35 -0.79 -8.82 -19.58 -27.65 -38.41 c -25.09 -25.09 -56.78 -38.35 -91.66 -38.35 s -66.57 13.26 -91.66 38.35 c -18.83 18.83 -27.34 37.65 -27.65 38.41 a 8 8 0 0 0 0 6.5c 0.35 0.79 8.82 19.57 27.65 38.4c 25.09 25.08 56.78 38.34 91.66 38.34s 66.57 -13.26 91.66 -38.34c 18.83 -18.83 27.3 -37.61 27.65 -38.4 a 8 8 0 0 0 0 -6.5 z m -119.31 67.24 c -30.78 0 -57.67 -11.19 -79.93 -33.25 a 133.47 133.47 0 0 1 -23.07 -30.75 a 133.33 133.33 0 0 1 23.07 -30.75c 22.26 -22.06 49.15 -33.25 79.93 -33.25s 57.67 11.19 79.93 33.25 a 133.46 133.46 0 0 1 23.12 30.75 c -7.21 13.46 -38.62 64 -103.05 64 z m 0 -112 a 48 48 0 1 0 48 48 a 48.05 48.05 0 0 0 -48 -48 z m 0 80 a 32 32 0 1 1 32 -32 a 32 32 0 0 1 -32 32 z" />
    </svg>`;

      const iconHidden = /** @type { SVGSVGElement } */ (
        button.querySelector('[data-pressed="false"]')
      );
      const iconVisible = /** @type { SVGSVGElement } */ (
        button.querySelector('[data-pressed="true"]')
      );

      button.setAttribute("type", "button");
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        const typePassword = input.getAttribute("type") === "password";
        if (typePassword) {
          input.setAttribute("type", "text");

          button.setAttribute("aria-pressed", "true");
          iconHidden.style.display = "none";
          iconVisible.style.display = "initial";

          status.textContent = "Password is visible";
        } else {
          input.setAttribute("type", "password");

          button.setAttribute("aria-pressed", "false");
          iconHidden.style.display = "initial";
          iconVisible.style.display = "none";

          status.textContent = "Password is hidden";
        }
      });

      this.appendChild(button);
      this.appendChild(status);
    }
  }

  customElements.define("toggle-password", TogglePassword);
}
