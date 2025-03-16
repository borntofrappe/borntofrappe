<script>
  const measure = 15;
  const width = 2;
  const height = 3;
  const [gapX, gapY] = [0.6, 0.7];
  let value = $state("Dig here.");
  let lines = $derived.by(() => {
    const words = value.toLowerCase().split(" ");
    return words.reduce(
      (acc, curr) => {
        if (acc[acc.length - 1].length + curr.length > measure) {
          acc[acc.length - 1] = acc[acc.length - 1].slice(0, -1);
          acc.push("");
        }
        acc[acc.length - 1] += `${curr} `;
        return acc;
      },
      [""]
    );
  });
</script>

<div>
  <textarea bind:value></textarea>

  <!-- prettier-ignore -->
  <svg style="display: block;" viewBox="0 0 {measure * (width + gapX) - gapX} {lines.length * (height + gapY) - gapY}">
    <defs>
      <circle id="dot-o" r="0.35" fill="currentColor" />
      <circle id="dot-x" r="0.35" fill="currentColor" fill-opacity="0.2" />
      <symbol id="letter-a" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-b" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-c" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-d" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-e" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-f" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-g" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-h" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-i" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-j" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-k" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-l" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-m" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-n" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-o" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-p" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-q" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-r" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-s" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-t" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
      <symbol id="letter-u" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-v" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-w" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-o" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-x" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-y" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-o" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-z" viewBox="-0.5 -0.5 2 3">
        <use href="#dot-o" /><use href="#dot-x" x="1" /><use href="#dot-x" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-o" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-." viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-o" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-o" x="1" y="2" />
      </symbol>
      <symbol id="letter-," viewBox="-0.5 -0.5 2 3">
        <use href="#dot-x" /><use href="#dot-x" x="1" /><use href="#dot-o" y="1" /><use href="#dot-x" x="1" y="1" /><use href="#dot-x" y="2" /><use href="#dot-x" x="1" y="2" />
      </symbol>
    </defs>
    <g>
      {#each lines as line, y}
        {#each line.split("") as key, x}
          <use
            href="#letter-{key}"
            x={x * (width + gapX)}
            y={y * (height + gapY)}
            {width}
            {height}
          />
        {/each}
      {/each}
    </g>
  </svg>
</div>

<style>
  div {
    max-inline-size: 60ch;
    min-inline-size: 40ch;
    color: hsl(0 0% 97%);
    color: light-dark(hsl(0 0% 10%), hsl(0 0% 92%));
    background: light-dark(hsl(0 0% 97%), hsl(0 0% 12%));
    padding: 1rem;
    margin-inline: auto;
    border-radius: 1rem;

    > * + * {
      margin-block-start: 1rem;
    }

    textarea {
      border-radius: 1rem;
      box-sizing: border-box;
      border: none;
      color: light-dark(hsl(0 0% 20%), hsl(0 0% 92%));
      background: light-dark(hsl(0 0% 92%), hsl(0 0% 6%));
      inline-size: 100%;
      block-size: 5lh;
      padding: 0.5rem;
      font: inherit;
      resize: none;
    }

    g {
      color: light-dark(hsl(0 0% 20%), hsl(0 0% 60%));
    }
  }
</style>
