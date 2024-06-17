<script>
	import { onMount } from 'svelte';
	import './dot-matrix-display.js';

	export let text = `                         
 ....................... 
 ..o.o.ooo.o...o....o... 
 ..o.o.o...o...o...o.o.. 
 ..ooo.oo..o...o...o.o.. 
 ..o.o.o...o...o...o.o.. 
 ..o.o.ooo.ooo.ooo..o... 
 ....................... 
                         `;

	export let inset = '0.2';
	export let rounding = '0.5';

	let wrapper = null;
	onMount(() => {
		wrapper.innerHTML = `<dot-matrix-display inset=${inset} rounding=${rounding}><pre>${text}</pre></dot-matrix-display>`;
	});
</script>

<div bind:this={wrapper}>
	<pre>
    {text}
  </pre>
</div>
