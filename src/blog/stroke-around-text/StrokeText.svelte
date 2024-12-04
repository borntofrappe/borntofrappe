<script>
  let text = $state("Stroked text");
  const colorPairs = [
    ["black", "white"],
    ["hsl(278 49% 13%)", "hsl(30 100% 72%)"],
    ["hsl(328 100% 54%)", "hsl(350 100% 88%)"],
  ];
  let colorPair = $state(colorPairs[0]);

  $effect(() => {
    if (text === "") {
      text = "plain smooth";
    }
  });
</script>

<div class="layout">
  <p
    contenteditable
    bind:textContent={text}
    style:--stroke={colorPair[0]}
    style:--fill={colorPair[1]}
  ></p>

  <div class="colors">
    {#each colorPairs as value}
      <button
        aria-label={value.join(" & ")}
        onclick={() => {
          colorPair = value;
        }}
        data-pressed={colorPair.join("") === value.join("")}
        {value}
      >
        <span
          style:background={value[0]}
          style="display: inline-block; width: 1em; height: 1em; border-radius: 1e5px;"
        ></span>
        <span
          style:background={value[1]}
          style="display: inline-block; width: 1em; height: 1em; border-radius: 1e5px;"
        ></span>
      </button>
    {/each}
  </div>
</div>

<style>
  .layout > * + * {
    margin-block-start: 0.5rem;
  }

  p {
    font-family: serif;
    font-size: 3.5rem;
    margin-block: 0;
    color: var(--fill, white);
    -webkit-text-stroke: 0.3rem var(--stroke, black);
    paint-order: stroke;
  }

  .colors {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  button {
    display: block;
    font-family: inherit;
    font-size: inherit;
    background: hsl(0 0% 93%);
    padding: 0.4rem 0.75rem;
    border-radius: 0.2rem;
    border: 0.2rem solid transparent;
  }
  button[data-pressed="true"] {
    border-color: hsl(0 0% 26%);
  }

  button span:last-of-type {
    margin-inline-start: -0.7em;
  }
</style>
