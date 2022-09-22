<script>
	const size = 9;
	const padding = 2;

	const spriteSize = 8;
	const width = 80;
	const height = 50;

	let destinations = Object.entries({
		1: [
			{ x: 8, y: 26 },
			{ x: 32, y: 26 },
			{ x: 20, y: 34 },
			{ x: 8, y: 42 },
			{ x: 32, y: 42 }
		],
		2: [
			{ x: 48, y: 26 },
			{ x: 72, y: 26 },
			{ x: 60, y: 34 },
			{ x: 48, y: 42 },
			{ x: 72, y: 42 }
		]
	}).reduce((acc, curr) => {
		const [sprite, dest] = curr;
		return [...acc, ...dest.map((d) => ({ ...d, sprite }))];
	}, []);

	const length = Math.random() > 0.5 ? destinations.length - 1 : destinations.length - 3;

	const gridY = 18; // where the grid is translated
	const gridWidth = width;
	const gridHeight = height - gridY;

	const getX = () => gridWidth / 4 + Math.floor((Math.random() * gridWidth) / 2);
	const getY = () => gridY + gridHeight / 4 + Math.floor((Math.random() * gridHeight) / 2);

	const sprites = Array(length)
		.fill()
		.map((_) => {
			const i = Math.floor(Math.random() * destinations.length);
			const destination = destinations[i];
			destinations = [...destinations.slice(0, i), ...destinations.slice(i + 1)];
			return { ...destination };
		})
		.map(({ x, y, sprite }) => {
			const start = {
				x: getX(),
				y: getY()
			};

			const moves = [
				start,
				...Array(10)
					.fill()
					.map((_) => ({
						x: getX(),
						y: getY()
					})),
				start
			];

			const distance = moves.reduce((acc, curr, i) => {
				if (i === 0) return acc;
				else {
					const { x: x0, y: y0 } = moves[i - 1];
					const { x: x1, y: y1 } = curr;
					const d = ((x1 - x0) ** 2 + (y1 - y0) ** 2) ** 0.5;
					return acc + d;
				}
			}, 0);
			const dur = `${Math.floor(1250 / distance)}s`;

			const values = moves.map(({ x, y }) => `${x} ${y}`).join(';');

			return {
				x,
				y,
				sprite,
				start,
				values,
				dur
			};
		});
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<symbol id="pick-a-side-sprite-1" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g fill="currentColor">
					<path d="M -2.5 -2.3 v 2 h 1 a 1 1 0 0 1 -1 -1" />
					<path transform="scale(-1 1)" d="M -2.5 -2.3 v 2 h 1 a 1 1 0 0 1 -1 -1" />
				</g>
				<g fill="#f7f7f7">
					<circle r="2.5" cy="-2.3" />
					<path d="M -0.7 -0.7 h 1.4" />
					<g stroke-width="0.5">
						<path d="M -0.8 -1.6 h 0" stroke-linecap="square" />
						<path d="M 0.8 -1.6 h 0" stroke-linecap="square" />
					</g>
					<path
						d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 l 1.3 1.8 h -1.3 v 1.5 h -1.5 v -2 2 h -1.5 v -1.5 h -1.3 l 1.3 -1.8 h -1.5 v -1.5z"
					/>
				</g>
				<path fill="#bd4900" d="M -2.5 -2.3 a 2.5 2.5 0 0 1 5 0" />
				<path
					stroke-width="0.3"
					fill="#f70000"
					d="M 1.75 -4 l 0.75 -0.6 h 0.5 v 2 h -0.5 l -0.75 -0.6 -0.75 0.6 h -0.5 v -2 h 0.5z"
				/>
			</g>
		</symbol>
		<symbol id="pick-a-side-sprite-2" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g fill="#f7f7f7">
					<circle r="2.5" cy="-2.3" />
					<path d="M -0.7 -0.7 h 1.4" />
					<g stroke-width="0.5">
						<path d="M -0.8 -1.6 h 0" stroke-linecap="square" />
						<path d="M 0.8 -1.6 h 0" stroke-linecap="square" />
					</g>
					<path
						d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 v 3.3 h -1.5 v -2 2 h -1.5 v -3.3  h -1.5 v -1.5z"
					/>
				</g>
				<path fill="#bd4900" d="M -2.5 -2.3 a 2.5 2.5 0 0 1 5 0" />
			</g>
		</symbol>

		<pattern
			id="pick-a-side-pattern-stroke-1"
			viewBox="0 0 2 2"
			width="0.1"
			height="0.1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#f7ae42">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern
			id="pick-a-side-pattern-stroke-2"
			viewBox="0 0 2 2"
			width="0.1"
			height="0.1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#21c6ce">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern id="pick-a-side-pattern-grid-1" width="0.1" height="0.1" viewBox="-0.05 -0.05 1.1 1.1">
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-1)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
		<pattern id="pick-a-side-pattern-grid-2" width="0.1" height="0.1" viewBox="-0.05 -0.05 1.1 1.1">
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-2)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
	</defs>

	<rect width="80" height="50" fill="#f7f7f7" />

	<rect fill="url(#pick-a-side-pattern-grid-1)" y="18" width="40" height="40" />
	<rect fill="url(#pick-a-side-pattern-grid-2)" x="40" y="18" width="40" height="40" />

	<g transform="translate(20 {padding * 2})">
		<g transform="translate({-size / 2} 0)">
			<g transform="translate({-padding} {-padding})">
				<g stroke="currentColor" stroke-width="0.5">
					<rect width={size + padding * 2} height={size + padding * 2} rx={padding} fill="none" />
					<path
						fill="currentColor"
						d="M 0 {size} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
							-1} v {padding * -1} a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
							-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
					>
						<animate
							begin="pickASidePress1.begin"
							attributeName="d"
							to="M 0 {size +
								padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
								-1} v 0 a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
								-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
							dur="0.25s"
							fill="freeze"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
					</path>
				</g>
			</g>

			<g transform="translate(0 {-padding / 2})">
				<animateTransform
					id="pickASidePressed1"
					begin="pickASidePress1.begin"
					attributeName="transform"
					type="translate"
					to="0 0"
					dur="0.25s"
					fill="freeze"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.5 1;"
				/>

				<svg width={size} height={size}>
					<use href="#pick-a-side-sprite-1" />
				</svg>
			</g>

			<g style:cursor="pointer" opacity="0">
				<set
					id="pickASidePress1"
					begin="click"
					end="pickASidePress2.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<set
					begin="pickASidePress2.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<rect
					x="-{padding}"
					y="-{padding}"
					width={size + padding * 2}
					height={size + padding * 2}
					rx={padding}
				/>
			</g>
		</g>
	</g>

	<g transform="translate(60 {padding * 2})">
		<g transform="translate({-size / 2} 0)">
			<g transform="translate({-padding} {-padding})">
				<g stroke="currentColor" stroke-width="0.5">
					<rect width={size + padding * 2} height={size + padding * 2} rx={padding} fill="none" />
					<path
						fill="currentColor"
						d="M 0 {size} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
							-1} v {padding * -1} a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
							-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
					>
						<animate
							begin="pickASidePress2.begin"
							attributeName="d"
							to="M 0 {size +
								padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
								-1} v 0 a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
								-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
							dur="0.25s"
							fill="freeze"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
					</path>
				</g>
			</g>

			<g transform="translate(0 {-padding / 2})">
				<animateTransform
					id="pickASidePressed2"
					begin="pickASidePress2.begin"
					attributeName="transform"
					type="translate"
					to="0 0"
					dur="0.25s"
					fill="freeze"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.5 1;"
				/>

				<svg width={size} height={size}>
					<use href="#pick-a-side-sprite-2" />
				</svg>
			</g>

			<g style:cursor="pointer" opacity="0">
				<set
					id="pickASidePress2"
					begin="click"
					end="pickASidePress1.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<set
					begin="pickASidePress1.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<rect
					x="-{padding}"
					y="-{padding}"
					width={size + padding * 2}
					height={size + padding * 2}
					rx={padding}
				/>
			</g>
		</g>
	</g>

	<g transform="translate(40 10)">
		<g stroke="currentColor" stroke-width="0.5">
			<g>
				<animateTransform
					begin="pickASidePressed1.begin"
					attributeName="transform"
					type="rotate"
					to="50"
					dur="0.25s"
					fill="freeze"
					restart="never"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.5 1;"
				/>
				<path fill="#f7ae42" d="M -2 0 h -5 v 3 h 3 v -3" />
			</g>
			<g transform="scale(-1 1)">
				<g>
					<animateTransform
						begin="pickASidePressed2.begin"
						attributeName="transform"
						type="rotate"
						to="50"
						dur="0.25s"
						fill="freeze"
						restart="never"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.5 0 0.5 1;"
					/>
					<path fill="#21c6ce" d="M -2 0 h -5 v 3 h 3 v -3" />
				</g>
			</g>
		</g>
	</g>

	<g>
		{#each sprites as { x, y, sprite, start, values, dur }}
			<g transform="translate({start.x} {start.y})">
				<animateTransform
					end="pickASidePressed1.end; pickASidePressed2.end"
					attributeName="transform"
					type="translate"
					{values}
					{dur}
					repeatCount="indefinite"
					fill="freeze"
				/>
				<svg x={-spriteSize / 2} y={-spriteSize / 2} width={spriteSize} height={spriteSize}>
					<use href="#pick-a-side-sprite-{sprite}" />
				</svg>
				<!-- TEMP VISUAL -->
				<circle r="0.5" fill="green" />
			</g>
		{/each}
	</g>
</svg>
