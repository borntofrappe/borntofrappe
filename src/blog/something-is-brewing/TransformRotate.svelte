<script>
  let angle = $state(-60);
</script>

<div>
  <label>
    <span>Drag the handle to wipe the window.</span>
    <input type="range" min="-60" max="60" bind:value={angle} step="1" />
  </label>

  <svg viewBox="0 0 100 100">
    <title>Tram</title>
    <g stroke-linecap="round" stroke-linejoin="round">
      <g stroke="#181a21">
        <g stroke-width="4">
          <path
            d="M 50 20 c 15 0 30 1 30 10 h -60 c 0 -9 15 -10 30 -10"
            fill="#39506a"
          />
          <path d="M 80 30 v 32.5 h -60 v -32.5z" fill="#89b3b8" />
          <path
            d="M 80 62.5 v 10 a 10 10 0 0 1 -10 10 h -40 a 10 10 0 0 1 -10 -10 v -10z"
            fill="#5e9fa5"
          />
          <g opacity="0.2" fill="white" stroke="none">
            <path d="M 68 30 l -16.25 32.5 20 0  8.25 -16.5 0 -16" />
            <path d="M 56 30 l -16.25 32.5 8 0 16.25 -32.5" />
          </g>
          <path d="M 80 30 v 32.5 h -60 v -32.5z" fill="none" />
        </g>
        <g fill="none" stroke-width="3">
          <g transform="translate(50 62.5)">
            <g transform="rotate({angle})">
              <path d="M 0 0 v -25" />
            </g>
          </g>
        </g>

        <g stroke-width="2">
          <circle r="3.5" cx="50" cy="72.5" fill="#dfa572" />
        </g>

        <g fill="none" stroke-width="4">
          <path d="M 35 5 h 30" />
          <path d="M 55 5 l -8 15" />
          <path d="M 38 82.5 l -7 14" />
          <path d="M 62 82.5 l 7 14" />
        </g>

        <g fill="none" stroke-width="2.5">
          <path d="M 42.5 89 h 15" />
          <path d="M 39 95 h 22" />
        </g>
      </g>
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
  }

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }

  svg {
    display: block;
  }
</style>
