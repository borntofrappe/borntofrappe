<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Keep the secret!</title>

	<defs>
		<pattern
			id="keep-the-secret-pattern-brick-1"
			viewBox="0 -1.5 8 4"
			width="5"
			height="2.5"
			patternUnits="userSpaceOnUse"
		>
			<path
				fill="none"
				stroke="#c04800"
				d="M 2 0 3 0 M 4 0 5 0 M 6 0 7 0 M 1 1 2 1 M 3 1 4 1 M 5 1 6 1 M 7 1 8 1 M 2 2 3 2 M 4 2 5 2 M 6 2 7 2"
			/>
		</pattern>
		<pattern
			id="keep-the-secret-pattern-brick-2"
			viewBox="-1 -1 8 4"
			width="5"
			height="2.5"
			patternUnits="userSpaceOnUse"
		>
			<rect fill="#c04800" width="7" height="3" />
		</pattern>
		<pattern
			id="keep-the-secret-pattern-brick-3"
			viewBox="0 -1.5 8 4"
			width="5"
			height="2.5"
			patternUnits="userSpaceOnUse"
		>
			<rect fill="#f80000" x="1" y="-0.5" width="7" height="3" />
			<path
				fill="none"
				stroke="#f8a830"
				d="M 2 0 3 0 M 4 0 5 0 M 6 0 7 0 M 1 1 2 1 M 3 1 4 1 M 5 1 6 1 M 7 1 8 1 M 2 2 3 2 M 4 2 5 2 M 6 2 7 2"
			/>
		</pattern>

		<pattern
			id="keep-the-secret-pattern-confetti"
			viewBox="0 0 40 40"
			width="20"
			height="20"
			patternUnits="userSpaceOnUse"
		>
			<g transform="translate(10 10) rotate(30)">
				<rect fill="#f80000" x="-2" y="-3" width="4" height="6">
					<animateTransform
						begin="keepTheSecretDots.end"
						end="keepTheSecretNo.begin"
						attributeName="transform"
						type="scale"
						dur="1s"
						values="1 1; 0 1; 1 1"
						repeatCount="6"
					/>
				</rect>
			</g>
			<g transform="translate(30 10) scale(0.9) rotate(35)">
				<rect fill="#f8a830" x="-2" y="-3" width="4" height="6">
					<animateTransform
						begin="keepTheSecretDots.end"
						end="keepTheSecretNo.begin"
						attributeName="transform"
						type="scale"
						dur="1.2s"
						values="1 1; 0 1; 1 1"
						repeatCount="5"
					/>
				</rect>
			</g>
			<g transform="translate(10 30) scale(0.95) rotate(30)">
				<rect fill="#f8a830" x="-2" y="-3" width="4" height="6">
					<animateTransform
						begin="keepTheSecretDots.end"
						end="keepTheSecretNo.begin"
						attributeName="transform"
						type="scale"
						dur="0.85s"
						values="1 1; 0 1; 1 1"
						repeatCount="7"
					/>
				</rect>
			</g>
			<g transform="translate(30 30) scale(0.95) rotate(25)">
				<rect fill="#f80000" x="-2" y="-3" width="4" height="6">
					<animateTransform
						begin="keepTheSecretDots.end"
						end="keepTheSecretNo.begin"
						attributeName="transform"
						type="scale"
						dur="0.75s"
						values="1 1; 0 1; 1 1"
						repeatCount="8"
					/>
				</rect>
			</g>
		</pattern>
	</defs>
	<rect fill="#000000" width="80" height="50" />
	<path
		transform="translate(0 5)"
		fill="url(#keep-the-secret-pattern-brick-1)"
		d="M 40 0 30 0 30 2.5 20 2.5 20 5 15 5 15 7.5 10 7.5 10 10 5 10 5 12.5 10 12.5 10 15 5 15 5 17.5 0 17.5 0 20 5 20 5 22.5 0 22.5 0 25 5 25 5 27.5 0 27.5 0 30 5 30 5 32.5 0 32.5 0 35 5 35 5 37.5 0 37.5 0 40 5 40 5 42.5 10 42.5 10 45 60 45 60 42.5 65 42.5 65 40 70 40 70 37.5 65 37.5 65 35 70 35 70 32.5 75 32.5 75 30 70 30 70 27.5 75 27.5 75 25 70 25 70 22.5 75 22.5 75 20 70 20 70 17.5 75 17.5 75 15 70 15 70 12.5 65 12.5 65 10 60 10 60 7.5 55 7.5 55 5 50 5 50 2.5 45 2.5 45 0"
	/>
	<path
		transform="translate(10 10)"
		fill="url(#keep-the-secret-pattern-brick-2)"
		d="M 35 0 20 0 20 2.5 10 2.5 10 5 5 5 5 7.5 10 7.5 10 10 5 10 5 12.5 0 12.5 0 15 5 15 5 17.5 0 17.5 0 20 5 20 5 22.5 0 22.5 0 25 5 25 5 27.5 0 27.5 0 30 5 30 5 32.5 10 32.5 10 35 5 35 5 37.5 10 37.5 10 40 40 40 40 37.5 45 37.5 45 35 50 35 50 32.5 45 32.5 45 30 50 30 50 27.5 55 27.5 55 25 50 25 50 22.5 55 22.5 55 20 50 20 50 17.5 55 17.5 55 15 50 15 50 12.5 55 12.5 55 10 50 10 50 7.5 45 7.5 45 5 40 5 40 2.5 35 2.5 35 0"
	/>
	<path
		transform="translate(20 15)"
		fill="url(#keep-the-secret-pattern-brick-3)"
		d="M 20 0 15 0 15 2.5 10 2.5 10 5 5 5 5 7.5 0 7.5 0 10 5 10 5 12.5 0 12.5 0 15 5 15 5 17.5 0 17.5 0 20 5 20 5 22.5 0 22.5 0 25 5 25 5 27.5 10 27.5 10 30 25 30 25 27.5 30 27.5 30 25 25 25 25 22.5 30 22.5 30 20 35 20 35 17.5 30 17.5 30 15 35 15 35 12.5 30 12.5 30 10 35 10 35 7.5 30 7.5 30 5 25 5 25 2.5 20 2.5 20 0"
	/>
	<g transform="translate(10 50)">
		<rect fill="#f8a830" x="-2.9" y="-40" width="5.8" height="6" />
		<rect fill="#f8f8f8" x="-2.3" y="-39.2" width="4.6" height="4.4" />
		<g stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="#2868c0" d="M -1.5 -40 -1.5 -34 M 1.5 -40 1.5 -34" />
			<path fill="#000000" stroke="#2868c0" d="M 0.5 0 0.5 -30 4 -34 -4 -34 -0.5 -30 -0.5 0" />
			<path fill="none" stroke="#f8a830" d="M -4 -34 4 -34 0.5 -30 0.5 0" />
			<path fill="#000000" stroke="#2868c0" d="M -4 -40 -0.5 -44 -0.5 -48 0.5 -48 0.5 -44 4 -40" />
			<path fill="none" stroke="#f8a830" d="M -4 -40 4 -40" />
		</g>
	</g>

	<g display="none">
		<set begin="keepTheSecretQuestion.end" attributeName="display" to="initial" />
		
		<g transform="translate(20 10)">
			<set id="keepTheSecretOk" begin="click" attributeName="display" to="none" />
			<set id="keepTheSecretPressOk" begin="pointerdown" />
			<set id="keepTheSecretReleaseOk" begin="pointerup; pointerout" />
			<set begin="keepTheSecretNo.begin" attributeName="display" to="none" />
			<rect fill="#ffffff" width="16" height="8">
				<set begin="keepTheSecretPressOk.begin" attributeName="fill" to="#c0c0c0" />
				<set begin="keepTheSecretReleaseOk.begin" attributeName="fill" to="#ffffff" />
			</rect>
			<g fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="#787878" d="M 0 8 16 8 16 0">
					<set begin="keepTheSecretPressOk.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepTheSecretReleaseOk.begin" attributeName="stroke" to="#787878" />
				</path>
				<path stroke="#c0c0c0" d="M 0 8 0 0 16 0">
					<set begin="keepTheSecretPressOk.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepTheSecretReleaseOk.begin" attributeName="stroke" to="#c0c0c0" />
				</path>
			</g>
			<text
				style="user-select: none; text-transform: uppercase;"
				x="8"
				y="6"
				fill="#000000"
				font-size="5.6"
				font-family="sans-serif"
				font-weight="700"
				text-anchor="middle"
			>
				Ok
				<set begin="keepTheSecretPressOk.begin" attributeName="fill" to="#ffffff" />
				<set begin="keepTheSecretReleaseOk.begin" attributeName="fill" to="#000000" />
			</text>
			<rect
				style="cursor: pointer;"
				fill="transparent"
				stroke="transparent"
				width="16"
				height="8"
			/>
		</g>

		<g transform="translate(20 22.5)">
			<set id="keepTheSecretNo" begin="click" attributeName="display" to="none" />
			<set id="keepTheSecretPressNo" begin="pointerdown" />
			<set id="keepTheSecretReleaseNo" begin="pointerup; pointerout" />
			<set begin="keepTheSecretOk.begin" attributeName="display" to="none" />
			<rect fill="#ffffff" width="16" height="8">
				<set begin="keepTheSecretPressNo.begin" attributeName="fill" to="#c0c0c0" />
				<set begin="keepTheSecretReleaseNo.begin" attributeName="fill" to="#ffffff" />
			</rect>
			<g fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="#787878" d="M 0 8 16 8 16 0">
					<set begin="keepTheSecretPressNo.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepTheSecretReleaseNo.begin" attributeName="stroke" to="#787878" />
				</path>
				<path stroke="#c0c0c0" d="M 0 8 0 0 16 0">
					<set begin="keepTheSecretPressNo.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepTheSecretReleaseNo.begin" attributeName="stroke" to="#c0c0c0" />
				</path>
			</g>
			<text
				style="user-select: none; text-transform: uppercase"
				x="8"
				y="6"
				fill="#000000"
				font-size="5.6"
				font-family="sans-serif"
				font-weight="700"
				text-anchor="middle"
			>
				No!
			</text>
			<rect
				style="cursor: pointer;"
				fill="transparent"
				stroke="transparent"
				width="16"
				height="8"
			/>
		</g>
	</g>

	<g display="none" transform="translate(60 15)">
		<set begin="keepTheSecretStart.begin" attributeName="display" to="initial" />

		<path
			fill="#ffffff"
			stroke="#000000"
			stroke-width="0.5"
			d="M -16 -10 -16 24.5 9 24.5 14 28 14 24.5 16 24.5 16 -10 Z"
		/>
		<g>
			<set begin="keepTheSecretOk.begin; keepTheSecretNo.begin" attributeName="display" to="none" />
			<text
				fill="#000000"
				font-size="5.2"
				font-family="sans-serif"
				font-weight="700"
				text-anchor="middle"
			>
				<tspan x="0">Can you</tspan>
				<tspan x="0" y="9">keep a</tspan>
				<tspan x="0" y="18">secret?</tspan>
			</text>
			<g transform="translate(0 24.25)">
				<rect transform="scale(1 0)" fill="#ffffff" x="-15.75" y="-34" width="31.5" height="34">
					<animateTransform
						id="keepTheSecretQuestion"
						begin="keepTheSecretStart.begin"
						attributeName="transform"
						type="scale"
						dur="3.5s"
						values="1 1; 1 0"
						fill="freeze"
					/>
				</rect>
			</g>
		</g>

		<text
			fill="#000000"
			font-size="5.5"
			font-family="sans-serif"
			font-weight="700"
			text-anchor="middle"
		>
			<tspan y="9" dy="100 0 0" letter-spacing="1"
				>...
				<animate
					id="keepTheSecretDots"
					begin="keepTheSecretOk.begin; keepTheSecretNo.begin"
					attributeName="dy"
					calcMode="discrete"
					dur="4s"
					values="100 0 0; 0 100 0; 0 0 100; 0 0 0;"
				/>
			</tspan>
		</text>

		<g display="none">
			<set begin="keepTheSecretDots.end" attributeName="display" to="initial" />

			<g display="none">
				<set begin="keepTheSecretOk.begin" attributeName="display" to="initial" />
				<text
					fill="#000000"
					font-size="5.2"
					font-family="sans-serif"
					font-weight="700"
					text-anchor="middle"
				>
					<tspan x="0" y="0">I like</tspan>
					<tspan x="0" y="9">sour</tspan>
					<tspan x="0" y="18">grapes</tspan>
				</text>
				<g transform="translate(-60 -15)">
					<path
						fill="url(#keep-the-secret-pattern-confetti)"
						d="M 0 10 10 10 10 0 20 0 20 10 30 10 30 0 40 0 40 10 50 10 50 0 60 0 60 10 70 10 70 0 80 0 80 20 70 20 70 30 80 30 80 40 70 40 70 50 60 50 60 40 50 40 50 50 40 50 40 40 30 40 30 50 20 50 20 40 10 40 10 50 0 50 0 30 10 30 10 20 0 20"
					>
						<animateTransform
							id="keepTheSecretConfetti"
							begin="keepTheSecretDots.end"
							attributeName="transform"
							type="translate"
							dur="6s"
							values="0 -50; 0 50;"
							fill="freeze"
						/>
						<animateTransform
							begin="keepTheSecretConfetti.begin"
							attributeName="transform"
							type="translate"
							additive="sum"
							dur="2s"
							repeatCount="3"
							values="-2 0; 2 0; -2 0;"
							calcMode="spline"
							keyTimes="0; 0.5; 1"
							keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
						/>
					</path>
				</g>
			</g>

			<text
				display="none"
				fill="#000000"
				font-size="5.5"
				font-family="sans-serif"
				font-weight="700"
				text-anchor="middle"
			>
				<tspan x="0" y="4">Fine, be</tspan>
				<tspan x="0" y="14">that way!</tspan>
				<set begin="keepTheSecretNo.begin" attributeName="display" to="initial" />
			</text>
		</g>
	</g>

	<g display="none">
		<set begin="keepTheSecretConfetti.end" attributeName="display" to="initial" fill="freeze" />

		<g display="none" transform="translate(0 20.5)">
			<set
				begin="keepTheSecretOk.begin"
				end="keepTheSecretNo.begin"
				attributeName="display"
				to="initial"
				fill="freeze"
			/>
			<AnimatedTitle
				text="Worth the wait!"
				fill="url(#linear-gradient-text)"
				begin="keepTheSecretConfetti.end"
				end="keepTheSecretEnd.begin; keepTheSecretNo.begin"
				repeatCount="indefinite"
			/>
		</g>

		<g display="none" transform="translate(0 20.5)">
			<set
				begin="keepTheSecretNo.begin"
				end="keepTheSecretOk.begin"
				attributeName="display"
				to="initial"
				fill="freeze"
			/>
			<AnimatedTitle
				text="Just a game..."
				fill="url(#linear-gradient-text)"
				begin="keepTheSecretConfetti.end"
				end="keepTheSecretEnd.begin; keepTheSecretOk.begin"
				repeatCount="indefinite"
			/>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set id="keepTheSecretEnd" begin="click" attributeName="display" to="none" fill="freeze" />
		</rect>
	</g>

	<g style:cursor="pointer">
		<set id="keepTheSecretStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Keep secret!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
