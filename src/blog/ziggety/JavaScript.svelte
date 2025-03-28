<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Illustration, Anchor, Box, Rect, TAU } = pkg;

  /** @type {HTMLDivElement} */
  let parent;

  const duration = 2;
  const angle = 20;
  const offset = 20;

  onMount(() => {
    const target = /** @type {SVGUseElement} */ (
      parent.querySelector("svg > use")
    );
    const element = /** @type {HTMLCanvasElement} */ (
      parent.querySelector("canvas")
    );

    const azure1 = "hsl(194 66% 86%)";
    const azure2 = "hsl(198 39% 78%)";

    const grey0 = "hsl(0 0% 100%)";
    const grey1 = "hsl(60 2% 83%)";
    const grey2 = "hsl(60 3% 77%)";
    const grey3 = "hsl(40 1% 61%)";
    const grey4 = "hsl(0 0% 42%)";

    const blue1 = "hsl(196 58% 61%)";
    const blue2 = "hsl(197 48% 58%)";

    const red1 = "hsl(10 49% 68%)";
    const red2 = "hsl(10 41% 64%)";

    const stroke = 0.05;

    const illustration = new Illustration({
      element,
      zoom: 26,
      rotate: {
        x: -0.1,
        y: 0.2,
      },
    });

    const anchor = new Anchor({
      addTo: illustration,
    });

    const body = new Box({
      addTo: anchor,
      stroke,
      color: azure1,
      rightFace: azure2,
      bottomFace: azure2,
      width: 4,
      height: 4,
      depth: 4,
    });

    const arm = new Anchor({
      addTo: body,
      translate: {
        x: 2,
      },
    });

    new Box({
      addTo: arm,
      stroke,
      color: grey1,
      bottomFace: grey2,
      width: 2,
      height: 1,
      depth: 1,
      translate: {
        x: 1,
        y: -1,
      },
    });

    new Box({
      addTo: arm,
      stroke,
      color: grey1,
      rightFace: grey2,
      width: 1,
      height: 1,
      depth: 1,
      translate: {
        x: 0.5,
      },
    });

    new Box({
      addTo: arm,
      stroke,
      color: grey1,
      bottomFace: grey2,
      width: 2,
      height: 1,
      depth: 1,
      translate: {
        x: 1,
        y: 1,
      },
    });

    arm.copyGraph({
      translate: {
        x: -2,
      },
      rotate: {
        z: TAU / 2,
      },
    });

    const magnets = new Anchor({
      addTo: body,
      translate: {
        x: 4,
      },
    });

    new Box({
      addTo: magnets,
      stroke,
      color: blue1,
      rightFace: blue2,
      width: 1,
      height: 1,
      depth: 1,
      translate: {
        x: 0.5,
        y: -1,
      },
    });

    new Box({
      addTo: magnets,
      stroke,
      color: red1,
      rightFace: red2,
      width: 1,
      height: 1,
      depth: 1,
      translate: {
        x: 0.5,
        y: 1,
      },
    });

    magnets.copyGraph({
      translate: {
        x: -4,
      },
      rotate: {
        x: TAU / 2,
        y: TAU / 2,
      },
    });

    const knobs = new Anchor({
      addTo: body,
      translate: {
        z: 2.1,
      },
    });

    const knob = new Box({
      addTo: knobs,
      stroke,
      color: grey1,
      rightFace: grey2,
      bottomFace: grey2,
      width: 1,
      height: 1,
      translate: {
        x: 1.5,
        y: 1.5,
        z: 0.5,
      },
    });

    new Rect({
      addTo: knob,
      stroke,
      fill: true,
      color: grey3,
      width: 0.75,
      height: 0.25,
      translate: {
        z: 0.51,
      },
    });

    new Rect({
      addTo: knob,
      stroke,
      fill: true,
      color: grey3,
      width: 0.25,
      height: 0.75,
      translate: {
        z: 0.51,
      },
    });

    knob.copyGraph({
      translate: {
        x: -1.5,
        y: 1.5,
        z: 0.5,
      },
    });

    const eye = new Anchor({
      addTo: body,
      translate: {
        z: 2.1,
      },
    });

    new Rect({
      addTo: eye,
      stroke,
      fill: true,
      color: grey0,
      width: 2,
      height: 2,
    });

    new Rect({
      addTo: eye,
      stroke,
      fill: true,
      color: grey4,
      width: 0.33,
      height: 0.33,
      translate: {
        z: 0.1,
      },
    });

    const screw = new Anchor({
      addTo: body,
      translate: {
        y: -2,
      },
    });

    new Box({
      addTo: screw,
      stroke,
      color: grey1,
      rightFace: grey2,
      width: 1,
      height: 0.33,
      depth: 1,
      translate: {
        y: -0.165,
      },
    });

    new Box({
      addTo: screw,
      stroke,
      color: grey3,
      rightFace: grey4,
      width: 1,
      height: 0.33,
      depth: 1,
      translate: {
        y: -0.495,
      },
    });

    new Box({
      addTo: screw,
      stroke,
      color: grey1,
      rightFace: grey2,
      width: 1,
      height: 0.33,
      depth: 1,
      translate: {
        y: -0.825,
      },
    });

    const top = new Box({
      addTo: screw,
      stroke,
      color: grey1,
      rightFace: grey2,
      width: 2,
      height: 0.5,
      depth: 2,
      translate: {
        y: -1.25,
      },
    });

    new Rect({
      addTo: top,
      stroke,
      fill: true,
      color: grey3,
      width: 1.25,
      height: 0.5,
      translate: {
        y: -0.26,
      },
      rotate: {
        x: TAU / 4,
      },
    });

    new Rect({
      addTo: top,
      stroke,
      fill: true,
      color: grey3,
      width: 0.5,
      height: 1.25,
      translate: {
        y: -0.26,
      },
      rotate: {
        x: TAU / 4,
      },
    });

    illustration.updateRenderGraph();

    /** @type number */
    let frame;

    /**
     * @param { number } value
     * @param { number } d1
     * @param { number } d2
     * @param { number } r1
     * @param { number } r2
     */
    const map = (value, d1, d2, r1, r2) => {
      return r1 + ((r2 - r1) / (d2 - d1)) * (value - d1);
    };

    const loop = () => {
      const { rotate, translate } = getComputedStyle(target);
      const degrees = parseFloat(
        /** @type [string, string] */ (rotate.match(/^([-\d.]+)deg$/))[0]
      );
      const y = parseFloat(
        /** @type [string, string] */ (translate.match(/([-\d.]+)px$/))[0]
      );

      anchor.rotate.z = (degrees / 180) * Math.PI;
      anchor.rotate.x = (degrees / 180) * Math.PI * 0.5;
      anchor.translate.y = map(y, -offset, offset, -2.5, 2.5);

      illustration.updateRenderGraph();
      frame = requestAnimationFrame(loop);
    };

    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        target.style.animationPlayState = "running";
        frame = requestAnimationFrame(loop);
      } else {
        target.style.animationPlayState = "paused";
        cancelAnimationFrame(frame);
      }
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(parent);

    return () => {
      cancelAnimationFrame(frame);
      observer.unobserve(parent);
    };
  });
</script>

<div bind:this={parent}>
  <svg
    style="display: block; max-inline-size: 350px;"
    style:--duration="{duration}s"
    style:--angle="{angle}deg"
    style:--offset="{offset}px"
    viewBox="-60 -60 120 120"
  >
    <defs>
      <symbol id="javascript-target" viewBox="0 0 10 5.5" stroke="transparent">
        <title>Magnemite</title>
        <rect fill="hsl(194 66% 86%)" x="3" y="1.5" width="4" height="4" />
        <rect fill="hsl(0 0% 100%)" x="4" y="2.5" width="2" height="2" />
        <rect
          fill="hsl(0 0% 42%)"
          x="4.835"
          y="3.335"
          width="0.33"
          height="0.33"
        />
        <g fill="hsl(60 2% 83%)">
          <rect x="4" width="2" height="0.5" />
          <rect x="4.5" y="0.5" width="1" height="0.33" />
          <rect x="4.5" y="1.17" width="1" height="0.33" />
          <rect x="1" y="2" width="2" height="1" />
          <rect x="7" y="2" width="2" height="1" />
          <rect x="2" y="3" width="1" height="1" />
          <rect x="7" y="3" width="1" height="1" />
          <rect x="1" y="4" width="2" height="1" />
          <rect x="7" y="4" width="2" height="1" />
          <rect x="3" y="4.5" width="1" height="1" />
          <rect x="6" y="4.5" width="1" height="1" />
        </g>
        <g fill="hsl(40 1% 61%)">
          <rect x="4.5" y="0.83" width="1" height="0.34" />
          <rect x="3.375" y="4.625" width="0.25" height="0.75" />
          <rect x="3.125" y="4.875" width="0.75" height="0.25" />
          <rect x="6.375" y="4.625" width="0.25" height="0.75" />
          <rect x="6.125" y="4.875" width="0.75" height="0.25" />
        </g>
        <g fill="hsl(196 58% 61%)">
          <rect x="9" y="2" width="1" height="1" />
          <rect y="4" width="1" height="1" />
        </g>
        <g fill="hsl(10 49% 68%)">
          <rect y="2" width="1" height="1" />
          <rect x="9" y="4" width="1" height="1" />
        </g>
      </symbol>
    </defs>
    <use href="#javascript-target" x="-50" y="-50" width="100" height="100" />
  </svg>

  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 350px;"
    width="350"
    height="350"
  ></canvas>
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  use {
    --dur: var(--duration, 2s);
    --degrees: var(--angle, 20deg);
    --y: var(--offset, 20px);
    animation:
      rotate var(--dur) infinite,
      translate calc(var(--dur) * 3) infinite;
    animation-play-state: paused;
  }

  @keyframes rotate {
    0%,
    50%,
    100% {
      rotate: 0deg;
      animation-timing-function: ease-out;
    }

    25% {
      rotate: calc(var(--degrees) * -1);
      animation-timing-function: ease-in;
    }

    75% {
      rotate: var(--degrees);
      animation-timing-function: ease-in;
    }
  }

  @keyframes translate {
    0%,
    50%,
    100% {
      translate: 0px 0px;
      animation-timing-function: ease-out;
    }

    25% {
      translate: 0px calc(var(--y) * -1);
      animation-timing-function: ease-in;
    }

    75% {
      translate: 0px var(--y);
      animation-timing-function: ease-in;
    }
  }
</style>
