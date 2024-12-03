<script>
  /** @type Array<{cx: number, cy: number}> */
  let points = $state([]);

  /**
   * @param { PointerEvent} event
   */
  const handlePoint = (event) => {
    const element = /** @type {SVGSVGElement} */ (event.target);
    const { clientX, clientY } = event;
    const point = new DOMPoint(clientX, clientY);
    const { x, y } = point.matrixTransform(element.getScreenCTM()?.inverse());
    points = [...points, { cx: x, cy: y }];
  };
</script>

<svg onpointerdown={handlePoint} style="display: block;" viewBox="0 0 100 100">
  <g style="pointer-events: none;" fill="currentColor">
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
