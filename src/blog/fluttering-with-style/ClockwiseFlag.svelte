<script>
	export let accentColor = 'hotpink';
	let clockwise = false;
</script>

<label>
	<input type="checkbox" bind:checked={clockwise} />
	<span>Toggle clockwise flag</span>
</label>

<code
	>d="... a 20 20 0 0
	<span style:border-block-end="0.2rem solid {accentColor}">{clockwise ? 1 : 0}</span>
	-40 0"
</code>

<svg viewBox="-35 -35 70 70">
	<g fill="currentColor">
		<path
			d="
    M -20 0 
    c -18 24 58 24 40 0
    a 20 20 0 0 {clockwise ? 1 : 0} -40 0
    "
		/>
	</g>
</svg>
