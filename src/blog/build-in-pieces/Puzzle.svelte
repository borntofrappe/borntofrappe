<script>
  /** @typedef {{x: number, y: number}} Position */
  /** @type Array<Position> */
  const grid = Array(3 ** 2)
    .fill("")
    .map((_, i, { length }) => {
      const x = i % length ** 0.5;
      const y = Math.floor(i / length ** 0.5);
      return {
        x,
        y,
      };
    });

  /** @typedef {{x: number, y: number, position:Position}} Piece */
  /** @type {{ pieces: Array<Piece>, grid: Array<Position> }} */
  const puzzlePieces = [...grid].reduce(
    (acc, curr, j, { length }) => {
      const i = Math.floor(Math.random() * acc.grid.length);
      const x = j % length ** 0.5;
      const y = Math.floor(j / length ** 0.5);

      acc.pieces = [
        ...acc.pieces,
        {
          x,
          y,
          position: {
            ...acc.grid[i],
          },
        },
      ];

      acc.grid = [...acc.grid.slice(0, i), ...acc.grid.slice(i + 1)];

      return acc;
    },
    {
      grid: [...grid],
      pieces: /** @type Array<Piece> */ ([]),
    }
  );

  let pieces = $state(puzzlePieces.pieces);

  /** @type {{ x: number, y: number } | null } */
  let piece = $state(null);
  /**
   * @param {{ x: number, y: number }} param
   */
  const handlePiece = ({ x, y }) => {
    if (piece !== null) {
      const { x: xPiece, y: yPiece } = piece;
      if (x !== piece.x || y !== piece.y) {
        let i = pieces.findIndex((d) => d.x === x && d.y === y);
        let j = pieces.findIndex((d) => d.x === xPiece && d.y === yPiece);
        pieces[i].x = pieces[j].x;
        pieces[i].y = pieces[j].y;
        pieces[j].x = x;
        pieces[j].y = y;
      }
      piece = null;
    } else {
      piece = {
        x,
        y,
      };
    }
  };

  const handleSolve = () => {
    for (let i = 0; i < pieces.length; i++) {
      pieces[i].x = pieces[i].position.x;
      pieces[i].y = pieces[i].position.y;
    }
  };
</script>

<svg viewBox="0 0 3 3">
  <title>A beautiful, puzzling painting</title>
  <defs>
    {#each grid as { x, y }}
      <clipPath id="puzzle-clip-{x}-{y}">
        <rect {x} {y} width="1" height="1" />
      </clipPath>
      <use
        id="puzzle-piece-{x}-{y}"
        transform="translate({x * -1} {y * -1})"
        clip-path="url(#puzzle-clip-{x}-{y})"
        href="#puzzle-puzzle"
      />
    {/each}

    <symbol id="puzzle-puzzle" viewBox="0 0 60 60">
      <rect fill="#f8f8f8" width="60" height="60" />
      <path fill="#ebedf0" d="M 0 40 c 20 -0.5 40 -0.5 60 0 v 20 h -60z" />

      <circle fill="#e4eaf2" cx="52" cy="7" r="5" />
      <g fill="#bbcae2">
        <g transform="translate(2 2)">
          <g id="puzzle-puzzle-cloud">
            <rect width="10" height="3" rx="1.5" />
          </g>
        </g>
        <use href="#puzzle-puzzle-cloud" x="32" y="24" />
        <use href="#puzzle-puzzle-cloud" x="10" y="25" />
        <use href="#puzzle-puzzle-cloud" x="42" y="15" />
        <use href="#puzzle-puzzle-cloud" x="28" y="6" />
        <use href="#puzzle-puzzle-cloud" x="12" y="10" />
      </g>

      <g transform="translate(30 42)">
        <g id="puzzle-puzzle-fence">
          <g
            transform="translate(0.5 0.5)"
            stroke-width="1"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <path
              fill="#80879a"
              stroke="#80879a"
              d="M 0 3.5 l 20 0 0 3.5 -20 0z"
            />
            <g transform="translate(1 0)">
              <path
                id="puzzle-puzzle-plank"
                fill="#80879a"
                stroke="#80879a"
                d="M 0 2 l 1.5 -2 1.5 2 0 6 -3 0z"
              />
              <use href="#puzzle-puzzle-plank" x="5" />
              <use href="#puzzle-puzzle-plank" x="10" />
              <use href="#puzzle-puzzle-plank" x="15" />
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(2 15)">
        <g
          transform="translate(0.5 0.5)"
          stroke-width="1"
          stroke-linejoin="round"
          stroke-linecap="round"
        >
          <path
            fill="#c8d0e1"
            stroke="#c8d0e1"
            d="M 3 20 l 7 -14 25 0 7 14 0 15 -39 0z"
          />
          <path
            fill="#707da0"
            stroke="#707da0"
            d="M 0 20 l 10 -20 25 0 -10 20z"
          />
          <path
            fill="#4e5c78"
            stroke="#4e5c78"
            d="M 35 0 l 10 20 -3 0 -7 -14 -7 14 -3 0z"
          />
          <path
            fill="#e8ebf5"
            stroke="#e8ebf5"
            d="M 28 26 l 7 -14 7 14 0 9 -14 0z"
          />
          <path
            fill="#c8d0e1"
            stroke="#c8d0e1"
            d="M 38 35 l 0 -6 a 3 3 0 0 0 -6 0 l 0 6z"
          />
        </g>
      </g>

      <use transform="translate(1 43)" href="#puzzle-puzzle-fence" />

      <g transform="translate(6 52)">
        <g id="puzzle-puzzle-flower">
          <g
            stroke="#4e5c78"
            stroke-width="0.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path fill="none" d="M 0 0 q 0.2 3 -0.1 5" />
            <g fill="#4e5c78">
              <path d="M 0 5.5 c 0 -2 1 -2.5 2 -2.5 c 0 2 -1 2.5 -2 2.5" />
              <path
                transform="scale(-1 1)"
                d="M 0 5.5 c 0 -2 1 -2.5 2 -2.5 c 0 2 -1 2.5 -2 2.5"
              />
            </g>
          </g>
          <g
            fill="#84a88d"
            stroke="#84a88d"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g transform="rotate(30)">
              <path d="M -1 0 a 0.4 1 0 0 0 2 0" />
              <path transform="rotate(60)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
              <path transform="rotate(120)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
              <path transform="rotate(180)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
              <path transform="rotate(240)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
              <path transform="rotate(300)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
            </g>
          </g>
          <ellipse fill="#ebc699" rx="1.1" ry="1.05" />
        </g>
        <use href="#puzzle-puzzle-flower" x="8" />
        <use href="#puzzle-puzzle-flower" x="16" />
      </g>
    </symbol>
  </defs>

  {#each pieces as { x, y, position }}
    <g
      onpointerdown={() => {
        handlePiece({ x, y });
      }}
    >
      <use {x} {y} href="#puzzle-piece-{position.x}-{position.y}" />
    </g>
  {/each}

  {#if piece}
    <g transform="translate({piece.x} {piece.y})">
      <rect
        fill="#f8f8f8"
        fill-opacity="0.1"
        stroke="#4e5c78"
        stroke-width="0.05"
        x="0.025"
        y="0.025"
        width="0.95"
        height="0.95"
      />
    </g>
  {/if}
</svg>

<button
  onclick={() => {
    handleSolve();
  }}
>
  Solve puzzle
</button>

<style>
  svg {
    display: block;
  }

  button {
    display: block;
    margin-inline: auto;
    cursor: pointer;
    color: #f8f8f8;
    background: #4e5c78;
    letter-spacing: 1px;
    border: none;
    border-radius: 0.25rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
  }
</style>
