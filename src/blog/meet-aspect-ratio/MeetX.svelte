<script>
  const preserveAspectRatio = ["xMinYMid", "xMidYMid", "xMaxYMid"];

  let x = $state(preserveAspectRatio[1]);
</script>

<div>
  <fieldset>
    <legend>
      <code>preserveAspectRatio</code>
    </legend>

    {#each preserveAspectRatio as value}
      <label>
        <input type="radio" bind:group={x} {value} />
        <code>{value}</code>
        <svg
          viewBox="-0.025 -0.025 1.05 1.05"
          width="1em"
          height="1em"
          fill="none"
        >
          <rect
            width="1"
            height="1"
            fill="none"
            stroke="currentColor"
            stroke-width="0.05"
          />
          <rect x="0.15" y="0.15" width="0.7" height="0.7" />
        </svg>
      </label>
    {/each}
  </fieldset>

  <svg viewBox="-0.2 -0.2 3.4 1.4">
    <defs>
      <symbol id="bento-box-treat-x" viewBox="0 0 1 1" preserveAspectRatio={x}>
        <rect fill="#353739" width="1" height="1" />
        <rect fill="#3c4043" width="1" height="0.8" />
        <rect
          fill="#fef9ea"
          x="0.15"
          y="0.15"
          width="0.7"
          height="0.5"
          rx="0.05"
        />
        <rect
          fill="#e7897e"
          x="0.325"
          y="0.25"
          width="0.35"
          height="0.3"
          rx="0.1"
        />
      </symbol>
    </defs>

    <rect fill="#69b3aa" x="-0.2" y="-0.2" width="3.4" height="1.4" />
    <g transform="translate(0 1.2) scale(1 0.9)">
      <rect
        fill="url(#bento-box-pattern)"
        x="-0.2"
        y="-1.55"
        width="3.4"
        height="1.55"
      />
    </g>

    <rect fill="#266a6b" width="3" height="1" />
    <rect fill="#225d5d" width="3" height="0.2" />

    <use href="#bento-box-treat-x" width="3" height="1" />

    <g transform="translate(0 0.8)">
      <rect fill="#69b3aa" x="-0.2" width="3.4" height="0.4" />
      <g transform="translate(0 0.4) scale(1 0.9)">
        <rect
          fill="url(#bento-box-pattern)"
          x="-0.2"
          y="-0.444"
          width="3.4"
          height="0.444"
        />
      </g>
    </g>

    <g transform="translate(0 1)">
      <rect fill="#559b95" x="-0.2" width="3.4" height="0.2" />
      <g transform="translate(0 0.2) scale(1 1.1)">
        <rect
          fill="url(#bento-box-pattern)"
          x="-0.2"
          y="-0.1818"
          width="3.4"
          height="0.1818"
        />
      </g>
    </g>
  </svg>
</div>

<style>
  div {
    max-inline-size: 30rem;
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  div > svg {
    display: block;
  }

  fieldset {
    border: none;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
  }

  label {
    position: relative;
  }

  label input {
    width: 1em;
    height: 1em;
    opacity: 0;
  }

  label svg {
    width: 1em;
    height: 1em;
    position: absolute;
    inset-inline-start: 0%;
    inset-block-start: 50%;
    transform: translateY(-50%);
    fill: none;
    pointer-events: none;
  }

  label input:focus ~ svg {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  label input:focus:not(:focus-visible) ~ svg {
    outline: none;
  }

  label input:checked ~ svg {
    fill: currentColor;
  }

  legend {
    padding: 0;
  }
</style>
