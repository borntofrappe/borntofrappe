<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  /** @type {SVGSVGElement} */
  let svg;
  let canAnimate = $state(false);

  onMount(() => {
    canAnimate = true;
  });

  const handleClick = () => {
    canAnimate = false;
    const animate = /** @type {SVGAnimateElement} */ (
      svg.querySelector("#perfectShotShoot")
    );
    animate.beginElement();
  };

  const durs = {
    shoot: 0.75,
    motion: 1.5,
  };
</script>

<div>
  {#if canAnimate}
    <button out:fly={{ x: -20, y: 3 }} onclick={handleClick}>Shoot!</button>
  {/if}

  <svg bind:this={svg} viewBox="-50 -45 100 90">
    <title>Accuracy</title>
    <description>Accuracy is being exact once.</description>
    <defs>
      <path
        id="perfect-shot-path"
        fill="none"
        stroke="currentColor"
        d="M 0 0 c 140 -20 380 -20 500 0"
      />
    </defs>

    <animate
      begin="perfectShotMotion.begin"
      attributeName="viewBox"
      to="440 -45 100 90"
      dur={durs.motion}
      fill="freeze"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0 0 1 1"
    />

    <g transform="translate(500 0)">
      <g stroke="#2b434f" stroke-width="0.75">
        <g transform="scale(0.8 1)">
          <g transform="scale(-1 1)">
            <path fill="#2b434f" d="M 2 0 l 12 29 -10 0 -12 -29z" />
            <path fill="#f2f7fe" d="M 7 0 l 12 29 -10 0 -12 -29z" />
            <path fill="#2b434f" d="M -3.5 0 l -12 29 -10 0 12 -29z" />
            <path fill="#f2f7fe" d="M 0.5 0 l -12 29 -10 0 12 -29z" />
          </g>
        </g>
        <g transform="rotate(10) scale(0.8 1)">
          <path
            fill="#2b434f"
            d="M 0 -25 a 25 25 0 0 0 0 50 h 6 a 25 25 0 0 0 0 -50 h -6"
          />
          <circle fill="#f2f7fe" r="25" />
          <circle fill="#197191" r="20" />
          <circle fill="#79a9c1" r="15" />
          <circle fill="#fe804e" r="10" />
          <circle fill="#fff06a" r="5" />
        </g>
      </g>
    </g>

    <g>
      <animateMotion rotate="auto">
        <mpath href="#perfect-shot-path" />
      </animateMotion>
      <g
        fill="none"
        stroke="#2b434f"
        stroke-width="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      >
        <path stroke-width="0.75" d="M -9 -40 c 0 20 0 60 0 80">
          <animate
            id="perfectShotShoot"
            begin="indefinite"
            attributeName="d"
            values="M -9 -40 c 0 20 0 60 0 80; M -9 -40 c -28 30 -28 50 0 80"
            dur={durs.shoot}
            calcMode="spline"
            keySplines="0.5 0 0.5 1;"
            fill="freeze"
          />
          <animate
            begin="perfectShotShoot.end"
            attributeName="d"
            to="M -9 -40 c 4 20 4 60 0 80"
            dur="0.1s"
            fill="freeze"
          />
        </path>
        <path
          fill="#d18575"
          d="M -10 -40 c 10 15 30 20 30 40 0 20 -10 15 -30 40 6 -15 27 -20 27 -40 0 -20 -21 -25 -27 -40z"
        />
        <path
          fill="#f2f7fe"
          d="M 20 -5 c 1 2 1 8 0 10 l -4 0 c 1.1 -2 1.1 -8 0 -10z"
        />
      </g>
    </g>
    <g transform="translate(22 0)">
      <animateTransform
        begin="perfectShotShoot.begin"
        attributeName="transform"
        type="translate"
        values="22 0; 0 0"
        dur={durs.shoot}
        calcMode="spline"
        keySplines="0.5 0 0.5 1;"
        fill="freeze"
      />
      <animateMotion rotate="auto">
        <mpath href="#perfect-shot-path" />
      </animateMotion>
      <animateMotion
        id="perfectShotMotion"
        begin="perfectShotShoot.end"
        rotate="auto"
        dur={durs.motion}
        fill="freeze"
        calcMode="spline"
        keyTimes="0; 1"
        keySplines="0 0 1 1"
      >
        <mpath href="#perfect-shot-path" />
      </animateMotion>
      <g fill="hsl(240 3% 35%)">
        <path d="M -30 0 l -3 -3 -8 0 3 3 -3 3 8 0 3 -3 30 0" />
        <path
          stroke="#2b434f"
          stroke-width="1"
          stroke-linejoin="round"
          d="M 4 0 l -5 -3 2 3 -2 3 5 -3z"
        >
          <set
            begin="perfectShotMotion.end"
            attributeName="display"
            to="none"
          />
        </path>
      </g>
      <path
        fill="none"
        stroke="#2b434f"
        stroke-width="1"
        stroke-linejoin="round"
        stroke-linecap="square"
        d="M 0 0 l -30 0 -3 -3 -2.5 0 2 2 -2 -2 -2.5 0 2 2 -2 -2 -3 0 3 3 -3 3 3.75 0 2 -2 -2 2 4.25 0 3 -3 30 0"
      />
    </g>
  </svg>
</div>

<style>
  div {
    position: relative;
  }

  div > button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    color: #f2f7fe;
    background: #2b434f;
    border: none;
    border-radius: 1rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
  }

  svg {
    display: block;
  }
</style>
