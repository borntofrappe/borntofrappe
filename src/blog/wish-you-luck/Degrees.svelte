<script>
	let x = Math.floor(Math.random() * 50) * -1;
	let y = Math.floor(Math.random() * 50) * -1;

	$: angle = Math.atan2(y, x);
</script>

<p>Change the coordinates to find the angle computed with <code>Math.atan2</code>.</p>

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

<style>
	form * {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	input {
		accent-color: currentColor;
	}

	svg {
		display: block;
	}
</style>
