<script>
	export let translate = false;
	let angle = 0;
</script>

<div>
	<form on:submit|preventDefault>
		<p>Drag the handle to rotate the shape.</p>
		<input type="range" min="0" max="45" bind:value={angle} />
	</form>

	<svg viewBox="0 0 4 4">
		<g
			transform="translate(1 1)"
			text-anchor="middle"
			dominant-baseline="middle"
			font-size="1"
			font-weight="700"
			fill="currentColor"
		>
			<text>{angle}°</text>
		</g>

		<g fill="hsl(254, 78%, 68%)">
			{#if translate}
				<g transform="translate(2 2) rotate({angle})">
					<path d="M 0 0 l 1 -1 1 1 -1 1" />
				</g>
			{:else}
				<g transform="rotate({angle})">
					<path d="M 2 2 l 1 -1 1 1 -1 1" />
				</g>
			{/if}
		</g>
	</svg>
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75em;
	}

	form > * + * {
		margin-block-start: 0.5em;
	}

	form input {
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
