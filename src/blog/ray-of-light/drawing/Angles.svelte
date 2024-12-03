<script>
  /** @type {{ n: number }}*/
  let { n = 24 } = $props();

  const angles = Array(n)
    .fill("")
    .map((_, i, { length }) => (360 / length) * i);
</script>

<svg style="display: block;" viewBox="-50 -50 100 100">
  <g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
    {#each angles as angle}
      <path transform="rotate({angle})" d="M 35 0 h 7" />
    {/each}
  </g>

  <circle r="28" fill="#ffdb47" />
  <g fill="#ff877a">
    <g transform="translate(0 5)">
      <circle r="4" cx="-9" />
      <circle r="4" cx="9" />
    </g>
    <g transform="translate(0 6)">
      <g
        stroke="#ff877a"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      >
        <path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
      </g>
    </g>
  </g>

  <g fill="#38311e" stroke="#ffdb47" stroke-width="1">
    <circle r="2" cx="-5" />
    <circle r="2" cx="5" />
  </g>
</svg>
