<script>
	let x = 0.35;
	$: h = 330 * x;
</script>

<div>
	<label>
		<span>Open the window to sharpen the picture</span>
		<input type="range" bind:value={x} min="0" max="1" step="0.01" />
	</label>

	<svg style="display: block;" viewBox="-2 -2 334 234">
		<title>A possibly blurred view outside</title>
		<defs>
			<filter id="windowpane-filter" {x}>
				<feGaussianBlur stdDeviation="2" />
			</filter>
		</defs>
		<g id="windowpane-view">
			<rect fill="hsl(175 41% 78%)" width="330" height="230" />
			<g stroke="hsl(228 6% 16%)" stroke-linejoin="round" stroke-linecap="round">
				<circle transform="translate(180 110)" fill="hsl(36 99% 65%)" stroke-width="3" r="40" />
				<g transform="translate(0 230)">
					<g fill="hsl(170 100% 15%)" stroke-width="3">
						<path d="M 0 0 A 220 220 0 0 1 210 0 L 0 0" />
						<path transform="translate(160 0)" d="M 0 0 A 180 180 0 0 1 170 0 L 0 0" />
					</g>
					<g fill="hsl(172 100% 20%)" stroke-width="2.5">
						<g transform="translate(35 -5)">
							<path
								id="windowpane-tree"
								d="M 0 0 L 0 -7 C -17 -13 -5 -32 0 -40 C 5 -32 17 -13 0 -7"
							/>
						</g>
						<use
							transform="translate(74 -12) scale(1.2)"
							stroke-width="2.1"
							href="#windowpane-tree"
						/>
						<use transform="translate(117 -10)" href="#windowpane-tree" />
						<use
							transform="translate(155 -5) scale(0.8)"
							stroke-width="3.125"
							href="#windowpane-tree"
						/>
						<use
							transform="translate(212 -12) scale(0.8)"
							stroke-width="3.125"
							href="#windowpane-tree"
						/>
						<use
							transform="translate(252 -14) scale(1.3)"
							stroke-width="1.92"
							href="#windowpane-tree"
						/>
						<use
							transform="translate(295 -7) scale(1.2)"
							stroke-width="2.1"
							href="#windowpane-tree"
						/>
					</g>
				</g>
				<g fill="hsl(66 59% 93%)" stroke-width="2">
					<g transform="translate(20 110)">
						<path
							id="windowpane-cloud"
							d="M 0 0 C 2 -6 10 -14 23 -10 C 30 -46 55 -40 57 -17 C 65 -30 82 -30 86 0 L 0 0 Z"
						/>
					</g>
					<use
						transform="translate(140 60) scale(-1 1) scale(0.6)"
						stroke-width="3.33"
						href="#windowpane-cloud"
					/>
					<use transform="translate(200 40) scale(0.5)" stroke-width="4" href="#windowpane-cloud" />
					<use transform="translate(280 50) scale(0.4)" stroke-width="5" href="#windowpane-cloud" />
					<use
						transform="translate(290 80) scale(-1 1) scale(0.6)"
						stroke-width="3.33"
						href="#windowpane-cloud"
					/>
				</g>
			</g>
		</g>

		<use filter="url(#windowpane-filter)" href="#windowpane-view" />

		<g fill="none" stroke="hsl(228 6% 16%)" stroke-width="4">
			<path d="M 0 0 H 330 V 250 H 0 Z" />
			<path d="M {h} 0 V 250" />
		</g>
	</svg>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

	label,
	span,
	input {
		display: block;
	}

	label > * + * {
		margin-block-start: 0.5rem;
	}

	input {
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
