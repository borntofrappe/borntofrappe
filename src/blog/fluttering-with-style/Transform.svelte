<script>
	export let transformRotate = false;
	let x = 25;
	let angle = transformRotate ? 30 : 0;
</script>

{#if transformRotate}
	<label>
		Drag the handle to update the angle.
		<input type="range" min="0" max="90" bind:value={angle} />
	</label>
{:else}
	<label>
		Drag the handle to update the horizontal offset.
		<input type="range" min="0" max="32" bind:value={x} />
	</label>
{/if}

<svg viewBox="-60 -26 120 52">
	<defs>
		<path id="wing" d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10" />
	</defs>

	<g fill="none" stroke="currentColor" stroke-width="0.2" stroke-dasharray="1">
		<path d="M 0 -18 v 36" />
	</g>

	<g
		fill="#f0d584"
		stroke="#f0d584"
		stroke-width="8"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<g transform="translate({x} 0)">
			<use transform="rotate({angle})" href="#wing" />
			<circle r="0.8" fill="black" stroke="none" />
		</g>
		<g transform="scale(-1 1) translate({x} 0)">
			<use transform="rotate({angle})" href="#wing" />
			<circle r="0.8" fill="black" stroke="none" />
		</g>
	</g>

	<g fill="currentColor" font-family="monospace" text-anchor="middle">
		<text font-size="3" y="-20" x="30">translate({x} 0)</text>
		<text font-size="3" y="-20" x="-30">scale(-1 1) translate({x} 0)</text>
		<text font-size="4" y="23"
			>&lt;use href="#wing"{transformRotate ? ` transform="rotate(${angle})"` : ''}&gt;</text
		>
	</g>
</svg>

<style>
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
