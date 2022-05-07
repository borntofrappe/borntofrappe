<script>
	const dBalloon = (r, o = 10, p = 30) => {
		const points = Array(p % 2 === 0 ? p + 1 : p)
			.fill()
			.map((_, i, { length }) => {
				const angle = (((360 / length) * i) / 180) * Math.PI;
				let ry = angle > 0 && angle < Math.PI ? r + o : r;
				const x = Math.cos(angle) * r;
				const y = Math.sin(angle) * ry;
				return {
					x,
					y
				};
			});
		return (
			points.reduce((acc, { x, y }, i) => `${acc} ${x} ${y}`, 'M') +
			` L ${points[0].x} ${points[0].y}`
		);
	};

	const d = dBalloon(7, 1.5, 20);

	const angle = ((Math.floor(Math.random() * 180) + 180) / 180) * Math.PI;
	const dx = Math.cos(angle) * 80;
	const dy = Math.sin(angle) * 50;

	const winMessage = 'You did it!';
	const lossMessage = 'Too bad!';
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<g id="cloud">
			<path
				fill="#f7f7f7"
				d="M -7 0 a 2 2 0 0 1 4 -2 3 3 0 0 1 6 0 2 2 0 0 1 4 2 2 2 0 0 1 0 4 1.85 1.85 0 0 1 -3.7 0 3.4 3.4 0 0 1 -6.6 0 1.85 1.85 0 0 1 -3.7 0 2 2 0 0 1 0 -4"
			/>
			<path
				fill="#bdbebd"
				d="M -7 0 a 2 2 0 0 0 0 4 1.85 1.85 0 0 0 3.7 0 3.4 3.4 0 0 0 6.6 0 1.85 1.85 0 0 0 3.7 0 2 2 0 0 0 0 -4 a 1.5 1.5 0 0 1 -0.5 2.5 a 1.4 1.4 0 0 1 -3 -0.5 a 3.6 3.6 0 0 1 -7 0 a 1.4 1.4 0 0 1 -3 0.5 a 1.5 1.5 0 0 1 -0.5 -2.5"
			/>
			<path
				fill="none"
				stroke="currentColor"
				d="M -7 0 a 2 2 0 0 1 4 -2 3 3 0 0 1 6 0 2 2 0 0 1 4 2 2 2 0 0 1 0 4 1.85 1.85 0 0 1 -3.7 0 3.4 3.4 0 0 1 -6.6 0 1.85 1.85 0 0 1 -3.7 0 2 2 0 0 1 0 -4"
			/>
		</g>

		<pattern
			id="wrapping-paper"
			viewBox="0 0 10 10"
			width="4"
			height="4"
			patternUnits="userSpaceOnUse"
		>
			<rect width="10" height="10" fill="#f7f75a" />
			<path
				fill="#f7aa31"
				d="M 0 0 3 0 0 3Z M 0 7 3 10 0 10Z M 7 0 10 3 10 0Z M 7 10 10 7 10 10Z M 2 5 5 2 8 5 5 8z"
			/>
		</pattern>

		<ellipse
			id="balloon-reflection"
			stroke="none"
			transform="translate(2.5 -2.75) rotate(-42)"
			rx="2"
			ry="2.5"
		/>

		<g id="balloon">
			<path d="M -1.25 10 h 2.5 q 0 -1.5 -1.25 -1.5 t -1.25 1.5" />

			<path {d} />
			<use fill="#f7d794" href="#balloon-reflection" />

			<path fill="none" d="M 0 10 q -0.75 0.75 0 1.5 t 0 1.5" />
		</g>

		<pattern
			id="balloon-shreds"
			viewBox="0 0 5 5"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="black">
				<circle r="1.5" cx="2.5" cy="2.5" />
				<circle r="1.5" cx="2.5" cy="7.5" />
			</g>
		</pattern>

		<mask id="mask-balloon-shreds">
			<use href="#balloon" fill="white" stroke="white" />
			<g fill="url(#balloon-shreds)">
				<use href="#balloon" stroke="white" />
				<use href="#balloon-reflection" />
			</g>
		</mask>
	</defs>
	<rect fill="#10c2ce" width="80" height="50" />

	<g stroke-width="0.5">
		<use transform="translate(15 15) scale(0.8)" href="#cloud" />
		<use transform="translate(65 35) scale(0.8)" href="#cloud" />
	</g>

	<g transform="translate(40 25)">
		<g style:cursor="pointer" display="none">
			<animate
				id="balloonMessage"
				attributeName="display"
				to="initial"
				fill="freeze"
				dur="0.1s"
				begin="balloonFloat.end + 1s"
			/>
			<g
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
						begin="balloonMessage.begin"
						end="click"
						repeatCount="indefinite"
						calcMode="discrete"
					/>
					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							to="0 -50"
							dur="0.1s"
							begin="balloonPop.begin"
							fill="freeze"
							calcMode="discrete"
						/>
						<text y="-1">
							{#each lossMessage.split('') as l, i}
								<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>
									{l}
								</tspan>
							{/each}
						</text>
						<text x="80" y="-0.5">
							{#each lossMessage.split('') as l, i}
								<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>
									{l}
								</tspan>
							{/each}
						</text>

						<g transform="translate(0 50)">
							<text y="-1">
								{#each winMessage.split('') as l, i}
									<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>
										{l}
									</tspan>
								{/each}
							</text>
							<text x="80" y="-0.5">
								{#each winMessage.split('') as l, i}
									<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>
										{l}
									</tspan>
								{/each}
							</text>
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>

	<g transform="translate(40 18)">
		<g>
			<animateTransform
				id="balloonFloat"
				attributeName="transform"
				type="translate"
				to="{dx} {dy}"
				dur="4.5s"
				begin="balloonGame.begin"
				end="balloonPop.begin"
				fill="freeze"
			/>
			<g stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round">
				<g>
					<animateTransform
						attributeName="transform"
						type="translate"
						to="0 0.8"
						repeatCount="indefinite"
						dur="0.7s"
						calcMode="discrete"
						begin="balloonGame.begin"
						end="balloonPop.begin"
					/>
					<g style:cursor="pointer">
						<animateTransform
							id="balloonPop"
							attributeName="transform"
							type="translate"
							values="-160 0; -320 0;"
							dur="0.15s"
							begin="click"
							calcMode="discrete"
							fill="freeze"
						/>
						<g fill="#f70000">
							<use href="#balloon" />
							<use transform="translate(160 0)" href="#balloon" mask="url(#mask-balloon-shreds)" />
						</g>
					</g>
				</g>
			</g>
			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0 0; 0 50;"
					dur="1s"
					begin="balloonPop.begin"
					fill="freeze"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.7 0 0.5 1"
				/>
				<g transform="translate(0 13)">
					<g stroke="currentColor" stroke-width="0.6">
						<g fill="url(#wrapping-paper)">
							<rect y="4" x="-6" width="12" height="7" />
							<rect x="-7" width="14" height="4" />
						</g>
						<rect fill="#73ce3a" x="-2" y="-0.5" width="4" height="11.5" />
					</g>
				</g>
			</g>
		</g>
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
				values="1; 0;"
				fill="freeze"
				dur="0.15s"
				begin="balloonGame.begin"
			/>
			<text> Pop! </text>
		</g>
	</g>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<animate
			id="balloonGame"
			attributeName="display"
			to="none"
			fill="freeze"
			dur="0.15s"
			begin="click"
		/>
	</rect>
</svg>
