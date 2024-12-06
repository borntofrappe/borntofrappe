<script>
  import Title from "./Title.svelte";
  import AnimatedTitle from "./AnimatedTitle.svelte";

  const size = 13;
  const width = 80;
  const height = 50;

  const lens = {
    width: 30,
    height: 28,
    x: 0,
    y: 0,
  };

  lens.x = width / 2 - lens.width / 2;
  lens.y = height / 2 - lens.height / 2;

  const y0 = -height;
  const y1 = height;

  const getX = () => Math.floor(Math.random() * (lens.width - size)) + lens.x;
  const path = `M ${getX()} ${y0} ${getX()} ${y1}`;

  const dur = 4 + Math.floor(Math.random() * 3);

  const start = "takeAPictureStart";

  const frames = [
    { y: y0, text: "Way too early!", filter: true },
    { y: lens.y - size, text: "A touch early...", filter: true },
    { y: lens.y, text: "Nice shot!", filter: false },
    { y: lens.y + lens.height - size + 1, text: "A bit late...", filter: true },
    { y: lens.y + lens.height, text: "Exceedingly late!", filter: true },
  ].map(({ y, text, filter }, i) => ({
    id: `takeAPictureFrame${i}`,
    initial: `${start}.begin + ${((Math.abs(y0) + y) / (y1 - y0)) * dur}s`,
    none: `takeAPictureFrame${i + 1}.begin`,
    text,
    filter: filter ? "url(#take-a-picture-filter-lens)" : "",
    fill: filter ? "#f7f7f7" : "currentColor",
    stroke: filter ? "currentColor" : "#f7f7f7",
  }));

  const href = `#take-a-picture-symbol-${Math.floor(Math.random() * 2)}`;
</script>

<svg viewBox="0 0 80 50">
  <title>Take a picture!</title>

  <defs>
    <symbol
      id="take-a-picture-symbol-0"
      viewBox="-2.0500000476837158 -2.1 4.1000000953674316 4.566146087646484"
    >
      <g
        stroke="currentColor"
        stroke-width="0.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g fill="none">
          <path d="M 0.1 -1 q 0 -0.8 0.75 -1" />
          <path transform="scale(-1 1)" d="M 0.1 -1 q 0 -0.8 0.75 -1" />
        </g>
        <g fill="#f70000">
          <g transform="translate(0 0.5)">
            <path
              d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
            />
            <path
              transform="scale(-1 1)"
              d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
            />
            <path
              transform="scale(-1 -1)"
              d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
            />
            <path
              transform="scale(1 -1)"
              d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
            />
          </g>
        </g>
        <path
          fill="currentColor"
          d="M 0 -1 c 0.75 0.5 0.75 2.5 0 3 -0.75 -0.5 -0.75 -2.5 0 -3"
        />
      </g>
    </symbol>

    <symbol
      id="take-a-picture-symbol-1"
      viewBox="-2.1 -1.7250256299972534 4.2 4.925025653839111"
    >
      <g
        stroke="currentColor"
        stroke-width="0.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          fill="#fecd00"
          d="M 0 0.1 c 0.5 -0.5 2 0 2 1.5 0 1.5 -2 1.5 -2 1.5 -1.5 0 -2 -1 -2 -1.5 0 -1.5 1.5 -2 2 -1.5"
        />
        <g fill="#00e200">
          <path
            transform="rotate(10)"
            d="M 0 0.25 v -0.1 q 0 -1.5 1.5 -1.5 0 1.5 -1.5 1.5"
          />
          <path
            transform="rotate(5) scale(-1 1) "
            d="M 0 0 q 0 -1.5 1.5 -1.5 0 1.5 -1.5 1.5"
          />
        </g>
      </g>
    </symbol>

    <rect
      id="take-a-picture-lens"
      x={lens.x}
      y={lens.y}
      width={lens.width}
      height={lens.height}
      rx="2"
    />

    <clipPath id="take-a-picture-clip-lens">
      <use href="#take-a-picture-lens" />
    </clipPath>

    <filter id="take-a-picture-filter-lens">
      <feColorMatrix
        type="matrix"
        values="
					-1 0 0 0 1 
					0 -1 0 0 1 
					0 0 -1 0 1
					0 0 0 1 0
				"
      />
      <feColorMatrix
        type="matrix"
        values="
					0.33 0.33 0.33 0 0
					0.33 0.33 0.33 0 0
					0.33 0.33 0.33 0 0
					0 0 0 1 0
				"
      />
    </filter>
  </defs>

  <g>
    {#each frames as { id, filter }}
      <set begin="{id}.end" attributeName="filter" to={filter} />
    {/each}

    <rect fill="currentColor" width="80" height="50" />

    <g fill="none">
      <use href="#take-a-picture-lens" stroke="#f7f7f7" stroke-width="3.25" />
      <use
        href="#take-a-picture-lens"
        stroke="currentColor"
        stroke-width="1.75"
      />
    </g>

    <g clip-path="url(#take-a-picture-clip-lens)">
      <rect width="80" height="50" fill="#f7f7f7" />

      <g fill="#dfdfdf">
        <circle cx="0" cy="0" r="25" />
        <circle cx="25" cy="0" r="25" />
        <circle cx="50" cy="-5" r="25" />
        <circle cx="80" cy="-10" r="25" />
        <circle cx="15" cy="20" r="12" />
        <circle cx="30" cy="20" r="12" />
        <circle cx="45" cy="15" r="12" />
        <circle cx="65" cy="10" r="12" />
      </g>

      <g stroke="#dfdfdf" stroke-width="0.75">
        <path
          fill="#f7f7f7"
          d="M 0 21.5 29.5 28.5 35 50 45 50 39 25 80 5 80 0 74 0 37 18 32.5 0 22.5 0 28 20 0 14"
        />
        <g fill="none">
          <path
            d="M 0 21.5 29.5 28.5"
            stroke-dasharray="8"
            transform="translate(2 -3.5)"
          />
          <path
            d="M 29.5 27 35 50"
            stroke-dasharray="12"
            transform="translate(2 1)"
          />
          <g stroke-dasharray="10">
            <path d="M 45 50 39 25" transform="translate(-4 -2)" />
            <path d="M 39 25 80 5" transform="translate(4 -5)" />
            <path d="M 37 18 32.5 0" transform="translate(-3 -2)" />
            <path d="M 22.5 0 28 20" transform="translate(2 -1)" />
          </g>
        </g>
      </g>

      <use {href} width={size} height={size}>
        <animateMotion
          id="takeAPictureMotion"
          begin="takeAPictureStart.begin"
          end="takeAPictureShoot.begin"
          {path}
          {dur}
          fill="freeze"
        />
      </use>
    </g>
  </g>

  <g display="none">
    <set
      id="takeAPictureShot"
      begin="takeAPictureFlash.end"
      attributeName="display"
      to="initial"
    />
    {#each frames as { text, id, initial, none, fill, stroke }}
      <g display="none">
        <set
          {id}
          begin={initial}
          end="takeAPictureShoot.begin"
          fill="freeze"
          attributeName="display"
          to="initial"
        />
        <set
          begin={none}
          end="takeAPictureShoot.begin"
          fill="freeze"
          attributeName="display"
          to="none"
        />
        <g transform="translate(0 20.5)">
          <AnimatedTitle
            {text}
            fontSize={6}
            {fill}
            {stroke}
            begin="takeAPictureShot.begin"
            end="takeAPictureEndShot.begin"
            repeatCount="indefinite"
          />
        </g>
      </g>
    {/each}

    <rect style:cursor="pointer" width="80" height="50" opacity="0">
      <set
        id="takeAPictureEndShot"
        begin="click"
        attributeName="display"
        to="none"
      />
    </rect>
  </g>

  <g opacity="0">
    <animate
      id="takeAPictureFlash"
      begin="takeAPictureShoot.begin"
      attributeName="opacity"
      values="0; 1; 0"
      dur="0.2s"
      fill="freeze"
    />
    <set begin="takeAPictureFlash.end" attributeName="display" to="none" />
    <rect width="80" height="50" fill="#f7f7f7" />
  </g>

  <g style:cursor="pointer" opacity="0">
    <set
      id="takeAPictureShoot"
      begin="click"
      attributeName="display"
      to="none"
    />
    <set
      begin="takeAPictureMotion.end"
      end="takeAPictureShoot.begin"
      attributeName="display"
      to="none"
    />
    <rect width="80" height="50" />
  </g>

  <g display="none">
    <set
      id="takeAPictureMotionEnd"
      begin="takeAPictureMotion.end"
      end="takeAPictureShoot.begin"
      attributeName="display"
      to="initial"
    />
    <AnimatedTitle
      text="Moment's gone..."
      fontSize={6}
      fill="#f7f7f7"
      stroke="currentColor"
      begin="takeAPictureMotionEnd.begin"
      end="takeAPictureEndMotion.begin"
      repeatCount="indefinite"
    />

    <rect style:cursor="pointer" width="80" height="50" opacity="0">
      <set
        id="takeAPictureEndMotion"
        begin="click"
        attributeName="display"
        to="none"
      />
    </rect>
  </g>

  <g style:cursor="pointer">
    <set id={start} begin="click" attributeName="display" to="none" />

    <Title fill="#f7f7f7" stroke="currentColor">Photograph!</Title>

    <rect width="80" height="50" opacity="0" />
  </g>
</svg>
