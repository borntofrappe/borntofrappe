<script>
  import { tweened } from "svelte/motion";
  import { quadInOut as easing } from "svelte/easing";
  import { onMount } from "svelte";

  const colors = {
    accent: "hsl(20 90% 50%)",
    background: "hsl(0 0% 99%)",
    text: "hsl(0 0% 20%)",
  };

  const grid = [
    [
      '<tspan font-size="0.3">2nd</tspan>',
      '<tspan font-size="0.3">deg</tspan>',
      '<tspan font-size="0.3">sin</tspan>',
      '<tspan font-size="0.3">cos</tspan>',
      '<tspan font-size="0.3">tan</tspan>',
    ],
    [
      '<tspan font-size="0.3">x<tspan font-size="0.275" dy="-0.2">y</tspan></tspan>',
      '<tspan font-size="0.3">lg</tspan>',
      '<tspan font-size="0.3">ln</tspan>',
      '<tspan font-size="0.3">{</tspan>',
      '<tspan font-size="0.3">}</tspan>',
    ],
    [
      '<tspan font-size="0.3">&Sqrt;x</tspan>',
      "",
      "",
      `<tspan fill="${colors.accent}">%</tspan>`,
      `<tspan fill="${colors.accent}">&divide;</tspan>`,
    ],
    [
      '<tspan font-size="0.3">x!</tspan>',
      "7",
      "8",
      "9",
      `<tspan fill="${colors.accent}">x</tspan>`,
    ],
    [
      '<tspan font-size="0.3"><tspan dy="-0.1">1</tspan><tspan dy="0.1">/</tspan><tspan dy="0.1">x</tspan></tspan>',
      "4",
      "5",
      "6",
      `<tspan fill="${colors.accent}">-</tspan>`,
    ],
    [
      '<tspan font-size="0.3">&pi;</tspan>',
      "1",
      "2",
      "3",
      `<tspan fill="${colors.accent}">+</tspan>`,
    ],
    ["", "", "0", ".", ""],
  ];

  const width = Math.max(...grid.map((row) => row.length));
  const height = grid.length;
  const keys = grid
    .map((row, y) =>
      row.map((text, x) => ({
        x,
        y,
        text,
      }))
    )
    .flat();

  const insets = [
    { x: 1, y: 2 },
    { x: 0, y: 0 },
  ];

  let index = $state(0);
  // svelte-ignore state_referenced_locally
  const inset = tweened(insets[index], {
    easing,
  });

  /** @type { HTMLButtonElement }*/
  let widget;

  onMount(() => {
    const updateInset = () => {
      const duration = matchMedia("(prefers-reduced-motion)").matches ? 0 : 240;

      index = (index + 1) % insets.length;
      inset.set(insets[index], {
        duration,
      });
    };

    widget.removeAttribute("disabled");
    widget.setAttribute("aria-label", "Toggle compact picture");
    widget.setAttribute("aria-pressed", "true");
    widget.addEventListener("click", updateInset);
    return () => {
      widget.removeEventListener("click", updateInset);
    };
  });
</script>

<button bind:this={widget} disabled>
  <svg
    style="display: block"
    viewBox="{$inset.x} {$inset.y} {width - $inset.x} {height - $inset.y}"
  >
    <rect fill={colors.background} {width} {height} />
    <circle fill={colors.accent} cx="4.5" cy="6.5" r="0.35" />
    <g fill="none" stroke-linejoin="round" stroke-linecap="round">
      <g stroke={colors.accent} stroke-width="0.03">
        <g transform="translate(1.5 6.5) scale(0.8)">
          <g id="toggle" opacity="0">
            <path
              d="M 0.275 0.075 A 0.15 0.15 0 0 1 0.15 0.225 L 0.2 0.25 M -0.275 -0.075 A 0.15 0.15 0 0 1 -0.15 -0.225 L -0.2 -0.25"
            />
            <path
              d="M 0.0375 0.025 A 0.05 0.05 0 0 0 -0.0125 -0.025 L -0.0375 -0.025 -0.0375 -0.15 A 0.05 0.05 0 0 1 0.0125 -0.2 L 0.1375 -0.2 A 0.05 0.05 0 0 1 0.1875 -0.15 L 0.1875 -0.025 A 0.05 0.05 0 0 1 0.1375 0.025 L 0.0375 0.025 A 0.05 0.05 0 0 0 -0.0125 -0.025 L -0.0375 -0.025 -0.1375 -0.025 A 0.05 0.05 0 0 0 -0.1875 0.025 L -0.1875 0.15 A 0.05 0.05 0 0 0 -0.1375 0.2 L -0.0125 0.2 A 0.05 0.05 0 0 0 0.0375 0.15 Z"
            />
          </g>
        </g>
        <path
          transform="translate(2.5 2.5)"
          d="M -0.05 -0.05 0.05 0.05 M 0.05 -0.05 -0.05 0.05 M 0.14 -0.12 -0.11 -0.12 -0.2 0 -0.11 0.12 0.14 0.12 Z"
        />
        <path
          transform="translate(1.5 2.5)"
          d="M 0.085 -0.09 A 0.11 0.11 0 1 0 0.075 0.09"
        />
      </g>
      <path
        transform="translate(4.5 6.5)"
        stroke={colors.background}
        stroke-width="0.04"
        d="M 0.09 -0.06 -0.09 -0.06 M 0.09 0.06 -0.09 0.06"
      />
    </g>
    <g
      fill={colors.text}
      font-family="monospace"
      font-size="0.4"
      text-anchor="middle"
      transform="translate(0.5 0.62)"
    >
      {#each keys as { x, y, text }}
        <text {x} {y}>{@html text}</text>
      {/each}
    </g>
  </svg>
</button>

<style>
  button {
    display: block;
    inline-size: 100%;
    max-inline-size: 22rem;
    margin-inline: auto;
    padding: 0;
    background: none;
    border: none;
  }

  button:not([disabled]) {
    cursor: pointer;
  }

  button:not([disabled]) #toggle {
    opacity: 1;
    scale: 0.8;
    transition: scale 0.2s cubic-bezier(0.37, 0, 0.63, 1);
  }

  button:not([disabled]):is(:hover, :focus-visible) #toggle {
    scale: 1;
  }

  button:not([disabled]):active #toggle {
    scale: 0.9;
  }

  button:not([disabled]):focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  button > svg {
    inline-size: 100%;
    block-size: auto;
  }

  svg {
    display: block;
    box-sizing: border-box;
  }
</style>
