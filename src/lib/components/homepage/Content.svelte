<script>
  import GettingStarted from '$lib/components/homepage/GettingStarted.svelte';
  import About from '$lib/components/homepage/About.svelte';
</script>

<main id="content">
  <GettingStarted />
  <About />
</main>

<style>
  main {
    z-index: 5;
    z-index: var(--z-index-1);
    overflow-x: hidden;
  }

  main > :global(*) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  main > :global(* + *) {
    position: relative;
  }

  main > :global(* + *::before) {
    content: '';
    position: absolute;
    margin-bottom: 1.5em;
    bottom: 100%;
    left: 50%;
    width: 100vw;
    height: 0.5rem;
    transform: translate(-50%, -50%);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
  }

  @supports ((mask-image: url()) or (-webkit-mask-image: url())) {
    main > :global(* + *) {
      margin-top: 7em;
    }

    main > :global(* + *::before) {
      margin-bottom: initial;
      height: 3.5em;
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
      mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-size: auto 2.5em;
      mask-size: auto 2.5em;
      -webkit-mask-position: 50% 50%;
      mask-position: 50% 50%;
      -webkit-mask-repeat: repeat-x;
      mask-repeat: repeat-x;
    }
  }
</style>
