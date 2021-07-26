<script>
  import icons from '$lib/icons';
</script>

<a href="#content" class="visually-hidden" id="skip-to-content">
  Skip to Content
  {@html icons.skip}
</a>

<style>
  a {
    outline: none;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    text-decoration: none;
    font-size: 1rem;
    font-size: var(--size-400);
    border-radius: 2rem;
    border: none;
    padding: 0.5rem 1rem;
    color: hsl(215, 10%, 97%);
    color: var(--grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--grey-0);
    box-shadow: 0 0 0.5rem -0.4rem hsl(215, 22%, 5%);
    box-shadow: 0 0 0.5rem -0.4rem var(--grey-0);
    display: flex;
    align-items: center;
    z-index: 10;
  }

  a > :global(svg) {
    width: 1em;
    height: auto;
    margin-left: 0.5rem;
  }
</style>
