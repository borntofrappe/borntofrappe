<script>
	export let value = 0;
	export let accentColor = 'hotpink';
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			Drag to rotate the segment around the center.
			<input type="range" min={0} max={360} bind:value />
		</label>
	</form>

	<p>
		Rotate <strong style:border-bottom="0.2rem solid {accentColor}">{value}</strong> degrees.
	</p>

	<svg viewBox="-50 -50 100 100">
		<g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
			<path transform="rotate({value})" d="M 35 0 h 7" />
		</g>

		<circle r="28" fill="#ffdb47" />
		<g fill="#ff877a">
			<g transform="translate(0 5)">
				<circle r="4" cx="-9" />
				<circle r="4" cx="9" />
			</g>
			<g transform="translate(0 6)">
				<g stroke="#ff877a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
					<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
				</g>
			</g>
		</g>

		<g fill="#38311e" stroke="#ffdb47" stroke-width="1">
			<circle r="2" cx="-5" />
			<circle r="2" cx="5" />
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

	label input {
		margin-block-start: 0.5em;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
