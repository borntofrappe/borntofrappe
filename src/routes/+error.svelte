<script>
  import { page } from "$app/state";
  import site from "$lib/site";
  import Serena from "$lib/components/Serena.svelte";
</script>

<svelte:head>
  <title>Error {page.status} | {site.title}</title>
  <meta name="description" content={page?.error?.message} />
  <link rel="icon" href="icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div>
  <main>
    <h1
      class="stroke-text"
      style="--stroke: hsl(209 61% 16%); --fill: hsl(212 33% 89%)"
    >
      Tut-tut, it looks like rain
    </h1>
    <p>
      I'll be honest, you were not supposed to see this message But do not be
      burdened by what could possibly be a very honest mistake.
    </p>
    <p>There was an error. A broken or missing link.</p>
    <p>
      If nothing works and you are still willing, you can try going back to
      home, <a class="link-underline" href="/">to the home page</a>.
    </p>
    <p>
      If you stick around, here's a small cloud with a sombre look A challenge
      for you to put a smile on the issue and not let a few raindrops spoil the
      entire parade.
      <svg
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
        >
          <animate
            attributeName="d"
            values="
				M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0 M10 9.9V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8 M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6 M18 11.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4.4;
				M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0 M10 9.9V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8 M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6 M18 11.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4.4;
				M18 11.5a2 2 0 1 1 4 0v2.5a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0 M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5 M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2 M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4;
				M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0 M10 9.9V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8 M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6 M18 11.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4.4;
				M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0 M10 9.9V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8 M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6 M18 11.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4.4
				"
            dur="8s"
            begin="0"
            repeatCount="indefinite"
            keyTimes="0;0.45;0.5;0.55;1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
          />
        </path>
      </svg>
    </p>
  </main>
  <figure>
    <Serena />
  </figure>
</div>

<style>
  div {
    color: hsl(210 10% 23%);
    background: hsl(210 36% 96%);
    min-block-size: 100svb;
    padding: var(--space-m) var(--space-m);
    padding-block-end: 0;
  }

  div ::selection {
    color: hsl(210 11% 15%);
    background: hsl(210 31% 80%);
  }

  div > * + * {
    margin-block-start: var(--space-m);
  }

  main {
    max-inline-size: var(--measure-m);
    margin-inline: auto;
  }

  main > * + * {
    margin-block-start: 1em;
  }

  figure {
    max-inline-size: var(--measure-s);
    margin-inline: auto;
  }

  figure {
    max-inline-size: var(--measure-s);
    margin-inline: auto;
  }

  p {
    position: relative;

    svg {
      color: oklch(from currentColor calc(l * 1.1) c h);
      width: 1.4em;
      height: 1.4em;
      position: absolute;
      translate: 5px 5px;
    }
  }
</style>
