<script>
  /** @type Array<{cx: number, cy: number}> */
  let points = $state([]);

  const width = 100;
  const height = 100;

  /**
   * @param { PointerEvent} event
   */
  const handlePoint = (event) => {
    const svg = /** @type {SVGSVGElement} */ (event.target);
    const bCR = svg.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = ((clientX - bCR.x) / bCR.width) * width;
    const y = ((clientY - bCR.y) / bCR.height) * height;
    points = [...points, { cx: x, cy: y }];
  };
</script>

<svg onpointerdown={handlePoint} style="display: block;" viewBox="0 0 100 100">
  <g style="pointer-events: none" fill="currentColor">
    {#each points as { cx, cy }}
      <circle r="2" {cx} {cy} />
    {/each}
  </g>
</svg>

<style>
  svg {
    outline: 0.2rem solid currentColor;
  }
</style>
