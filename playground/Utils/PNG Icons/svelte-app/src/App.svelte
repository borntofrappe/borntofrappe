<script>
  import Canvas from "./Canvas.svelte";

  let size = 180;
  let color = "hsl(220, 100%, 8%)";
  $: download = `icon-${size}.png`;

  let href;
</script>

<style>
  form {
    max-width: 30rem;
    margin: 1rem auto;
    line-height: 2;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  input {
    font-size: 1.25rem;
    font-size: inherit;
    margin-left: 0.5rem;
    font-family: inherit;
    padding: 0.2rem 0.5rem;
    border: 2px solid currentColor;
    background: hsl(0, 0%, 100%);
  }

  a {
    font-size: 2rem;
    font-family: monospace;
  }
</style>

<form on:submit|preventDefault>
  <label>
    Size
    <input type="number" bind:value="{size}" />
  </label>
  <label>
    Color
    <input type="color" bind:value="{color}" />
  </label>
</form>

<Canvas on:draw="{(e) => href = e.detail}" {size} {color} />

{#if href}
<a {href} {download}>{download}</a>
{/if}
