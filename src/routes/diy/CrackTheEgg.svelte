<script>
  import Title from "./Title.svelte";
  import AnimatedTitle from "./AnimatedTitle.svelte";

  const eggShape = "M 0 0 c 25 0 15 -32 0 -32 -15 2 -25 32 0 32";

  const eggSpots = [
    { cx: -11, cy: -28, rx: 8, ry: 9, strokeWidth: 2 },
    { cx: 14, cy: 1, rx: 12, ry: 10, strokeWidth: 2 },
    { cx: 5, cy: -16, rx: 4, ry: 4, strokeWidth: 1 },
    { cx: 5, cy: -24, rx: 2, ry: 2, strokeWidth: 1 },
    { cx: -12, cy: -5, rx: 5, ry: 5, strokeWidth: 3 },
    { cx: -7.5, cy: -8, rx: 3, ry: 3, strokeWidth: 3 },
    { cx: -12, cy: -5, rx: 5, ry: 5, strokeWidth: 0 },
    { cx: -7.5, cy: -8, rx: 3, ry: 3, strokeWidth: 0 },
  ];

  const eggCrack =
    "M -16 -12.5 l 3 -2.5 4 2.5 l 3 -2.5 6 3 l 2.5 -2.5 2.5 2.5 2.5 -2.5 l 2.5 2.5 6 -3.5";

  const { eggFragments } = eggCrack.split("l").reduce(
    (acc, curr, i) => {
      const offsets = /** @type { RegExpMatchArray } */ (
        curr.match(/-?[\d\.]+ -?[\d\.]+/g)
      );

      if (i === 0) {
        const match = /** @type { RegExpMatchArray } */ (
          offsets[0].match(/-?[\d\.]+/g)
        );
        const [xo, yo] = match.map((i) => parseFloat(i));
        acc.x = xo;
        acc.y = yo;
        return acc;
      }

      const match = /** @type { RegExpMatchArray } */ (
        curr.match(/-?[\d\.]+ -?[\d\.]+/g)
      );
      const eggFragment = match.reduce(
        (a, c) => {
          const match = /** @type { RegExpMatchArray } */ (
            c.match(/-?[\d\.]+/g)
          );
          const [x1, y1] = match.map((d) => parseFloat(d));

          acc.x += x1;
          acc.y += y1;

          a.d += ` l ${x1} ${y1}`;
          a.width += x1;
          return a;
        },
        { d: `M ${acc.x} ${acc.y}`, x: acc.x, y: -50, width: 0, height: 100 }
      );

      acc.eggFragments = [...acc.eggFragments, eggFragment];
      return acc;
    },
    {
      x: 0,
      y: 0,
      eggFragments:
        /** @type Array<{d: string, x: number, y: number, width: number, height: number}> */ ([]),
    }
  );
</script>

<svg style="display: block;" viewBox="0 0 80 50">
  <title>Crack the egg!</title>

  <defs>
    <pattern
      id="crack-the-egg-pattern-sky"
      viewBox="0 0 2 2"
      width="1"
      height="1"
      patternUnits="userSpaceOnUse"
    >
      <rect fill="#5bd2de" width="2" height="2" />
      <g fill="#bdebe6">
        <rect width="1" height="1" />
        <rect x="1" y="1" width="1" height="1" />
      </g>
    </pattern>

    <pattern
      id="crack-the-egg-pattern-cloud"
      viewBox="0 0 2 2"
      width="1"
      height="1"
      patternUnits="userSpaceOnUse"
    >
      <rect fill="#e6e7e6" width="2" height="2" />
      <g fill="#d6d2d6">
        <rect width="1" height="1" />
        <rect x="1" y="1" width="1" height="1" />
      </g>
    </pattern>

    <pattern
      id="crack-the-egg-pattern-spot"
      viewBox="0 0 2 2"
      width="1"
      height="1"
      patternUnits="userSpaceOnUse"
    >
      <rect width="2" height="2" fill="#ce7931" />
      <rect width="1" height="1" fill="#f7c283" />
      <rect x="1" y="1" width="1" height="1" fill="#f7c283" />
    </pattern>

    <path id="crack-the-egg-egg-shape" d={eggShape} />

    <clipPath id="crack-the-egg-clip-egg-shape">
      <use href="#crack-the-egg-egg-shape" />
    </clipPath>

    <g id="crack-the-egg-egg">
      <use fill="#f7d794" href="#crack-the-egg-egg-shape" />

      <g clip-path="url(#crack-the-egg-clip-egg-shape)">
        <g fill="#c54900" stroke="url(#crack-the-egg-pattern-spot)">
          {#each eggSpots as { cx, cy, rx, ry, strokeWidth }}
            <ellipse {cx} {cy} {rx} {ry} stroke-width={strokeWidth} />
          {/each}
        </g>
      </g>

      <use fill="none" stroke="currentColor" href="#crack-the-egg-egg-shape" />
    </g>

    <clipPath id="crack-the-egg-clip-egg-top-half">
      <path d="{eggCrack} l 80 -50 h -160 z" />
    </clipPath>

    <clipPath id="crack-the-egg-clip-egg-bottom-half">
      <path d="{eggCrack} l 80 50 h -160 z" />
    </clipPath>

    <symbol id="crack-the-egg-surprise" viewBox="0 0 19 23.5">
      <g stroke="currentColor" stroke-width="1" transform="translate(0.5 0.5)">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#f7f75a"
          d="M 5 1 h -4 v 4z"
        />
        <path
          fill="#f7f75a"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M 8.5 18.5 v 2 h -3 v 2 h 6 v -2 h -1.5 v -2"
        />
        <path
          fill="#fefefe"
          d="M 0 11.5 c 0 10 18 10 18 0 v -4 h -6 v -2 c 0 -8 -12 -8 -12 6"
        />
      </g>
      <circle fill="currentColor" cx="6" cy="4" r="0.75" />
    </symbol>
  </defs>

  <rect fill="url(#crack-the-egg-pattern-sky)" width="80" height="50" />

  <g fill="url(#crack-the-egg-pattern-cloud)">
    <g transform="translate(20 17.5)">
      <circle r="9" />
      <circle cx="-8" r="7" />
      <circle cx="8" r="7" />
    </g>

    <g transform="translate(67.5 32.5)">
      <circle r="9" />
      <circle cx="-9" cy="3" r="6" />
      <circle cx="9" cy="3" r="6" />
    </g>

    <g transform="translate(70 8)">
      <ellipse rx="8" ry="5" />
      <ellipse cx="-10" cy="4" rx="8" ry="5" />
    </g>
    <g transform="translate(5 40)">
      <ellipse rx="9" ry="6" />
      <ellipse cx="10" cy="2" rx="7" ry="4" />
      />
    </g>
  </g>

  <g transform="translate(40 50)">
    <g>
      <animateTransform
        begin="crackTheEggStart.begin"
        end="crackTheEggOpen.begin"
        attributeName="transform"
        type="translate"
        values="0 0; 20 0; 0 0; -20 0; 0 0;"
        dur="10s"
        calcMode="spline"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
        repeatCount="indefinite"
        fill="freeze"
      />
      <g>
        <animateTransform
          id="crackTheEggOpened"
          begin="crackTheEggOpen.begin"
          attributeName="transform"
          type="translate"
          values="0 0; 0 -20; 0 -15"
          calcMode="spline"
          keyTimes="0; 0.7; 1"
          keySplines="0.8 0 0.25 1; 0.5 0 0.5 1;"
          dur="0.7s"
          fill="freeze"
        />
        <g transform="translate(0 -1)">
          <use
            href="#crack-the-egg-surprise"
            x="-9.5"
            y="-23.5"
            width="19"
            height="23.5"
          />
        </g>
      </g>
      <g>
        <animateTransform
          begin={eggFragments
            .map((_, i) => `crackTheEggFragment${i}.begin`)
            .join(";")}
          attributeName="transform"
          type="rotate"
          values="0; 5; 0; -5; 0"
          dur="0.3s"
        />
        <g stroke-width="1" transform="translate(0 -0.5)">
          <g>
            <set
              begin="crackTheEggOpen.begin"
              attributeName="display"
              to="none"
              fill="freeze"
            />

            <use href="#crack-the-egg-egg" />

            <g clip-path="url(#crack-the-egg-clip-egg-shape)">
              <g fill="none" stroke="currentColor" stroke-linecap="square">
                {#each eggFragments as { d }, i}
                  <g opacity="0">
                    <set
                      begin="crackTheEggFragment{i}.begin"
                      attributeName="opacity"
                      to="1"
                      fill="freeze"
                    />
                    <path {d} />
                  </g>
                {/each}
              </g>

              <g opacity="0">
                {#each eggFragments as { x, y, width, height }, i}
                  <g style:cursor="pointer">
                    <set
                      id="crackTheEggFragment{i}"
                      begin="click"
                      attributeName="display"
                      to="none"
                      fill="freeze"
                    />
                    <rect {x} {y} {width} {height} />
                  </g>
                {/each}
              </g>
            </g>
          </g>

          <g transform="translate(0 {100 * eggFragments.length * -1})">
            {#each eggFragments as _, i}
              <animateTransform
                begin="crackTheEggFragment{i}.begin"
                attributeName="transform"
                type="translate"
                by="0 100"
                dur="0.1s"
                fill="freeze"
                calcMode="discrete"
              />
            {/each}

            <g>
              <animateTransform
                begin="crackTheEggOpen.begin + 0.1s"
                attributeName="transform"
                type="translate"
                to="0 -50"
                dur="0.35s"
                calcMode="spline"
                keySplines="0.8 0 0.25 1"
                fill="freeze"
              />
              <g clip-path="url(#crack-the-egg-clip-egg-top-half)">
                <use href="#crack-the-egg-egg" />
                <path
                  d={eggCrack}
                  clip-path="url(#crack-the-egg-clip-egg-shape)"
                  fill="none"
                  stroke="currentColor"
                />
              </g>
            </g>

            <g>
              <animateTransform
                begin="crackTheEggOpen.begin + 0.1s"
                attributeName="transform"
                type="translate"
                to="0 50"
                dur="0.35s"
                calcMode="spline"
                keySplines="0.8 0 0.25 1"
                fill="freeze"
              />
              <g clip-path="url(#crack-the-egg-clip-egg-bottom-half)">
                <use href="#crack-the-egg-egg" />
                <path
                  d={eggCrack}
                  clip-path="url(#crack-the-egg-clip-egg-shape)"
                  fill="none"
                  stroke="currentColor"
                />
              </g>
            </g>

            <g style:cursor="pointer">
              <set
                id="crackTheEggOpen"
                begin="click"
                attributeName="display"
                to="none"
                fill="freeze"
              />
              <use opacity="0" href="#crack-the-egg-egg" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>

  <g display="none">
    <set
      id="crackTheEggMessage"
      begin="crackTheEggOpened.end"
      attributeName="display"
      to="initial"
      fill="freeze"
    />

    <g transform="translate(0 15)">
      <AnimatedTitle
        text="Open sesame!"
        fill="url(#linear-gradient-text)"
        begin="crackTheEggMessage.begin"
        end="crackTheEggEnd.begin"
        repeatCount="indefinite"
      />
    </g>

    <rect style:cursor="pointer" width="80" height="50" opacity="0">
      <set
        id="crackTheEggEnd"
        begin="click"
        attributeName="display"
        to="none"
        fill="freeze"
      />
    </rect>
  </g>

  <g style:cursor="pointer">
    <set
      id="crackTheEggStart"
      begin="click"
      attributeName="display"
      to="none"
      fill="freeze"
    />

    <Title fill="url(#linear-gradient-text)">Break open!</Title>

    <rect width="80" height="50" opacity="0" />
  </g>
</svg>
