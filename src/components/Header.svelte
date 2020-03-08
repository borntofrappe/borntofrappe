<script>
  import Icons from "./Icons.svelte";
  export let title;
  export let tags;

  $:icons = tags && tags.split(",").map(tag => tag.trim());
</script>

<style>
  header {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(0, 0%25, 0%25)' opacity='0.3' width='20' height='20' viewBox='-5 -5 10 10'%3E%3Ccircle id='dot' r='1' /%3E%3Cuse href='%23dot' x='5' y='5' /%3E%3Cuse href='%23dot' x='-5' y='5' /%3E%3Cuse href='%23dot' x='5' y='-5' /%3E%3Cuse href='%23dot' x='-5' y='-5' /%3E%3C/svg%3E"),
      var(--primary-8);
    background-size: 1rem;
    background-position: -0.5rem -0.5rem;
    color: var(--grey-0);
    text-align: center;
    padding: 6rem 1.5rem;
    margin: 0 0 2rem;
    position: relative;
  }
  header h1 {
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 800;
    font-family: "Catamaran", sans-serif;
  }
  header section {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    width: max-content;
    background: var(--grey-0);
    color: var(--primary-8);
    padding: 0.5rem 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 -1px 0.2rem -0.2rem var(--grey-8), 0 0.1rem 5px -0.1rem var(--grey-3);
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }
  header section:hover {
    color: var(--accent-4);
  }
  header section :global(svg) {
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    display: inline-block;
  }
</style>

<header>
  <h1>{title}</h1>
  {#if icons}
    <section>
      {#each icons as icon}
        <Icons {icon} />
      {/each}
    </section>
  {/if}
</header>
