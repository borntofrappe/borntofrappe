<script>
  import Title from "./Title.svelte";
  import AnimatedTitle from "./AnimatedTitle.svelte";

  const width = 80;
  const height = 50;
  const padding = 2;

  const sizes = {
    button: 9,
    sprite: 8,
  };

  const x0 = sizes.sprite / 2;
  const x1 = width - sizes.sprite / 2;
  const y0 = 18 + sizes.sprite / 2;
  const y1 = height - sizes.sprite / 2;

  const durs = {
    intro: "0.7s",
    click: "0.25s",
    outro: "0.5s",
  };

  const moves = 10;
  const durationPerUnit = 0.02;

  const getX = () => x0 + Math.floor(Math.random() * (x1 - x0));
  const getY = () => y0 + Math.floor(Math.random() * (y1 - y0));

  const id = "pickASideStart";
  const begin = `${id}.begin`;
  const ids = {
    left: "pickASideClickLeft",
    right: "pickASideClickRight",
  };
  const end = Object.values(ids)
    .map((id) => `${id}.begin`)
    .join(";");

  let destinations = Object.entries({
    left: [
      { x: 8, y: 26 },
      { x: 32, y: 26 },
      { x: 20, y: 34 },
      { x: 8, y: 42 },
      { x: 32, y: 42 },
    ],
    right: [
      { x: 48, y: 26 },
      { x: 72, y: 26 },
      { x: 60, y: 34 },
      { x: 48, y: 42 },
      { x: 72, y: 42 },
    ],
  }).reduce((acc, curr) => {
    const [sprite, destinations] = curr;
    return [...acc, ...destinations.map((d) => ({ ...d, sprite }))];
  }, /** @type Array<{x: number, y: number, sprite: string}> */ ([]));

  const length =
    Math.random() > 0.5 ? destinations.length - 1 : destinations.length - 3;

  const sprites = Array(length)
    .fill("")
    .map((_) => {
      const i = Math.floor(Math.random() * destinations.length);
      const destination = destinations[i];
      destinations = [
        ...destinations.slice(0, i),
        ...destinations.slice(i + 1),
      ];

      return destination;
    })
    .map(({ x, y, sprite }) => {
      const position = {
        x: getX(),
        y: getY(),
      };

      const positions = [
        position,
        ...Array(moves)
          .fill("")
          .map((_) => ({
            x: getX(),
            y: getY(),
          })),
        position,
      ];

      const distance = positions.reduce((acc, curr, i, arr) => {
        if (i === 0) return 0;

        const { x: x0, y: y0 } = arr[i - 1];
        const { x: x1, y: y1 } = curr;

        return acc + ((x1 - x0) ** 2 + (y1 - y0) ** 2) ** 0.5;
      }, 0);

      const dur = `${durationPerUnit * distance}s`;

      const values = positions.map(({ x, y }) => `${x} ${y}`).join(";");

      return {
        x,
        y,
        sprite,
        position,
        values,
        dur,
      };
    });

  const majorityLeft =
    sprites.reduce((acc, curr) => (curr.sprite === "left" ? acc + 1 : acc), 0) >
    sprites.length / 2;

  const feedback = {
    left: {
      text: majorityLeft ? "Right you are!" : "Too fast?",
      begin: `${ids.left}.begin + 1.45s`,
    },
    right: {
      text: majorityLeft ? "Too fast?" : "Right you are!",
      begin: `${ids.right}.begin + 1.45s`,
    },
  };
</script>

<svg viewBox="0 0 80 50">
  <title>Pick a side!</title>

  <defs>
    <pattern
      id="pick-a-side-pattern-stroke-left"
      viewBox="0 0 2 2"
      width="0.1"
      height="0.1"
    >
      <g fill="#f7ae42">
        <rect width="1" height="1" />
        <rect x="1" y="1" width="1" height="1" />
      </g>
    </pattern>
    <pattern
      id="pick-a-side-pattern-stroke-right"
      viewBox="0 0 2 2"
      width="0.1"
      height="0.1"
    >
      <g fill="#21c6ce">
        <rect width="1" height="1" />
        <rect x="1" y="1" width="1" height="1" />
      </g>
    </pattern>
    <pattern
      id="pick-a-side-pattern-grid-left"
      width="0.1"
      height="0.1"
      viewBox="-0.05 -0.05 1.1 1.1"
    >
      <rect
        fill="none"
        stroke="url(#pick-a-side-pattern-stroke-left)"
        stroke-width="0.1"
        width="1"
        height="1"
      />
    </pattern>
    <pattern
      id="pick-a-side-pattern-grid-right"
      width="0.1"
      height="0.1"
      viewBox="-0.05 -0.05 1.1 1.1"
    >
      <rect
        fill="none"
        stroke="url(#pick-a-side-pattern-stroke-right)"
        stroke-width="0.1"
        width="1"
        height="1"
      />
    </pattern>

    <symbol id="pick-a-side-symbol-left" viewBox="-5 -5 10 10">
      <g stroke-width="0.4" stroke="currentColor">
        <g transform="translate(0 -2.3)">
          <path
            fill="currentColor"
            d="M -1.5 2.3 h -1 v -2.1 a 2.5 2.5 0 0 1 5 0 v 2.1 h -1z"
          />
          <circle fill="#f7f7f7" r="2.5" />
          <path fill="#bd4900" d="M -2.5 0 a 2.5 2.5 0 0 1 5 0" />

          <g fill="none">
            <path d="M -0.7 1.6 h 1.4" />
            <g stroke-width="0.5" stroke-linecap="square">
              <path d="M -0.8 0.8 h 0" />
              <path d="M 0.8 0.8 h 0" />
            </g>
          </g>
        </g>
        <path
          fill="#f7f7f7"
          d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 l 1.3 1.8 h -1.3 v 1.5 h -1.5 v -2 2 h -1.5 v -1.5 h -1.3 l 1.3 -1.8 h -1.5 v -1.5z"
        />
        <path
          stroke-width="0.3"
          fill="#f70000"
          d="M 1.75 -4 l 0.75 -0.6 h 0.5 v 2 h -0.5 l -0.75 -0.6 -0.75 0.6 h -0.5 v -2 h 0.5z"
        />
      </g>
    </symbol>
    <symbol id="pick-a-side-symbol-right" viewBox="-5 -5 10 10">
      <g stroke-width="0.4" stroke="currentColor">
        <g transform="translate(0 -2.3)">
          <circle fill="#f7f7f7" r="2.5" />
          <path fill="#bd4900" d="M -2.5 0 a 2.5 2.5 0 0 1 5 0" />

          <g fill="none">
            <path d="M -0.7 1.6 h 1.4" />
            <g stroke-width="0.5" stroke-linecap="square">
              <path d="M -0.8 0.8 h 0" />
              <path d="M 0.8 0.8 h 0" />
            </g>
          </g>
        </g>
        <path
          fill="#f7f7f7"
          d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 v 3.3 h -1.5 v -2 2 h -1.5 v -3.3  h -1.5 v -1.5z"
        />
      </g>
    </symbol>

    <use
      id="pick-a-side-sprite-left"
      href="#pick-a-side-symbol-left"
      x={(sizes.sprite / 2) * -1}
      y={(sizes.sprite / 2) * -1}
      width={sizes.sprite}
      height={sizes.sprite}
    />
    <use
      id="pick-a-side-sprite-right"
      href="#pick-a-side-symbol-right"
      x={(sizes.sprite / 2) * -1}
      y={(sizes.sprite / 2) * -1}
      width={sizes.sprite}
      height={sizes.sprite}
    />

    <path id="pick-a-side-flag" d="M -2 0 h -5 v 3 h 3 v -3" />
  </defs>

  <rect width="80" height="50" fill="#f7f7f7" />

  <g transform="translate(0 18)">
    <rect fill="url(#pick-a-side-pattern-grid-left)" width="40" height="40" />
    <rect
      fill="url(#pick-a-side-pattern-grid-right)"
      x="40"
      width="40"
      height="40"
    />
  </g>

  <g transform="translate({20 - sizes.button / 2} {padding * 2})">
    <g transform="translate({padding * -1} {padding * -1})">
      <g stroke="currentColor" stroke-width="0.5">
        <rect
          width={sizes.button + padding * 2}
          height={sizes.button + padding * 2}
          rx={padding}
          fill="none"
        />
        <path
          fill="currentColor"
          d="M 0 {sizes.button} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {sizes.button} a {padding} {padding} 0 0 0 {padding} {padding *
            -1} v {padding * -1} a {padding} {padding} 0 0 1 {padding *
            -1} {padding} h {sizes.button *
            -1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
        >
          <animate
            begin="{ids.left}.begin"
            attributeName="d"
            to="M 0 {sizes.button +
              padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {sizes.button} a {padding} {padding} 0 0 0 {padding} {padding *
              -1} v 0 a {padding} {padding} 0 0 1 {padding *
              -1} {padding} h {sizes.button *
              -1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
            dur={durs.click}
            fill="freeze"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.5 0 0.5 1"
          />
        </path>
      </g>
    </g>
    <use
      href="#pick-a-side-symbol-left"
      y={(padding / 2) * -1}
      width={sizes.button}
      height={sizes.button}
    >
      <animate
        begin="{ids.left}.begin"
        attributeName="y"
        to="0"
        dur={durs.click}
        fill="freeze"
        calcMode="spline"
        keyTimes="0; 1"
        keySplines="0.5 0 0.5 1"
      />
    </use>
    <rect
      style="cursor: pointer"
      opacity="0"
      x={padding * -1}
      y={padding * -1}
      width={sizes.button + padding * 2}
      height={sizes.button + padding * 2}
      rx={padding}
    >
      <set
        id={ids.left}
        begin="click"
        attributeName="display"
        to="none"
        fill="freeze"
      />
      <set
        begin="{ids.right}.begin"
        attributeName="display"
        to="none"
        fill="freeze"
      />
    </rect>
  </g>

  <g transform="translate({60 - sizes.button / 2} {padding * 2})">
    <g transform="translate({padding * -1} {padding * -1})">
      <g stroke="currentColor" stroke-width="0.5">
        <rect
          width={sizes.button + padding * 2}
          height={sizes.button + padding * 2}
          rx={padding}
          fill="none"
        />
        <path
          fill="currentColor"
          d="M 0 {sizes.button} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {sizes.button} a {padding} {padding} 0 0 0 {padding} {padding *
            -1} v {padding * -1} a {padding} {padding} 0 0 1 {padding *
            -1} {padding} h {sizes.button *
            -1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
        >
          <animate
            begin="{ids.right}.begin"
            attributeName="d"
            to="M 0 {sizes.button +
              padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {sizes.button} a {padding} {padding} 0 0 0 {padding} {padding *
              -1} v 0 a {padding} {padding} 0 0 1 {padding *
              -1} {padding} h {sizes.button *
              -1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
            dur={durs.click}
            fill="freeze"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.5 0 0.5 1"
          />
        </path>
      </g>
    </g>
    <use
      href="#pick-a-side-symbol-right"
      y={(padding / 2) * -1}
      width={sizes.button}
      height={sizes.button}
    >
      <animate
        begin="{ids.right}.begin"
        attributeName="y"
        to="0"
        dur={durs.click}
        fill="freeze"
        calcMode="spline"
        keyTimes="0; 1"
        keySplines="0.5 0 0.5 1"
      />
    </use>
    <rect
      style="cursor: pointer"
      opacity="0"
      x={padding * -1}
      y={padding * -1}
      width={sizes.button + padding * 2}
      height={sizes.button + padding * 2}
      rx={padding}
    >
      <set
        id={ids.right}
        begin="click"
        attributeName="display"
        to="none"
        fill="freeze"
      />
      <set
        begin="{ids.left}.begin"
        attributeName="display"
        to="none"
        fill="freeze"
      />
    </rect>
  </g>

  <g transform="translate(40 10)">
    <g stroke="currentColor" stroke-width="0.5">
      <use fill="#f7ae42" href="#pick-a-side-flag">
        <animateTransform
          begin="{ids.left}.begin"
          attributeName="transform"
          type="rotate"
          to="50"
          dur={durs.click}
          fill="freeze"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.5 0 0.5 1"
        />
      </use>
      <g transform="scale(-1 1)">
        <use fill="#21c6ce" href="#pick-a-side-flag">
          <animateTransform
            begin="{ids.right}.begin"
            attributeName="transform"
            type="rotate"
            to="50"
            dur={durs.click}
            fill="freeze"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.5 0 0.5 1"
          />
        </use>
      </g>
    </g>
  </g>

  <g transform="translate(0 {height})">
    <animateTransform
      {begin}
      attributeName="transform"
      type="translate"
      to="0 0"
      dur={durs.intro}
      fill="freeze"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0.65 0 0.4 1"
    />
    {#each sprites as { x, y, sprite, position, values, dur }}
      <g transform="translate({position.x} {position.y})">
        <animateTransform
          {begin}
          {end}
          attributeName="transform"
          type="translate"
          {values}
          {dur}
          fill="freeze"
          repeatCount="indefinite"
        />
        <animateTransform
          begin={end}
          attributeName="transform"
          type="translate"
          to="{x} {y}"
          dur={durs.outro}
          fill="freeze"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.65 0 0.4 1"
        />
        <use href="#pick-a-side-sprite-{sprite}" />
      </g>
    {/each}
  </g>

  <g display="none">
    <set
      begin="{feedback.left.begin}; {feedback.right.begin}"
      attributeName="display"
      to="initial"
    />

    <g display="none">
      <set begin={feedback.left.begin} attributeName="display" to="initial" />

      <g transform="translate(0 -6)">
        <AnimatedTitle
          text={feedback.left.text}
          fill="url(#linear-gradient-text)"
          begin={feedback.left.begin}
          end="pickASideEnd.begin"
          repeatCount="indefinite"
        />
      </g>
    </g>

    <g display="none">
      <set begin={feedback.right.begin} attributeName="display" to="initial" />

      <g transform="translate(0 -6)">
        <AnimatedTitle
          text={feedback.right.text}
          fill="url(#linear-gradient-text)"
          begin={feedback.right.begin}
          end="pickASideEnd.begin"
          repeatCount="indefinite"
        />
      </g>
    </g>

    <rect style:cursor="pointer" width="80" height="50" opacity="0">
      <set id="pickASideEnd" begin="click" attributeName="display" to="none" />
    </rect>
  </g>

  <g style:cursor="pointer">
    <set {id} begin="click" attributeName="display" to="none" />

    <Title fill="url(#linear-gradient-text)">Majority!</Title>

    <rect width="80" height="50" opacity="0" />
  </g>
</svg>
