<script>
	import AnimatedText from './_helpers/_AnimatedText.svelte';
	import Text from './_helpers/_Text.svelte';

	const dBalloon = ({ radius, protuberance = 10, points }) => {
		let p = points || radius * 2;
		if (p % 2 !== 0) p++;

		const pts = Array(p)
			.fill()
			.map((_, i, { length }) => {
				const distance = i % 2 !== 0 ? radius + Math.random() / 2 : radius - Math.random() / 2;
				const angle = (((360 / length) * i) / 180) * Math.PI;
				const x = Math.cos(angle) * distance;
				const y =
					angle > 0 && angle < Math.PI
						? Math.sin(angle) * (distance + protuberance)
						: Math.sin(angle) * distance;
				return {
					x,
					y
				};
			});

		return [...pts, { x: pts[0].x, y: pts[0].y }].reduce(
			(acc, { x, y }, i) => (i % 2 === 0 ? `${acc} ${x} ${y}` : `${acc} Q ${x} ${y}`),
			'M'
		);
	};

	const d = dBalloon({ radius: 7, protuberance: 2, points: 16 });

	const angle = ((Math.floor(Math.random() * 180) + 180) / 180) * Math.PI;
	const dx = Math.cos(angle) * 80;
	const dy = Math.sin(angle) * 50;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<g id="pop-the-balloon-cloud">
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
			id="pop-the-balloon-pattern-present"
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

		<ellipse id="pop-the-balloon-reflection" stroke="none" rx="2" ry="2.5" />

		<g id="pop-the-balloon-balloon">
			<g transform="translate(0 -3)">
				<path d="M -1.25 0 h 2.5 q 0 -1.5 -1.25 -1.5 t -1.25 1.5" />
				<g transform="translate(0 -10)">
					<path {d} />
					<use
						transform="translate(2 -2.5) rotate(-40)"
						fill="#f7d794"
						href="#pop-the-balloon-reflection"
					/>
				</g>
				<path fill="none" d="M 0 0 q -0.75 0.75 0 1.5 t 0 1.5" />
			</g>
		</g>

		<pattern
			id="pop-the-balloon-shreds"
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

		<mask id="pop-the-balloon-mask-shreds">
			<use href="#pop-the-balloon-balloon" fill="white" stroke="white" />
			<g fill="url(#pop-the-balloon-shreds)">
				<use href="#pop-the-balloon-balloon" stroke="white" />
				<use transform="translate(2 -15.5) rotate(-40)" href="#pop-the-balloon-reflection" />
			</g>
		</mask>
	</defs>

	<rect fill="#10c2ce" width="80" height="50" />

	<g stroke-width="0.5">
		<use transform="translate(15 15) scale(0.8)" href="#pop-the-balloon-cloud" />
		<use transform="translate(65 35) scale(0.8)" href="#pop-the-balloon-cloud" />
	</g>

	<g transform="translate(40 28)">
		<g>
			<animateTransform
				attributeName="transform"
				type="translate"
				to="{dx} {dy}"
				dur="5s"
				fill="freeze"
				begin="popTheBalloonStart.begin"
				end="popTheBalloonPopped.begin"
				id="popTheBalloonFloat"
			/>
			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					to="0 1"
					dur="0.35s"
					calcMode="discrete"
					fill="freeze"
					repeatCount="indefinite"
					begin="popTheBalloonStart.begin"
					end="popTheBalloonPopped.begin"
				/>
				<g style:cursor="pointer">
					<animateTransform
						attributeName="transform"
						type="translate"
						values="160 0; 320 0"
						dur="0.1s"
						calcMode="discrete"
						fill="freeze"
						begin="click"
						restart="never"
						id="popTheBalloonPopped"
					/>
					<g fill="#f70000" stroke="currentColor" stroke-width="0.5">
						<use href="#pop-the-balloon-balloon" />
						<use
							transform="translate(-160 0)"
							href="#pop-the-balloon-balloon"
							mask="url(#pop-the-balloon-mask-shreds)"
						/>
					</g>
				</g>
			</g>

			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					to="0 100"
					dur="1.5s"
					fill="freeze"
					begin="popTheBalloonPopped.begin"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.65 0 0.4 1"
					id="popTheBalloonFall"
				/>
				<g stroke="currentColor" stroke-width="0.6">
					<g fill="url(#pop-the-balloon-pattern-present)">
						<rect x="-6" y="4" width="12" height="7" />
						<rect x="-7" width="14" height="4" />
					</g>
					<rect fill="#73ce3a" x="-2" y="-0.5" width="4" height="11.5" />
				</g>
			</g>
		</g>
	</g>

	<g display="none">
		<animate id="popTheBalloonEnd" begin="click" restart="never" />

		<animate
			id="popTheBalloonMessage"
			attributeName="display"
			to="initial"
			fill="freeze"
			begin="popTheBalloonFall.end; popTheBalloonFloat.end"
			dur="0.1s"
		/>
		<g>
			<g transform="translate(40 25)">
				<g display="none">
					<animate
						attributeName="display"
						to="initial"
						fill="freeze"
						begin="popTheBalloonFall.end"
						dur="0.1s"
					/>
					<g>
						<AnimatedText
							text="That's a wrap!"
							begin="popTheBalloonMessage.begin"
							end="popTheBalloonEnd.begin"
							fill="url(#linear-gradient-text)"
						/>
					</g>
				</g>
				<g>
					<animate
						attributeName="display"
						to="none"
						fill="freeze"
						begin="popTheBalloonFall.begin"
						dur="0.1s"
					/>
					<g>
						<AnimatedText
							text="Far it goes..."
							begin="popTheBalloonMessage.begin"
							end="popTheBalloonFall.end; popTheBalloonEnd.begin"
							fill="url(#linear-gradient-text)"
						/>
					</g>
				</g>
			</g>
			<rect style:cursor="pointer" width="80" height="50" opacity="0">
				<animate
					attributeName="display"
					begin="popTheBalloonEnd.begin"
					to="none"
					dur="0.1s"
					fill="freeze"
				/>
			</rect>
		</g>
	</g>

	<g style:cursor="pointer">
		<g>
			<animate
				id="popTheBalloonStart"
				attributeName="display"
				to="none"
				fill="freeze"
				begin="click"
				dur="0.1s"
				restart="never"
			/>
			<g transform="translate(40 25)">
				<Text fill="url(#linear-gradient-text)">Pop!</Text>
			</g>
			<rect width="80" height="50" opacity="0" />
		</g>
	</g>
</svg>
