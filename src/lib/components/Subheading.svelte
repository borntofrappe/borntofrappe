<script>
	import { onMount } from 'svelte';
	export let level = 'h2';
	export let fill = '#f1f5f8';
	export let stroke = '#102a42';
	export let width = 51.94300308227539;

	let text = null;
	onMount(() => {
		width = text.getComputedTextLength() + 1.4;
	});
</script>

<svelte:element this={level}>
	<svg viewBox="-0.7 -0.7 {width} 10">
		<g
			font-weight="700"
			{fill}
			{stroke}
			font-size="7"
			stroke-width="1.4"
			letter-spacing="0.1"
			paint-order="stroke"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<text bind:this={text} y="50%" dy=".3em">
				<slot>Goodbye world</slot>
			</text>
		</g>
	</svg>
</svelte:element>

<style>
	svg {
		display: block;
		height: 1.42em;
		width: auto;
	}
</style>
