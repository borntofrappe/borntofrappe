<script>
  import icons from '$lib/_icons.js'
</script>
<a href="#content" class="visually-hidden" id="skip-to-content">
  Skip to Content {@html icons.skip}
</a>

<style>
  #skip-to-content {
    outline: none;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    text-decoration: none;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 600;
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
    border-radius: 2rem;
    border: none;
    padding: 0.25rem 1rem;
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

  #skip-to-content :global(svg) {
    width: 1em;
    height: auto;
    margin-left: 0.5rem;
  }
</style>