<script>
  export let icon;
  export let size = 32;
</script>

{#if icon === 'blog'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="{size}" height="{size}">
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

{:else if icon === 'css'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"><path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-3.25 55.25L0 32.5l-22.75-9.75-.65-11.051h11.05l.325 5.525L0 22.426l12.025-5.202L12.999.65h-37.05L-24.7-10.4h38.35l.65-11.05h-39.65L-26-32.5z" /></svg>
{:else if icon === 'svg'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-width="8" fill="currentColor">
    <path d="M0 0v36a5 5 0 010 10 5 5 0 010-10v-72a5 5 0 010-10 5 5 0 010 10" />
    <path d="M0 0l-25.456 25.456a5 5 0 01-7.07 7.07 5 5 0 017.07-7.07l50.912-50.912a5 5 0 017.07-7.07 5 5 0 01-7.07 7.07" />
    <path d="M0 0h-36a5 5 0 01-10 0 5 5 0 0110 0h72a5 5 0 0110 0 5 5 0 01-10 0" />
    <path d="M0 0l-25.456-25.456a5 5 0 01-7.07-7.07 5 5 0 017.07 7.07l50.912 50.912a5 5 0 017.07 7.07 5 5 0 01-7.07-7.07" />
  </g>
</svg>
{/if}
