<script>
	export let text = 'Hello world';

	const lines = text.split(' ').map((d) => d.toUpperCase().split(''));

	const squircle = 50;
	const inset = 20;
	const width = squircle * Math.max(...lines.map((d) => d.length)) + inset;
	const height = squircle * lines.length + inset;
	const overlay = (width ** 2 + height ** 2) ** 0.5;
	const id = text.toLowerCase().replace(/\s/, '-');
</script>

<svg viewBox="0 0 {width} {height}">
	<title>{text}</title>
	<defs>
		<symbol id="squircle-{id}" viewBox="0 0 1 1">
			<path d="M 0 0.5 C 0 0 0 0 0.5 0 S 1 0 1 0.5 1 1 0.5 1 0 1 0 0.5" />
		</symbol>
		<linearGradient id="gradient-{id}" spreadMethod="reflect" x1="0" x2="0.5"
			><stop stop-color="hsl(0, 75.97597597597598%, 66.7%)" offset="0" /><stop
				stop-color="hsl(51.42857142857143, 75.97597597597598%, 66.7%)"
				offset="0.142"
			/><stop stop-color="hsl(51.42857142857143, 75.97597597597598%, 66.7%)" offset="0.284" /><stop
				stop-color="hsl(102.85714285714286, 75.97597597597598%, 66.7%)"
				offset="0.426"
			/><stop stop-color="hsl(154.28571428571428, 75.97597597597598%, 66.7%)" offset="0.570" /><stop
				stop-color="hsl(205.71428571428572, 75.97597597597598%, 66.7%)"
				offset="0.714"
			/><stop
				stop-color="hsl(257.14285714285717, 75.97597597597598%, 66.7%)"
				offset="0.856"
			/></linearGradient
		>

		{#each lines as line, i}
			<text
				id="line-{i}-{id}"
				transform="translate({squircle / 2 + inset / 2} {squircle / 2 + inset / 2 + squircle * i})"
				text-anchor="middle"
				y={-squircle / 2 / 2}
				dominant-baseline="hanging"
				font-size={squircle / 2}
				font-weight="700"
			>
				{#each line as letter, i}
					<tspan x={squircle * i}>
						{letter}
					</tspan>
				{/each}
			</text>
		{/each}

		<mask id="mask-{id}">
			<rect width={width * 2} {height} />
			<g fill="white">
				{#each lines as _, i}
					<use href="#line-{i}-{id}" />
				{/each}
			</g>
		</mask>
	</defs>

	<g transform="translate({squircle / 2 + inset / 2} {squircle / 2 + inset / 2})">
		{#each lines as line, i}
			<g transform="translate(0 {squircle * i})">
				{#each line as _, i}
					<g transform="translate({squircle * i} 0)">
						<use
							transform="rotate(45)"
							href="#squircle-{id}"
							x={-squircle / 2}
							y={-squircle / 2}
							width={squircle}
							height={squircle}
							fill="#38311e"
						/>
					</g>
				{/each}
			</g>
		{/each}
	</g>

	<g mask="url(#mask-{id})" fill="url(#gradient-{id})">
		<g transform="translate({width / 2} {height / 2})">
			<g transform="rotate(40)">
				<g transform="translate(0 0)">
					<animateTransform
						attributeName="transform"
						type="translate"
						to={overlay}
						dur="10s"
						repeatCount="indefinite"
					/>
					<g transform="translate(-{overlay / 2} -{overlay / 2})">
						<rect x="-{overlay}" width={overlay} height={overlay} />
						<rect width={overlay} height={overlay} />
					</g>
				</g>
			</g>
		</g>
	</g>

	<g fill="transparent">
		{#each lines as _, i}
			<use href="#line-{i}-{id}" />
		{/each}
	</g>
</svg>
