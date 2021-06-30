<script>
  import icons from '$lib/icons.js';
  import { observe } from '$lib/utils.js';

  const satellites = ['world', 'editor', 'running', 'flag', 'gaming'];

  const colors = [
    'hsl(350, 100%, 8%)',
    'hsl(347, 100%, 19%)',
    'hsl(345, 95%, 27%)',
    'hsl(345, 96%, 33%)',
    'hsl(342, 92%, 39%)',
    'hsl(340, 85%, 46%)',
    'hsl(340, 90%, 55%)',
    'hsl(339, 90%, 67%)',
    'hsl(336, 93%, 77%)',
    'hsl(335, 100%, 86%)',
    'hsl(330, 100%, 92%)',
  ];
</script>

<section
  class:observed={false}
  use:observe
  class="max-width-container"
  id="about"
>
  <h2>Almost forgot</h2>
  <p>
    I'm <mark>Gabriele Corti</mark>, coming to you from Europe and a couple of
    hours after Greenwich time.
  </p>
  <p>
    Outside of VSCode, you'll find me running, watching the highlight of an F1
    race, or enjoying a dated video game. Depends on the season.
  </p>

  <svg aria-hidden="true" viewBox="-50 -50 100 50" width="200" height="100">
    <defs>
      <clipPath id="clip-planet">
        <circle r="30" />
      </clipPath>

      <mask id="mask-satellites">
        <rect
          x="-50"
          y="-50"
          width="100"
          height="100"
          fill="hsl(0, 0%, 100%)"
        />
        <g fill="hsl(0, 0%, 0%)">
          <g class="rotate">
            {#each satellites as _, index}
              <g
                transform="rotate({(360 / satellites.length) *
                  index *
                  -1}) translate(0 -42)"
              >
                <circle r="7.5" />
              </g>
            {/each}
          </g>
        </g>
      </mask>
    </defs>

    <g clip-path="url(#clip-planet)">
      <g transform="translate(0 -70)">
        {#each colors as color, index}
          <ellipse
            style="color: {color}; color: var(--primary-{index});"
            fill="currentColor"
            stroke="none"
            cx="0"
            cy="70"
            rx={35 + (15 / colors.length) * index}
            ry="33"
            transform="scale({1 - (0.65 / colors.length) * index})"
          />
        {/each}
      </g>
    </g>
    <circle
      r="30"
      style="color: {colors[colors.length - 1]}; color: var(--grey-10);"
      fill="none"
      stroke="currentColor"
      stroke-width="0.2"
    />

    <g mask="url(#mask-satellites)">
      <circle
        r="42"
        stroke-dasharray="1 2"
        stroke-linecap="round"
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
      />
    </g>

    <g class="rotate">
      {#each satellites as satellite, index}
        <g
          transform="rotate({(360 / satellites.length) *
            index *
            -1}) translate(0 -42) rotate({(360 / satellites.length) * index})"
        >
          <g transform="scale(-1 1)">
            <g class="rotate">
              <g transform="scale(-1 1)">
                <circle
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  r="7.5"
                />
                <g transform="translate(-4 -4)">
                  {@html icons[satellite].replace(/1em/g, '8')}
                </g>
              </g>
            </g>
          </g>
        </g>
      {/each}
    </g>
  </svg>
</section>

<style>
  section {
    --elevation: 2em;
  }

  section p:first-of-type {
    margin-top: 2em;
    margin-top: var(--elevation);
  }

  section h2 {
    text-align: center;
  }

  section mark {
    color: inherit;
    background: none;
    font-weight: 700;
    position: relative;
    z-index: 0;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) section#about mark) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] section#about mark) {
    font-weight: 600;
  }

  section mark::after {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(339, 90%25, 67%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(336, 93%25, 77%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
    position: absolute;
    bottom: 2em;
    bottom: var(--elevation);
    right: 0;
    width: 3em;
    height: 3em;
    transform: translate(50%, 50%) rotate(30deg);
    z-index: -5;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) section#about mark::after) {
      content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
    }
  }

  :global(html[data-preference='dark'] section#about mark::after) {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
  }

  @supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)) {
    section mark::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 3em;
      height: 2em;
      height: var(--elevation);
      background: hsl(330, 100%, 92%);
      background: var(--primary-10);
      z-index: -5;
    }

    @media (prefers-color-scheme: dark) {
      :global(html:not([data-preference]) section#about mark::before) {
        opacity: 0.2;
      }
    }

    :global(html[data-preference='dark'] section#about mark::before) {
      opacity: 0.2;
    }

    section mark::before {
      clip-path: polygon(100% 0%, 100% 100%, 100% 100%);
      animation: clip-polygon 8s var(--ease-in-out-sine) infinite alternate
        paused;
      animation: clip-polygon 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
        alternate paused;
    }

    section mark::after {
      transform: translate(50%, 50%) rotate(0deg);
      animation: rotate-ufo 8s var(--ease-in-out-sine) infinite alternate paused;
      animation: rotate-ufo 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
        alternate paused;
    }

    section.observed mark::before,
    section.observed mark::after {
      animation-play-state: running;
    }

    @keyframes clip-polygon {
      10% {
        clip-path: polygon(100% 0%, 70% 100%, 0% 100%);
      }
      20%,
      100% {
        clip-path: polygon(100% 0%, 90% 100%, 10% 100%);
      }
    }

    @keyframes rotate-ufo {
      10% {
        transform: translate(50%, 50%) rotate(40deg);
      }
      20%,
      100% {
        transform: translate(50%, 50%) rotate(25deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      section.observed mark::before,
      section.observed mark::after {
        animation-play-state: paused;
      }

      section.observed mark::before {
        clip-path: polygon(100% 0%, 90% 100%, 10% 100%);
      }

      section.observed mark::after {
        transform: translate(50%, 50%) rotate(25deg);
      }
    }
  }

  section > svg {
    margin-left: auto;
    margin-right: auto;
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
    max-width: 27rem;
    width: 90%;
    height: auto;
  }

  section > svg .rotate {
    animation: rotate-orbit 200s linear infinite;
    animation-play-state: paused;
  }

  section.observed > svg .rotate {
    animation-play-state: running;
  }

  @keyframes rotate-orbit {
    to {
      transform: rotate(1turn);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    section.observed > svg .rotate {
      animation-play-state: paused;
    }
  }
</style>
