<script>
  import Icons from "./Icons.svelte";
  export let items;
  export let id = "navigation";
  const { length } = items;

  const size = 470;
  const iconSize = 110;

  const rings = length + 1;
  const ring = length + 1;
  const rounds = Array(rings)
    .fill("")
    .map((v, indexRings) => {
      const delay = indexRings * 0.1;
      const translate = (size / 2.5 / rings) * (indexRings + 1);
      const particles = ring * (indexRings + 1);

      const round = Array(particles)
        .fill("")
        .map((v, indexRing) => {
          const scale = (indexRings + 1) ** 0.4;
          const angle = 360 / particles;
          const nudge = length % 2 === 0 ? angle : angle / 2;
          const rotate = indexRings % 2 === 0 ? nudge + angle * indexRing : angle * indexRing;

          return {
            scale,
            rotate
          };
        });

      return {
        delay,
        translate,
        round
      };
    });
</script>

<nav {id}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{size / 2} -{size / 2} {size} {size}" width="{size}" height="{size}">
    <defs>
      <path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
      <path id="path-c" d="M 0 40 a 40 40 0 0 1 0 -80 40 40 0 0 1 0 80" />
      <path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

      <mask id="mask-text">
        <use transform="scale(2)" href="#path" fill="hsl(0, 0%, 100%)" />
        <use href="#path" fill="hsl(0, 0%, 0%)" />
      </mask>

      <mask id="mask-icons">
        <rect x="-{size / 2}" y="-{size / 2}" width="{size}" height="{size}" fill="hsl(0, 0%, 100%)" />
        <circle r="46" fill="hsl(0, 0%, 0%)" />

        {#each items as item, i}
        <g transform="rotate({360 / length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / length * i * -1})">
          <use href="#path" transform="scale(1.4)" fill="hsl(0, 0%, 0%)" />
        </g>
        {/each}
      </mask>
    </defs>

    <!-- particles -->
    <g mask="url(#mask-icons)">
      <g class="loaded">
        {#each rounds as {delay, translate, round, opacity}}
        <g class="loading" style="animation-delay: {delay}s;">
          {#each round as {scale, rotate}}
          <g transform="rotate({rotate}) translate(0 {translate}) rotate(-{rotate})">
            <circle r="1" transform="scale({scale})" />
          </g>
          {/each}
        </g>
        {/each}
      </g>
    </g>

    <!-- check v -->
    <g class="loading">
      <g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
        <circle transform="scale(-1 1) rotate(-90)" r="46" stroke-width="8" pathLength="1" />
        <path d="M -20 -0 l 15 15 25 -25" stroke-width="10" pathLength="1" />
      </g>
    </g>

    <!-- icons -->
    <g class="loaded">
      {#each items as item, i}
      <g transform="rotate({360 / length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / length * i * -1})">
        <a href="#{item}" aria-labelledby="label-{item}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{iconSize / 2} -{iconSize / 2} {iconSize} {iconSize}" width="{Math.floor(size / 3)}" height="{Math.floor(size / 3)}" x="-{Math.floor(size / 6)}" y="-{Math.floor(size / 6)}">
            <g>
              <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
              <g transform="rotate({360 / length * i})" mask="url(#mask-text)">
                <g class="text">
                  <text id="label-{item}" fill="currentColor" font-family="monospace" letter-spacing="1" text-anchor="middle" font-size="12">
                    <textPath href="#{360 / length * i > 90 && 360 / length * i < 270 ? 'path-cc' : 'path-c'}" startOffset="50%">
                      {item}
                    </textPath>
                  </text>
                </g>
              </g>

              <g transform="scale(0.35) translate(-{iconSize / 2} -{iconSize / 2})">
                <Icons icon="{item}" />
              </g>

              <circle r="50" opacity="0" />
            </g>
          </svg>
        </a>
      </g>
      {/each}
    </g>
  </svg>
</nav>

<style>
  nav {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    --jump: 0.35s;
    --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  svg {
    max-width: 600px;
    width: 100vmin;
    height: auto;
    display: block;
    margin: auto;
  }

  /* for the hover/focus transition, update the color and scale of the icon */
  a {
    color: inherit;
    transform: scale(0.85);
    transition: color 0.35s linear, transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: color var(--jump) linear, transform var(--jump) var(--ease-in-out-back);
    outline: none;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: hsl(340, 80%, 55%);
    transform: scale(1);
  }
  /* scale the group wrapping the text element to also show the label on hover/focus */
  a .text {
    transform: scale(0.5);
    transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform var(--jump) var(--ease-out-back);
    font-weight: bold;
  }
  a:hover .text,
  a:focus .text {
    transform: scale(1);
  }
</style>
