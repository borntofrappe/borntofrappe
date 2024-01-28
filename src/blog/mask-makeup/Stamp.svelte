<script>
	const colors = [
		'crimson',
		'goldenrod',
		'yellowgreen',
		'cadetblue',
		'slateblue',
		'palevioletred',
		'coral'
	];

	let [fill] = colors;
</script>

<div class="layout">
	<div class="controls">
		{#each colors as color}
			<button
				aria-current={color === fill}
				style="background: {color}"
				aria-label={color}
				on:click={() => (fill = color)}
			/>
		{/each}
	</div>

	<svg style="display: block;" viewBox="0 0 100 100">
		<defs>
			<rect id="stamp-base" x="10" y="10" width="80" height="80" />
			<mask id="stamp-mask">
				<use fill="white" href="#stamp-base" />
				<g transform="translate(50 50)">
					<g id="stamp-scheme">
						<g
							fill="black"
							stroke="black"
							stroke-width="1"
							stroke-linejoin="round"
							stroke-linecap="round"
						>
							<path d="M 0 0 l -3 -3 v -4 l 3 4 3 -4 v 4z" />
							<path
								transform="rotate(45) translate(0 -20)"
								d="M -3 3.5 v -4 l 3 -3 3 3 v 4 l -3 -3z"
							/>
							<path transform="translate(0 -20)" d="M -3 -4 l 3 4 3 -4 -3 -4z" />
							<path transform="rotate(45) translate(0 -35)" d="M -4 -3.5 l 4 -5 4 5 -4 -2z" />
							<path
								transform="translate(-3 -7) rotate(-30) translate(0 -25)"
								d="M 0 3 l -2 -3 2 -3 2 3z"
							/>
							<path
								transform="translate(3 -7) rotate(30) translate(0 -25)"
								d="M 0 3 l -2 -3 2 -3 2 3z"
							/>
						</g>
					</g>
					<use transform="rotate(90)" href="#stamp-scheme" />
					<use transform="rotate(180)" href="#stamp-scheme" />
					<use transform="rotate(270)" href="#stamp-scheme" />
				</g>
			</mask>
			<clipPath id="stamp-clip">
				<path
					d="M 2.5 0 a 2.5 2.5 0 0 1 -2.5 2.5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 0 5 v 5 a 2.5 2.5 0 0 1 2.5 2.5 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 5 0 h 5 a 2.5 2.5 0 0 1 2.5 -2.5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 0 -5 v -5 a 2.5 2.5 0 0 1 -2.5 -2.5 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5 a 2.5 2.5 0 0 1 -5 -0 h -5z"
				/>
			</clipPath>
		</defs>

		<rect clip-path="url(#stamp-clip)" fill="#fefefe" width="100" height="100" />
		<rect {fill} x="5" y="5" width="90" height="90" />
		<use mask="url(#stamp-mask)" fill="#ece5d9" href="#stamp-base" />
	</svg>
</div>

<style>
	.layout > * + * {
		margin-block-start: 0.5rem;
	}

	.controls {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		padding: 0.5rem 0;
	}

	button {
		display: block;
		inline-size: 2rem;
		block-size: 2rem;
		border-radius: 50%;
		border: none;
		background: none;
	}

	button:focus {
		outline-offset: 5px;
	}
</style>
