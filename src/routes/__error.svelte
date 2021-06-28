<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
</script>

<script>
  import HeaderRoute from '$lib/components/HeaderRoute.svelte';

  export let error;
  export let status;
</script>

<HeaderRoute
  title={status}
  body="Something quite unexpected has happened."
  illustration={`url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="translate(0 -80) scale(0.25)"%3E%3Cg transform="scale(0.75)"%3E%3Cg fill="none" stroke-width="16"%3E%3Cg transform="translate(0 13.5)"%3E%3Cpath d="M 34 0 h -68"/%3E%3Cpath transform="rotate(45)" d="M 40 0 h -80"/%3E%3Cpath transform="rotate(-45)" d="M 40 0 h -80"/%3E%3C/g%3E%3C/g%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke-width="8"%3E%3Cpath d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /%3E%3Cpath d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`}
/>

<main class="max-width-container">
  <p>Here's the error message for context.</p>

  <pre><code>{error.message}</code></pre>

  <p>
    If you think this is a mistake I could fix, please consider filing an issue <a
      href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug"
      >on github</a
    >.
  </p>

  <p>
    If you need some guidance, <em>home is always a good place to start.</em>
  </p>

  <a class="relative" href="/">Go to home page</a>
</main>
