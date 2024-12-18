<script>
  /** @type {{ data?: number[] }}*/
  let { data = [2, 3, 4, 5, 4, 6, 2] } = $props();
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      {#each data as value, i}
        <tr>
          <td>{i}</td>
          <td>{value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  div {
    --border-radius: 1rem;
    --color-text: hsl(210 11% 15%);
    --color-surface-1: hsl(210 17% 98%);
    --color-surface-2: hsl(210 17% 95%);
    --color-border: hsl(210 14% 89%);
    border: 3px solid var(--color-border);
    color: var(--color-text);
    background: var(--color-surface-1);
    border-radius: var(--border-radius);
  }

  table {
    table-layout: fixed;
    inline-size: 100%;
    border-collapse: collapse;
  }

  thead th {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
  }

  tbody td {
    text-align: center;
    padding: 0.5rem;
  }

  tbody tr:nth-of-type(odd) td {
    background: var(--color-surface-2);
  }

  tbody tr:last-of-type td:first-of-type {
    border-end-start-radius: var(--border-radius);
  }

  tbody tr:last-of-type td:last-of-type {
    border-end-end-radius: var(--border-radius);
  }
</style>
