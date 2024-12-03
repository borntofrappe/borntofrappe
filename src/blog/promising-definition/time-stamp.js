import { browser } from "$app/environment";

if (browser && customElements && !customElements.get("time-stamp")) {
  class TimeStamp extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `<style>
            :host {
                --_color: var(--color-dark, hsl(0 0% 30%));
                --_background: var(--color-light, hsl(0 0% 97%));
                max-inline-size: max-content;
                margin-inline: auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 0.75rem;
                color: var(--_color);
                background: var(--_background);
                border-radius: 0.5rem;
                box-shadow: 0 1px 5px -2px hsl(0 0% 0% / 0.3);
            }
        
            svg {
                inline-size: 1.5rem;
                block-size: 1.5rem;
                padding: 0.5rem;
                border-radius: 1e5px;
                background: inherit;
                box-shadow: inset 0 0 5px -2px hsl(0 0% 0% / 0.3);
            }
        
            time {
                font-weight: 700;
            }
        </style>
        <svg width="1em" height="1em" viewBox="-5.25 -6 10.5 10.5">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <circle r="4" />
                <path d="M -1 -5.5 1 -5.5 M 0 -0.5 0 -2 M 3 -3 3.5 -3.5" />
            </g>
        </svg>
        <time></time>`;
    }

    connectedCallback() {
      const shadowRoot = /** @type { ShadowRoot } */ (this.shadowRoot);
      const { format } = new Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        fractionalSecondDigits: 3,
      });

      const date = new Date();

      const time = /** @type { HTMLTimeElement } */ (
        shadowRoot.querySelector("time")
      );
      time.setAttribute("datetime", date.toISOString());
      time.textContent = format(date);
    }
  }

  customElements.define("time-stamp", TimeStamp);
}
