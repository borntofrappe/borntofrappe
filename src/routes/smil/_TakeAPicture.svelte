<script>
	const size = 15;
	const width = 80;
	const height = 50;

	const lens = {
		width: 30,
		height: 28
	};

	lens.x = width / 2 - lens.width / 2;
	lens.y = height / 2 - lens.height / 2;

	const time = 3 + Math.floor(Math.random() * 2);

	const frames = [
		{
			threshold: 0,
			text: 'Way too early!'
		},
		{
			threshold: height + lens.y - size,
			text: 'Out of focus...'
		},
		{
			threshold: height + lens.y,
			text: 'Nice shot!',
			filter: false
		},
		{
			threshold: height + lens.y + lens.height - size,
			text: 'Out of focus...'
		},
		{
			threshold: height + lens.y + lens.height,
			text: 'Quite late...'
		}
	].map(({ threshold, text, filter = true }) => ({
		delay: (threshold / (height * 2)) * time,
		text,
		filter
	}));

	const getX = () => Math.floor(Math.random() * (lens.width - size)) + lens.x;
	const path = `M ${getX()} ${-height} ${getX()} ${height}`;

	const end = frames.map((_, i) => `takeAPictureFrame${i}.begin`).join(';');
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<filter id="take-a-picture-filter">
			<feColorMatrix
				type="matrix"
				values="-1 0 0 0 1 
														 0 -1 0 0 1 
														 0 0 -1 0 1
														 0 0 0 1 0"
			/>
			<feColorMatrix
				type="matrix"
				values="0.33 0.33 0.33 0 0
														 0.33 0.33 0.33 0 0
														 0.33 0.33 0.33 0 0
														 0 0 0 1 0"
			/>
		</filter>

		<rect
			id="take-a-picture-lens"
			x={lens.x}
			y={lens.y}
			width={lens.width}
			height={lens.height}
			rx="2"
		/>
		<clipPath id="take-a-picture-clip-lens">
			<use href="#take-a-picture-lens" />
		</clipPath>
	</defs>

	<g>
		<animate
			attributeName="filter"
			to="url(#take-a-picture-filter)"
			dur="0.1s"
			calcMode="discrete"
			fill="freeze"
			begin={frames
				.map(({ filter }, i) => (filter ? `takeAPictureFrame${i}.begin` : null))
				.filter((d) => d)
				.join(';')}
		/>

		<rect fill="currentColor" width="80" height="50" />

		<g style="pointer-events: none">
			<g clip-path="url(#take-a-picture-clip-lens)">
				<rect width="80" height="50" fill="#ffffff" />

				<g
					fill="#d6d7d6"
					stroke="#d6d7d6"
					stroke-width="0.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="30" cy="22" r="8" />
					<circle cx="40" cy="16" r="10" />
					<circle cx="35" cy="14" r="10" />
					<circle cx="50" cy="12" r="8" />
				</g>
				<g stroke="#bdbebd" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
					<path fill="#f7f7f7" d="M 45 50 34 25 55 0 48 0 30 20 18 0 8 0 28 30 35 50" />
					<g fill="none">
						<path d="M 30 30 33 38" />
						<path d="M 34.5 32 36 36" />
					</g>
				</g>

				<g>
					<animateMotion
						begin="takeAPictureStart.begin"
						{path}
						dur="{time}s"
						{end}
						fill="freeze"
						restart="never"
						id="takeAPictureMotion"
					/>
					<g transform="scale({size / 5}) translate(2.5 2.35)">
						<g
							stroke="currentColor"
							stroke-width="0.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<g fill="none">
								<path d="M 0.1 -1 q 0 -0.8 0.75 -1" />
								<path transform="scale(-1 1)" d="M 0.1 -1 q 0 -0.8 0.75 -1" />
								<g fill="#f70000">
									<g transform="translate(0 0.5)">
										<path d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z" />
										<path
											transform="scale(-1 1)"
											d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
										/>
										<path
											transform="scale(-1 -1)"
											d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
										/>
										<path
											transform="scale(1 -1)"
											d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
										/>
									</g>
								</g>
							</g>
							<path
								fill="currentColor"
								d="M 0 -1 c 0.75 0.5 0.75 2.5 0 3 -0.75 -0.5 -0.75 -2.5 0 -3"
							/>
						</g>
					</g>
				</g>
			</g>

			<use href="#take-a-picture-lens" fill="none" stroke="#ffffff" stroke-width="2" />
			<use href="#take-a-picture-lens" fill="none" stroke="currentColor" stroke-width=".5" />
		</g>

		<g>
			{#each frames as { delay, text, invert }, i}
				<g display="none">
					<animate
						attributeName="display"
						to="initial"
						fill="freeze"
						dur="0.1s"
						calcMode="discrete"
						begin="takeAPictureStart.begin + {delay}s"
						{end}
					/>
					{#if i < frames.length - 1}
						<animate
							attributeName="display"
							to="none"
							fill="freeze"
							dur="0.1s"
							calcMode="discrete"
							begin="takeAPictureStart.begin + {frames[i + 1].delay}s"
							{end}
						/>
					{/if}
					<g style:cursor="pointer">
						<g display="none">
							<animate
								attributeName="display"
								to="initial"
								dur="0.1s"
								calcMode="discrete"
								begin="takeAPictureFrame{i}.begin"
								fill="freeze"
							/>

							<g transform="translate(40 45)">
								<g
									style="pointer-events: none;"
									font-size="6"
									font-weight="bold"
									font-family="sans-serif"
									text-anchor="middle"
									dominant-baseline="middle"
									fill="#f7f7f7"
									stroke="currentColor"
									stroke-width="0.3"
								>
									<animateTransform
										attributeName="transform"
										type="translate"
										to="0 1"
										dur="0.25s"
										repeatCount="indefinite"
										begin="takeAPictureFrame{i}.begin"
										end="takeAPictureEnd.begin"
										fill="freeze"
										calcMode="discrete"
									/>
									<text>
										{#each text.split('') as l, i}
											<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>{l}</tspan>
										{/each}
									</text>
								</g>
							</g>
						</g>

						<rect width="80" height="50" opacity="0">
							<animate restart="never" begin="click" id="takeAPictureFrame{i}" />
						</rect>
					</g>
				</g>
			{/each}
		</g>
	</g>

	<g>
		<animate
			id="takeAPictureStart"
			attributeName="display"
			to="none"
			fill="freeze"
			begin="click"
			dur="0.1s"
			restart="never"
		/>
		<g transform="translate(40 25)">
			<g
				style="pointer-events: none;"
				font-size="7"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#f7f7f7"
				stroke="currentColor"
				stroke-width="0.3"
			>
				<animate
					attributeName="opacity"
					to="0"
					fill="freeze"
					dur="0.1s"
					begin="takeAPictureStart.begin"
				/>
				<text> Picture! </text>
			</g>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0" />
	</g>

	<g display="none">
		<animate
			attributeName="display"
			to="initial"
			dur="0.1s"
			calcMode="discrete"
			begin="takeAPictureMotion.end"
			{end}
			fill="freeze"
		/>
		<g transform="translate(40 45)">
			<g
				style="pointer-events: none;"
				font-size="6"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#f7f7f7"
				stroke="currentColor"
				stroke-width="0.3"
			>
				<animateTransform
					attributeName="transform"
					type="translate"
					to="0 1"
					dur="0.25s"
					repeatCount="indefinite"
					begin="takeAPictureMotion.end"
					end="takeAPictureEnd.begin"
					fill="freeze"
					calcMode="discrete"
				/>
				<text>
					{#each 'Next time...'.split('') as l, i}
						<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>{l}</tspan>
					{/each}
				</text>
			</g>
		</g>
	</g>

	<g display="none">
		<animate
			attributeName="display"
			to="initial"
			fill="freeze"
			begin="{end}; takeAPictureMotion.end"
			dur="0.1s"
			restart="never"
		/>
		<rect width="80" height="50" opacity="0.0" />
		<rect style:cursor="pointer" width="80" height="50" opacity="0.0">
			<animate
				id="takeAPictureEnd"
				attributeName="display"
				to="none"
				dur="0.1s"
				fill="freeze"
				begin="click"
			/>
		</rect>
	</g>
</svg>
