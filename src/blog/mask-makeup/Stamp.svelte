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

	let selected = colors[0];
</script>

<section>
	<div>
		{#each colors as color}
			<button
				aria-current={selected === color}
				style="background: {color}"
				aria-label={color}
				on:click={() => (selected = color)}
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
								d="M -3 0 v -4 l 3 -3 3 3 v 4 l -3 -3z"
							/>
							<path transform="translate(0 -25)" d="M 0 0 l -2 -3 2 -3 2 3z" />
							<path
								transform="translate(-3 -7) rotate(-30) translate(0 -25)"
								d="M 0 0 l -2 -3 2 -3 2 3z"
							/>
							<path
								transform="translate(3 -7) rotate(30) translate(0 -25)"
								d="M 0 0 l -2 -3 2 -3 2 3z"
							/>
						</g>
					</g>
					<use transform="rotate(90)" href="#stamp-scheme" />
					<use transform="rotate(180)" href="#stamp-scheme" />
					<use transform="rotate(270)" href="#stamp-scheme" />
				</g>
			</mask>
			<pattern id="stamp-pattern-width" viewBox="0 0 2 2" width="0.1" height="1">
				<circle fill="black" r="1" cx="1" />
			</pattern>
			<pattern id="stamp-pattern-height" viewBox="0 0 2 2" width="1" height="0.1">
				<circle fill="black" r="1" cy="1" />
			</pattern>

			<mask id="stamp-mask-pattern">
				<rect fill="white" width="100" height="100" />
				<rect fill="url(#stamp-pattern-width)" x="-5" width="110" height="5" />
				<rect
					fill="url(#stamp-pattern-width)"
					transform="translate(100 100) rotate(180)"
					x="-5"
					width="110"
					height="5"
				/>
				<rect fill="url(#stamp-pattern-height)" y="-5" width="5" height="110" />
				<rect
					fill="url(#stamp-pattern-height)"
					transform="translate(100 100) rotate(180)"
					y="-5"
					width="5"
					height="110"
				/>
			</mask>
		</defs>

		<rect mask="url(#stamp-mask-pattern)" fill="#fefefe" width="100" height="100" />
		<rect fill={selected} x="5" y="5" width="90" height="90" />
		<use fill="#ece5d9" mask="url(#stamp-mask)" href="#stamp-base" />
	</svg>
</section>

<style>
	section {
		max-inline-size: 30rem;
		margin-inline: auto;
	}

	section > * + * {
		margin-block-start: 0.5rem;
	}

	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	button {
		display: block;
		inline-size: 2rem;
		block-size: 2rem;
		border-radius: 50%;
		border: none;
		background: none;
	}
</style>
