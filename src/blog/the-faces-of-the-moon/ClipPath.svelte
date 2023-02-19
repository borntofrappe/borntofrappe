<script>
	export let x = 0;
	export let y = 0;
	export let transformClip = true;

	$: transform = `translate(${x} ${y})`;
	$: target = transformClip ? 'the clip' : 'the face';
</script>

<div>
	<p>Drag the handles to translate {target}.</p>

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

	<svg viewBox="-55 -55 110 110">
		<defs>
			<g
				id="clip-path-eyelash"
				fill="none"
				stroke="#bfb5f5"
				stroke-linejoin="round"
				stroke-linecap="round"
			>
				<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
				<g stroke-width="1">
					<path d="M 0 4 v 2" />
					<path transform="rotate(60)" d="M 0 4 v 2" />
					<path transform="rotate(-60)" d="M 0 4 v 2" />
					<path transform="rotate(-30)" d="M 0 4 v 2" />
					<path transform="rotate(30)" d="M 0 4 v 2" />
				</g>
			</g>
			<circle id="clip-path-circle" r="28" />
			<clipPath id="clip-path-clip" transform={transformClip ? transform : ''}>
				<use href="#clip-path-circle" />
			</clipPath>
		</defs>
		<g>
			<use href="#clip-path-circle" fill="#dad35f" />
			<g fill="#bfb5f5">
				<circle r="1.75" cx="19.75" cy="14" />
				<circle r="1.5" cx="16.5" cy="18.5" />
				<circle r="1" cx="13.25" cy="21.5" />
			</g>
			<use href="#clip-path-eyelash" x="-10" y="-4" />
			<use href="#clip-path-eyelash" x="10" y="-4" />
			<g
				fill="#bfb5f5"
				stroke="#bfb5f5"
				stroke-width="2"
				stroke-linejoin="round"
				stroke-linecap="round"
			>
				<g transform="translate(0 10)">
					<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
				</g>
			</g>
		</g>
		<g clip-path="url(#clip-path-clip)">
			<g transform={transformClip ? '' : transform}>
				<use href="#clip-path-circle" fill="#f2ec64" />
				<g fill="#dad35f">
					<circle r="1.75" cx="19.75" cy="14" />
					<circle r="1.5" cx="16.5" cy="18.5" />
					<circle r="1" cx="13.25" cy="21.5" />
				</g>
				<g fill="#dad35f">
					<g transform="translate(0 -3)">
						<circle r="4.5" cx="10" />
						<circle r="4.5" cx="-10" />
					</g>
					<g transform="translate(0 10)">
						<g stroke="#dad35f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
							<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75rem;
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
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
