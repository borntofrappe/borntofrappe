<script>
	import Title from './Title.svelte';

	const size = 13;
	const width = 80;
	const height = 50;

	const lens = {
		width: 30,
		height: 28
	};

	lens.x = width / 2 - lens.width / 2;
	lens.y = height / 2 - lens.height / 2;

	const y0 = -height;
	const y1 = height;

	const getX = () => Math.floor(Math.random() * (lens.width - size)) + lens.x;
	const path = `M ${getX()} ${y0} ${getX()} ${y1}`;

	// prettier-ignore
	const sections = [
		y0,
		lens.y - size,
		lens.y - 1,
		lens.y + lens.height - size + 1,
		lens.y + lens.height
	]
</script>

<svg viewBox="0 0 80 50">
	<title>Take a picture!</title>

	<defs>
		<symbol
			id="take-a-picture-symbol-0"
			viewBox="-2.0500000476837158 -2.1 4.1000000953674316 4.566146087646484"
		>
			<g stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
				<g fill="none">
					<path d="M 0.1 -1 q 0 -0.8 0.75 -1" />
					<path transform="scale(-1 1)" d="M 0.1 -1 q 0 -0.8 0.75 -1" />
				</g>
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
				<path fill="currentColor" d="M 0 -1 c 0.75 0.5 0.75 2.5 0 3 -0.75 -0.5 -0.75 -2.5 0 -3" />
			</g>
		</symbol>

		<symbol id="take-a-picture-symbol-1" viewBox="-2.1 -1.7250256299972534 4.2 4.925025653839111">
			<g stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#fecd00"
					d="M 0 0.1 c 0.5 -0.5 2 0 2 1.5 0 1.5 -2 1.5 -2 1.5 -1.5 0 -2 -1 -2 -1.5 0 -1.5 1.5 -2 2 -1.5"
				/>
				<g fill="#00e200">
					<path transform="rotate(10)" d="M 0 0.25 v -0.1 q 0 -1.5 1.5 -1.5 0 1.5 -1.5 1.5" />
					<path transform="rotate(5) scale(-1 1) " d="M 0 0 q 0 -1.5 1.5 -1.5 0 1.5 -1.5 1.5" />
				</g>
			</g>
		</symbol>

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

		<filter id="take-a-picture-filter-lens">
			<feColorMatrix
				type="matrix"
				values="
					-1 0 0 0 1 
					0 -1 0 0 1 
					0 0 -1 0 1
					0 0 0 1 0
				"
			/>
			<feColorMatrix
				type="matrix"
				values="
					0.33 0.33 0.33 0 0
					0.33 0.33 0.33 0 0
					0.33 0.33 0.33 0 0
					0 0 0 1 0
				"
			/>
		</filter>
	</defs>

	<g>
		<rect fill="currentColor" width="80" height="50" />

		<g fill="none">
			<use href="#take-a-picture-lens" stroke="#f7f7f7" stroke-width="3.25" />
			<use href="#take-a-picture-lens" stroke="currentColor" stroke-width="1.75" />
		</g>

		<g clip-path="url(#take-a-picture-clip-lens)">
			<rect width="80" height="50" fill="#f7f7f7" />

			<g fill="#dfdfdf">
				<circle cx="0" cy="0" r="25" />
				<circle cx="25" cy="0" r="25" />
				<circle cx="50" cy="-5" r="25" />
				<circle cx="80" cy="-10" r="25" />
				<circle cx="15" cy="20" r="12" />
				<circle cx="30" cy="20" r="12" />
				<circle cx="45" cy="15" r="12" />
				<circle cx="65" cy="10" r="12" />
			</g>

			<g stroke="#dfdfdf" stroke-width="0.75">
				<path
					fill="#f7f7f7"
					d="M 0 21.5 29.5 28.5 35 50 45 50 39 25 80 5 80 0 74 0 37 18 32.5 0 22.5 0 28 20 0 14"
				/>
				<g fill="none">
					<path d="M 0 21.5 29.5 28.5" stroke-dasharray="8" transform="translate(2 -3.5)" />
					<path d="M 29.5 27 35 50" stroke-dasharray="12" transform="translate(2 1)" />
					<g stroke-dasharray="10">
						<path d="M 45 50 39 25" transform="translate(-4 -2)" />
						<path d="M 39 25 80 5" transform="translate(4 -5)" />
						<path d="M 37 18 32.5 0" transform="translate(-3 -2)" />
						<path d="M 22.5 0 28 20" transform="translate(2 -1)" />
					</g>
				</g>
			</g>
		</g>
	</g>

	<!-- 	<g style:cursor="pointer">
		<set id="takeAPictureStart" begin="click" attributeName="display" to="none" />

		<Title fill="#f7f7f7" stroke="currentColor">Frame!</Title>

		<rect width="80" height="50" opacity="0" />
	</g> -->

	<use href="#take-a-picture-symbol-1" width={size} height={size}>
		<animateMotion {path} />
		<animateMotion {path} dur="5s" />
	</use>

	<g fill="none" stroke="red" stroke-width="1">
		{#each sections as v}
			<path d="M 0 {v} h 80" />
		{/each}
		<path d={path} />
	</g>
</svg>
