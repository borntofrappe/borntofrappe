<script>
  import { onMount } from "svelte";

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();

  let pressed = $state(false);
  onMount(() => {
    if (document.firstElementChild?.getAttribute("data-theme") === "dark") {
      pressed = true;
    }
  });

  const toggleTheme = () => {
    const theme = !pressed ? "dark" : "light";

    pressed = !pressed;
    document.firstElementChild?.setAttribute("data-theme", theme);
    localStorage.setItem("theme-preference", theme);
  };
</script>

<div>
  <header>
    <button
      aria-label="Toggle dark theme"
      aria-live="polite"
      aria-pressed={pressed}
      onclick={toggleTheme}
    >
      <svg viewBox="-16 -16 32 32" width="32" height="32">
        <defs>
          <circle id="toggle-theme-circle" r="8.5" />
          <mask id="toggle-theme-mask">
            <use href="#toggle-theme-circle" fill="white" />
            <use
              class="moon"
              transform="translate(12 -2)"
              x="7.35"
              y="-5.65"
              href="#toggle-theme-circle"
              fill="black"
            />
          </mask>
        </defs>
        <g fill="currentColor">
          <g class="sun-beams">
            <g transform="rotate(0)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(45)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(90)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(135)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(180)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(-135)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(-90)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
            <g transform="rotate(-45)">
              <circle transform="translate(0 -10)" r="1.4" />
            </g>
          </g>
          <g mask="url(#toggle-theme-mask)">
            <use
              class="sun"
              transform="scale(0.7)"
              href="#toggle-theme-circle"
            />
          </g>
        </g>
      </svg>
    </button>
  </header>
  {@render children()}
</div>

<style>
  div {
    max-inline-size: 70ch;
    padding: var(--space-s);
  }

  div > :global(* + *) {
    margin-block-start: var(--space-s);
  }

  header {
    display: flex;
    justify-content: end;
  }

  button {
    --size: 1.9rem;

    color: inherit;
    background: none;
    border: none;
    padding: 0;

    inline-size: var(--size);
    block-size: var(--size);
    border-radius: 50%;

    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 5px;
    }

    svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
    }
  }

  @media (hover: none) {
    button {
      --size: 2.6rem;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    button:hover {
      animation: fret 0.5s cubic-bezier(0.5, 0.75, 0.75, 1.25);
    }

    @keyframes fret {
      20%,
      60% {
        rotate: 5deg;
      }

      50% {
        scale: 1.15;
      }

      40%,
      80% {
        rotate: -5deg;
      }
    }

    svg {
      --duration: 0.5s;
      --base-delay: 0.1s;
      --stagger-delay: 0.05s;
      --ease-in-out: cubic-bezier(0.5, -0.1, 0.1, 1.5);
      --ease-out: cubic-bezier(0.5, 0.75, 0.75, 1.25);
    }

    svg .sun {
      transition: transform var(--duration) var(--ease-in-out);
      transform: scale(0.7);
    }
    svg .moon {
      transition: transform var(--duration) var(--ease-in-out);
      transform: translate(12px, -2px);
    }

    svg .sun-beams {
      transition: opacity 0s var(--base-delay) step-end;
      opacity: 1;
    }

    svg .sun-beams circle {
      transition: transform var(--duration) var(--ease-out);
      transform: translate(0px, -10px);
    }

    :global([data-theme="dark"]) svg .sun {
      transform: scale(1);
    }

    :global([data-theme="dark"]) svg .moon {
      transform: translate(0px, 0px);
      transition-delay: var(--base-delay);
    }

    :global([data-theme="dark"]) svg .sun-beams {
      opacity: 0;
    }

    :global([data-theme="dark"]) svg .sun-beams circle {
      transition-timing-function: var(--ease-in-out);
      transform: translate(0px, 0px);
    }

    :global([data-theme="dark"]) svg .sun-beams circle {
      transition-timing-function: var(--ease-in-out);
      transform: translate(0px, 0px);
    }

    svg .sun-beams g:nth-child(1) circle {
      transition-delay: calc(var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(2) circle {
      transition-delay: calc(2 * var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(3) circle {
      transition-delay: calc(3 * var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(4) circle {
      transition-delay: calc(4 * var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(5) circle {
      transition-delay: calc(5 * var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(6) circle {
      transition-delay: calc(6 * var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(7) circle {
      transition-delay: calc(7 * var(--stagger-delay) + var(--base-delay));
    }
    svg .sun-beams g:nth-child(8) circle {
      transition-delay: calc(8 * var(--stagger-delay) + var(--base-delay));
    }

    :global([data-theme="dark"]) svg .sun-beams g circle {
      transition-delay: 0s;
    }
  }

  div :global(:is(.link, a:not([class]))) {
    --_primary-color: var(--primary-color, hotpink);
    color: inherit;
    text-decoration: none;
    background: linear-gradient(
        to bottom,
        var(--_primary-color),
        var(--_primary-color)
      ),
      linear-gradient(to bottom, currentColor, currentColor);
    background-size:
      0% 0.2ex,
      100% 0.2ex;
    background-repeat: no-repeat;
    background-position: 0% 100%;
    transition: background-size 0.2s;

    &:hover {
      background-size: 100% 0.2ex;
    }

    &:not(:hover) {
      background-position:
        100% 100%,
        0% 100%;
    }

    &:focus-visible {
      background: none;
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
  }

  div :global(hr:not([class])) {
    color: inherit;
    block-size: 2em;
    border: none;
    background: currentColor;
    background: oklch(from currentColor l c h / 0.5);
    -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-841.46 -35.72 1682.91 78.21"><path fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M 0 19 C -21.17 29.12 -21.17 29.12 -18.08 5.87 C -34.24 -11.13 -34.24 -11.13 -11.17 -15.38 C -0.01 -36 -0.01 -36 11.16 -15.38 C 34.23 -11.13 34.23 -11.13 18.07 5.87 C 21.16 29.12 21.16 29.12 0 19" /><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M -839 0 -60 0 M 60 0 839 0" /></svg>');
    mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-841.46 -35.72 1682.91 78.21"><path fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M 0 19 C -21.17 29.12 -21.17 29.12 -18.08 5.87 C -34.24 -11.13 -34.24 -11.13 -11.17 -15.38 C -0.01 -36 -0.01 -36 11.16 -15.38 C 34.23 -11.13 34.23 -11.13 18.07 5.87 C 21.16 29.12 21.16 29.12 0 19" /><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M -839 0 -60 0 M 60 0 839 0" /></svg>');
    -webkit-mask-position: 50% 50%;
    mask-position: 50% 50%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }
</style>
