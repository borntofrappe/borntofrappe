<script>
  export let value = "0";
  export let width = 30;
  export let height = 30;
  export let gap = 3;
  export let color = "currentColor";

  const encodings = [
    0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b,
  ];

  const segments = encodings.map((encoding) =>
    Array(7)
      .fill()
      .map((_, i, { length }) => (encoding >> (length - i - 1)) & 1)
  );

  const transforms = [
    { x: 20, y: 15, a: 0 },
    { x: 100, y: 20, a: 90 },
    { x: 100, y: 105, a: 90 },
    { x: 20, y: 185, a: 0 },
    { x: 15, y: 105, a: 90 },
    { x: 15, y: 20, a: 90 },
    { x: 20, y: 100, a: 0 },
  ];

  $: digits = value.split("").map((d) => parseInt(d, 10));
</script>

<svg
  viewBox="0 0 {115 * digits.length + gap * (digits.length - 1)} {200}"
  {width}
  {height}
>
  <defs>
    <path id="segment" d="M 0 0 l 15 15 h 45 l 15 -15 -15 -15 h -45z" />
    {#each transforms as { x, y, a }, i}
      <use
        id="segment-{i}"
        transform="translate({x} {y}) rotate({a})"
        href="#segment"
      />
    {/each}
  </defs>

  <g fill={color}>
    {#each digits as digit, i}
      <g transform="translate({(115 + gap) * i} 0)">
        {#each segments[digit] as d, j}
          <use href="#segment-{j}" opacity="0.1" />
          {#if d}
            <use href="#segment-{j}" />
          {/if}
        {/each}
      </g>
    {/each}
  </g>
</svg>
