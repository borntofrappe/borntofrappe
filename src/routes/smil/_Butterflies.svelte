<script>
	const size = 16;
	const width = 80;
	const height = 50;

	const getX = () => Math.floor(Math.random() * (width - size));
	const getY = () => Math.floor(Math.random() * (height - size));
	const getPath = ({ x, y, maxLength = 200 }) => {
		let d = `M 0 0`;
		let length = 0;

		while (length < maxLength) {
			const nx = getX() - x;
			const ny = getY() - y;
			const dinstance = ((nx - x) ** 2 + (ny - y) ** 2) ** 0.5;

			d += ` ${nx} ${ny}`;
			length += dinstance;
		}
		return `${d} 0 0`;
	};

	const x = getX();
	const y = getY();

	const coords = [{ x, y }];

	const ribbon = {
		x: getX(),
		y: getY()
	};

	const butterflies = Array(2)
		.fill()
		.map(() => {
			let nx = getX();
			let ny = getY();
			while (true) {
				let overlaps = false;
				for (const { x: cx, y: cy } of coords) {
					if (nx + size > cx && nx < cx + size && ny + size > cy && ny < cy + size) {
						overlaps = true;
						break;
					}
				}
				if (overlaps) {
					nx = getX();
					ny = getY();
				} else {
					coords.push({
						x: nx,
						y: ny
					});
					break;
				}
			}

			return {
				x: nx,
				y: ny,
				d: getPath({ x: nx, y: ny })
			};
		});

	const message = 'You dit it!';
	const messageMarkup = Array(butterflies.length)
		.fill()
		.reduce(
			(acc, _, i) => {
				return `
      <g transform="translate(0 -50)">
        <animateTransform
          attributeName="transform"
          type="translate"
          to="0 0"
          dur="0.15s"
          begin="butterfly${i}.begin"
          fill="freeze"
          calcMode="discrete"
        />
        ${acc}
      </g>
      `;
			},
			`
      <rect width="80" height="50" opacity="0" />
      <g transform="translate(40 25)">
        <g
          style:cursor="pointer"
          font-size="7"
          font-weight="bold"
          font-family="sans-serif"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="#ffffff"
          stroke="currentColor"
          stroke-width="0.4"
        >
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              to="-80 0"
              dur="0.25s"
              id="butterflyMessage"
              begin="butterfly0.begin"
              end="click"
              repeatCount="indefinite"
              calcMode="discrete"
            />
            <text y="-1">
              ${message
								.split('')
								.map(
									(l, i) => `
                <tspan dx="0.5" dy=${i % 2 === 0 ? 0.5 : -0.5}>
                  ${l}
                </tspan>
                `
								)
								.join('')}
            </text>
            <text x="80" y="-0.5">
              ${message
								.split('')
								.map(
									(l, i) => `
                <tspan dx="0.5" dy=${i % 2 === 0 ? 0.5 : -0.5}>
                  ${l}
                </tspan>
                `
								)
								.join('')
								.trim()}
            </text>
          </g>
        </g>
      </g>
    `
		);
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="wall-of-bricks" viewBox="0 0 8 5" width="0.12" height="0.12">
			<rect fill="#bd4900" width="8" height="5" />
			<g fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="square">
				<path d="M 7.75 0 v 2.375 h -7.75 m 3.875 0 v 2.375 m -3.875 0h 7.75" />
			</g>
		</pattern>
	</defs>

	<rect fill="url(#wall-of-bricks)" width="80" height="50" />

	<g stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
		<g transform="translate({ribbon.x} {ribbon.y})">
			<g transform="translate(8 6) scale(0.8)">
				<g fill="#2969bd">
					<path d="M 0 1 c 0 2 1 8 2 8 1 -2 3 -1 3 -2z" />
					<path transform="scale(-1 1)" d="M 0 1 c 0 2 1 8 2 8 1 -2 3 -1 3 -2z" />
					<path d="M 0 0 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1" />
					<path transform="scale(-1 1)" d="M 0 0 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1" />
				</g>
				<g fill="none">
					<path d="M 0 0.25 c 1 -2 5 -2 3.8 0" />
					<path transform="scale(-1 1)" d="M 0 0.25 c 1 -2 5 -2 3.8 0" />
				</g>
				<rect fill="#2969bd" x="-1.4" y="-0.6" width="2.8" height="3.2" rx="1" />
			</g>
		</g>

		{#each butterflies as { x, y, d: path }, i}
			<g style:cursor="pointer">
				<animate
					attributeName="opacity"
					dur="0.1s"
					id="butterfly{i}"
					begin="click"
					restart="never"
				/>
				<g transform="translate({x} {y})">
					<g transform="translate(8 6) scale(0.8)">
						<g>
							<animateMotion
								{path}
								repeatCount="indefinite"
								begin="butterfly{i}.begin"
								end="butterflyMessage.end"
								fill="freeze"
								dur="10s"
							/>
							<g fill="#2969bd">
								<g>
									<animateTransform
										attributeName="transform"
										type="scale"
										values="1 1; 0.6 1"
										begin="butterfly{i}.begin"
										end="butterflyMessage.end"
										fill="freeze"
										dur="0.22s"
										calcMode="discrete"
										repeatCount="indefinite"
									/>
									<path
										fill="currentColor"
										transform="translate(0.5 3) scale(1.05 1.08)"
										d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
									/>
									<path d="M 0 3 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1" />
								</g>
								<g transform="scale(-1 1)">
									<g>
										<animateTransform
											attributeName="transform"
											type="scale"
											values="1 1; 0.6 1"
											begin="butterfly{i}.begin"
											end="butterflyMessage.end"
											fill="freeze"
											dur="0.22s"
											calcMode="discrete"
											repeatCount="indefinite"
										/>
										<path
											fill="currentColor"
											transform="translate(0.5 3) scale(1.05 1.08)"
											d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
										/>
										<path d="M 0 3 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1" />
									</g>
								</g>
							</g>
							<path fill="#2969bd" d="M 0 0 c 2.5 3 3.5 7 0 9 -3.5 -2 -2.5 -6 0 -9" />
							<g fill="none">
								<path
									transform="translate(0.5 -1.5) rotate(-40)"
									d="M 0 0.25 c 1 -2 5 -2 3.8 0 t -0.25 -1"
								/>
								<path
									transform="scale(-1 1) translate(0.5 -1.5) rotate(-40)"
									d="M 0 0.25 c 1 -2 5 -2 3.8 0 t -0.25 -1"
								/>
							</g>
							<path fill="#2969bd" d="M 0 -1.5 c -1 0 -3 3 0 3 3 0 1 -3 0 -3" />
							<g fill="#10bec5" stroke="none">
								<path transform="translate(1 -0.5) rotate(-30)" d="M 0 -0.8 q 2 0.8 0 1.6z" />
								<path
									transform="scale(-1 1) translate(1 -0.5) rotate(-30)"
									d="M 0 -0.8 q 2 0.8 0 1.6z"
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
		{/each}
	</g>

	<g transform="translate(40 25)">
		<g
			style="pointer-events: none;"
			font-size="7"
			font-weight="bold"
			font-family="sans-serif"
			text-anchor="middle"
			dominant-baseline="middle"
			fill="#ffffff"
			stroke="currentColor"
			stroke-width="0.4"
		>
			<animate
				attributeName="opacity"
				values="1; 0"
				fill="freeze"
				dur="0.15s"
				begin="butterflyGame.begin"
			/>
			<text> Butterflies? </text>
		</g>
	</g>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<animate
			id="butterflyGame"
			attributeName="display"
			to="none"
			fill="freeze"
			dur="0.15s"
			begin="click"
		/>
	</rect>

	{@html messageMarkup}
</svg>
