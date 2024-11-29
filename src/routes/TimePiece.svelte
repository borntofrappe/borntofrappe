<script>
  import { onMount } from "svelte";

  let hands = $state({ hours: 0, minutes: 0 });

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { 'wait' | 'tick' | 'tick mark' }*/
  let mode = $state("wait");

  onMount(() => {
    mode = "tick";
    svg.style.setProperty(
      "--_delay",
      `${(new Date().getMilliseconds() / 1000) * -1}s`
    );

    const update = () => {
      const date = new Date();
      const minutes = date.getMinutes();
      hands = {
        hours: (date.getHours() % 12) * 30 + minutes * 0.5,
        minutes: minutes * 6,
      };

      if (minutes === 0) {
        mode = "tick mark";
      } else {
        mode = "tick";
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<svg
  bind:this={svg}
  data-mode={mode}
  style="display: block;"
  viewBox="-14 -22 28 52.5"
>
  <g stroke-linecap="round" stroke-linejoin="round">
    <g fill="hsl(13 62% 47%)" stroke="hsl(13 62% 47%)">
      <path d="M 0 -17 7 -10 -7 -10 Z" />
      <path d="M 8 -9 10 -7 10 -4 -10 -4 -10 -7 -8 -9 Z" />
      <rect x="-10" y="-3" width="20" height="6" />
      <rect x="-10" y="4" width="20" height="4" />
      <rect x="-10" y="10" width="20" height="2" />
    </g>
    <g fill="none" stroke="hsl(4 57% 37%)">
      <path d="M -7.5 -9.5 7.5 -9.5" />
      <path d="M -10 -3.5 10 -3.5" />
      <path d="M -10 3.5 10 3.5" />
    </g>
    <g fill="hsl(18 59% 53%)" stroke="hsl(18 59% 53%)">
      <rect x="-12" y="8" width="24" height="2" />
      <path
        d="M 0 -17 12 -5 13.5 -6.5 1.5 -18.5 3 -20 1.5 -21.5 0 -20 -1.5 -21.5 -3 -20 -1.5 -18.5 -13.5 -6.5 -12 -5 Z"
      />
    </g>

    <g transform="translate(0 12)">
      <g class="rotate">
        <g fill="hsl(13 62% 47%)" stroke="hsl(13 62% 47%)">
          <rect x="-1.75" width="3.5" height="8" />
          <path d="M 1.5 10 3.5 14 0 17.5 -3.5 14 -1.5 10 Z" />
        </g>
        <rect
          fill="hsl(18 59% 53%)"
          stroke="hsl(18 59% 53%)"
          x="-3"
          y="8"
          width="6"
          height="2"
        />
        <g transform="translate(0 14)">
          <g fill="hsl(35 100% 47%)" stroke="hsl(35 100% 47%)">
            <path id="clock-petal" d="M 0 0 -0.5 -1 0 -2 0.5 -1" />
            <use transform="rotate(45)" href="#clock-petal" />
            <use transform="rotate(90)" href="#clock-petal" />
            <use transform="rotate(135)" href="#clock-petal" />
            <use transform="rotate(180)" href="#clock-petal" />
            <use transform="rotate(225)" href="#clock-petal" />
            <use transform="rotate(270)" href="#clock-petal" />
            <use transform="rotate(315)" href="#clock-petal" />
          </g>
          <circle fill="hsl(37 11% 28%)" stroke="hsl(37 11% 28%)" r="0.75" />
        </g>
      </g>
    </g>

    <g transform="translate(0 -8)">
      <path
        fill="hsl(18 59% 53%)"
        stroke="hsl(18 59% 53%)"
        d="M -2.5 0 -2.5 -2 A 2.5 2.5 0 0 1 0 -4.5 2.5 2.5 0 0 1 2.5 -2 L 2.5 0 Z"
      />

      <g class="scale">
        <path
          fill="hsl(4 69% 26%)"
          stroke="hsl(4 69% 26%)"
          d="M -1.8 0 -1.8 -2 A 1.8 1.8 0 0 1 0 -3.8 1.8 1.8 0 0 1 1.8 -2 L 1.8 0 Z"
        />
        <path
          fill="hsl(35 100% 47%)"
          stroke="hsl(35 100% 47%)"
          stroke-width="0.1"
          d="
                  M 0 0 
                  A 0.8 0.8 0 0 0 0.5 -1.5 
                  A 0.5 0.5 0 0 0 -0.5 -1.5
                  A 0.8 0.8 0 0 0 0 0
                  "
        />
        <g fill="hsl(37 11% 28%)">
          <circle cx="0.2" cy="-1.75" r="0.075" />
          <circle cx="-0.2" cy="-1.75" r="0.075" />
        </g>
        <path
          fill="hsl(37 11% 28%)"
          stroke="hsl(37 11% 28%)"
          stroke-width="0.05"
          d="M 0 -1.75 0.1 -1.65 0 -1.6 -0.1 -1.65 Z"
        />

        <g fill="hsl(35 100% 47%)">
          <g transform="translate(1 -2.5)">
            <g id="clock-note">
              <circle r="0.15" />
              <path
                stroke="hsl(35 100% 47%)"
                stroke-width="0.1"
                transform="translate(0.1 0)"
                d="M 0 0 L 0 -0.5 L 0.2 -0.3 L 0 -0.4"
              />
            </g>
          </g>

          <use
            transform="translate(-1.4 -1.75) scale(0.9)"
            href="#clock-note"
          />
          <use transform="translate(-0.5 -3) scale(1.1)" href="#clock-note" />
        </g>
      </g>

      <rect
        fill="hsl(18 59% 53%)"
        stroke="hsl(18 59% 53%)"
        x="-3.5"
        width="7"
        height="0.75"
      />
    </g>

    <circle fill="hsl(40 23% 97%)" stroke="hsl(40 23% 97%)" r="5" />
    <g fill="hsl(40 15% 80%)" stroke="hsl(40 15% 80%)">
      <circle cy="-4" r="0.5" />
      <circle cx="4" r="0.5" />
      <circle cy="4" r="0.5" />
      <circle cx="-4" r="0.5" />
    </g>
    <circle fill="hsl(42 15% 13%)" stroke="hsl(42 15% 13%)" r="0.7" />
    <g fill="none" stroke="hsl(42 15% 13%)" stroke-linecap="round">
      <path
        transform="rotate({hands.hours})"
        stroke-width="1"
        d="M 0 0 0 -2 Z"
      />
      <path
        transform="rotate({hands.minutes})"
        stroke-width="0.6"
        d="M 0 0 0 -3.5 Z"
      />
    </g>
  </g>
</svg>

<style>
  .rotate {
    animation: tick 1s linear infinite paused;
    animation-delay: var(--_delay, 0s);
  }

  .scale {
    scale: 0;
    transition: scale 0.4s cubic-bezier(0.36, 0, 0.66, -0.56);
  }

  [data-mode*="tick"] .rotate {
    animation-play-state: running;
  }

  [data-mode*="mark"] .scale {
    scale: 1;
    transition: scale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes tick {
    0% {
      rotate: 0deg;
      animation-timing-function: ease-out;
    }
    25% {
      rotate: 10deg;
      animation-timing-function: ease-in;
    }
    50% {
      rotate: 0deg;
      animation-timing-function: ease-out;
    }
    75% {
      rotate: -10deg;
      animation-timing-function: ease-in;
    }
  }
</style>
