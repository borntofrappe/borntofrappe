<script>
  /** @type Array<{x: number, y: number}> */
  const grid = Array(2 ** 2)
    .fill("")
    .map((_, i, { length }) => {
      const x = i % length ** 0.5;
      const y = Math.floor(i / length ** 0.5);
      return {
        x,
        y,
      };
    });

  let [, , , clip] = grid;
</script>

<div>
  <fieldset>
    <legend>Update clip</legend>
    {#each grid as value}
      <label>
        <input type="radio" bind:group={clip} {value} />
        <span>
          Column {value.x} Row {value.y}
        </span>
      </label>
    {/each}
  </fieldset>

  <svg viewBox="0 0 2 2">
    <title>A quarter of a placeholder image</title>
    <defs>
      {#each grid as { x, y }}
        <clipPath id="clip-paths-clip-{x}-{y}">
          <rect {x} {y} width="1" height="1" />
        </clipPath>
      {/each}
      <symbol id="clip-paths-placeholder" viewBox="0 0 60 60">
        <rect fill="#f8f8f8" width="60" height="60" />
        <g transform="translate(10 10)">
          <rect
            fill="#ebedf0"
            stroke="#ebedf0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="40"
            height="40"
          />
          <g transform="translate(5 5)" fill="#707da0">
            <path
              stroke="#707da0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M 0 20 l 10 -8 10 8 5 -4 5 4 0 10 h -30z"
            />
            <circle cx="10" cy="4" r="4" />
          </g>
        </g>
        <g transform="translate(32 32)">
          <path
            transform="translate(11 11)"
            fill="none"
            stroke="#4e5c78"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 0 0 l 15 15"
          />
          <circle
            fill="#f8f8f8"
            stroke="#4e5c78"
            stroke-width="2"
            cx="11"
            cy="11"
            r="10.5"
          />
          <path
            transform="translate(11 11)"
            fill="none"
            stroke="#4e5c78"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M -3.5 -2.5 a 3.5 3.5 0 0 1 7 0 c 0 3 -3.5 2 -3.5 5 m 0 3.5 v 0"
          />
        </g>
      </symbol>
    </defs>
    <use
      clip-path="url(#clip-paths-clip-{clip.x}-{clip.y})"
      href="#clip-paths-placeholder"
    />
  </svg>
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  svg {
    display: block;
    max-inline-size: 30rem;
  }

  fieldset {
    border: none;
  }

  legend {
    font-weight: 700;
    padding-inline: 0.5rem;
  }

  label {
    display: block;
  }
</style>
