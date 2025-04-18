<script>
  /**
   * @typedef {import('./types').Task} Task
   */

  /** @type {{ tasks: [Task, Task, Task], onclick: () => void }} */
  let { tasks, onclick } = $props();

  /** @type [string, number][] */
  const data = $derived.by(() => {
    const total = tasks.reduce((acc, curr) => acc + curr.number, 0);

    return tasks.map(({ state, number }) => [
      state,
      Math.floor((number / total) * 100) / 100,
    ]);
  });

  let complete = $derived(data[0][1]);
  let paused = $derived(data[1][1]);
</script>

<div class="root">
  <dl>
    {#each data as [label, value]}
      <dt>{label}</dt>
      <dd>{value}</dd>
    {/each}
  </dl>

  <svg style="display: block;" class="progress" viewBox="0 0 42 1">
    <defs>
      <linearGradient id="stop-meter-gradient">
        <stop stop-color="lightgreen" offset={complete} />
        <stop stop-color="khaki" offset={complete} />
        <stop stop-color="khaki" offset={complete + paused} />
        <stop stop-color="transparent" offset={complete + paused} />
      </linearGradient>
    </defs>
    <rect fill="url(#stop-meter-gradient)" width="42" height="1" />
  </svg>

  <button {onclick}>Update tasks</button>
</div>

<style>
  .root {
    max-inline-size: 60ch;
    margin-inline: auto;

    & > * + * {
      margin-block-start: 1rem;
    }
  }

  dl {
    padding: 0;
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(3, auto 1fr);

    dt::after {
      content: ":";
    }
    dd {
      margin-inline: 0;
    }
  }

  button {
    display: block;
    margin-inline: auto;
    color: hsl(0 0% 94%);
    background: hsl(249 11% 12%);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
    border: none;

    &:active {
      translate: 0 1px;
    }

    &:focus {
      outline: 2px solid hsl(249 11% 12%);
      outline-offset: 2px;
    }
  }
</style>
