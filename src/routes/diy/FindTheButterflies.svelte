<script>
  import Title from "./Title.svelte";
  import AnimatedTitle from "./AnimatedTitle.svelte";

  const width = 80;
  const height = 50;
  const scale = 0.75;
  const size = 16 * scale;
  const targets = 3;

  const getX = () => Math.floor(Math.random() * (width - size));
  const getY = () => Math.floor(Math.random() * (height - size));

  const x = getX();
  const y = getY();

  const points = [{ x, y }];

  /**
   * @param {{ translateX: number, translateY: number, thresholdLength?: number }} param
   */
  const getPath = ({ translateX, translateY, thresholdLength = 200 }) => {
    let d = `M 0 0`;
    let length = 0;

    while (length < thresholdLength) {
      // @ts-ignore
      const [px, py] = d
        .match(/(-?\d+) (-?\d+)$/)
        .slice(1)
        .map((p) => parseInt(p, 10));

      const x = getX() - translateX;
      const y = getY() - translateY;
      const distance = ((x - px) ** 2 + (y - py) ** 2) ** 0.5;

      d += ` ${x} ${y}`;
      length += distance;
    }
    return `${d} 0 0`;
  };

  const butterflies = Array(targets)
    .fill("")
    .map(() => {
      let x = getX();
      let y = getY();
      while (true) {
        let overlaps = false;
        for (const { x: px, y: py } of points) {
          if (
            x + size > px &&
            x < px + size &&
            y + size > py &&
            y < py + size
          ) {
            overlaps = true;
            break;
          }
        }
        if (overlaps) {
          x = getX();
          y = getY();
        } else {
          points.push({
            x,
            y,
          });
          break;
        }
      }

      return {
        x,
        y,
        path: getPath({ translateX: x, translateY: y }),
      };
    });
</script>

<svg style="display: block;" viewBox="0 0 80 50">
  <title>Find the butterflies!</title>

  <defs>
    <pattern id="find-the-butterflies-pattern-bricks" width="0.1" height="0.1">
      <rect fill="#bd4900" width="8" height="5" />
      <g fill="none" stroke="currentColor" stroke-width="0.2">
        <path d="M 7.9 0 v 2.45 h -7.9" />
        <path d="M 3.95 2.45 v 2.5" />
        <path d="M 0 4.9 h 8" />
      </g>
    </pattern>

    <symbol id="find-the-butterflies-ribbon" viewBox="-8 -8 16 16">
      <g
        stroke="currentColor"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g fill="#2969bd">
          <path d="M 0 -2 c 0 2 1 8 2 9 1 -2 3 -1 3 -2z" />
          <path
            transform="scale(-1 1)"
            d="M 0 -2 c 0 2 1 8 2 9 1 -2 3 -1 3 -2z"
          />
        </g>
        <g fill="none">
          <path d="M 0 -2 c 1 2 1 4 2.5 6.5" />
          <path transform="scale(-1 1)" d="M 0 -2 c 1 2 1 4 2.5 6.5" />
        </g>
        <g fill="#2969bd">
          <path d="M 0 -3 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1" />
          <path
            transform="scale(-1 1)"
            d="M 0 -3 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1"
          />
        </g>
        <g fill="none">
          <path d="M 0 -2.25 c 0 -2.5 5.5 -2.5 3.5 -0.25" />
          <path
            transform="scale(-1 1)"
            d="M 0 -2.25 c 0 -2.5 5.5 -2.5 3.5 -0.25"
          />
        </g>
        <rect
          fill="#2969bd"
          x="-1.4"
          y="-3.6"
          width="2.8"
          height="3.2"
          rx="1"
        />
      </g>
    </symbol>
  </defs>

  <rect
    fill="url(#find-the-butterflies-pattern-bricks)"
    width="80"
    height="50"
  />

  <g transform="translate({x} {y})">
    <use width={size} height={size} href="#find-the-butterflies-ribbon" />
  </g>

  <g>
    {#each butterflies as { x, y, path }, i}
      <g transform="translate({x} {y})">
        <g style:cursor="pointer">
          <animateMotion
            id="findTheButterfliesButterfly{i}"
            begin="click"
            end="findTheButterfliesEnd.begin"
            {path}
            dur="12s"
            repeatCount="indefinite"
            fill="freeze"
            restart="never"
          />
          <g transform="scale({scale})">
            <g transform="translate(8 8)">
              <g
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g fill="#2969bd">
                  <g transform="scale(1 1)">
                    <animateTransform
                      begin="findTheButterfliesButterfly{i}.begin"
                      end="findTheButterfliesEnd.begin"
                      attributeName="transform"
                      type="scale"
                      values="1 1; 0.7 1; 1 1"
                      dur="0.25s"
                      repeatCount="indefinite"
                      fill="freeze"
                    />
                    <path
                      transform="scale(1.05 1.08)"
                      d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
                    />
                    <path d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1" />
                    <g transform="scale(-1 1)">
                      <path
                        transform="scale(1.05 1.08)"
                        d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
                      />
                      <path d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1" />
                    </g>
                  </g>
                </g>

                <path
                  fill="#2969bd"
                  d="M 0 -3 c 2.5 3 3.5 7 0 9 -3.5 -2 -2.5 -6 0 -9"
                />

                <g fill="none">
                  <path
                    transform="translate(0.5 -4) rotate(-40)"
                    d="M 0 0 c 1 -2 5 -2 3.8 0 t -0.25 -1"
                  />
                  <path
                    transform="scale(-1 1) translate(0.5 -4) rotate(-40)"
                    d="M 0 0 c 1 -2 5 -2 3.8 0 t -0.25 -1"
                  />
                </g>

                <path
                  fill="#2969bd"
                  d="M 0 -4.5 c -1 0 -3 3 0 3 3 0 1 -3 0 -3"
                />

                <g fill="none">
                  <path
                    transform="translate(1.25 -3.5) rotate(-40)"
                    d="M 0 -0.8 q 2 0.8 0 1.6z"
                  />
                  <path
                    transform="scale(-1 1) translate(1.25 -3.5) rotate(-40)"
                    d="M 0 -0.8 q 2 0.8 0 1.6z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    {/each}
  </g>

  <g transform="translate({80 * butterflies.length * -1} 0)">
    <g>
      {#each butterflies as _, i}
        <animateTransform
          begin="findTheButterfliesButterfly{i}.begin"
          attributeName="transform"
          type="translate"
          by="80 0"
          fill="freeze"
          dur="0.1s"
          calcMode="discrete"
        />
      {/each}
      <AnimatedTitle
        text="Found them all!"
        fill="url(#linear-gradient-text)"
        begin={butterflies
          .map((_, i) => `findTheButterfliesButterfly${i}.begin`)
          .join(";")}
        end="findTheButterfliesEnd.begin"
        repeatCount="indefinite"
      />

      <rect style:cursor="pointer" width="80" height="50" opacity="0">
        <set
          id="findTheButterfliesEnd"
          begin="click"
          attributeName="display"
          to="none"
          fill="freeze"
        />
      </rect>
    </g>
  </g>

  <g style:cursor="pointer">
    <set begin="click" attributeName="display" to="none" fill="freeze" />

    <Title fill="url(#linear-gradient-text)">Butterflies?</Title>

    <rect width="80" height="50" opacity="0" />
  </g>
</svg>
