<script>
  import { onMount } from "svelte";

  /** @type SVGSVGElement */
  let svgPoints;
  /** @type SVGSVGElement */
  let svgAnimation;
  let dur = $state(1);

  /** @type number */
  let w;
  /** @type number */
  let h;

  const handleSize = () => {
    const { width, height } = svgPoints.getBoundingClientRect();
    w = width;
    h = height;
  };

  onMount(() => {
    handleSize();
  });

  /** @type { number | null } */
  let cP = $state(null);

  let cP1 = $state({
    x: 78,
    y: 69,
  });

  let cP2 = $state({
    x: 22,
    y: 26,
  });

  /**
   * @param {{ offsetX: number, offsetY: number, cP?: number }} param
   */
  const updateCurve = ({ offsetX, offsetY, cP }) => {
    const x = Math.floor((offsetX / w) * 120 - 10);
    const y = Math.floor((offsetY / h) * 120 - 10);

    if (x < 0 || x > 100 || y < 0 || y > 100) return;

    if (cP) {
      if (cP === 1) {
        cP1 = {
          x,
          y,
        };
      } else {
        cP2 = {
          x,
          y,
        };
      }
    } else {
      const dCP1 = ((x - cP1.x) ** 2 + (y - cP1.y) ** 2) ** 0.5;
      const dCP2 = ((x - cP2.x) ** 2 + (y - cP2.y) ** 2) ** 0.5;
      if (dCP1 < dCP2) {
        cP1 = {
          x,
          y,
        };
      } else {
        cP2 = {
          x,
          y,
        };
      }
    }
  };

  /**
   * @param { number } d
   */
  const cPFormat = (d) => (d / 100).toFixed(2);
  /**
   * @param { TemplateStringsArray } strings
   * @param { number[] } values
   */
  const cPHighlight = (strings, ...values) => {
    return strings.reduce((acc, curr, i) => {
      acc += curr;
      if (i < 2) {
        acc += `<span style="color: #ff0088">${cPFormat(values[i])}</span>`;
      } else if (i < 4) {
        acc += `<span style="color: #00aabb">${cPFormat(values[i])}</span>`;
      }
      return acc;
    }, "");
  };

  const offsetKeys = [
    {
      key: "ArrowUp",
      x: 0,
      y: -1,
    },
    {
      key: "ArrowRight",
      x: 1,
      y: 0,
    },
    {
      key: "ArrowDown",
      x: 0,
      y: 1,
    },
    {
      key: "ArrowLeft",
      x: -1,
      y: 0,
    },
  ];

  /**
   * @param {{ event: KeyboardEvent, cP: number }} param0
   */
  const handleKey = ({ event, cP }) => {
    const { key } = event;

    const offset = offsetKeys.find((d) => d.key === key);
    if (!offset) return;

    event.preventDefault();

    const { x: offsetX, y: offsetY } = offset;

    if (cP === 1) {
      const x = cP1.x + offsetX;
      const y = cP1.y + offsetY;

      if (x < 0 || x > 100 || y < 0 || y > 100) return;

      cP1 = {
        x,
        y,
      };
    } else {
      const x = cP2.x + offsetX;
      const y = cP2.y + offsetY;

      if (x < 0 || x > 100 || y < 0 || y > 100) return;

      cP2 = {
        x,
        y,
      };
    }
  };

  const handleAnimation = () => {
    const animateTransforms = svgAnimation.querySelectorAll("animateTransform");
    animateTransforms[0].setAttribute(
      "keySplines",
      `${cPFormat(cP1.x)} ${cPFormat(100 - cP1.y)} ${cPFormat(cP2.x)} ${cPFormat(100 - cP2.y)}`
    );
    const from = animateTransforms[0].getAttribute("to") || "0 0";
    const to = from === "10 0" ? "0 0" : "10 0";

    animateTransforms.forEach((animateTransform) => {
      animateTransform.setAttribute("dur", dur.toString());
      animateTransform.setAttribute("from", from);
      animateTransform.setAttribute("to", to);
      animateTransform.beginElement();
    });
  };
</script>

<svelte:window onresize={handleSize} />

<div>
  <svg
    bind:this={svgPoints}
    onpointerleave={() => {
      cP = null;
    }}
    onpointerup={({ offsetX, offsetY }) => {
      updateCurve({ offsetX, offsetY });
      cP = null;
    }}
    onpointermove={(e) => {
      if (!cP) return;

      const { offsetX, offsetY } = e;
      updateCurve({ offsetX, offsetY, cP });
    }}
    ontouchmove={(event) => {
      event.preventDefault();
    }}
    onmousemove={(event) => {
      event.preventDefault();
    }}
    class="focus"
    tabindex="0"
    aria-label="Highlight a bezier curve for SMIL animation and the keySplines attribute. Tab to reach the control points."
    role="menu"
    viewBox="0 0 120 120"
  >
    <defs>
      <pattern
        id="key-splines-pattern-stripes"
        width="100"
        height="10"
        viewBox="0 0 100 10"
        patternUnits="userSpaceOnUse"
      >
        <rect fill="hsl(0 0% 92%)" y="5" width="100" height="5" />
      </pattern>
    </defs>

    <g transform="translate(10 10)">
      <rect fill="hsl(0 0% 99%)" width="100" height="100" />
      <rect fill="url(#key-splines-pattern-stripes)" width="100" height="100" />
      <g
        fill="hsl(0 0% 50%)"
        font-weight="300"
        font-family="sans-serif"
        font-size="5"
        style="text-transform: uppercase;"
      >
        <g transform="translate(-2 98) rotate(-90)">
          <text>Progression</text>
        </g>
        <text y="107">Time</text>
      </g>
      <g fill="none" stroke="hsl(0 0% 50%)" stroke-width="0.5">
        <path d="M 0 0 v 100 h 100" />
      </g>

      <path
        fill="none"
        stroke="hsl(0 0% 70%)"
        stroke-opacity="0.3"
        stroke-width="2"
        d="M 0 100 100 0"
      />

      <g fill="none" stroke="hsl(0 0% 70%)">
        <path d="M {cP1.x} {cP1.y} 0 100" />
        <path d="M {cP2.x} {cP2.y} 100 0" />
      </g>

      <path
        fill="none"
        stroke="hsl(0 0% 10%)"
        stroke-width="2"
        d="M 0 100 C {cP1.x} {cP1.y} {cP2.x} {cP2.y} 100 0"
      />

      <g fill="hsl(0 0% 99%)" stroke="hsl(0 0% 50%)" stroke-width="0.5">
        <circle cy="100" r="3.5" />
        <circle cx="100" r="3.5" />
      </g>

      <rect width="100" height="100" opacity="0" />

      <g
        style="cursor:pointer"
        onpointerdown={() => {
          cP = 1;
        }}
        class="focus"
        tabindex="0"
        role="menuitem"
        aria-label="Update the first control point with the arrow keys"
        onkeydown={(event) => handleKey({ event, cP: 1 })}
        transform="translate({cP1.x} {cP1.y})"
      >
        <circle
          fill="#ff0088"
          stroke="hsl(0 0% 50%)"
          stroke-width="0.5"
          r="3.5"
        />
      </g>
      <g
        style="cursor:pointer;"
        onpointerdown={() => {
          cP = 2;
        }}
        class="focus"
        tabindex="0"
        role="menuitem"
        aria-label="Update the second control point with the arrow keys"
        onkeydown={(event) => handleKey({ event, cP: 2 })}
        transform="translate({cP2.x} {cP2.y})"
      >
        <circle
          fill="#00aabb"
          stroke="hsl(0 0% 50%)"
          stroke-width="0.5"
          r="3.5"
        />
      </g>
    </g>
  </svg>

  <pre style="font-weight:700"><code>calcMode="spline"</code>
<code>keyTimes="0; 1"</code>
<code
      >{@html cPHighlight`keySplines="${cP1.x} ${100 - cP1.y} ${cP2.x} ${100 - cP2.y}"`}</code
    ></pre>

  <section>
    <label>
      <span>Duration: </span>
      <input type="range" min="0.1" max="5" step="0.1" bind:value={dur} />
      <output>{dur} {dur === 1 ? "second" : "seconds"}</output>
    </label>

    <button onclick={handleAnimation}> Animate </button>
  </section>
  <svg bind:this={svgAnimation} viewBox="0 0 12 4.2">
    <g>
      <animateTransform
        begin="indefinite"
        attributeName="transform"
        type="translate"
        dur="1s"
        fill="freeze"
        keyTimes="0; 1"
        calcMode="spline"
        keySplines="0 0 1 1"
      />
      <svg x="0" y="0" width="2" height="2" viewBox="0 0 150 150">
        <rect fill="#ff0088" width="150" height="150" rx="12" />
        <g transform="translate(25 25)">
          <g fill="hsl(0 0% 99%)">
            <circle transform="translate({cP1.x} {cP1.y})" r="5" />
            <circle transform="translate({cP2.x} {cP2.y})" r="5" />
          </g>
          <g fill="none" stroke="hsl(0 0% 99%)" stroke-linecap="round">
            <g stroke-width="2.5">
              <path d="M 0 100 {cP1.x} {cP1.y}" />
              <path d="M 100 0 {cP2.x} {cP2.y}" />
            </g>
            <path
              stroke-width="7"
              d="M 0 100 C {cP1.x} {cP1.y} {cP2.x} {cP2.y} 100 0"
            />
          </g>
        </g>
      </svg>
    </g>
    <g>
      <animateTransform
        begin="indefinite"
        attributeName="transform"
        type="translate"
        dur="1s"
        fill="freeze"
      />
      <svg x="0" y="2.2" width="2" height="2" viewBox="0 0 150 150">
        <rect fill="#00aabb" width="150" height="150" rx="12" />
        <g transform="translate(25 25)">
          <path
            fill="none"
            stroke="hsl(0 0% 99%)"
            stroke-width="7"
            stroke-linecap="round"
            d="M 0 100 100 0"
          />
        </g>
      </svg>
    </g>
  </svg>
</div>

<style>
  div {
    color: hsl(0 0% 10%);
    background: hsl(0 0% 99%);
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    max-inline-size: 46rem;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  @media (min-width: 30rem) {
    @supports (display: grid) {
      div > * + * {
        margin-block-start: initial;
      }

      div {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-areas: "points code" "controls controls" "animation animation";
        gap: 0.5rem 1rem;
      }

      div > svg:first-of-type {
        grid-area: points;
      }

      div > pre {
        grid-area: code;
      }

      div > section {
        grid-area: controls;
      }

      div > svg:last-of-type {
        grid-area: animation;
      }
    }
  }

  div > svg:first-of-type {
    display: block;
    inline-size: 100%;
    max-inline-size: 20rem;
  }

  div > pre {
    inline-size: 100%;
  }

  div > svg:last-of-type {
    display: block;
    inline-size: 100%;
    max-inline-size: 30rem;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    font-size: 1rem;
    appearance: none;
    padding: 0.1rem 0.25rem;
    border: none;
    border-radius: 1rem;
    background: hsl(0 0% 30%);
    accent-color: hsl(0 0% 99%);
  }

  button {
    display: block;
    text-transform: uppercase;
    color: hsl(0 0% 99%);
    background: hsl(0 0% 30%);
    letter-spacing: 1px;
    border: none;
    border-radius: 0.25rem;
    padding: 0.2rem 0.5rem;
  }

  button:hover {
    background: #ff0088;
  }

  .focus:focus {
    outline-color: hsl(0 0% 70%);
  }

  .focus:not(:focus-visible):focus {
    outline: none;
  }
</style>
