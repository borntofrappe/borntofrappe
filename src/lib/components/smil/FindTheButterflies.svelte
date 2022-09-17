<script>
	const width = 80;
	const height = 50;
	const scale = 0.7;
	const size = 16 * scale;

	const targets = 3;

	const getX = () => Math.floor(Math.random() * (width - size));
	const getY = () => Math.floor(Math.random() * (height - size));

	const x = getX();
	const y = getY();

	const coords = [{ x, y }];

	const ribbon = {
		x,
		y
	};

	const butterflies = Array(targets)
		.fill()
		.map(() => {
			let x = getX();
			let y = getY();
			while (true) {
				let overlaps = false;
				for (const { x: cx, y: cy } of coords) {
					if (x + size > cx && x < cx + size && y + size > cy && y < cy + size) {
						overlaps = true;
						break;
					}
				}
				if (overlaps) {
					x = getX();
					y = getY();
				} else {
					coords.push({
						x,
						y
					});
					break;
				}
			}

			return {
				x,
				y
			};
		});
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="find-the-butterflies-pattern-bricks" viewBox="0 0 8 5" width="0.1" height="0.1">
			<rect fill="#bd4900" width="8" height="5" />
			<g fill="none" stroke="currentColor" stroke-width="0.2" stroke-linecap="square">
				<path d="M 7.9 0 v 2.45 h -7.9 m 3.95 0 v 2.45 m -3.95 0h 7.9" />
			</g>
		</pattern>
	</defs>

	<rect fill="url(#find-the-butterflies-pattern-bricks)" width="80" height="50" />

	<g>
		<g transform="translate({ribbon.x} {ribbon.y}) scale({scale})">
			<g transform="translate(8 8)">
				<g stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
					<g fill="#2969bd">
						<path
							id="find-the-butterflies-ribbon-bottom"
							d="M 0 -2 c 0 2 1 8 2 9 1 -2 3 -1 3 -2z"
						/>
						<use transform="scale(-1 1)" href="#find-the-butterflies-ribbon-bottom" />
						<path id="find-the-butterflies-ribbon-top" d="M 0 -3 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1" />
						<use transform="scale(-1 1)" href="#find-the-butterflies-ribbon-top" />
					</g>
					<g fill="none">
						<path id="find-the-butterflies-ribbon-inset" d="M -3 0.25 c 1 -2 5 -2 3.8 0" />
						<use transform="scale(-1 1)" href="#find-the-butterflies-ribbon-inset" />
					</g>
					<rect fill="#2969bd" x="-1.4" y="-3.6" width="2.8" height="3.2" rx="1" />
				</g>
			</g>
		</g>

		<g>
			{#each butterflies as { x, y }}
				<g transform="translate({x} {y}) scale({scale})">
					<g transform="translate(8 8)">
						<g
							stroke="currentColor"
							stroke-width="0.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<g fill="#2969bd">
								<g id="find-the-butterflies-butterfly-wing">
									<use
										transform="scale(1.05 1.08)"
										fill="currentColor"
										href="#find-the-butterflies-butterfly-wing-front"
									/>
									<path
										id="find-the-butterflies-butterfly-wing-front"
										d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
									/>
								</g>
								<use transform="scale(-1 1)" href="#find-the-butterflies-butterfly-wing" />
							</g>
							<path fill="#2969bd" d="M 0 -3 c 2.5 3 3.5 7 0 9 -3.5 -2 -2.5 -6 0 -9" />
							<g fill="none">
								<path
									id="find-the-butterflies-butterfly-antenna"
									transform="translate(0.5 -4) rotate(-40)"
									d="M 0 -0 c 1 -2 5 -2 3.8 0 t -0.25 -1"
								/>
								<use transform="scale(-1 1)" href="#find-the-butterflies-butterfly-antenna" />
							</g>
							<path fill="#2969bd" d="M 0 -4.5 c -1 0 -3 3 0 3 3 0 1 -3 0 -3" />
							<g fill="none">
								<path
									id="find-the-butterflies-butterfly-eye"
									transform="translate(1.25 -3.5) rotate(-40)"
									d="M 0 -0.8 q 2 0.8 0 1.6z"
								/>
								<use transform="scale(-1 1)" href="#find-the-butterflies-butterfly-eye" />
							</g>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>
</svg>
