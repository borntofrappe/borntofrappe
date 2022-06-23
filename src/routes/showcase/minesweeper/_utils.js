const shuffle = (array) => {
  const a = [...array];
  let counter = a.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = a[counter];

    a[counter] = a[index];
    a[index] = temp;
  }

  return a;
};

export class Puzzle {
  constructor({
    columns = 10,
    rows = 10,
    mines = 10,
    safe = null,
    flags = [],
  } = {}) {
    const neighbors = [
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
    ];

    let targets = [];

    if (safe) {
      let indexes = shuffle(
        Array(columns * rows)
          .fill()
          .map((_, i) => i)
      );

      while (targets.length < mines) {
        const { r: sr, c: sc } = safe;

        const i = indexes.pop();
        const r = Math.floor(i / columns);
        const c = i % columns;

        if (r === sr && c === sc) continue;

        let wouldHaveNumber;
        for (const [nr, nc] of neighbors) {
          const ar = nr + r;
          const ac = nc + c;
          if (ar === safe.r && ac === safe.c) {
            wouldHaveNumber = true;
            break;
          }
        }

        if (wouldHaveNumber) continue;

        targets.push({ r, c });
      }
    } else {
      targets = shuffle(
        Array(columns * rows)
          .fill()
          .map((_, i) => i)
      )
        .slice(0, mines)
        .map((i) => ({
          r: Math.floor(i / columns),
          c: i % columns,
        }));
    }

    const grid = Array(rows)
      .fill()
      .map((_, r) =>
        Array(columns)
          .fill()
          .map((_, c) => {
            const hasMine = targets.find((d) => d.r === r && d.c === c);
            const flagged = flags.find((d) => d.r === r && d.c === c);

            return {
              r,
              c,
              hasMine,
              mines: 0,
              revealed: false,
              flagged,
              triggered: false,
            };
          })
      );

    for (const { r, c } of targets) {
      for (const [nr, nc] of neighbors) {
        const ar = nr + r;
        const ac = nc + c;
        if (grid[ar] && grid[ar][ac]) {
          grid[ar][ac].mines++;
        }
      }
    }

    this.columns = columns;
    this.rows = rows;
    this.grid = grid;
    this.mines = mines;
    this.neighbors = neighbors;
    this.init = false;
  }
}
