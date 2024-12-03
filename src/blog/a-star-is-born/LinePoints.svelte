<script>
  const n = 10;
  const points = Array(n)
    .fill("")
    .map((_, i, { length }) => {
      const angle = (360 / length) * i;
      const radians = (angle / 180) * Math.PI;

      const x = Math.floor(Math.cos(radians) * 35);
      const y = Math.floor(Math.sin(radians) * 35);

      return [x, y];
    });
</script>

<svg viewBox="-50 -50 100 100">
  <g fill="currentColor">
    <path d="M {points}" />
  </g>
</svg>

<style>
  svg {
    display: block;
  }
</style>
