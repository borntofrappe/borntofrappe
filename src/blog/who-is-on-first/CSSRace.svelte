<script>
	let animate = false;

	const handleEnd = () => {
		if (animate) {
			animate = false;
		}
	};
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	<span>Race</span>
</label>

<svg on:animationend={handleEnd} viewBox="-25 -4 35 22">
	<title>A CSS race between a rabbit and a turtle</title>
	<defs>
		<pattern
			id="css-race-pattern-flag"
			viewBox="0 0 2 2"
			patternUnits="userSpaceOnUse"
			width="1"
			height="1"
		>
			<rect fill="hsl(0 0% 50%)" width="2" height="2" />
			<g fill="hsl(0 0% 70%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<symbol
			id="css-race-turtle"
			viewBox="-21.702682495117188 -18.453792572021484 40.70268249511719 33.309547424316406"
		>
			<g transform="scale(-1 1)">
				<g stroke="hsl(0 0% 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path
						fill="hsl(0 0% 88%)"
						d="M 0 0 c 5 0 10 0 15 -5.5 a 13.6 13.6 0 0 0 -27 0 c 0 5.5 12 5.5 12 5.5"
					/>
					<g fill="none">
						<path d="M 13.5 -8.5 c -6 6 -21 7 -24 0" />
						<path d="M -5.5 -14 l 2 3 l 5 1 l 5 -1.5 l 1 -3" />
						<path d="M -3.5 -11 l -2 5" />
						<path d="M 1.5 -10 l 1 5.5" />
						<path d="M 6.5 -11.5 l 4 5" />
					</g>
					<path
						fill="hsl(0 0% 99%)"
						d="M 0 0  a 9 9 0 0 0 -18 -0 c 0 3 2 7 7 8 c -6 7 8 8 5 1.5 c 2 0.5 6 0.5 8 0 c -1 6 8 4 6 -1 c 2 0 4 -2 6 -4 c 0 6 10 3 4 -6 c 4 -4 4 -8 -3 -4 c -5 5.5 -10 5.5 -15 5.5"
					/>
				</g>
				<g transform="translate(-9 -2)">
					<g fill="hsl(0 0% 40%)">
						<ellipse cx="-2.75" rx="1.5" ry="1.7" />
						<ellipse cx="2.75" rx="1.5" ry="1.7" />
					</g>
					<g
						fill="none"
						stroke="hsl(0 0% 40%)"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M -2 4 c 1.5 2 2.5 2 4 0" />
					</g>
				</g>
			</g>
		</symbol>
		<symbol id="css-race-rabbit" viewBox="-22 -36.438228607177734 39 47.792476654052734">
			<g transform="scale(-1 1)">
				<g
					fill="hsl(0 0% 99%)"
					stroke="hsl(0 0% 40%)"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						stroke-width="2"
						d="M 0 0 a 10 10 0 0 0 10 -10 c 0 -5 -2 -5 -5 -10 c 10 -10 0 -26 -8 -3 c 2 -18 -15 -16 -8 3 c 0 2 -5 5 -5 10 a 10 10 0 0 0 10 10 h 6 m 10 -10 c 4 0 8 5 8 10 a 3 3 0 0 1 0 6 m 0 -6 c 1 10 -8 11 -16 10 c -1 0 -1 -6 5 -4 c 0 -1 0 -3 2 -4 m -7 7 a 4 4 0 0 1 -6 0 v -5 m 0 5 a 4 4 0 0 1 -6 0 v -9 l 10 0 a 10 10 0 0 0 10 -10 c 4 0 8 5 8 10 a 3 3 0 0 1 0 6"
					/>
				</g>
				<g
					fill="hsl(0 0% 88%)"
					stroke="hsl(0 0% 88%)"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M 2.25 -22 c 1 0 6 -8 3 -9 c  -2 0 -6.5 10 -3 9" />
					<path d="M -6.25 -23 c 1 -5 -1 -8.5 -2.5 -8.5 c -2 0 0 12 2.5 8.5" />
				</g>
				<g transform="translate(-3 -12)">
					<g fill="hsl(0 0% 40%)">
						<ellipse cx="-4" rx="1.75" ry="2" />
						<ellipse cx="4" rx="1.75" ry="2" />
					</g>
					<g
						fill="none"
						stroke="hsl(0 0% 40%)"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M -1.5 4 c 1 1 2 1 3 0" />
						<path d="M 0 5 v 2 c 1 1 2 1 3 0 m -3 0 c -1 1 -2 1 -3 0" />
					</g>
				</g>
			</g>
		</symbol>
	</defs>

	<path
		fill="hsl(0 0% 99%)"
		d="M -22.5 -4 h 30 a 2.5 2.5 0 0 1 2.5 2.5 v 17 a 2.5 2.5 0 0 1 -2.5 2.5 h -30 a 2.5 2.5 0 0 1 -2.5 -2.5 v -17 a 2.5 2.5 0 0 1 2.5 -2.5"
	/>

	<g fill="none" stroke="hsl(0 0% 30%)" stroke-width="0.5">
		<path
			d="M 0 0 h 3 a 4 4 0 0 1 4 4 v 1 a 2 2 0 0 1 -2 2 a 2 2 0 0 0 -2 2 a 2 2 0 0 1 -2 2 a 2 2 0 0 0 -2 2 a 2 2 0 0 1 -2 2 a 2 2 0 0 1 -2 -2 v -3 a 2 2 0 0 1 2 -2 a 2 2 0 0 0 2 -2 a 2 2 0 0 0 -2 -2 h -6 a 2 2 0 0 1 -2 -2 a 2 2 0 0 0 -2 -2 a 2 2 0 0 0 -2 2 a 5 5 0 0 1 -5 5 a 2 2 0 0 0 -2 2 a 2 2 0 0 0 2 2 h 7 a 6 6 0 0 0 6 -6 a 5 5 0 0 1 5 -5 h 2"
		/>
	</g>

	<rect fill="url(#css-race-pattern-flag)" x="-1.5" y="-1.5" width="1.5" height="3" rx="0.2" />

	<g transform="translate(0 -1.25)">
		<use class:animate href="#css-race-rabbit" x="-1.25" y="-1.25" width="2.5" height="2.5" />
	</g>

	<g transform="translate(0 1.25)">
		<use
			class:animate
			data-ease="true"
			href="#css-race-turtle"
			x="-1.25"
			y="-1.25"
			width="2.5"
			height="2.5"
		/>
	</g>
</svg>

<style>
	label {
		display: block;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}

	use {
		offset-path: path(
			'M 0 0 h 3 a 4 4 0 0 1 4 4 v 1 a 2 2 0 0 1 -2 2 a 2 2 0 0 0 -2 2 a 2 2 0 0 1 -2 2 a 2 2 0 0 0 -2 2 a 2 2 0 0 1 -2 2 a 2 2 0 0 1 -2 -2 v -3 a 2 2 0 0 1 2 -2 a 2 2 0 0 0 2 -2 a 2 2 0 0 0 -2 -2 h -6 a 2 2 0 0 1 -2 -2 a 2 2 0 0 0 -2 -2 a 2 2 0 0 0 -2 2 a 5 5 0 0 1 -5 5 a 2 2 0 0 0 -2 2 a 2 2 0 0 0 2 2 h 7 a 6 6 0 0 0 6 -6 a 5 5 0 0 1 5 -5 h 2'
		);
		offset-rotate: 0deg;
	}

	use.animate {
		animation: offset-distance 14s linear forwards;
	}

	use.animate[data-ease='true'] {
		animation: offset-distance 14s cubic-bezier(0.85, 0.52, 0.73, 0.96) forwards;
	}

	@keyframes offset-distance {
		from {
			offset-distance: 0%;
		}
		to {
			offset-distance: 100%;
		}
	}
</style>
