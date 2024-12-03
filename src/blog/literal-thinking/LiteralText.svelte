<script>
  import { onMount } from "svelte";

  export let validName = "lit-eral";
  $: [t0, t1] = validName.split("-");
  /** @type { SVGSVGElement } */
  let svg;

  onMount(() => {
    const [bBox0, bBox1] = [...svg.querySelectorAll("text")].map((text) =>
      text.getBBox()
    );
    const x0 = bBox0.x + bBox0.width;
    const y0 = bBox0.y + bBox0.height / 1.7;
    const x1 = bBox1.x;
    const y1 = bBox1.y + bBox1.height / 1.7;

    const path = /** @type { SVGRectElement } */ (
      svg.querySelector(":scope > path")
    );
    path.setAttribute("d", `M ${x0} ${y0} ${x1} ${y1}`);
  });
</script>

<svg bind:this={svg} style="display: block" viewBox="-19.5 -9.5 43 15">
  <defs>
    <path
      id="lit-mark"
      transform="rotate(45)"
      fill="none"
      stroke-width="0.5"
      stroke-linecap="round"
      d="M 0 -0.75 0 0.75 M -0.75 0 0.75 0"
    />
    <marker
      id="lit-marker-1"
      viewBox="-1 -1 2 2"
      markerWidth="2"
      markerHeight="2"
      markerUnits="userSpaceOnUse"
      orient="-10"
    >
      <use stroke="var(--mark-color, hsl(32 70% 79%))" href="#lit-mark" />
    </marker>
    <marker
      id="lit-marker-2"
      viewBox="-1 -1 2 2"
      markerWidth="2"
      markerHeight="2"
      markerUnits="userSpaceOnUse"
      orient="10"
    >
      <use stroke="var(--mark-color, hsl(32 70% 79%))" href="#lit-mark" />
    </marker>
    <filter id="lit-filter">
      <feFlood flood-color="var(--text-background, hsl(36 35% 66%))" />
      <feComposite in="SourceGraphic" operator="over" />
    </filter>
  </defs>
  <g
    fill="var(--text-color, hsl(351 61% 19%))"
    font-family="monospace"
    font-weight="700"
    letter-spacing="1"
  >
    <text filter="url(#lit-filter)" font-size="5" text-anchor="end" x="-2.5">
      {t0}
    </text>
    <text filter="url(#lit-filter)" font-size="5" x="2.5">{t1}</text>
  </g>
  <path
    fill="none"
    stroke="var(--hyphen-color, hsl(32 74% 82%))"
    stroke-width="0.4"
    marker-start="url(#lit-marker-1)"
    marker-end="url(#lit-marker-2)"
  />
</svg>
