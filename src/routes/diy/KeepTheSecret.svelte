<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';
</script>

<svg style="display: block;" viewBox="0 0 80 50">
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
		<g transform="translate(20 10)">
			<rect fill="#ffffff" width="16" height="8">
				<set begin="keepSecretDownOk.begin" attributeName="fill" to="#c0c0c0" />
				<set begin="keepSecretUpOk.begin" attributeName="fill" to="#ffffff" />
			</rect>
			<g fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="#787878" d="M 0 8 16 8 16 0">
					<set begin="keepSecretDownOk.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepSecretUpOk.begin" attributeName="stroke" to="#787878" />
				</path>
				<path stroke="#c0c0c0" d="M 0 8 0 0 16 0">
					<set begin="keepSecretDownOk.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepSecretUpOk.begin" attributeName="stroke" to="#c0c0c0" />
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
				<set begin="keepSecretDownOk.begin" attributeName="fill" to="#ffffff" />
				<set begin="keepSecretUpOk.begin" attributeName="fill" to="#000000" />
			</text>
			<rect
				style="cursor: pointer;"
				fill="transparent"
				stroke="transparent"
				width="16"
				height="8"
			/>
			<set id="keepSecretOk" begin="click" attributeName="display" to="none" />
			<set id="keepSecretDownOk" begin="pointerdown" />
			<set id="keepSecretUpOk" begin="pointerup; pointerout" />
			<set begin="keepSecretNo.begin" attributeName="display" to="none" />
		</g>
		<g transform="translate(20 22.5)">
			<rect fill="#ffffff" width="16" height="8">
				<set begin="keepSecretDownNo.begin" attributeName="fill" to="#c0c0c0" />
				<set begin="keepSecretUpNo.begin" attributeName="fill" to="#ffffff" />
			</rect>
			<g fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="#787878" d="M 0 8 16 8 16 0">
					<set begin="keepSecretDownNo.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepSecretUpNo.begin" attributeName="stroke" to="#787878" />
				</path>
				<path stroke="#c0c0c0" d="M 0 8 0 0 16 0">
					<set begin="keepSecretDownNo.begin" attributeName="stroke" to="#ffffff" />
					<set begin="keepSecretUpNo.begin" attributeName="stroke" to="#c0c0c0" />
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
			<set id="keepSecretNo" begin="click" attributeName="display" to="none" />
			<set id="keepSecretDownNo" begin="pointerdown" />
			<set id="keepSecretUpNo" begin="pointerup; pointerout" />
			<set begin="keepSecretOk.begin" attributeName="display" to="none" />
		</g>

		<set begin="keepSecretMessage.end" attributeName="display" to="initial" />
	</g>

	<g display="none" transform="translate(60 15)">
		<path
			fill="#ffffff"
			stroke="#000000"
			stroke-width="0.5"
			d="M -16 -10 -16 24.5 9 24.5 14 28 14 24.5 16 24.5 16 -10 Z"
		/>
		<g>
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
				<rect fill="#ffffff" x="-15.75" y="-34" width="31.5" height="34">
					<animateTransform
						id="keepSecretMessage"
						begin="keepSecretStart.begin"
						attributeName="transform"
						type="scale"
						dur="2.5s"
						values="1 1; 1 0"
						fill="freeze"
					/>
				</rect>
			</g>
			<set begin="keepSecretOk.begin; keepSecretNo.begin" attributeName="display" to="none" />
		</g>

		<set begin="keepSecretStart.begin" attributeName="display" to="initial" />
	</g>

	<g style:cursor="pointer">
		<set id="keepSecretStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Keep secret!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
