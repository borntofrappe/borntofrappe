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
  import Meta from '$lib/components/Meta.svelte';
  import Header from '$lib/components/routes/Header.svelte';
  import icons from '$lib/icons';

  export let error;
  export let status;
</script>

<Meta
  description="Error page raised with the status code {status}"
  image="error"
/>

<Header
  title={status}
  body="Something quite unexpected has happened."
  illustration={`url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="translate(0 -80) scale(0.25)"%3E%3Cg transform="scale(0.75)"%3E%3Cg fill="none" stroke-width="16"%3E%3Cg transform="translate(0 13.5)"%3E%3Cpath d="M 34 0 h -68"/%3E%3Cpath transform="rotate(45)" d="M 40 0 h -80"/%3E%3Cpath transform="rotate(-45)" d="M 40 0 h -80"/%3E%3C/g%3E%3C/g%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke-width="8"%3E%3Cpath d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /%3E%3Cpath d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`}
/>

<main id="content" class="max-width-container">
  <p>Here's the error message for context.</p>

  <div>
    <span aria-label="Language">{@html icons.editor}code</span>
    <pre><code>{error.message}</code></pre>
  </div>

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

<style>
  #content {
    z-index: 0;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  main > * + * {
    margin-top: 0.4em;
  }

  div > span,
  div pre {
    border-radius: 0.4rem;
    padding: 0.8rem 1rem;
  }

  div > span {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    color: hsl(214, 15%, 88%);
    color: var(--frappe-grey-9);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
    display: flex;
    align-items: center;
  }

  div > span > :global(svg) {
    width: 1.25em;
    height: auto;
    margin-right: 0.5rem;
  }

  div:hover > span {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  div pre {
    margin-top: 0;
    color: hsl(214, 15%, 88%);
    color: var(--frappe-grey-9);
    background: hsl(229, 20%, 20%);
    background: var(--frappe-grey-1);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  div pre {
    overflow-x: auto;
  }

  div pre::-webkit-scrollbar {
    height: 0.4rem;
  }

  div pre::-webkit-scrollbar-track {
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
  }

  div pre::-webkit-scrollbar-thumb {
    background: hsl(340, 90%, 55%);
    background: var(--primary-6);
    border-radius: 0.2rem;
  }
</style>
