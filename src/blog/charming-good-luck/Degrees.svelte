<script>
	let x = Math.floor(Math.random() * 50) * -1;
	let y = Math.floor(Math.random() * 50) * -1;

	$: angle = Math.atan2(y, x);
</script>

<div>
	<p>
		Drag the handles to update the values used in the <code>Math.atan2</code> function.
	</p>

	<form on:submit|preventDefault>
		<label>
			x
			<input type="range" min="-50" max="50" bind:value={x} />
		</label>
		<label>
			y
			<input type="range" min="-50" max="50" bind:value={y} />
		</label>
	</form>

	<svg viewBox="-60 -60 120 120">
		<g fill="none" stroke="currentColor">
			<g stroke-width="0.25">
				<g stroke-dasharray="1">
					<path d="M 0 -50 v 100" />
					<path d="M -50 0 h 100" />
				</g>
			</g>
			<g stroke-width="0.5">
				<path d="M 0 0 h 50" />
				<path d="M 0 0 {x} {y}" />
			</g>
		</g>

		<g fill="currentColor">
			<g text-anchor="middle">
				<g font-size="4.5">
					<text y="8">(0, 0)</text>
					<text {x} y={y - 5}>({x}, {y})</text>
				</g>
				<text dominant-baseline="middle" font-size="16" font-weight="bold" x="25" y="25"
					>{Math.floor((angle * 180) / Math.PI)}°</text
				>
			</g>
			<circle r="1.2" />
			<circle cx={x} cy={y} r="1.2" />
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

	form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	form > * {
		flex-grow: 1;
	}

	label input {
		margin-block-start: 0.5em;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
