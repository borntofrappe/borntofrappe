<script>
  import stars from "./stars.js";
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Shape, TAU } = pkg;

  const diameter = 180;
  const black = "hsl(216 45% 16%)";
  const grey = "hsl(202 89% 33%)";
  const white = "hsl(0, 0%, 97%)";
  const shadow = "hsl(202 86% 30%)";

  /** @typedef {{ hh: number, mm: number, ss: number }} Ascension */
  /** @typedef { number } Declination */

  const circles = stars
    .trim()
    .split("\n")
    .reduce((acc, curr) => {
      const [ascension, declination] = curr.trim().split("|");
      const [hh, mm, ss] = ascension
        .trim()
        .split(" ")
        .map((d) => parseFloat(d));

      return [
        ...acc,
        {
          ascension: {
            hh,
            mm,
            ss,
          },
          declination: parseFloat(declination.trim()),
        },
      ];
    }, /** @type Array<{ascension: Ascension, declination: Declination}> */ ([]));

  /**
   *
   * @param { Ascension } param
   */
  const ascensionToDegrees = ({ hh, mm, ss }) =>
    (hh + mm / 60 + ss / 3600) * 15;
  /**
   * @param { number } deg
   */
  const degreesToRad = (deg) => (deg / 180) * Math.PI;

  /** @type {HTMLCanvasElement} */
  let element;

  onMount(() => {
    const root = new Anchor();

    const anchor = new Anchor({
      addTo: root,
    });

    new Shape({
      addTo: root,
      color: black,
      stroke: 0,
      fill: true,
      path: [
        { x: -250, y: -120 },
        {
          arc: [
            { x: -250, y: -160 },
            { x: -210, y: -160 },
          ],
        },
        { x: 210, y: -160 },
        {
          arc: [
            { x: 250, y: -160 },
            { x: 250, y: -120 },
          ],
        },
        { x: 250, y: 120 },
        {
          arc: [
            { x: 250, y: 160 },
            { x: 210, y: 160 },
          ],
        },
        { x: -210, y: 160 },
        {
          arc: [
            { x: -250, y: 160 },
            { x: -250, y: 120 },
          ],
        },
        { x: -250, y: 120 },
      ],
      translate: {
        z: -diameter,
      },
    });

    new Shape({
      addTo: root,
      stroke: diameter,
      color: grey,
    });

    const arcs = 8;
    const radius = diameter / 2;
    const dy = radius / (arcs / 2);
    const path = [
      { x: 0, y: -radius },
      ...Array(arcs)
        .fill("")
        .reduce((acc, curr, i, { length }) => {
          let x0 =
            i === length - 1 || i === 0
              ? 0
              : Math.floor((Math.random() * diameter) / 8 + diameter / 32);
          if (i % 2 !== 0) x0 *= -1;
          const y0 = -radius + i * dy;

          const x1 = i % 2 !== 0 ? x0 - dy : x0 + dy;
          const y1 = y0 + dy / 2;

          const x2 = x0;
          const y2 = y0 + dy;

          return [
            ...acc,
            { x: x0, y: y0 },
            {
              arc: [
                { x: x1, y: y1 },
                { x: x2, y: y2 },
              ],
            },
          ];
        }, []),
      {
        arc: [
          { x: radius, y: radius },
          { x: radius, y: 0 },
        ],
      },
      {
        arc: [
          { x: radius, y: -radius },
          { x: 0, y: -radius },
        ],
      },
    ];

    new Shape({
      addTo: root,
      stroke: 0,
      color: shadow,
      fill: true,
      path,
    });

    for (const { ascension, declination } of circles) {
      const x = degreesToRad(declination);
      const y = degreesToRad(ascensionToDegrees(ascension)) * -1;
      const stroke = 2 + Math.floor(Math.random() * 4);

      const a1 = new Anchor({
        addTo: anchor,
        rotate: { y },
      });

      const a2 = new Anchor({
        addTo: a1,
        rotate: { x },
      });

      new Shape({
        addTo: a2,
        color: white,
        stroke,
        translate: {
          z: diameter,
        },
      });
    }

    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;

    context.lineJoin = "round";
    context.lineCap = "round";

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(width / 2, height / 2);
      root.renderGraphCanvas(context);
      context.restore();
    };

    root.updateGraph();
    render();

    /** @type number */
    let frame;

    const animate = () => {
      anchor.rotate.y = (anchor.rotate.y + 0.01) % TAU;

      root.updateGraph();
      render();
      frame = requestAnimationFrame(animate);
    };

    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (entries[0].isIntersecting) {
        frame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(frame);
      }
    };

    const observer = new IntersectionObserver(observation);
    observer.observe(element);

    return () => {
      cancelAnimationFrame(frame);
      observer.unobserve(element);
    };
  });
</script>

<canvas
  bind:this={element}
  style="display: block; inline-size: 100%; max-inline-size: 500px;"
  width="500"
  height="320"
></canvas>
