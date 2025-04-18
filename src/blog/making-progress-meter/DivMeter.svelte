<script>
  /**
   * @typedef {import('./types').Task} Task
   */

  /** @type {{ tasks: [Task, Task, Task], onclick: () => void }} */
  let { tasks, onclick } = $props();

  let [complete, paused, rest] = $derived(tasks.map(({ number }) => number));
</script>

<div class="root">
  <div class="progress">
    <div style:flex-grow={complete} data-value="complete"></div>
    <div style:flex-grow={paused} data-value="paused"></div>
    <div style:flex-grow={rest} data-value="rest"></div>
  </div>

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

  .progress {
    display: block;
    inline-size: 100%;
    aspect-ratio: 42/1;
    min-block-size: 1ex;

    display: flex;

    & > div {
      flex-grow: 1;
      transition: flex-grow 0.2s;

      &[data-value] {
        flex-grow: 0;
      }

      &[data-value="complete"] {
        background: lightgreen;
      }

      &[data-value="paused"] {
        background: khaki;
      }
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
  }
</style>
