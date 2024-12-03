<script>
  let checked = $state(false);
</script>

<div>
  <svg class:animate={checked} style="display: block;" viewBox="0 0 100 100">
    <g>
      <path
        transform="translate(100 0)"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 48 47 C 49 53 49 53 53 54 49 56 49 56 48 63 47 56 47 56 43 54 47 53 47 53 48 47"
      />
      <path
        transform="translate(200 0)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 48 34 C 51 51 51 51 63 53 50 56 50 56 49 71 46 56 46 56 34 54 45 50 45 50 48 34 M 38 43 Z M 60 60 Z M 56 65 Q 57 66 56 67 55 66 56 65"
      />
      <path
        transform="translate(300 0)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 46 26 C 51 48 51 48 70 51 51 55 51 55 47 78 43 55 43 55 25 51 42 47 42 47 46 26 M 61 67 Z M 34 40 Q 32 41 32 38 34 38 34 40"
      />
      <path
        transform="translate(400 0)"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 44 28 43 15 M 73 50 82 49 M 47 67 48 82 M 26 51 13 52 M 61 69 Z M 23 36 Z"
      />
      <path
        transform="translate(500 0)"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 43 17 42 13 M 83 48 88 47 M 50 82 51 87 M 12 53 6 54"
      />
    </g>
  </svg>

  <label>
    <input bind:checked type="checkbox" />
    <svg
      width="1em"
      height="1em"
      viewBox="-17.829999923706055 -17.829999923706055 35.654998779296875 35.654998779296875"
    >
      <path
        fill="currentColor"
        d="M 5.65 5.65 Q 0 30 -5.66 5.65 Q -30 0 -5.66 -5.66 Q -0.01 -30 5.65 -5.66 Q 30 -0.01 5.65 5.65"
      />
    </svg>
    <span>Spark</span>
  </label>
</div>

<style>
  div {
    max-inline-size: 20rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 1ch;
    position: relative;
  }

  span {
    font-weight: 700;
  }

  input,
  label > svg {
    inline-size: 1.8rem;
    block-size: 1.8rem;
    padding: 0.2rem;
    border: 0.15rem solid currentColor;
  }

  label > input {
    position: absolute;
    opacity: 0;
  }

  label > svg {
    pointer-events: none;
  }

  label > svg > path {
    scale: 0;
    transition: scale 0.1s cubic-bezier(0.37, 0, 0.63, 1);
  }

  label > input:focus:focus-visible ~ svg {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  label > input:checked ~ svg > path {
    scale: 1;
  }

  svg.animate > g {
    animation: sparkle 0.5s steps(6) infinite;
  }

  @keyframes sparkle {
    from {
      transform: translate(0px, 0px);
    }

    to {
      transform: translate(-600px, 0px);
    }
  }
</style>
