<script>
  /** @type {{ startHue: number, n: number }} */
  let { startHue = 200 } = $props();

  const n = 12;
  const circles = Array(n)
    .fill("")
    .map((_, i, { length }) => {
      const angle = (360 / length) * i;
      return {
        color: `oklch(0.8 0.17 ${startHue + angle})`,
        angle,
      };
    });

  let i = $state(0);

  /**
   * @param { MouseEvent } event
   */
  function handleClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target instanceof Element) {
      const index = parseInt(target.getAttribute("data-index") || "", 10);
      if (circles[index]) {
        i = index;
      }
    }
  }

  /** @type { undefined | number }*/
  let timeout;
  const delay = 200;
  let input = "";
  /**
   * @param { KeyboardEvent } event
   */
  function handleKey(event) {
    const { key } = event;
    if (isNaN(parseInt(key, 10))) return;

    event.preventDefault();
    input = `${input + key}`.slice(-2);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const number = parseInt(input, 10);
      if (number > 0 && number <= n) {
        i = number % n;
      }
      input = "";
      clearTimeout(timeout);
    }, delay);
  }
</script>

<svg style="display: block;" viewBox="-28 -28 56 56">
  <circle fill="oklch(0.32 none none)" r="28" />
  <g style:color={circles[i].color}>
    <path
      transform="rotate({circles[i].angle})"
      fill="none"
      stroke="currentColor"
      stroke-width="0.175"
      d="M 0 0 C 5 -7.75 -5 -7.75 0 -15.5 A 2.5 2.5 0 0 0 0 -20.5 2.5 2.5 0 0 0 0 -15.5"
    />
    <circle fill="currentColor" r="1" />
  </g>

  <a
    href="/"
    onkeydown={handleKey}
    onclick={handleClick}
    aria-label="Enter an hour to move the hand of the twelve hours clock"
  >
    {#each circles as { color, angle }, i}
      <circle
        data-index={i}
        style:color
        transform="rotate({angle}) translate(0 -18)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.15"
        fill-opacity="0.5"
        r="2.5"
      />
    {/each}
  </a>
</svg>

<style>
  a {
    outline: none;
  }

  svg:has(:focus-visible) {
    outline: 1px solid currentColor;
  }

  a circle {
    fill-opacity: 0.5;
  }

  a circle:hover {
    transition: fill-opacity 0.4s;
    fill-opacity: 1;
  }

  g {
    transition-property: color;
  }

  path {
    transition-property: transform;
  }

  g,
  path {
    transition-duration: 1.5s;
    transition-timing-function: linear(
      0,
      0.004,
      0.016,
      0.035,
      0.062,
      0.098,
      0.141 11.4%,
      0.25,
      0.39,
      0.562,
      0.764,
      1 30.3%,
      0.847 34.8%,
      0.787,
      0.737,
      0.699,
      0.672,
      0.655,
      0.65,
      0.656,
      0.672,
      0.699,
      0.738,
      0.787,
      0.847 61.7%,
      1 66.2%,
      0.946,
      0.908,
      0.885 74.2%,
      0.879,
      0.878,
      0.879,
      0.885 79.5%,
      0.908,
      0.946,
      1 87.4%,
      0.981,
      0.968,
      0.96,
      0.957,
      0.96,
      0.968,
      0.981,
      1
    );
  }
</style>
