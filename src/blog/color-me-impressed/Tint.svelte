<script>
  const tints = [
    {
      matrix: "identity",
      values: `
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0
          `,
      label: "Game Boy",
      background: "hsl(60 6% 90%)",
    },
    {
      matrix: "red",
      values: `
            1 1 1 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0
          `,
      label: "Red",
      background: "hsl(7 100% 80%)",
    },
    {
      matrix: "green",
      values: `
            1 0 0 0 0
            1 1 1 0 0
            0 0 1 0 0
            0 0 0 1 0
          `,
      label: "Green",
      background: "hsl(116 100% 80%)",
    },
    {
      matrix: "blue",
      values: `
            1 0 0 0 0
            0 1 0 0 0
            1 1 1 0 0
            0 0 0 1 0
          `,
      label: "Blue",
      background: "hsl(237 100% 81%)",
    },
  ];

  let { matrix } = $state(tints[0]);
  let values = $derived(tints.find((tint) => tint.matrix === matrix)?.values);
</script>

<div>
  <fieldset>
    <legend>Color matrix</legend>

    {#each tints as { matrix: value, label, background }}
      <label style:--background={background}>
        <input type="radio" name="matrix" bind:group={matrix} {value} />
        <span>{label}</span>
      </label>
    {/each}
  </fieldset>

  <svg style="display: block;" viewBox="0 -0.5 16 12">
    <title>Retro-looking, possibly tinted portrait</title>
    <defs>
      <filter id="tint-filter">
        <feColorMatrix type="matrix" {values} />
      </filter>
    </defs>
    <g filter="url(#tint-filter)">
      <path
        stroke="hsl(86 25% 22%)"
        d="M 0 0 h 16 M 0 1 h 1 M 15 1 h 1 M 0 2 h 1 M 15 2 h 1 M 0 3 h 1 M 15 3 h 1 M 0 4 h 1 M 15 4 h 1 M 0 5 h 1 M 15 5 h 1 M 0 6 h 1 M 15 6 h 1 M 0 7 h 1 M 15 7 h 1 M 0 8 h 1 M 15 8 h 1 M 0 9 h 1 M 15 9 h 1 M 0 10 h 1 M 15 10 h 1 M 0 11 h 16"
      />
      <path
        stroke="hsl(60 6% 90%)"
        d="M 1 1 h 14 M 1 2 h 1 M 14 2 h 1 M 1 3 h 1 M 14 3 h 1 M 1 4 h 1 M 14 4 h 1 M 1 5 h 1 M 14 5 h 1 M 1 6 h 1 M 14 6 h 1 M 1 7 h 1 M 14 7 h 1 M 1 8 h 1 M 14 8 h 1 M 1 9 h 1 M 14 9 h 1 M 1 10 h 14"
      />
      <path
        stroke="hsl(85 6% 62%)"
        d="M 2 2 h 12 M 2 3 h 2 M 9 3 h 5 M 2 4 h 1 M 10 4 h 4 M 2 5 h 4 M 10 5 h 4 M 2 6 h 4 M 11 6 h 3 M 2 7 h 2 M 11 7 h 3 M 2 8 h 4 M 12 8 h 2 M 2 9 h 4 M 12 9 h 2"
      />
      <path
        stroke="hsl(83 10% 42%)"
        d="M 4 3 h 1 M 3 4 h 1 M 8 6 h 2 M 4 7 h 7 M 6 8 h 5 M 6 9 h 6"
      />
      <path
        stroke="hsl(30 5% 93%)"
        d="M 5 3 h 4 M 4 4 h 4 M 9 4 h 1 M 6 5 h 4 M 6 6 h 2 M 10 6 h 1 M 11 8 h 1"
      />
      <path stroke="hsl(82 6% 63%)" d="M 8 4 h 1" />
    </g>
  </svg>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  svg {
    display: block;
    max-inline-size: 20rem;
  }

  fieldset {
    display: flex;
    gap: 0;
    max-inline-size: max-content;
    padding: 0;
    border: none;
    --border-radius: 1e5px;
    border-radius: var(--border-radius);
    box-shadow: 0 0.25rem 0.8rem -0.2rem hsl(0 0% 0% / 0.3);
    transition: box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);
  }

  fieldset > label:first-of-type span {
    border-start-start-radius: var(--border-radius);
    border-end-start-radius: var(--border-radius);
  }

  fieldset > label:last-of-type span {
    border-start-end-radius: var(--border-radius);
    border-end-end-radius: var(--border-radius);
  }

  fieldset:focus-within,
  fieldset:hover {
    box-shadow: 0 0.25rem 1rem 0rem hsl(0 0% 0% / 0.3);
  }

  legend {
    visibility: hidden;
    block-size: 0;
  }

  label {
    position: relative;
  }

  span {
    display: block;
    min-inline-size: max-content;
    padding: 0.75rem 1.25rem;
    color: hsl(0 0% 15%);
    background: hsl(0 0% 97%);
  }

  input:checked ~ span {
    background: var(--background, hsl(0 0% 80%));
  }

  label > input {
    position: absolute;
    inline-size: 100%;
    block-size: 100%;
    opacity: 0;
  }
</style>
