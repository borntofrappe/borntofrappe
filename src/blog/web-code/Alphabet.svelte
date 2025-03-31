<script>
  import { alphabet } from "./data";
</script>

<svg display="none">
  <defs>
    <path id="c." stroke="currentColor" stroke-width="0.2" stroke-linecap="round" d="M 0 0 Z" />
    <path id="c-" stroke="currentColor" stroke-width="0.2" d="M -0.1 0 0.5 0 Z" />
    <symbol aria-label="A" id=".-" viewBox="-0.3 -0.3 1.4 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c-" />
    </symbol>
    <symbol aria-label="B" id="-..." viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c." />
      <use x="1.6" href="#c." />
    </symbol>
    <symbol aria-label="C" id="-.-." viewBox="-0.3 -0.3 2.6 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c-" />
      <use x="2" href="#c." />
    </symbol>
    <symbol aria-label="D" id="-.." viewBox="-0.3 -0.3 1.8 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c." />
    </symbol>
    <symbol aria-label="E" id="." viewBox="-0.3 -0.3 0.6 0.6">
      <use x="0" href="#c." />
    </symbol>
    <symbol aria-label="F" id="..-." viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c." />
      <use x="0.8" href="#c-" />
      <use x="1.6" href="#c." />
    </symbol>
    <symbol aria-label="G" id="--." viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c-" />
      <use x="1.6" href="#c." />
    </symbol>
    <symbol aria-label="H" id="...." viewBox="-0.3 -0.3 1.8 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c." />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c." />
    </symbol>
    <symbol aria-label="I" id=".." viewBox="-0.3 -0.3 1 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c." />
    </symbol>
    <symbol aria-label="J" id=".---" viewBox="-0.3 -0.3 3 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c-" />
      <use x="1.2" href="#c-" />
      <use x="2" href="#c-" />
    </symbol>
    <symbol aria-label="K" id="-.-" viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c-" />
    </symbol>
    <symbol aria-label="L" id=".-.." viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c-" />
      <use x="1.2" href="#c." />
      <use x="1.6" href="#c." />
    </symbol>
    <symbol aria-label="M" id="--" viewBox="-0.3 -0.3 1.8 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c-" />
    </symbol>
    <symbol aria-label="N" id="-." viewBox="-0.3 -0.3 1.4 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
    </symbol>
    <symbol aria-label="O" id="---" viewBox="-0.3 -0.3 2.6 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c-" />
      <use x="1.6" href="#c-" />
    </symbol>
    <symbol aria-label="P" id=".--." viewBox="-0.3 -0.3 2.6 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c-" />
      <use x="1.2" href="#c-" />
      <use x="2" href="#c." />
    </symbol>
    <symbol aria-label="Q" id="--.-" viewBox="-0.3 -0.3 3 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c-" />
      <use x="1.6" href="#c." />
      <use x="2" href="#c-" />
    </symbol>
    <symbol aria-label="R" id=".-." viewBox="-0.3 -0.3 1.8 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c-" />
      <use x="1.2" href="#c." />
    </symbol>
    <symbol aria-label="S" id="..." viewBox="-0.3 -0.3 1.4 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c." />
      <use x="0.8" href="#c." />
    </symbol>
    <symbol aria-label="T" id="-" viewBox="-0.3 -0.3 1 0.6">
      <use x="0" href="#c-" />
    </symbol>
    <symbol aria-label="U" id="..-" viewBox="-0.3 -0.3 1.8 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c." />
      <use x="0.8" href="#c-" />
    </symbol>
    <symbol aria-label="V" id="...-" viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c." />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c-" />
    </symbol>
    <symbol aria-label="W" id=".--" viewBox="-0.3 -0.3 2.2 0.6">
      <use x="0" href="#c." />
      <use x="0.4" href="#c-" />
      <use x="1.2" href="#c-" />
    </symbol>
    <symbol aria-label="X" id="-..-" viewBox="-0.3 -0.3 2.6 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c." />
      <use x="1.6" href="#c-" />
    </symbol>
    <symbol aria-label="Y" id="-.--" viewBox="-0.3 -0.3 3 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c." />
      <use x="1.2" href="#c-" />
      <use x="2" href="#c-" />
    </symbol>
    <symbol aria-label="Z" id="--.." viewBox="-0.3 -0.3 2.6 0.6">
      <use x="0" href="#c-" />
      <use x="0.8" href="#c-" />
      <use x="1.6" href="#c." />
      <use x="2" href="#c." />
    </symbol>
  </defs>
</svg>

<div class="grid">
  {#each alphabet as { letter, code }}
    <div class="row">
      <span>{letter}</span>
      <span>
        <svg>
          <use href="#{code}" />
        </svg>
      </span>
    </div>
  {/each}
</div>

<style>
  .grid {
    --_color: var(--color-text, hsl(0 0% 30%));
    --_background: var(--color-background, hsl(0 0% 98%));
    --_border: var(--color-border, hsl(0 0% 85%));
    font-family: serif;
    display: grid;
    grid-template-columns: repeat(3, 1fr 3fr);
    grid-template-rows: repeat(9, 1fr);
    grid-auto-flow: column;
  }

  .grid:has(.row:nth-of-type(1)) {
    grid-template-columns: 1fr 3fr;
    max-inline-size: 40ch;
  }

  .grid:has(.row:nth-of-type(10)) {
    grid-template-columns: repeat(2, 1fr 3fr);
    max-inline-size: 60ch;
  }

  .grid:has(.row:nth-of-type(20)) {
    max-inline-size: 80ch;
    grid-template-columns: repeat(3, 1fr 3fr);
  }

  .row {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 2;
    color: var(--_color);
    background: var(--_background);
  }

  .row span {
    padding: 0.45rem 0.5rem;
    text-align: center;
    border: var(--border-size, 1px) solid var(--_border);

    &:first-child {
      border-inline-end: none;
    }

    .row:nth-child(n + 10) &:first-child {
      border-inline-start: none;
    }

    .row:not(:nth-child(9n + 1)) & {
      border-block-start: none;
    }

    svg {
      block-size: 0.5lh;
      inline-size: auto;
      max-inline-size: 10ch;
      vertical-align: middle;
    }
  }
</style>
