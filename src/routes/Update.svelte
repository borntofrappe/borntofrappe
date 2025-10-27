<blockquote>
  <p>
    Welcome! <svg
      width="1em"
      height="1em"
      transform="rotate(30)"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0 M10 9.9V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8 M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6 M18 11.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4.4"
      />
    </svg>
  </p>
  <p>
    This is, or rather was, a happy playground for a software developer, one
    <b>Gabriele Corti</b> from northern Italy.
  </p>
  <p>
    There are <em>a few</em> articles composed with a smile, but let us be honest,
    despite a couple of musings experimenting with other languages and inspiring
    tech, the time was ripe to archive the project and let it rest.
  </p>
  <p>A testament to a stack deeply enjoyed.</p>
  <p>Evidence of the insanity and daring hand-writing SVG.</p>
  <cite>Gabriele Corti, <time datetime="2025-10-27">Autumn 2025</time></cite>
</blockquote>

<style>
  blockquote {
    font-size: 0.95em;
    max-inline-size: var(--measure-m);
    margin-inline: auto;
    border-radius: var(--space-xs);
    background: var(--surface-1);
    padding: var(--space-m) var(--space-s);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    > cite {
      align-self: end;
    }
  }

  cite {
    font-style: italic;
    font-size: 0.95em;

    &::before {
      content: "— ";
    }
  }

  p {
    position: relative;
    text-wrap: balance;

    svg {
      color: oklch(from currentColor calc(l * 1.1) c h);
      width: 1.4em;
      height: 1.4em;
      position: absolute;
      translate: 5px 0px;
      animation: wave 5s infinite;
    }
  }

  @keyframes wave {
    0% {
      rotate: 0deg;
    }
    7% {
      rotate: 15deg;
    }
    14% {
      rotate: -20deg;
    }
    21% {
      rotate: 10deg;
    }
    28% {
      rotate: -20deg;
    }
    35% {
      rotate: 10deg;
    }
    42%,
    100% {
      rotate: 0deg;
    }
  }
</style>
