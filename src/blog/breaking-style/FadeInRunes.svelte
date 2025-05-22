<script>
  import FadeInCSS from "./FadeInCSS.svelte";
  import FadeInSvelte from "./FadeInSvelte.svelte";

  /** @type { number }*/
  let number = $state(1);
  const max = 4;

  const onclick = () => {
    let n;
    do {
      n = Math.floor(Math.random() * max + 1);
    } while (n === number);
    number = n;
  };
</script>

<svg style="display: none">
  <symbol id="rune-4" viewBox="-5 -5 10 10">
    <defs>
      <path
        id="rune-4-1"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        paint-order="stroke"
        d="M 2 4 -2.5 -1 0 -4 2.5 -1 -2 4"
      />
    </defs>
    <use
      stroke="var(--stroke-1, hsl(0 0% 20%))"
      stroke-width="2"
      href="#rune-4-1"
    />
    <use
      stroke="var(--stroke-2, hsl(0 0% 90%))"
      stroke-width="1"
      href="#rune-4-1"
    />
  </symbol>

  <symbol id="rune-3" viewBox="-5 -5 10 10">
    <defs>
      <path
        id="rune-3-1"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        paint-order="stroke"
        d="M 0 -4 0 4 M 0 0 3 -2 M 0 0 -3 -2"
      />
    </defs>
    <use
      stroke="var(--stroke-1, hsl(0 0% 20%))"
      stroke-width="2"
      href="#rune-3-1"
    />
    <use
      stroke="var(--stroke-2, hsl(0 0% 90%))"
      stroke-width="1"
      href="#rune-3-1"
    />
  </symbol>

  <symbol id="rune-2" viewBox="-5 -5 10 10">
    <defs>
      <path
        id="rune-2-1"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        paint-order="stroke"
        d="M 2 -4 -2 -1.75 2 0 -2 1.75 2 4"
      />
    </defs>
    <use
      stroke="var(--stroke-1, hsl(0 0% 20%))"
      stroke-width="2"
      href="#rune-2-1"
    />
    <use
      stroke="var(--stroke-2, hsl(0 0% 90%))"
      stroke-width="1"
      href="#rune-2-1"
    />
  </symbol>

  <symbol id="rune-1" viewBox="-5 -5 10 10">
    <defs>
      <path
        id="rune-1-1"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        paint-order="stroke"
        d="M 0 -4 0 4 M -3 2 3 -2"
      />
    </defs>
    <use
      stroke="var(--stroke-1, hsl(0 0% 20%))"
      stroke-width="2"
      href="#rune-1-1"
    />
    <use
      stroke="var(--stroke-2, hsl(0 0% 90%))"
      stroke-width="1"
      href="#rune-1-1"
    />
  </symbol>
</svg>

<div class="layout">
  <figure>
    <div>
      <FadeInSvelte {number} />
      <p><code>in:fade</code></p>
    </div>
    <div>
      <FadeInCSS {number} />
      <p><code>@starting-style</code></p>
    </div>
  </figure>
  <button {onclick}>New rune</button>
</div>

<style>
  .layout {
    max-inline-size: 30rem;
    margin-inline: auto;

    & > * + * {
      margin-block-start: 1rem;
    }
  }

  button {
    color: light-dark(hsl(210 10% 23%), hsl(210 14% 89%));
    background: light-dark(hsl(210 17% 95%), hsl(210 10% 23%));
    display: block;
    margin-inline: auto;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 0.25em;
    font-size: 1em;
    font-weight: bold;
    font-family: inherit;

    &:active {
      translate: 0 1px;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
  }

  figure {
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    --stroke-1: light-dark(hsl(210 10% 23%), hsl(210 14% 89%));
    --stroke-2: light-dark(hsl(210 17% 98%), hsl(210 11% 15%));

    & > * {
      flex-basis: 12rem;
    }

    div > :global(* + *) {
      margin-block-start: 0.5rem;
    }

    p {
      text-align: center;
    }

    code {
      font-size: 1em;
      background: none;
      color: light-dark(hsl(210 9% 31%), hsl(210 11% 71%));
    }
  }
</style>
