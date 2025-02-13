<script>
  import { onMount } from "svelte";
  import { Spring } from "svelte/motion";
  /** @typedef {'morning' | 'day' | 'night'} TimeOfDay */
  /** @type TimeOfDay[] */
  const timesOfDay = ["morning", "day", "night"];

  const storageKey = "timeOfDay";
  const dataKey = "data-time-of-day";
  let timeOfDay = $state(timesOfDay[1]);
  let showToggle = $state(false);
  let isDragging = $state(false);

  const positions = {
    morning: { x: 30, y: 35 },
    day: { x: 60, y: 25 },
    night: { x: 90, y: 35 },
  };

  const position = new Spring(
    {
      x: 60,
      y: 60,
    },
    {
      damping: 0.4,
    }
  );

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { number }*/
  let w;
  /** @type { number }*/
  let h;

  onMount(() => {
    handleSize();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handlePreference = () => {
      const [, light, dark] = timesOfDay;
      timeOfDay = mediaQuery.matches ? dark : light;

      const { x, y } = positions[timeOfDay];
      const instant = !window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches;
      position.set({ x, y }, { instant });

      document.documentElement.removeAttribute(dataKey);
      localStorage.removeItem(storageKey);
    };

    const value = localStorage.getItem(storageKey);
    // @ts-ignore
    if (value && timesOfDay.includes(value)) {
      // @ts-ignore
      timeOfDay = value;
    } else {
      handlePreference();
    }

    const { x, y } = positions[timeOfDay];
    const instant = !window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;
    position.set({ x, y }, { instant });

    showToggle = true;

    mediaQuery.addEventListener("change", handlePreference);
    return () => {
      mediaQuery.removeEventListener("change", handlePreference);
    };
  });

  const handleSize = () => {
    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
  };

  /**
   * @param { TimeOfDay } value
   */
  const handleTimeOfDay = (value) => {
    timeOfDay = value;

    document.documentElement.setAttribute(dataKey, timeOfDay);
    localStorage.setItem(storageKey, timeOfDay);
  };

  /**
   * @param {{ offsetX: number, offsetY: number }} param
   */
  const handlePosition = ({ offsetX, offsetY }) => {
    // viewBox="0 0 120 60"
    const x = (offsetX / w) * 120;
    const y = (offsetY / h) * 60;

    position.target = { x, y };

    const dx = 60 - x;
    const dy = 60 - y;

    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const angles = Array(timesOfDay.length)
      .fill("")
      .map((_, i, { length }) => (180 / length) * (i + 1));

    const index = angles.findIndex((d) => angle <= d);

    let value = timesOfDay[index];

    if (value !== timeOfDay) {
      handleTimeOfDay(value);
    }
  };

  /**
   * @param {PointerEvent} event
   */
  const handleStart = (event) => {
    isDragging = true;

    handlePosition(event);
  };

  const handleEnd = () => {
    isDragging = false;
  };

  /**
   * @param {PointerEvent} event
   */
  const handleMove = (event) => {
    if (!isDragging) return;

    handlePosition(event);
  };

  /**
   * @param { KeyboardEvent } event
   */
  const handleKey = (event) => {
    const { key } = event;
    if (key !== "ArrowLeft" && key !== "ArrowRight") return;

    const index = timesOfDay.findIndex((d) => d === timeOfDay);

    let next;
    if (key === "ArrowRight") {
      next = (index + 1) % timesOfDay.length;
    } else {
      next = index > 0 ? index - 1 : timesOfDay.length - 1;
    }

    const value = timesOfDay[next];
    const { x, y } = positions[value];
    const instant = !window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;
    position.set({ x, y }, { instant });

    handleTimeOfDay(value);
  };
</script>

<svelte:window on:resize={handleSize} />

<svg bind:this={svg} style="display: block;" viewBox="0 0 120 60">
  <defs>
    <g id="time-of-day-cloud">
      <circle r="4" />
      <circle cx="3.8" r="3" />
      <circle cx="-3.8" r="3" />
    </g>
    <path
      id="time-of-day-star"
      d="M 0 0 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1"
    />

    <g id="time-of-day-details-morning">
      <g
        fill="none"
        stroke="#a4bace"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g transform="translate(60 85)">
          <g stroke-dasharray="15 30" stroke-width="2.5">
            <path d="M -46 0 a 46 46 0 0 1 92 0" />
            <path transform="rotate(-3)" d="M -45 0 a 45.5 45.5 0 0 1 91 0" />
            <path transform="rotate(-4)" d="M -46.5 0 a 46.5 46.5 0 0 1 93 0" />
          </g>
          <g stroke-dasharray="20 26.5" stroke-width="2">
            <path d="M -64 0 a 64 64 0 0 1 128 0" />
            <path transform="rotate(-2)" d="M -65 0 a 65 65 0 0 1 130 0" />
            <path transform="rotate(-4)" d="M -66 0 a 66 66 0 0 1 132 0" />
          </g>
        </g>
      </g>
    </g>
    <g id="time-of-day-details-day">
      <g fill="#8cdbef" stroke="#8cdbef">
        <g transform="translate(60 85)">
          <use transform="translate(0 -52.5)" href="#time-of-day-cloud" />
          <use
            transform="rotate(45) translate(0 -55)"
            href="#time-of-day-cloud"
          />
          <use
            transform="rotate(-45) translate(0 -55)"
            href="#time-of-day-cloud"
          />
          <use
            transform="rotate(-22.5) translate(0 -70)"
            href="#time-of-day-cloud"
          />
          <use
            transform="rotate(22.5) translate(0 -70)"
            href="#time-of-day-cloud"
          />
        </g>
      </g>
    </g>
    <g id="time-of-day-details-night">
      <g fill="#adc2d6">
        <use x="30" y="52" href="#time-of-day-star" />
        <use href="#time-of-day-star" x="43" y="42" />
        <use href="#time-of-day-star" x="63" y="42.5" />
        <use href="#time-of-day-star" x="81" y="42" />
        <use href="#time-of-day-star" x="90" y="54" />
        <use href="#time-of-day-star" x="98" y="44" />
        <use href="#time-of-day-star" x="74" y="27.5" />
        <use href="#time-of-day-star" x="52" y="26" />
        <use href="#time-of-day-star" x="32" y="32" />
        <use href="#time-of-day-star" x="14" y="46" />
        <use href="#time-of-day-star" x="14" y="46" />
        <use href="#time-of-day-star" x="13" y="26.5" />
        <use href="#time-of-day-star" x="33.5" y="14.5" />
        <use href="#time-of-day-star" x="61" y="10" />
        <use href="#time-of-day-star" x="89.5" y="18.5" />
        <use href="#time-of-day-star" x="102.5" y="26" />
      </g>
    </g>

    <g id="time-of-day-marker-morning">
      <circle r="7" fill="#838ac5" />
      <circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
      <g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
        <circle r="3" />
      </g>
    </g>
    <g id="time-of-day-marker-day">
      <circle r="7" fill="#639aef" />
      <circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
      <g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
        <circle r="3" />
        <path d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(45)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(90)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(135)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(180)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(225)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(270)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
        <path transform="rotate(315)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
      </g>
    </g>
    <g id="time-of-day-marker-night">
      <circle r="7" fill="#7369b5" />
      <circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
      <g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
        <path
          transform="rotate(-45)"
          d="M 0 -3 a 3 3 0 1 1 -3 3 2 2 0 0 0 3 -3z"
        />
      </g>
    </g>

    <rect
      id="time-of-day-background-morning"
      fill="#9cb2ce"
      width="120"
      height="60"
    />
    <rect
      id="time-of-day-background-day"
      fill="#73d2e6"
      width="120"
      height="60"
    />
    <rect
      id="time-of-day-background-night"
      fill="#838ace"
      width="120"
      height="60"
    />

    <circle
      id="time-of-day-foreground-morning"
      fill="#838ac5"
      cx="60"
      cy="85"
      r="36"
    />
    <circle
      id="time-of-day-foreground-day"
      fill="#639aef"
      cx="60"
      cy="85"
      r="36"
    />
    <circle
      id="time-of-day-foreground-night"
      fill="#7369b5"
      cx="60"
      cy="85"
      r="36"
    />
  </defs>

  <g data-time-of-day="morning">
    <use href="#time-of-day-background-morning" />
    <use href="#time-of-day-details-morning" />
    <use href="#time-of-day-foreground-morning" />
  </g>

  <g data-time-of-day="night">
    <use href="#time-of-day-background-night" />
    <use href="#time-of-day-details-night" />
    <use href="#time-of-day-foreground-night" />
  </g>

  <g data-time-of-day="day">
    <use href="#time-of-day-background-day" />
    <use href="#time-of-day-details-day" />
    <use href="#time-of-day-foreground-day" />
  </g>

  <g data-show={showToggle}>
    <use href="#time-of-day-background-{timeOfDay}" />

    <use href="#time-of-day-details-{timeOfDay}" />

    <g transform="translate({position.current.x} {position.current.y})">
      <use href="#time-of-day-marker-{timeOfDay}" />
    </g>

    <g
      style:cursor={isDragging ? "grabbing" : "pointer"}
      onclick={handlePosition}
      onkeydown={handleKey}
      onpointerdown={handleStart}
      onpointerup={handleEnd}
      onpointerleave={handleEnd}
      onpointermove={handleMove}
      role="spinbutton"
      aria-valuemin={0}
      aria-valuenow={timesOfDay.findIndex((d) => d === timeOfDay)}
      aria-valuemax={timesOfDay.length - 1}
      aria-valuetext={timeOfDay}
      tabindex="0"
      aria-label="Change the time of day with the arrow keys."
      class="focusable"
      opacity="0"
    >
      <g opacity="0">
        <rect width="120" height="53" />
      </g>

      <g style="pointer-events: none;" opacity="0.1">
        <g transform="translate(60 85)">
          <circle r="39" />
        </g>
      </g>
    </g>

    <use href="#time-of-day-foreground-{timeOfDay}" />

    <g opacity="0">
      <path d="M 0 60 h 7 a 53 53 0 0 1 106 0 h 7 v -60 h -120z" />
    </g>
  </g>
</svg>

<style>
  [data-time-of-day] {
    opacity: 0;
  }

  :global(html[data-time-of-day="morning"]) [data-time-of-day="morning"] {
    opacity: 1;
  }

  :global(html[data-time-of-day="day"]) [data-time-of-day="day"] {
    opacity: 1;
  }

  :global(html[data-time-of-day="night"]) [data-time-of-day="night"] {
    opacity: 1;
  }

  :global(html:not([data-time-of-day])) [data-time-of-day="day"] {
    opacity: 1;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-time-of-day])) [data-time-of-day="night"] {
      opacity: 1;
    }
  }

  [data-show] {
    opacity: 0;
    visibility: hidden;
  }

  [data-show="true"] {
    opacity: 1;
    visibility: visible;
  }

  .focusable {
    outline: none;
  }

  .focusable:focus {
    opacity: 1;
  }

  .focusable:focus:not(:focus-visible) {
    opacity: 0;
  }
</style>
