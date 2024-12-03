<script>
  /** @type {{ color: string, maxInlineSize: string }}*/
  let { color = "#ea6c6c", maxInlineSize = "10rem" } = $props();
  const colors = [
    color,
    "#e6d152",
    "#8ce967",
    "#5be8ac",
    "#5bace8",
    "#8c67e9",
    "#e652d1",
  ];
</script>

<div>
  <fieldset>
    {#each colors as value}
      <label>
        <input type="radio" bind:group={color} {value} />
        <svg viewBox="-1 -1 2 2" width="1em" height="1em">
          <circle r="0.8" fill={value} stroke-width="0.2" />
        </svg>
        <span>{value}</span>
      </label>
    {/each}
  </fieldset>

  <svg
    style:display="block"
    style:max-inline-size={maxInlineSize}
    style:margin-inline="auto"
    style:color
    viewBox="-50 -50 100 100"
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      stroke-width="10"
      d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0"
    />
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  label {
    position: relative;
    display: inline-block;
    font-weight: 700;
  }

  label svg,
  label input {
    width: 1.1em;
    height: 1.1em;
  }

  label input {
    opacity: 0;
  }

  label input + svg {
    transform: translateY(-50%) scale(0.8);
    transition: transform 0.2s cubic-bezier(0.37, 0, 0.63, 1);
  }
  label input:checked + svg {
    transform: translateY(-50%) scale(1);
    stroke: currentColor;
  }

  label svg {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 50%;
    transform: translateY(-50%);
  }
</style>
