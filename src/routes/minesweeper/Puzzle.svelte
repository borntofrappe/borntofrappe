<script>
	import Display from './Display.svelte';
	import { createTimer } from './utils.js';

	const timer = createTimer();
</script>

<button
	on:click={() => {
		timer.start();
	}}>Start</button
>
<button
	on:click={() => {
		timer.stop();
	}}>Stop</button
>
<button
	on:click={() => {
		timer.reset();
	}}>Reset</button
>

<Display value={$timer.toString()} />
