<script>
  import { onMount } from "svelte";
  import "./dot-matrix-display.js";

  let {
    text = `                         
 ....................... 
 ..o.o.ooo.o...o....o... 
 ..o.o.o...o...o...o.o.. 
 ..ooo.oo..o...o...o.o.. 
 ..o.o.o...o...o...o.o.. 
 ..o.o.ooo.ooo.ooo..o... 
 ....................... 
                         `,
    inset = "0.2",
    rounding = "0.5",
  } = $props();

  /** @type { HTMLDivElement }*/
  let wrapper;
  onMount(() => {
    wrapper.innerHTML = `<dot-matrix-display inset=${inset} rounding=${rounding}><pre>${text}</pre></dot-matrix-display>`;
  });
</script>

<div bind:this={wrapper}>
  <pre>
    {text}
  </pre>
</div>
