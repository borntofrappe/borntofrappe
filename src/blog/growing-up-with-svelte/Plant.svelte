<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  /** @type { HTMLDivElement }*/
  let widget;

  /** @type { null | 'active' }*/
  let mode = $state(null);
  /** @type { number } */
  let timeout;
  const label = "Copy markup";
  const feedback = "Markup copied!";
  const delay = 2500;

  onMount(() => {
    if (!navigator.clipboard) return;

    const svg = /** @type { SVGSVGElement }*/ (widget.querySelector("svg"));

    const handleClick = async () => {
      if (mode !== null) return;

      try {
        navigator.clipboard.writeText(
          `<svg viewBox="-30 -40 60 60">
      ${svg.innerHTML}
  </svg>`
        );

        mode = "active";
        await /** @type {Promise<void>} */ (
          new Promise((resolve) => {
            timeout = setTimeout(() => {
              resolve();
              clearTimeout(timeout);
            }, delay);
          })
        );

        mode = null;
      } catch (error) {
        console.error(error);
      }
    };

    const button = /** @type {HTMLButtonElement} */ (
      widget.querySelector("button")
    );
    button.removeAttribute("disabled");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
      clearTimeout(timeout);
    };
  });
</script>

<div bind:this={widget}>
  <svg style="display: block;" viewBox="-20 -20 40 40">
    <g
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
    >
      <path d="M 0 0 C 0 -7 2 -9 9 -9 C 9 -3 8 0 0 0 Z" />
      <rect x="-10" width="20" height="6" />
      <path transform="translate(0 6)" d="M -9 0 A 9 9 0 0 0 9 0 Z" />
    </g>
  </svg>
  <button disabled aria-label={label}>
    <svg width="1em" height="1em" viewBox="-2.5 -1 25 25">
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      >
        <path d="M 10 0 0 0 0 12 M 5 5 20 5 20 23 5 23 Z" />
      </g>
    </svg>
    {#if mode !== null}
      <output transition:fade aria-live="polite">
        {feedback}
      </output>
    {/if}
  </button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  div > svg {
    max-inline-size: 16rem;
  }

  button {
    color: hsl(0 0% 97%);
    background: hsl(0 0% 20%);
    border: none;
    border-radius: 1e5px;
    inline-size: 2.5rem;
    block-size: 2.5rem;
    padding: 0.7rem;
    position: relative;
    transition-property: scale, outline-offset;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  }

  button:disabled {
    opacity: 0.5;
  }

  button:active {
    scale: 0.95;
  }

  button:focus {
    outline: 2px solid hsl(0 0% 20%);
    outline-offset: 2px;
  }

  button:focus:active {
    outline-offset: 0px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  button > svg {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }

  button > output {
    --output-offset: 0.5rem;
    position: absolute;
    inline-size: max-content;
    inset-inline-start: 50%;
    inset-block-end: 100%;
    translate: -50% 0;
    margin-block-end: var(--output-offset, 0.4rem);
  }

  button > output::after {
    content: "";
    background: inherit;
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 100%;
    translate: -50% 0%;
    inline-size: var(--output-offset, 0.4rem);
    block-size: var(--output-offset, 0.4rem);
    clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
  }

  output {
    color: inherit;
    background: inherit;
    border-radius: inherit;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
</style>
