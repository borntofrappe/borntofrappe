<script>
  import Tangram from "./tangram/Tangram.svelte";
  import shapes from "./tangram/shapes.js";
  const keys = Object.keys(shapes);

  const { illustration = keys[Math.floor(Math.random() * keys.length)] } =
    $props();
</script>

<footer>
  <p>Crafted with considerably more than seven pieces, but always with care.</p>
  <p>Gabriele Corti, 2025</p>

  <figure>
    <Tangram key={illustration} />
  </figure>
</footer>

<style>
  footer {
    text-align: center;
    padding: var(--space-m);
    color: hsl(210 16% 82%);
    background: hsl(210 24% 16%);
  }

  footer ::selection {
    color: hsl(210 16% 82%);
    background: hsl(209 34% 30%);
  }

  footer > * + * {
    margin-block-start: var(--space-2xs);
  }

  footer > figure {
    max-inline-size: 10rem;
    margin-inline: auto;
  }

  footer::after {
    content: "";
    display: block;
    margin-inline: auto;
    max-inline-size: 28ch;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-98.89868927001953 -30.964508056640625 197.79737854003906 37.680633544921875"><defs><symbol id="symbol-star" viewBox="-23.204545974731445 -24 45.409088134765625 43.56756591796875"><path d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15" /></symbol><use fill="currentColor" href="%23symbol-star" id="star" x="-7"  y="-7" width="14" height="14" /><g id="star-side"><use transform="translate(0 -200) rotate(-7) translate(0 200) scale(0.8)" href="%23star" /></g><path id="leaf" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" d="M 0 0 c 0 -8 8 -8 10 -8 0 8 -8 8 -10 8z" /><g id="leaves"><g transform="rotate(90)"><use x="1.75" href="%23leaf" /><use transform="scale(-1 1)" x="1.75" href="%23leaf" /></g></g><g id="leaves-side"><use transform="translate(0 -200) rotate(-15) translate(0 200) scale(0.8)" href="%23leaves" /><use transform="translate(0 -200) rotate(-19) translate(0 200) scale(0.75)" href="%23leaves" /><use transform="translate(0 -200) rotate(-23) translate(0 200) scale(0.7)" href="%23leaves" /><use transform="translate(0 -200) rotate(-27) translate(0 200) scale(0.65)" href="%23leaves" /></g></defs><g style="color: hsl(209 34% 30%);"><use href="%23star" /><use href="%23star-side" /><use href="%23leaves-side" /><g transform="scale(-1 1)"><use href="%23star-side" /><use href="%23leaves-side" /></g></g></svg>');
  }
</style>
