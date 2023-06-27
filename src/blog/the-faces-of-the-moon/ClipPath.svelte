<script>
	export let x = 0;
	export let y = 0;
	export let transformClip = true;

	$: transform = `translate(${x} ${y})`;
	$: target = transformClip ? 'the clip' : 'the face';
	$: id = transformClip ? 'clip-path-clip' : 'clip-path-face';
</script>

<p>Drag the handles to translate {target}.</p>

<div>
	<label>
		x
		<input type="range" min="-50" max="50" bind:value={x} />
	</label>
	<label>
		y
		<input type="range" min="-50" max="50" bind:value={y} />
	</label>
</div>

<svg viewBox="-55 -55 110 110">
	<defs>
		<g id="{id}-eyelash" fill="none" stroke-linejoin="round" stroke-linecap="round">
			<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
			<g stroke-width="1">
				<path d="M 0 4 v 2" />
				<path transform="rotate(60)" d="M 0 4 v 2" />
				<path transform="rotate(-60)" d="M 0 4 v 2" />
				<path transform="rotate(-30)" d="M 0 4 v 2" />
				<path transform="rotate(30)" d="M 0 4 v 2" />
			</g>
		</g>

		<circle id="{id}-circle-moon" r="28" />
		<clipPath id="{id}-clip-moon" transform={transformClip ? transform : ''}>
			<use href="#{id}-circle-moon" />
		</clipPath>
	</defs>

	<g>
		<use href="#{id}-circle-moon" fill="#d1bfae" />
		<g fill="#a49191">
			<circle r="1.75" cx="19.75" cy="14" />
			<circle r="1.5" cx="16.5" cy="18.5" />
			<circle r="1" cx="13.25" cy="21.5" />
		</g>
		<g stroke="#a49191">
			<use href="#{id}-eyelash" x="-10" y="-4" />
			<use href="#{id}-eyelash" x="10" y="-4" />
		</g>
		<g transform="translate(0 10)">
			<g
				fill="#a49191"
				stroke="#a49191"
				stroke-width="2"
				stroke-linejoin="round"
				stroke-linecap="round"
			>
				<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
			</g>
		</g>
	</g>

	<g clip-path="url(#{id}-clip-moon)">
		<g transform={transformClip ? '' : transform}>
			<use href="#{id}-circle-moon" fill="#e3d3ba" />
			<g fill="#d1bfae">
				<circle r="1.75" cx="19.75" cy="14" />
				<circle r="1.5" cx="16.5" cy="18.5" />
				<circle r="1" cx="13.25" cy="21.5" />
			</g>
			<g fill="#d1bfae">
				<g transform="translate(0 -3)">
					<circle r="4.5" cx="10" />
					<circle r="4.5" cx="-10" />
				</g>
				<g transform="translate(0 10)">
					<g stroke="#d1bfae" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
						<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	div > * {
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
