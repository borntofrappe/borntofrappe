<script>
  import GettingStarted from '$lib/components/homepage/GettingStarted.svelte';
  import About from '$lib/components/homepage/About.svelte';
</script>

<main id="content">
  <GettingStarted />
  <About />
</main>

<style>
  #content {
    overflow-x: hidden;
    z-index: 0;
    --section-whitespace: 3.5em;
  }

  main > :global(section) {
    padding-top: 3rem;
    padding-top: var(--section-whitespace);
  }

  main > :global(section:not(:last-of-type)) {
    padding-bottom: 3rem;
    padding-bottom: var(--section-whitespace);
  }

  main > :global(section + section) {
    position: relative;
  }

  main > :global(section + section::before) {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 100vw;
    height: 0.5rem;
    transform: translate(-50%, 50%);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
  }

  @supports ((mask-image: url()) or (-webkit-mask-image: url())) {
    main > :global(section + section::before) {
      margin-bottom: initial;
      height: 2em;
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
      mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-size: auto 2em;
      mask-size: auto 2em;
      -webkit-mask-position: 50% 50%;
      mask-position: 50% 50%;
      -webkit-mask-repeat: repeat-x;
      mask-repeat: repeat-x;
    }
  }

  main > :global(section > * + *) {
    margin-top: 0.5em;
  }
</style>
