<script>
	import AnimatedText from './_helpers/_AnimatedText.svelte';
	import Text from './_helpers/_Text.svelte';

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

	const getX = () => width / 4 + Math.floor((Math.random() * width) / 2);
	const getY = () => 18 + 8 + Math.floor(Math.random() * 8);

	const sprites = Array(length)
		.fill()
		.map((_) => {
			const i = Math.floor(Math.random() * destinations.length);
			const destination = destinations[i];
			destinations = [...destinations.slice(0, i), ...destinations.slice(i + 1)];
			return destination;
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

	const majorityOnSide1 =
		sprites.reduce((acc, curr) => (curr.sprite === '1' ? acc + 1 : acc), 0) > sprites.length / 2;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="pick-a-side-pattern-sprite-1" width="1" height="1" viewBox="-5 -5 10 10">
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
		</pattern>

		<pattern id="pick-a-side-pattern-sprite-2" width="1" height="1" viewBox="-5 -5 10 10">
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
		</pattern>

		<rect
			id="pick-a-side-sprite-1"
			width={spriteSize}
			height={spriteSize}
			fill="url(#pick-a-side-pattern-sprite-1)"
		/>
		<rect
			id="pick-a-side-sprite-2"
			width={spriteSize}
			height={spriteSize}
			fill="url(#pick-a-side-pattern-sprite-2)"
		/>

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

	<g>
		<g transform="translate(0 1)">
			<g transform="translate(20 {padding * 2})">
				<g transform="translate(-{size / 2} 0)">
					<g transform="translate({padding * -1} {padding * -1})">
						<g stroke="currentColor" stroke-width="0.5">
							<rect
								width={size + padding * 2}
								height={size + padding * 2}
								rx={padding}
								fill="none"
							/>

							<path
								fill="currentColor"
								d="M 0 {size} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
									-1} v {padding * -1} a {padding} {padding} 0 0 1 {padding *
									-1} {padding} h {size * -1} a {padding} {padding} 0 0 1 {padding * -1} {padding *
									-1}"
							>
								<animate
									attributeName="d"
									to="M 0 {size +
										padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
										-1} v 0 a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
										-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
									dur="0.25s"
									begin="pickASidePress1.begin"
									fill="freeze"
									restart="never"
									calcMode="spline"
									keyTimes="0; 1"
									keySplines="0.5 0 0.5 1;"
								/>
							</path>
						</g>
					</g>
					<g transform="translate(0 -{padding / 2})">
						<animateTransform
							attributeName="transform"
							type="translate"
							to="0 0"
							id="pickASidePressed1"
							begin="pickASidePress1.begin"
							fill="freeze"
							dur="0.25s"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
						<rect width={size} height={size} fill="url(#pick-a-side-pattern-sprite-1)" />
					</g>
					<g style:cursor="pointer">
						<animate
							id="pickASidePress1"
							begin="click"
							end="pickASidePress2.begin"
							attributeName="display"
							to="none"
							dur="0.01s"
							calcMode="discrete"
							fill="freeze"
						/>
						<rect
							x="-{padding}"
							y="-{padding}"
							width={size + padding * 2}
							height={size + padding * 2}
							rx={padding}
							opacity="0"
						/>
					</g>
				</g>
			</g>

			<g transform="translate(60 {padding * 2})">
				<g transform="translate(-{size / 2} 0)">
					<g transform="translate({padding * -1} {padding * -1})">
						<g stroke="currentColor" stroke-width="0.5">
							<rect
								width={size + padding * 2}
								height={size + padding * 2}
								rx={padding}
								fill="none"
							/>

							<path
								fill="currentColor"
								d="M 0 {size} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
									-1} v {padding * -1} a {padding} {padding} 0 0 1 {padding *
									-1} {padding} h {size * -1} a {padding} {padding} 0 0 1 {padding * -1} {padding *
									-1}"
							>
								<animate
									attributeName="d"
									to="M 0 {size +
										padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
										-1} v 0 a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
										-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
									dur="0.25s"
									begin="pickASidePress2.begin"
									fill="freeze"
									restart="never"
									calcMode="spline"
									keyTimes="0; 1"
									keySplines="0.5 0 0.5 1;"
								/>
							</path>
						</g>
					</g>
					<g transform="translate(0 -{padding / 2})">
						<animateTransform
							attributeName="transform"
							type="translate"
							to="0 0"
							id="pickASidePressed2"
							begin="pickASidePress2.begin"
							fill="freeze"
							dur="0.25s"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
						<rect width={size} height={size} fill="url(#pick-a-side-pattern-sprite-2)" />
					</g>
					<g style:cursor="pointer">
						<animate
							id="pickASidePress2"
							begin="click"
							end="pickASidePress1.begin"
							attributeName="display"
							to="none"
							dur="0.01s"
							calcMode="discrete"
							fill="freeze"
						/>
						<rect
							x="-{padding}"
							y="-{padding}"
							width={size + padding * 2}
							height={size + padding * 2}
							rx={padding}
							opacity="0"
						/>
					</g>
				</g>
			</g>
		</g>
	</g>

	<g>
		<g transform="translate(40 10)">
			<g stroke="currentColor" stroke-width="0.5">
				<g transform="rotate(50)">
					<g transform="rotate(-50)">
						<animateTransform
							attributeName="transform"
							type="rotate"
							to="0"
							begin="pickASidePressed1.begin"
							fill="freeze"
							dur="0.25s"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
						<path transform="scale(-1 1)" fill="#f7ae42" d="M 2 0 h 5 v 3 h -3 v -3" />
					</g>
				</g>
				<g transform="rotate(-50)">
					<g transform="rotate(50)">
						<animateTransform
							attributeName="transform"
							type="rotate"
							to="0"
							begin="pickASidePressed2.begin"
							fill="freeze"
							dur="0.25s"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
						<path fill="#21c6ce" d="M 2 0 h 5 v 3 h -3 v -3" />
					</g>
				</g>
			</g>
		</g>
	</g>

	<g>
		<g transform="translate(0 {height + spriteSize})">
			<animateTransform
				attributeName="transform"
				type="translate"
				to="0 0"
				begin="pickASideStart.begin"
				dur="0.5s"
				fill="freeze"
				calcMode="spline"
				keyTimes="0; 1"
				keySplines="0.65 0 0.4 1"
			/>
			{#each sprites as { x, y, sprite, values, dur }}
				<g>
					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							{values}
							begin="pickASideStart.begin"
							repeatCount="indefinite"
							end="pickASidePressed1.end; pickASidePressed2.end"
							{dur}
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="translate"
							to="{x} {y}"
							begin="pickASidePressed1.end; pickASidePressed2.end"
							dur="0.5s"
							fill="freeze"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.65 0 0.4 1"
						/>
						<g transform="translate({(spriteSize / 2) * -1} {(spriteSize / 2) * -1})">
							<use href="#pick-a-side-sprite-{sprite}" />
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>

	<g>
		<g display="none">
			<animate
				id="pickASideMessage"
				attributeName="display"
				to="initial"
				begin="pickASidePressed1.begin + 1.5s; pickASidePressed2.begin + 1.5s"
				dur="0.5s"
				fill="freeze"
				restart="never"
			/>
			<g transform="translate(40 20)">
				<g display="none">
					<animate
						id="pickASidePicked1"
						attributeName="display"
						to="initial"
						begin="pickASidePressed1.begin"
						dur="0.5s"
						fill="freeze"
						restart="never"
					/>
					<AnimatedText
						text={majorityOnSide1 ? 'Right you are!' : 'Too fast?'}
						begin="pickASideMessage.end"
						end="pickASideEnd.begin"
						fill="url(#linear-gradient-text)"
					/>
				</g>
				<g display="none">
					<animate
						id="pickASidePicked2"
						attributeName="display"
						to="initial"
						begin="pickASidePressed2.begin"
						dur="0.5s"
						fill="freeze"
						restart="never"
					/>
					<AnimatedText
						text={majorityOnSide1 ? 'Too fast?' : 'Right you are!'}
						begin="pickASideMessage.end"
						end="pickASideEnd.begin"
						fill="url(#linear-gradient-text)"
					/>
				</g>
			</g>

			<rect style:cursor="pointer" width="80" height="50" opacity="0">
				<animate
					id="pickASideEnd"
					attributeName="display"
					to="none"
					begin="click"
					dur="0.1s"
					fill="freeze"
				/>
			</rect>
		</g>
	</g>

	<g style:cursor="pointer">
		<g>
			<animate
				id="pickASideStart"
				attributeName="display"
				to="none"
				fill="freeze"
				begin="click"
				dur="0.1s"
				restart="never"
			/>
			<g transform="translate(40 32)">
				<Text fill="url(#linear-gradient-text)">Majority!</Text>
			</g>
			<rect width="80" height="50" opacity="0" />
		</g>
	</g>
</svg>
