<script>
  import { tweened } from "svelte/motion";
  import { sineIn, sineOut } from "svelte/easing";

  const sprites = ["life", "moon", "star", "sun", "water"];

  const durationPerSprite = 250;
  const tween = tweened(0, { duration: durationPerSprite * sprites.length });

  /** @type {null | number }*/
  let index = $state(null);
  /** @type { 'waiting' | 'stopped' | 'rolling' | 'stopping' } */
  let mode = $state("waiting");

  const animate = async () => {
    await tween.set(sprites.length);

    if (index === null) {
      await tween.set(0, { duration: 0 });
      animate();
    } else {
      await tween.set(0, { duration: 0 });
      await tween.set(sprites.length + index, {
        easing: sineOut,
        duration: durationPerSprite * (sprites.length + index) * 2,
      });

      mode = "stopped";
    }
  };

  const handleClick = async () => {
    if (mode === "waiting") {
      mode = "rolling";
      animate();
    } else if (mode === "rolling") {
      mode = "stopping";
      index = Math.floor($tween);
    } else if (mode === "stopped") {
      const i = $tween % sprites.length;
      await tween.set(i, { duration: 0 });
      await tween.set(sprites.length, {
        easing: sineIn,
        duration: durationPerSprite * (sprites.length - i + 1),
      });
      await tween.set(0, { duration: 0 });

      index = null;
      mode = "rolling";
      animate();
    }
  };

  const ariaLabels = {
    waiting: "Spin the token wheel",
    rolling: "Stop the token wheel",
    stopping: "Wait for the wheel to stop",
    stopped: "Spin the wheel one more time",
  };
</script>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
  <defs>
    <symbol id="life" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
      <path
        stroke="currentColor"
        d="M1 1h2M4 1h2M0 2h7M0 3h7M0 4h7M1 5h5M2 6h3M3 7h1"
      />
    </symbol>
    <symbol id="moon" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
      <path
        stroke="currentColor"
        d="M1 1h4M2 2h4M3 3h4M3 4h4M3 5h4M2 6h4M1 7h4"
      />
    </symbol>
    <symbol id="star" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
      <path
        stroke="currentColor"
        d="M3 1h1M3 2h1M0 3h7M1 4h5M2 5h3M1 6h5M0 7h2M5 7h2"
      />
    </symbol>
    <symbol id="sun" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
      <path
        stroke="currentColor"
        d="M3 0h1M0 1h1M6 1h1M2 2h3M1 3h5M1 4h5M2 5h3M0 6h1M6 6h1M3 7h1"
      />
    </symbol>
    <symbol id="water" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
      <path
        stroke="currentColor"
        d="M3 0h1M3 1h1M2 2h3M1 3h5M0 4h7M0 5h7M0 6h7M1 7h5"
      />
    </symbol>
  </defs>
</svg>

<button
  aria-label={ariaLabels[mode]}
  style:cursor={mode === "stopping" ? "initial" : "pointer"}
  onclick={handleClick}
>
  <svg viewBox="0 0 1 1">
    {#each sprites as sprite, i}
      <g transform="translate(0 {$tween})">
        <g transform="translate(0.1 0.1)">
          <use y={i * -1} href="#{sprite}" width="0.8" height="0.8" />
          <use
            y={(sprites.length + i) * -1}
            href="#{sprite}"
            width="0.8"
            height="0.8"
          />
        </g>
      </g>
    {/each}
  </svg>
</button>

<style>
  button {
    display: block;
    inline-size: 7rem;
    block-size: 7rem;
    aspect-ratio: 1;
    background: none;
    border: 0.2rem solid currentColor;
    border-radius: 0.25rem;
    padding: 0;
  }

  button > svg {
    display: block;
    inline-size: 100%;
    block-size: auto;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }
</style>
