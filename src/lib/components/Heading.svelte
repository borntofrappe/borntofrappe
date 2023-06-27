<script>
	import { onMount } from 'svelte';
	export let level = 'h1';
	export let fill = '#f1f5f8';
	export let stroke = '#102a42';
	export let inlineSize = 58.46172180175781;
	export let style = '';

	let text = null;
	onMount(() => {
		inlineSize = text.getComputedTextLength() + 1.4;
	});
</script>

<svelte:element this={level} {style}>
	<svg viewBox="-0.7 -0.7 {inlineSize} 11">
		<g
			font-weight="700"
			{fill}
			{stroke}
			font-size="7"
			stroke-width="1.4"
			letter-spacing="0.5"
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
		block-size: 1.57em;
		inline-size: auto;
	}
</style>
