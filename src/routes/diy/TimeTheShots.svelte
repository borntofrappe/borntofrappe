<script>
	const randomUpTo = (max) => Math.floor(Math.random() * max);

	const width = 80;
	const height = 50;

	const [cloudWidthMin, cloudWidthMax] = [8, 14];
	const [cloudWide, cloudTall] = [54, 33];
	const cloudsWhiteSpace = 3;
	const cloudsTranslateY = height * 3;
	const clousdMinY = cloudsTranslateY * -1;
	const screenTranslateY = cloudsTranslateY + height;

	let cloudY = height - randomUpTo(cloudsWhiteSpace);
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
		const cloudWidth = cloudWidthMin + randomUpTo(cloudWidthMax - cloudWidthMin);
		const cloudHeight = (cloudWidth / cloudWide) * cloudTall;
		cloudY -= cloudHeight;

		if (cloudY < clousdMinY) break;

		const numberCopies = clouds.reduce((a, c) => a + c.copies.length, 0);
		const cloudX =
			numberCopies % 2 === 0
				? cloudsWhiteSpace + randomUpTo(width / 2 - cloudWidth)
				: width / 2 + randomUpTo(width / 2 - cloudWidth - cloudsWhiteSpace);

		const index = numberCopies % clouds.length;

		clouds[index].copies.push({
			x: cloudX,
			y: cloudY,
			width: cloudWidth,
			height: cloudHeight
		});

		cloudY -= 1 + randomUpTo(cloudsWhiteSpace);
	}

	const [spaceshipWide, spaceshipTall] = [38, 25];
	const spaceshipWidth = 15;
	const spaceshipHeight = (spaceshipWidth / spaceshipWide) * spaceshipTall;
	const spaceshipX = width / 2 - spaceshipWidth / 2;
	const spaceshipY = height - spaceshipHeight - 1;

	const [targetWide, targetTall] = [36, 25];
	const targetWidth = 14;
	const targetHeight = (targetWidth / targetWide) * targetTall;
	const targetTranslateX = width - targetWidth;

	const durations = {
		clouds: Math.floor(screenTranslateY / 14),
		targets: [
			Math.floor(targetTranslateX / 13) + randomUpTo(4),
			Math.floor(targetTranslateX / 13) + randomUpTo(4)
		]
	};

	const overlayX = targetWidth / 3;
	const overlayWidth = targetWidth;

	const clipWidth = spaceshipWidth * 1.5;
	const clipX = width / 2 - clipWidth / 2;

	const { targets } = durations.targets.reduce(
		(acc, curr, i) => {
			const y = 1 + (targetHeight + 1) * i;
			const duration = curr;
			const delay = acc.delay;
			acc.targets.push({
				i,
				y,
				duration,
				delay
			});
			acc.delay += duration / 2;
			return acc;
		},
		{
			targets: [],
			delay: 0
		}
	);

	const introY = targets[targets.length - 1].y + targetHeight;
	const introDuration = 0.5;
	const intro = {
		y: introY * -1,
		duration: introDuration,
		delay: targets[targets.length - 1].delay - introDuration
	};

	const outro = {
		y: intro.y,
		duration: 0.5
	};

	const bullets = {
		miss: {
			translate: `0 ${height * -1}`,
			duration: height / 95
		},
		targets: targets.map(({ i, y }) => {
			const translateY = spaceshipY - y;
			return {
				i,
				translate: `0 ${translateY * -1}`,
				duration: translateY / 95
			};
		})
	};
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Time the shots!</title>

	<defs>
		<clipPath id="time-the-shots-clip">
			<rect x={clipX} width={clipWidth} {height} />
		</clipPath>

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
			begin="timeTheShotsStart.begin"
			attributeName="transform"
			type="translate"
			to="0 {screenTranslateY}"
			dur={durations.clouds}
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
		<use y={screenTranslateY * -1} href="#time-the-shots-clouds" />
	</g>

	<g transform="translate({spaceshipX} {spaceshipY})">
		<g>
			<animateTransform
				begin="timeTheShotsStart.begin"
				attributeName="transform"
				type="translate"
				to="0 -0.5"
				dur="0.35s"
				calcMode="discrete"
				repeatCount="indefinite"
			/>
			<use width={spaceshipWidth} height={spaceshipHeight} href="#time-the-shots-bullets">
				<animateTransform
					id="timeTheShotsMissed"
					begin="timeTheShotsMiss.begin"
					attributeName="transform"
					type="translate"
					to={bullets.miss.translate}
					dur={bullets.miss.duration}
					fill="freeze"
				/>
				<animateTransform
					begin="timeTheShotsMercy.begin"
					attributeName="transform"
					type="translate"
					to={bullets.miss.translate}
					dur={bullets.miss.duration}
				/>
				{#each bullets.targets as { i, translate, duration }}
					<animateTransform
						id="timeTheShotsTarget{i}Shot"
						begin="timeTheShotsTarget{i}Shoot.begin"
						attributeName="transform"
						type="translate"
						to={translate}
						dur={duration}
					/>
				{/each}
			</use>
			<use width={spaceshipWidth} height={spaceshipHeight} href="#time-the-shots-spaceship" />
		</g>
	</g>

	<g transform="translate(0 {intro.y})">
		<animateTransform
			id="timeTheShotsIntro"
			begin="timeTheShotsStart.begin + {intro.delay}s"
			attributeName="transform"
			type="translate"
			to="0 0"
			calcMode="spline"
			keySplines="0.5 0 0.5 1"
			dur={intro.duration}
			fill="freeze"
		/>
		<animateTransform
			id="timeTheShotsOutro"
			begin="timeTheShotsMissed.end + 1s"
			attributeName="transform"
			type="translate"
			to="0 {outro.y}"
			calcMode="spline"
			keySplines="0.5 0 0.5 1"
			dur={outro.duration}
			fill="freeze"
		/>
		{#each targets as { i, y, duration, delay }}
			<g transform="translate(0 {y})">
				<g>
					<animateTransform
						id="timeTheShotsTarget{i}Move"
						begin="timeTheShotsStart.begin + {delay}s"
						end="timeTheShotsTarget{i}Shot.end; timeTheShotsMiss.begin"
						attributeName="transform"
						type="translate"
						values="0 0; {targetTranslateX} 0; 0 0"
						dur={duration}
						fill="freeze"
						repeatCount="indefinite"
					/>
					<use width={targetWidth} height={targetHeight} href="#time-the-shots-target-0">
						<animate
							begin="timeTheShotsTarget{i}Shot.end"
							attributeName="href"
							values="#time-the-shots-target-0; #time-the-shots-target-1; #time-the-shots-target-2; #time-the-shots-target-3; #time-the-shots-target-4"
							fill="freeze"
							dur="0.3s"
							calcMode="discrete"
						/>
					</use>
				</g>
			</g>
		{/each}
	</g>

	<g>
		<set attributeName="display" to="none" />
		<set begin="timeTheShotsIntro.end" attributeName="display" to="initial" />
		<set begin="timeTheShotsMiss.begin" attributeName="display" to="none" />

		<rect style="cursor: pointer;" x={clipX} width={clipWidth} {height} opacity="0.2">
			<set id="timeTheShotsMiss" begin="click" attributeName="display" to="none" />
		</rect>

		<rect style="cursor: pointer;" x={clipX} width={clipWidth} {height} opacity="0.2">
			<set id="timeTheShotsMercy" begin="click" attributeName="display" to="none" />
		</rect>

		<g clip-path="url(#time-the-shots-clip)">
			{#each targets as { i, duration }}
				<g>
					<animateTransform
						id="timeTheShotsTarget{i}Forwards"
						begin="timeTheShotsTarget{i}Move.begin; timeTheShotsTarget{i}Backwards.end"
						end="timeTheShotsTarget{i}Shoot.begin"
						attributeName="transform"
						type="translate"
						to="{targetTranslateX} 0"
						dur={duration / 2}
						fill="freeze"
					/>
					<animateTransform
						id="timeTheShotsTarget{i}Backwards"
						begin="timeTheShotsTarget{i}Forwards.end"
						end="timeTheShotsTarget{i}Shoot.begin"
						attributeName="transform"
						type="translate"
						to="0 0"
						dur={duration / 2}
						fill="freeze"
					/>
					<g>
						<animateTransform
							begin="timeTheShotsTarget{i}Backwards.begin"
							attributeName="transform"
							type="translate"
							to="{targetWidth} 0"
							calcMode="discrete"
							fill="freeze"
							dur="0.1"
						/>
						<animateTransform
							begin="timeTheShotsTarget{i}Forwards.begin"
							attributeName="transform"
							type="translate"
							to="0 0"
							calcMode="discrete"
							fill="freeze"
							dur="0.1"
						/>
						<g>
							<animateTransform
								begin="timeTheShotsTarget{i}Backwards.begin"
								attributeName="transform"
								type="scale"
								to="-1 1"
								calcMode="discrete"
								fill="freeze"
								dur="0.1"
							/>
							<animateTransform
								begin="timeTheShotsTarget{i}Forwards.begin"
								attributeName="transform"
								type="scale"
								to="1 1"
								calcMode="discrete"
								fill="freeze"
								dur="0.1"
							/>
							<rect
								style="cursor: pointer;"
								x={overlayX}
								width={overlayWidth}
								{height}
								opacity="0.2"
							>
								<set
									id="timeTheShotsTarget{i}Shoot"
									begin="click"
									attributeName="display"
									to="none"
								/>
							</rect>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>

	<g style:cursor="pointer">
		<set id="timeTheShotsStart" begin="click" attributeName="display" to="none" />

		<!-- ADD TITLE -->

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
