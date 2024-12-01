<script>
  import "./toggle-password.js";
</script>

<div>
  <label>
    <span>
      <svg width="1em" height="1em" viewBox="-0.5 -0.5 26 19">
        <path
          d="M 0 2 A 2 2 0 0 1 2 0 L 23 0 A 2 2 0 0 1 25 2 L 25 16 A 2 2 0 0 1 23 18 L 2 18 A 2 2 0 0 1 0 16 L 0 2 M 15 2 A 2 2 0 0 0 15 6 L 21 6 A 2 2 0 0 0 21 2 Z M 15 6.5 A 2 2 0 0 0 15 10.5 L 21 10.5 A 2 2 0 0 0 21 6.5 Z M 7 3.5 A 3 3 0 0 0 7 10 A 3 3 0 0 0 7 3.5 M 12 13 A 4.5 2.5 0 0 0 2 13 A 4 1.5 0 0 0 12 13"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
          stroke-linejoin="round"
        />
      </svg>
      Name</span
    >
    <input id="name" name="name" type="text" value="Timothy" />
  </label>
  <label>
    <span>
      <svg width="1em" height="1em" viewBox="-9.5 -17 19 26.5">
        <path
          d="M -7 9 A 2 2 0 0 1 -9 7 L -9 -7 A 2 2 0 0 1 -7 -9 L 7 -9 A 2 2 0 0 1 9 -7 L 9 7 A 2 2 0 0 1 7 9 Z M 0 -2.8 A 1.4 1.4 0 0 0 0 2.8 A 1.4 1.4 0 0 0 0 -2.8 M -5 -9 L -5 -11.5 A 2.5 2.5 0 0 1 5 -11.5 L 5 -9 4 -9 4 -11.5 A 2 2 0 0 0 -4 -11.5 L -4 -9 Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
          stroke-linejoin="round"
        />
      </svg>
      Password</span
    >
    <toggle-password>
      <input
        id="password"
        name="password"
        type="password"
        value="aSW>+$,qJLx"
      />
    </toggle-password>
  </label>
</div>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  div > * + * {
    margin-block-start: 1rem;
    display: block;
  }

  label > * + * {
    margin-block-start: 0.5rem;
  }

  div {
    --text-1: hsl(0 0% 83%);
    --text-2: hsl(0 0% 50%);
    --surface-1: hsl(0 0% 12%);
    --surface-2: hsl(0 0% 18%);
    --surface-3: hsl(0 0% 25%);

    max-inline-size: 40ch;
    margin-inline: auto;
    padding: 2rem;
    border-radius: 1rem;
    color: var(--text-1);
    background: var(--surface-2);
  }

  label span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span svg {
    color: var(--text-2);
    inline-size: 1em;
    block-size: 1em;
  }

  input,
  toggle-password {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    border: 0.2rem solid var(--surface-3);
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
  }

  input {
    display: block;
    inline-size: 100%;
  }

  input::selection {
    background: var(--surface-3);
  }

  toggle-password {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
  }

  toggle-password input {
    flex-grow: 1;
    padding: unset;
    inline-size: unset;
    border: none;
  }

  toggle-password :global(button) {
    color: var(--text-2);
    background: none;
    border: none;
    inline-size: 1.3rem;
    block-size: 1.3rem;
    margin: 0;
    padding: 0;
  }

  toggle-password :global(button svg) {
    inline-size: 100%;
    block-size: 100%;
  }

  toggle-password :global(button:focus-visible) {
    outline: 2px solid var(--text-2);
    outline-offset: 2px;
  }

  input:focus {
    outline: none;
  }

  input:focus-visible {
    background: var(--surface-1);
    border-color: var(--text-2);
  }

  toggle-password:focus-within {
    background: var(--surface-1);
    border-color: var(--text-2);
  }

  :global(.visually-hidden:not(:focus):not(:active):not(:focus-within)) {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
