<script>
  import Title from "./Title.svelte";
  import AnimatedTitle from "./AnimatedTitle.svelte";

  const swims = [
    "44 37; 37 35; 35 36",
    "44 37; 41 36; 44 38",
    "44 37; 45 36",
    "44 37; 45 36",
  ];

  const values = swims[Math.floor(Math.random() * swims.length)];
  const match = /** @type { RegExpMatchArray } */ (
    values.match(/[\d-]+ [\d-]+/g)
  );
  const turns = match.length;
  const dur = `${turns * 0.7}s`;
  const keySplines = Array(turns - 1)
    .fill("0.5 0 0.5 1")
    .join("; ");
</script>

<svg style="display: block;" viewBox="0 0 80 50">
  <title>Catch the fish!</title>

  <defs>
    <symbol id="catch-the-fish-target" viewBox="-0.25 -0.25 58.5 35.5">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M 0.5 22.5 8.5 14.5 M 1.5 25.5 2.5 24.5 M 3.5 27.5 4.5 26.5 M 5.5 29.5 6.5 28.5 M 8.5 30.5 9.5 29.5 M 10.5 20.5 11.5 19.5 M 11.5 23.5 12.5 22.5 M 11.5 31.5 Z M 12.5 14.5 18.5 8.5 M 14.5 32.5 15.5 31.5 M 17.5 5.5 20.5 2.5 M 17.5 33.5 18.5 32.5 M 18.5 16.5 Z M 18.5 28.5 21.5 25.5 M 19.5 19.5 20.5 18.5 M 20.5 10.5 23.5 7.5 M 20.5 22.5 21.5 21.5 M 20.5 34.5 21.5 33.5 M 22.5 28.5 Z M 23.5 3.5 25.5 1.5 M 24.5 22.5 25.5 21.5 M 24.5 30.5 25.5 29.5 M 24.5 34.5 25.5 33.5 M 26.5 8.5 28.5 6.5 M 27.5 23.5 28.5 22.5 M 27.5 31.5 31.5 27.5 M 28.5 2.5 30.5 0.5 M 28.5 34.5 29.5 33.5 M 29.5 25.5 30.5 24.5 M 31.5 7.5 32.5 6.5 M 32.5 34.5 34.5 32.5 M 33.5 1.5 Z M 35.5 3.5 36.5 2.5 M 36.5 6.5 37.5 5.5 M 38.5 9.5 39.5 8.5 M 38.5 32.5 41.5 29.5 M 42.5 10.5 43.5 9.5 M 44.5 13.5 46.5 11.5 M 45.5 29.5 49.5 25.5 M 48.5 14.5 49.5 13.5 M 51.5 27.5 Z M 52.5 12.5 Z M 53.5 29.5 Z M 55.5 31.5 57.5 29.5 M 56.5 10.5 M 56.5 14.5 57.5 13.5 M 56.5 18.5 57.5 17.5 M 56.5 22.5 57.5 21.5 M 56.5 26.5 57.5 25.5"
      />
    </symbol>

    <symbol id="catch-the-fish-catch" viewBox="-0.25 -0.25 58.5 35.5">
      <circle fill="currentColor" cx="11.5" cy="21.5" r="2.25" />
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 0.5 22.5 C 5 15 14 10.5 18 9.5 C 23 8 30 6.5 36.5 7.5 C 41 8.5 45.5 11.5 49.5 16.5 Q 54 12 57.5 10.5 Q 56 21.5 57.5 32.5 Q 54 30 49.5 25.5 C 45 32 34 34.5 27 34.5 C 18 34.5 5 30 0.5 22.5 M 17 9.5 C 17 3 24 3.5 27 3 C 32 2.5 36.5 2 36.5 7.5 M 18.5 15.5 C 22 19.5 22 25 18 28.5 M 21.5 22.5 C 26 20 31.5 23 29.5 27.5 C 28 30 25 31 20.5 26"
      />
    </symbol>

    <pattern
      id="catch-the-fish-pattern-sky"
      viewBox="-4 -4 8 8"
      width="4"
      height="4"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <g fill="#f8f8f8">
        <circle r="0.7" cx="2" />
        <circle r="0.3" cx="-1.5" cy="-1" />
      </g>
    </pattern>

    <pattern
      id="catch-the-fish-pattern-mountain"
      viewBox="-3 -3 6 6"
      width="1"
      height="1"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <circle fill="#f8f8f8" r="0.9" />
    </pattern>

    <pattern
      id="catch-the-fish-pattern-side"
      viewBox="-3 -3 6 6"
      width="1"
      height="1"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <circle fill="#f8f8f8" r="1.5" />
    </pattern>

    <g id="catch-the-fish-ice-hole">
      <path
        fill="#c0c0c0"
        stroke="#c0c0c0"
        stroke-width="0.2"
        d="M -2 -1 -1 -3 0 -4.2 2 -3 5 -1 6 -2 8 -2 7 0 8 3 6 4 6 5 5 4.5 4 3.5 2 2 0 2 -2 4 -3 4 -4 5 -6 3 -7 2 -6 1 -7 -2 -4 -1 Z"
      />
      <path
        fill="#7d7d7d"
        stroke="#7d7d7d"
        stroke-width="0.2"
        d="M -1 -3 -1 3 -2 4 -2 -1 Z M 5 -1 5 4.5 6 5 6 4 8 3 7 0 8 -2 6 -2 5 -1 Z"
      />
      <path stroke="#f8f8f8" stroke-width="0.1" d="M -5 -1 -5 2 M 3 -2 3 1" />
      <path
        stroke="#f8f8f8"
        stroke-width="0.2"
        d="M -4.1 -0.5 -4.1 3.5 M 2 -2 2 1 M 5.2 -1 5.2 4 Z"
      />
    </g>

    <g id="catch-the-fish-ice-shard-1">
      <g stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round">
        <path
          fill="#f8f8f8"
          stroke="#f8f8f8"
          d="M -1 -4 0 -4 2 -1 0 3 -2 2 -2 -1 -1 -4 Z"
        />
        <path
          fill="#c0c0c0"
          stroke="#c0c0c0"
          d="M 0 -4 2 -1 0 3 2 1 3 -2 Z M 0 -2 -1.2 0 Z M 0.6 -1.8 -1.4 1.5 Z"
        />
        <path
          fill="none"
          stroke="#7d7d7d"
          stroke-width="0.2"
          d="M 0 -4 3 -2 2 1 0 3 -2 2 -2 -1 -1 -4 0 -4 Z M 0 -4 2 -1 0 3 M 2 -1 3 -2"
        />
      </g>
    </g>

    <g id="catch-the-fish-ice-shard-2">
      <g stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round">
        <path
          fill="#f8f8f8"
          stroke="#f8f8f8"
          d="M -1 -2 0 -2 1 -1 1 2 0 3 -1 2 -2 0 -1 -2 Z"
        />
        <path
          fill="#c0c0c0"
          stroke="#c0c0c0"
          d="M 0 -2 1 -1 1 2 2 1 2 -1 1 -2 Z M -0.1 -1.3 -1.2 0.4 M 0.5 -0.7 -0.6 1 Z"
        />
        <path
          fill="none"
          stroke="#7d7d7d"
          stroke-width="0.2"
          d="M 1 -2 2 -1 2 1 0 3 -1 2 -2 0 -1 -2 Z M -1 -2 0 -2 1 -1 1 2"
        />
      </g>
    </g>

    <g id="catch-the-fish-ice-shard-3">
      <g stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round">
        <path
          fill="#f8f8f8"
          stroke="#f8f8f8"
          d="M -2 -1 -1 -1 1 1 2 1 1 2 0 2 -2 0 Z"
        />
        <path
          fill="#c0c0c0"
          stroke="#c0c0c0"
          d="M -1 -1 1 1 2 1 0 -1 Z M -1 0 0 1"
        />
        <path
          fill="none"
          stroke="#7d7d7d"
          stroke-width="0.2"
          d="M -2 -1 -1 -1 0 -1 2 1 1 2 0 2 -2 0 Z M 0 2 1 1 -1 -1 M 1 1 2 1"
        />
      </g>
    </g>
  </defs>
  <rect fill="#f8f8f8" width="80" height="50" />
  <rect fill="#10c0c8" width="80" height="16" />
  <rect fill="url(#catch-the-fish-pattern-sky)" width="80" height="16" />
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path
      fill="#c0c0c0"
      stroke="#c0c0c0"
      d="M 0.5 7 4 4 7 7 11 5 16 8 19 5 27 11 37 4 46 10 49 8 53 11 60 5 65 8 68 6 72 8 76 5 79.5 6 79.5 15 0.5 15 Z"
    />
    <path
      fill="url(#catch-the-fish-pattern-mountain)"
      stroke="url(#catch-the-fish-pattern-mountain)"
      d="M 0.5 7 4 4 7 7 11 5 16 8 19 5 27 11 37 4 46 10 49 8 53 11 60 5 65 8 68 6 72 8 76 5 79.5 6 79.5 15 0.5 15 Z"
    />
    <path
      fill="url(#catch-the-fish-pattern-side)"
      stroke="url(#catch-the-fish-pattern-side)"
      d="M 0.5 7 4 4 2 9 1 9 Z M 6 8 7 7 11 5 10 7 7 10 6 9 Z M 1 14 3 11 3 12 2 14 1 14 Z M 15 9 19 5 18 10 14 10 Z M 27 11 37 4 31 11 27 12 Z M 47 10 49 8 48 10 47 10 Z M 52 12 60 5 58 12 52 12 Z M 63 10 68 6 66 11 Z M 72 8 76 5 74 9 Z"
    />
  </g>

  <g
    transform="translate(15 32)"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g>
      <animateTransform
        begin="catchTheFishBite.end"
        end="catchTheFishCatch.begin; catchTheFishEscape.begin"
        attributeName="transform"
        type="translate"
        dur="0.2s"
        values="0 0; 0.25 0; -0.25 0;"
        repeatCount="indefinite"
        fill="freeze"
      />
      <animateTransform
        begin="catchTheFishCatch.begin"
        attributeName="transform"
        type="translate"
        dur="0.2s"
        to="0 -13"
        fill="freeze"
      />
      <path
        display="none"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-width="0.3"
        d="M 6 -13.5 Q 6.25 -15 7.25 -16 M 8 -14.25 Q 8.5 -15.5 10 -16.5"
      >
        <set
          begin="catchTheFishBite.end"
          attributeName="display"
          to="initial"
        />
        <set
          begin="catchTheFishEscape.begin"
          end="catchTheFishCatch.begin"
          attributeName="display"
          to="none"
        />
        <animate
          begin="catchTheFishCatch.begin"
          end="catchTheFishEnd.begin"
          attributeName="opacity"
          dur="0.2s"
          values="1; 0"
          calcMode="discrete"
          repeatCount="indefinite"
        />
      </path>
      <path stroke="#000000" stroke-width="0.3" d="M 19 -18 19 0">
        <animate
          begin="catchTheFishBite.end"
          attributeName="d"
          to="M 17 -18 18 0"
          dur="0.1s"
          fill="freeze"
        />
        <set
          begin="catchTheFishEscape.begin"
          end="catchTheFishCatch.begin"
          attributeName="d"
          to="M 19 -18 19 0"
        />
      </path>
      <path
        fill="#c04800"
        stroke="#c04800"
        stroke-width="0.5"
        d="M 0.5 -0.5 A 200 200 0 0 1 19 -18 A 200 200 0 0 0 1 0 Z"
      >
        <animate
          begin="catchTheFishBite.end"
          end="catchTheFishEscape.begin"
          attributeName="d"
          to="M 0.5 -0.5 A 30 30 0 0 1 17 -18 A 30 30 0 0 0 1.2 -0.1 Z"
          dur="0.1s"
          fill="freeze"
        />
        <set
          begin="catchTheFishEscape.begin"
          end="catchTheFishCatch.begin"
          attributeName="d"
          to="M 0.5 -0.5 A 200 200 0 0 1 19 -18 A 200 200 0 0 0 1 0 Z"
        />
      </path>
      <path
        transform="translate(19 2.4)"
        fill="none"
        stroke="#c04800"
        stroke-width="0.5"
        d="M -0.6 0.6 0 0 M 0 1.2 Z M 0.6 0.6 Z"
      >
        <set
          begin="catchTheFishCatch.begin; catchTheFishEscape.begin"
          attributeName="display"
          to="none"
        />
      </path>
    </g>
    <g transform="translate(19 0)">
      <ellipse rx="2.5" ry="1.5">
        <set
          begin="catchTheFishCatch.begin"
          attributeName="display"
          to="none"
        />
      </ellipse>
      <g transform="translate(0 2)">
        <animateTransform
          begin="catchTheFishCatch.begin"
          attributeName="transform"
          type="translate"
          dur="0.2s"
          values="-80 0; -160 0; -240 0"
          calcMode="discrete"
          fill="freeze"
        />
        <g transform="translate(80 0)">
          <use href="#catch-the-fish-ice-hole" />
        </g>

        <g transform="translate(160 0)">
          <use href="#catch-the-fish-ice-hole" />
          <use
            transform="translate(-4 -3) scale(0.8)"
            href="#catch-the-fish-ice-shard-1"
          />
          <use
            transform="translate(6 -5) scale(0.8)"
            href="#catch-the-fish-ice-shard-2"
          />
        </g>

        <g transform="translate(240 0)">
          <use href="#catch-the-fish-ice-hole" />
          <use
            transform="translate(-6 6.5) scale(0.8)"
            href="#catch-the-fish-ice-shard-1"
          />
          <use
            transform="translate(4.5 4) scale(0.8)"
            href="#catch-the-fish-ice-shard-2"
          />
          <use
            transform="translate(4.5 -4.5) scale(0.7)"
            href="#catch-the-fish-ice-shard-3"
          />
        </g>
      </g>
    </g>
  </g>

  <use
    transform="translate(80 50)"
    style="color: #000000;"
    width="15"
    height="9"
    href="#catch-the-fish-target"
  >
    <set
      begin="catchTheFishCatch.begin"
      attributeName="href"
      to="#catch-the-fish-catch"
    />
    <animateTransform
      id="catchTheFishEnter"
      begin="catchTheFishStart.begin + 0.5s"
      attributeName="transform"
      type="translate"
      dur="4.5s"
      values="80 50; 27 37; 44 37"
      calcMode="spline"
      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
      keyTimes="0; 0.7; 1"
      fill="freeze"
    />
    <animateTransform
      id="catchTheFishSwim"
      begin="catchTheFishEnter.end"
      attributeName="transform"
      type="translate"
      {dur}
      {values}
      calcMode="spline"
      {keySplines}
      fill="freeze"
    />
    <animateTransform
      id="catchTheFishBite"
      begin="catchTheFishSwim.end"
      attributeName="transform"
      type="translate"
      dur="0.3s"
      to="30 32"
      calcMode="spline"
      keySplines="0.5 0 0.5 1"
      fill="freeze"
    />
    <animateTransform
      id="catchTheFishEscape"
      begin="catchTheFishBite.end + 0.9s"
      end="catchTheFishCatch.begin"
      attributeName="transform"
      type="translate"
      dur="0.5s"
      to="-20 50"
      calcMode="spline"
      keySplines="0.5 0 0.5 1"
      fill="freeze"
    />
    <animateTransform
      id="catchTheFishShow"
      begin="catchTheFishCatch.begin"
      attributeName="transform"
      type="translate"
      dur="0.1s"
      to="26.5 18"
      calcMode="spline"
      keySplines="0.5 0 0.5 1"
      fill="freeze"
    />
    <animateTransform
      begin="catchTheFishShow.end"
      end="catchTheFishEnd.begin"
      attributeName="transform"
      type="translate"
      dur="0.3s"
      values="26.75 18.25; 26.25 18.25; 26.75 17.75; 26.25 17.75"
      repeatCount="indefinite"
      fill="freeze"
    />
  </use>

  <rect
    style="cursor: pointer;"
    display="none"
    width="80"
    height="50"
    opacity="0"
  >
    <set begin="catchTheFishBite.end" attributeName="display" to="initial" />
    <set begin="catchTheFishEscape.begin" attributeName="display" to="none" />
    <set
      id="catchTheFishCatch"
      begin="click"
      attributeName="display"
      to="none"
    />
  </rect>

  <g display="none">
    <set
      id="catchTheFishLose"
      begin="catchTheFishEscape.end"
      end="catchTheFishCatch.begin"
      attributeName="display"
      to="initial"
    />
    <g transform="translate(0 20)">
      <AnimatedTitle
        text="Sinker..."
        fill="url(#linear-gradient-text)"
        begin="catchTheFishLose.begin"
        end="catchTheFishEnd.begin"
        repeatCount="indefinite"
      />
    </g>
  </g>

  <g display="none">
    <set
      id="catchTheFishWin"
      begin="catchTheFishShow.end"
      attributeName="display"
      to="initial"
    />
    <g transform="translate(0 20)">
      <AnimatedTitle
        text="Hooked!"
        fill="url(#linear-gradient-text)"
        begin="catchTheFishWin.begin"
        end="catchTheFishEnd.begin"
        repeatCount="indefinite"
      />
    </g>
  </g>

  <rect
    style:cursor="pointer"
    display="none"
    width="80"
    height="50"
    opacity="0"
  >
    <set
      begin="catchTheFishLose.begin; catchTheFishWin.begin"
      attributeName="display"
      to="initial"
    />
    <set id="catchTheFishEnd" begin="click" attributeName="display" to="none" />
  </rect>

  <g style:cursor="pointer">
    <set
      id="catchTheFishStart"
      begin="click"
      attributeName="display"
      to="none"
    />

    <g transform="translate(0 20)">
      <Title fill="url(#linear-gradient-text)">Catch!</Title>
    </g>

    <rect width="80" height="50" opacity="0" />
  </g>
</svg>
