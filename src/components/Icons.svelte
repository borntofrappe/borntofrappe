<script>
  export let icon;
</script>
{#if icon === "blog"}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <g stroke-width="8">
      <path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" />
      <path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" />
    </g>
    <g stroke-width="6">
      <path d="M -10 -20 h 20" />
      <path d="M -10 -8 h 10" />
      <path d="M -10 4 h 15" />
      <path d="M -10 16 h 5" />
    </g>
  </g>
</svg>
{:else if icon === "freecodecamp"}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round">
    <path d="M 30 -35 c 21 20 21 50 0 70" />
    <path transform="scale(-1 1)" d="M 30 -35 c 21 20 21 50 0 70" />
    <g transform="translate(0 30)" stroke-linejoin="round">
      <path d="M 20 -20 a 20 20 0 0 1 -40 0 q 0 -10 10 -20 t 0 -20 q 15 17 12.5 35 q 10 0 12.5 -15 q 5 11.25 5 20" />
    </g>
  </g>
</svg>
{:else if icon === "codepen"}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" fill="none">
    <path d="M 0 -40 l -46 25 46 25 46 -25 z" />
    <path d="M 0 -40 v 30" />
    <path transform="translate(0 50)" d="M 0 -40 v 30" />
    <path transform="translate(46 25)" d="M 0 -40 v 30" />
    <path transform="translate(-46 25)" d="M 0 -40 v 30" />
    <path transform="translate(0 30)" d="M 0 -40 l -46 25 46 25 46 -25 z" />
  </g>
</svg>
{:else if icon === "twitter"}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M -39 30.5 c 40 20 75 0 75 -48 l 8 -8 -12 -2 a 10 10 0 0 0 -32.5 12 q -20 5 -40 -15" />
    <path stroke-width="7" d="M -40.5 -30.5 q -5 20 14 26 -9 0 -18 -5 0 20 23 18 -10 4 -22 0 0 12 28 14 -10 6 -23.5 8" />
  </g>
</svg>
{:else if icon === "github"}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-width="8" d="M 0 11 h -17 a 18 18 0 0 1 -18 -18 q 0 -8 5 -16 q -6 -10 0 -18 q 12 0 18 6 a 24 24 0 0 1 24 0 q 6 -6 18 -6 q 6 8 0 18 q 5 8 5 16 a 18 18 0 0 1 -18 18 h -17" />
    <path stroke-width="6" d="M -12 11 q -10 0 -10 14 q 0 8 -8 14 q 20 0 20 -16 v 4 q 0 10 -6 16 q 16 0 16 -15 v -4 v 4 q 0 15 16 15 q -6 0 -6 -16 v -4 q 0 16 20 16 q -8 0 -8 -14 q 0 -14 -10 -14" />
  </g>
</svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <circle r="46" />
  </g>
</svg>
{/if}
