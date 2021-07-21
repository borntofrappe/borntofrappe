<script>
  import { observe } from '$lib/utils.js';
</script>

<section
  class:observed={false}
  use:observe
  class="max-width-container"
  id="getting-started"
>
  <h2 class="visually-hidden">Getting started</h2>
  <p>
    I'm building this website with <a href="https://kit.svelte.dev/"
      >SvelteKit</a
    >, one tentative step at a time, but I'm also in the process of creating 2D
    games with Lua and Love2D. While I try setting up a blog and writing a good
    honest article, I hope to distract you with
    <a href="https://github.com/borntofrappe/game-development/wiki/Practice"
      >one of them.</a
    >.
  </p>
</section>

<style>
  section {
    position: relative;
  }

  section::before,
  section::after {
    width: 6.5em;
    height: 6.5em;
    padding: 0.5em;
  }

  section::before {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="hsl(339, 90%25, 67%25)" stroke="hsl(350, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
    float: left;
    shape-outside: circle();
  }

  section::after {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-76 -33 100 100"%3E%3Cg fill="hsl(336, 93%25, 77%25)" stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(339, 90%25, 67%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    position: absolute;
    top: 3rem;
    top: var(--section-whitespace);
    left: 0;
    transform: rotate(-25deg);
    transform-origin: 50% 33%;
  }

  section::after {
    animation: tilt-telescope 10s var(--ease-in-out-sine) infinite alternate;
    animation: tilt-telescope 10s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
      alternate;
    animation-play-state: paused;
  }

  section.observed::after {
    animation-play-state: running;
  }

  @keyframes tilt-telescope {
    20%,
    100% {
      transform: rotate(25deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    section.observed::after {
      animation-play-state: paused;
    }
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) section#getting-started::before) {
      content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
    }
    :global(html:not([data-preference]) section#getting-started::after) {
      content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-76 -33 100 100"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    }
  }

  :global(html[data-preference='dark'] section#getting-started::before) {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
  }

  :global(html[data-preference='dark'] section#getting-started::after) {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-76 -33 100 100"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  }
</style>
