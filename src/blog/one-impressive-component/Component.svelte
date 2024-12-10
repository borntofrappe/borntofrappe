<script>
  /** @type {{ name?: string, property?: string, values?: string[] | number[], children?: import('svelte').Snippet }} props */
  let {
    name = "Letter Spacing",
    property = "letter-spacing",
    values = [
      "-.05em",
      ".025em;",
      ".050em;",
      ".075em",
      ".150em",
      ".500em",
      "1em",
    ],
    children,
  } = $props();

  let i = $state(-1);
  let value = $derived(values[i] || "");
</script>

<article>
  <div>
    <h2>{name}</h2>
    <dl>
      {#each values as value, index}
        <dt class:active={index === i}>--{property}-{index}</dt>
        <dd>{value}</dd>
      {/each}
    </dl>
  </div>

  <label>
    <div style="{property}: {value}">
      {#if children}
        {@render children()}
      {:else}
        <span>{property}</span>
      {/if}
    </div>
    <input type="range" bind:value={i} min={0} max={values.length - 1} />
  </label>
</article>

<style>
  * {
    box-sizing: border-box;
  }

  article * {
    margin: 0;
    padding: 0;
  }

  label span,
  label input {
    display: block;
  }

  article {
    accent-color: hsl(210 7% 56%);
    --_color-text-1: hsl(210 10% 23%);
    --_color-text-2: hsl(214 14% 10%);
    --_color-surface-1: hsl(0 0% 100%);
    --_color-surface-2: hsl(210 17% 95%);
    --_color-surface-3: hsl(210 16% 93%);
    --_color-shadow: hsl(0 0% 0% / 0.5);

    max-inline-size: 70ch;
    margin-inline: auto;
    padding: 1.5rem 1.5rem;
    color: var(--_color-text-2);
    background: var(--_color-surface-2);
    box-shadow: 0 1px 8px -4px var(--_color-shadow);
  }

  @media (prefers-color-scheme: dark) {
    article {
      accent-color: hsl(210 40% 2%);
      --_color-text-1: hsl(210 14% 83%);
      --_color-text-2: hsl(210 14% 89%);
      --_color-surface-1: hsl(216 16% 6%);
      --_color-surface-2: hsl(210 11% 15%);
      --_color-surface-3: hsl(214 14% 10%);
      --_color-shadow: hsl(0 0% 0% / 0.9);
    }
  }

  dl {
    padding: 1rem;
    color: var(--_color-text-1);
    background: var(--_color-surface-1);
  }

  dd {
    color: var(--_color-text-3);
    background: var(--_color-surface-3);
  }

  article {
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }

  article label {
    flex-grow: 1;
    max-inline-size: 40ch;
  }

  div > * + *,
  label > * + * {
    margin-block-start: 1rem;
  }

  div > dl {
    margin-block-start: 1.5rem;
  }

  dl {
    font-family: monospace;
    font-size: 1.5em;
    line-height: 2;
  }

  dt,
  dd {
    display: inline;
    margin-inline: 0;
  }

  dt::after {
    content: ":";
  }

  dd:after {
    content: "\A";
    white-space: pre;
  }

  dt {
    padding-inline-start: 1em;
    position: relative;
  }

  dt.active::before {
    content: "\2192";
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 50%;
    translate: 0% -50%;
    font-weight: 700;
    animation: slide-in 0.5s 0.2s both;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      translate: -0.5em -50%;
    }
    to {
      opacity: 1;
      translate: 0% -50%;
    }
  }

  label span,
  label input {
    display: block;
  }

  label div {
    text-align: center;
  }

  label input {
    inline-size: 100%;
  }
</style>
