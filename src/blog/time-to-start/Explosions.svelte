<script>
  /** @type {{ offsetTime: boolean }}*/
  let { offsetTime = true } = $props();

  let baseId = $derived(offsetTime ? "circleCurrentTime" : "circle");

  /** @type { SVGSVGElement }*/
  let svg;
  /** @typedef {{x: number, y: number, id: string }} Circle*/
  /** @type  Array<{x: number, y: number, begin: number, circles: Circle[]}> */
  let explosions = $state([]);
  let circleCounter = 0;

  const handleClick = () => {
    const currentTime = offsetTime ? svg.getCurrentTime() : 0;
    const x = Math.random() * 101;
    const y = Math.random() * 61;
    const begin = currentTime;

    const circles = Array(8)
      .fill("")
      .map((_, i, { length }) => {
        const angle = (((360 / length) * i) / 180) * Math.PI;
        const x = Math.cos(angle) * 10;
        const y = Math.sin(angle) * 10;
        const id = `${baseId}${circleCounter++}`;

        return { x, y, id };
      });

    const explosion = {
      x,
      y,
      begin,
      circles,
    };

    explosions = [...explosions, explosion];
  };
</script>

<div>
  <svg bind:this={svg} viewBox="0 0 100 60">
    <set />
    <g fill="currentColor">
      {#each explosions as { x, y, begin, circles }}
        <g transform="translate({x} {y})">
          {#each circles as { x, y, id }}
            <circle r="1">
              <animateTransform
                {id}
                {begin}
                attributeName="transform"
                type="translate"
                dur="1s"
                to="{x} {y}"
                fill="freeze"
              />
              <animate
                begin="{id}.begin + 0.3s"
                attributeName="r"
                dur="0.7s"
                to="0"
                fill="freeze"
              />
            </circle>
          {/each}
        </g>
      {/each}
    </g>
  </svg>

  <button onclick={handleClick}>Animate</button>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  svg {
    display: block;
    color: hsl(210, 20%, 16%);
    border: 0.2rem solid currentColor;
    border-radius: 0.25rem;
  }

  button {
    display: block;
    margin-inline: auto;
    cursor: pointer;
    border: none;
    font-weight: 700;
    padding: 0.2rem 0.5rem;
    letter-spacing: 0.5px;
    color: hsl(210, 15%, 90%);
    background: hsl(210, 20%, 16%);
    border-radius: 0.25rem;
    transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
  }

  button:active {
    transform: scale(0.95);
  }
</style>
