<script>
  import { onMount } from 'svelte';

  let button;

  onMount(() => {
    function setPreference(preference) {
      document
        .querySelector('html')
        .setAttribute('data-preference', preference);
      localStorage.setItem('color-scheme', preference);
    }

    if (CSS && CSS.supports('--primary-6: hotpink')) {
      const button = document.querySelector('button');
      button.removeAttribute('disabled');

      const prefersColorScheme = matchMedia('(prefers-color-scheme: dark)');

      button.addEventListener('click', () =>
        setPreference(
          localStorage.getItem('color-scheme') === 'dark' ? 'light' : 'dark'
        )
      );
      prefersColorScheme.addEventListener('change', ({ matches }) =>
        setPreference(matches ? 'dark' : 'light')
      );
    }
  });
</script>

<button bind:this={button} disabled id="toggle-color">
  <span class="visually-hidden">Toggle color scheme</span>

  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-80 -80 160 160"
    width="1em"
    height="1em"
  >
    <defs>
      <clipPath id="clip-path-toggle">
        <circle r="80" />
      </clipPath>
    </defs>
    <circle fill="none" stroke="currentColor" stroke-width="10" r="75" />
    <g clip-path="url(#clip-path-toggle)">
      <g transform="translate(0 80)">
        <g class="scale">
          <g class="rotate">
            <g transform="translate(0 -80)">
              <g transform="scale(-1 1)">
                <g class="rotate">
                  <g transform="scale(-1 1)">
                    <g fill="currentColor">
                      <circle r="22" />
                      <circle transform="translate(0 41.2)" r="8.8" />
                      <circle
                        transform="rotate(45) translate(0 41.2)"
                        r="8.8"
                      />
                      <circle
                        transform="rotate(90) translate(0 41.2)"
                        r="8.8"
                      />
                      <circle
                        transform="rotate(135) translate(0 41.2)"
                        r="8.8"
                      />
                      <circle
                        transform="rotate(180) translate(0 41.2)"
                        r="8.8"
                      />
                      <circle
                        transform="rotate(225) translate(0 41.2)"
                        r="8.8"
                      />
                      <circle
                        transform="rotate(270) translate(0 41.2)"
                        r="8.8"
                      />
                      <circle
                        transform="rotate(315) translate(0 41.2)"
                        r="8.8"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(0 80)">
              <g transform="scale(-1 1)">
                <g class="rotate">
                  <g transform="scale(-1 1)">
                    <g class="scale">
                      <g fill="currentColor" stroke="none">
                        <path
                          d="M-5.435-27.43A28 28 0 000 28.02 28 28 0 0027.435 5.45 28 28 0 0122 6.019a28 28 0 01-27.435-33.43z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</button>

<style>
  button {
    width: 2rem;
    height: 2rem;
    color: inherit;
    padding: 0;
    background: none;
    border: none;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }

  button svg {
    display: block;
    width: 100%;
    height: auto;
  }

  button:not(:disabled):focus {
    outline: 0.15rem dashed currentColor;
  }

  button:not(:disabled):hover {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  button svg .rotate {
    transition: transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: transform var(--transition-duration) var(--ease-in-out-sine);
  }

  button svg .scale {
    transition: transform 0.25s step-end;
    transition: transform var(--transition-duration) step-end;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) button#toggle-color svg .rotate) {
      transform: rotate(180deg);
    }

    :global(html:not([data-preference]) button#toggle-color svg .scale) {
      transform: scaleX(-1);
    }
  }

  :global(html[data-preference='dark'] button#toggle-color svg .rotate) {
    transform: rotate(180deg);
  }

  :global(html[data-preference='dark'] button#toggle-color svg .scale) {
    transform: scaleX(-1);
  }
</style>
