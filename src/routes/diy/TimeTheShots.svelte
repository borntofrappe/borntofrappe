<script>
	const width = 80;
	const height = 50;

	const whiteSpace = 3;
	const parallax = height * 4;
	const dur = Math.floor(parallax / 13);
	const [cw, ch] = [54, 33];
	let cy = Math.floor(Math.random() * whiteSpace);
	const clouds = [
		{
			fill: '#f2f2f2',
			stroke: '#c5c9cc',
			copies: []
		},
		{
			fill: '#c2c2c2',
			stroke: '#808281',
			copies: []
		}
	];
	while (true) {
		const cloudWidth = 10 + Math.floor(Math.random() * 6);
		const cloudHeight = (cloudWidth / cw) * ch;
		cy += cloudHeight;
		const cx = Math.floor(Math.random() * (width - cloudWidth - whiteSpace * 2)) + whiteSpace;

		if (cy >= parallax) break;

		const i = clouds.reduce((a, c) => a + c.copies.length, 0) % clouds.length;

		clouds[i].copies.push({
			x: cx,
			y: cy - cloudHeight,
			width: cloudWidth,
			height: cloudHeight
		});

		cy += Math.ceil(Math.random() * whiteSpace);
	}
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Time the shots!</title>

	<defs>
		<pattern id="time-the-shots-pattern-sea" viewBox="0 0 8 5" width="0.1" height="0.1">
			<rect width="8" height="5" fill="#286bc6" />
			<g fill="none" stroke="#43b5f1" stroke-width="0.5" transform="translate(0 0.25)">
				<path d="M 1 2.5 h 0.5 m 0 -0.5 h 0.5 m 0 0.5 h 1" />
				<path d="M 4.5 1 h 0.5 m 0 -0.5 h 0.5 m 0 0.5 h 1" />
				<path d="M 3.5 4 h 0.5 m 0 -0.5 h 0.5 m 0 0.5 h 1" />
			</g>
		</pattern>

		<pattern
			id="time-the-shots-pattern-overlay"
			viewBox="0 0 2 2"
			width="3"
			height="3"
			patternUnits="userSpaceOnUse"
		>
			<g opacity="0.4">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<path
			id="time-the-shots-cloud-shape"
			d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
		/>

		<symbol id="time-the-shots-cloud" viewBox="-27 -14 54 33">
			<g stroke="none">
				<use href="#time-the-shots-cloud-shape" />
				<use fill="url(#time-the-shots-pattern-overlay)" href="#time-the-shots-cloud-shape" />
			</g>
			<g fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<use href="#time-the-shots-cloud-shape" />
				<use stroke="url(#time-the-shots-pattern-overlay)" href="#time-the-shots-cloud-shape" />
			</g>
		</symbol>

		<symbol id="time-the-shots-spaceship" viewBox="-19 -11 38 25">
			<g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round">
				<g fill="currentColor">
					<path d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
					<path transform="scale(-1 1)" d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
				</g>
				<g fill="#fec749">
					<ellipse cx="-6" cy="5.5" rx="4" ry="4" />
					<ellipse cx="6" cy="5.5" rx="4" ry="4" />
					<ellipse cy="7" rx="4.5" ry="4" />
				</g>
				<g fill="#cf6bef">
					<ellipse transform="translate(-7.5 1)" rx="7" ry="6" />
					<ellipse transform="translate(7.5 1)" rx="7" ry="6" />
					<ellipse rx="9" ry="8" stroke-dasharray="14.5 6 35" stroke-dashoffset="-6" />
				</g>
			</g>
		</symbol>

		<symbol id="time-the-shots-bullets" viewBox="-19 -11 38 25">
			<g fill="#fc5157" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<circle r="2.75" cx="7" cy="-4.5" />
				<circle r="2.75" cx="-7" cy="-4.5" />
				<circle r="2.75" cy="-7" />
			</g>
		</symbol>

		<symbol id="time-the-shots-target-0" viewBox="-18 -18 36 25">
			<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#fec749">
					<ellipse transform="translate(-7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(0 0.5)" rx="6.5" ry="5.5" />
				</g>
				<path fill="#5589a3" d="M -9 -9.5 a 17 6.25 0 1 0 18 0 30 30 0 0 1 -18 0" />
				<path fill="#3dbfb3" d="M -9 -9.5 a 9.1 9.1 0 0 1 18 0 30 30 0 0 1 -18 0" />
			</g>
		</symbol>

		<symbol id="time-the-shots-target-1" viewBox="0 0 36 25">
			<g
				transform="translate(18 12)"
				fill="#fc5157"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle r="5" cx="3" cy="-3" />
				<circle r="5" cx="3" cy="3" />
				<circle r="5" cx="-3" cy="3" />
				<circle r="5" cx="-3" cy="-3" />
			</g>
		</symbol>

		<symbol id="time-the-shots-target-2" viewBox="-18 -18 36 25">
			<g
				transform="translate(0 -6)"
				fill="#fc5157"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle r="4" cx="5" cy="-5" />
				<circle r="4" cx="5" cy="5" />
				<circle r="4" cx="-5" cy="5" />
				<circle r="4" cx="-5" cy="-5" />
			</g>
		</symbol>

		<symbol id="time-the-shots-target-3" viewBox="-18 -18 36 25">
			<g
				transform="translate(0 -6)"
				fill="#fc5157"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle r="3" cx="7" cy="-7" />
				<circle r="3" cx="7" cy="7" />
				<circle r="3" cx="-7" cy="7" />
				<circle r="3" cx="-7" cy="-7" />
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="url(#time-the-shots-pattern-sea)" />

	<g>
		<animateTransform
			attributeName="transform"
			type="translate"
			to="0 {parallax}"
			{dur}
			repeatCount="indefinite"
		/>
		<g id="time-the-shots-clouds">
			{#each clouds as { fill, stroke, copies }}
				<g {fill} {stroke}>
					{#each copies as { x, y, width, height }}
						<use {x} {y} {width} {height} href="#time-the-shots-cloud" />
					{/each}
				</g>
			{/each}
		</g>
		<use y={parallax * -1} href="#time-the-shots-clouds" />
	</g>
</svg>
