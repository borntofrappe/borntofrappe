<script>
	const duration = 0.03;

	const options = [
		["'BRRING! BRRING!", "Isn't SVG great?"],
		['I mean, this is a', 'trivial example,'],
		['but the effect', 'is beyond neat.'],
		["That's all for now!", 'Catch you soon in'],
		['the next article!', "CLICK!'"]
	].map((option) =>
		option.reduce(
			(acc, curr) => {
				const letters = curr.split('');

				const { delay } = acc;
				acc.script.push(
					letters.map((letter, i) => ({
						letter,
						delay: delay + i * duration
					}))
				);
				acc.delay = delay + letters.length * duration + 0.1;
				return acc;
			},
			{ delay: 0, script: [] }
		)
	);
</script>

<svg
	style="display: block; --c0: #0a0200; --c1: #985a45; --c2: #d89d7f; --c3: #fcdfb5; --c4: #f8f8f8; --c5: #a21e36; --c6: #387cbb"
	viewBox="0 0 8 6"
	shape-rendering="crispEdges"
>
	<title>Set to talk</title>
	<description>Tap the phone to make a one-time call</description>
	<defs>
		<symbol id="set-to-talk-phone" viewBox="0 -0.5 24 24" shape-rendering="crispEdges">
			<path
				stroke="var(--c0, #0a0200)"
				d="M 5 3 h 3 M 16 3 h 3 M 4 4 h 1 M 6 4 h 11 M 19 4 h 1 M 3 5 h 1 M 5 5 h 14 M 20 5 h 1 M 3 6 h 18 M 3 7 h 6 M 15 7 h 6 M 3 8 h 1 M 8 8 h 8 M 20 8 h 1 M 3 9 h 6 M 15 9 h 6 M 5 10 h 3 M 16 10 h 3 M 5 11 h 2 M 11 11 h 2 M 17 11 h 2 M 4 12 h 3 M 10 12 h 1 M 13 12 h 1 M 17 12 h 3 M 4 13 h 3 M 10 13 h 1 M 13 13 h 1 M 17 13 h 3 M 4 14 h 3 M 11 14 h 2 M 15 14 h 5 M 3 15 h 1 M 5 15 h 3 M 13 15 h 1 M 16 15 h 3 M 20 15 h 1 M 3 16 h 1 M 5 16 h 4 M 13 16 h 6 M 20 16 h 1 M 3 17 h 1 M 6 17 h 12 M 20 17 h 1 M 4 18 h 1 M 19 18 h 1 M 4 19 h 16 M 4 20 h 1 M 6 20 h 4 M 14 20 h 4 M 19 20 h 1 M 4 21 h 1 M 19 21 h 1 M 5 22 h 1 M 10 22 h 4 M 18 22 h 1 M 6 23 h 4 M 14 23 h 4"
			/>
			<path
				stroke="var(--c5, #a21e36)"
				d="M 5 4 h 1 M 17 4 h 2 M 4 5 h 1 M 19 5 h 1 M 9 7 h 6 M 4 8 h 1 M 7 8 h 1 M 16 8 h 1 M 19 8 h 1 M 11 12 h 2 M 11 13 h 2 M 13 14 h 2 M 4 15 h 1 M 14 15 h 2 M 19 15 h 1 M 4 17 h 1 M 19 17 h 1 M 5 18 h 1 M 18 18 h 1"
			/>
			<path
				stroke="var(--c3, #fcdfb5)"
				d="M 5 8 h 2 M 17 8 h 2 M 9 9 h 6 M 8 10 h 8 M 7 11 h 4 M 13 11 h 4 M 7 12 h 3 M 14 12 h 3 M 7 13 h 3 M 14 13 h 3 M 7 14 h 4 M 8 15 h 5 M 4 16 h 1 M 9 16 h 4 M 19 16 h 1 M 5 17 h 1 M 18 17 h 1 M 6 18 h 12"
			/>
			<path
				stroke="var(--c1, #985a45)"
				d="M 5 20 h 1 M 10 20 h 4 M 18 20 h 1 M 5 21 h 14 M 6 22 h 4 M 14 22 h 4"
			/>
		</symbol>

		<pattern
			id="set-to-talk-tile-floor"
			viewBox="0 -0.5 16 16"
			patternUnits="userSpaceOnUse"
			width="1"
			height="1"
			shape-rendering="crispEdges"
		>
			<rect fill="var(--c2, #d89d7f)" y="-0.5" width="16" height="16" />
			<path stroke="var(--c3, #fcdfb5)" d="M 0 6 h 16" />
			<path stroke="var(--c1, #985a45)" d="M 0 7 h 16" />
			<path stroke="var(--c3, #fcdfb5)" d="M 0 14 h 16" />
			<path stroke="var(--c1, #985a45)" d="M 0 15 h 16" />
			<path stroke="var(--c1, #985a45)" d="M 1 1 h 2 M 9 4 h 3 M 3 8 h 3 M 12 11 h 2 M 7 14 h 3" />
		</pattern>
		<pattern
			id="set-to-talk-tile-wall"
			viewBox="0 -0.5 16 16"
			patternUnits="userSpaceOnUse"
			width="1"
			height="1"
			shape-rendering="crispEdges"
		>
			<rect fill="var(--c4, #f8f8f8)" y="-0.5" width="16" height="16" />
			<path stroke="var(--c6, #387cbb)" d="M 0 1 h 16 M 0 2 h 16" />
			<path
				stroke="var(--c0, #0a0200)"
				d="M 0 3 h 16 M 0 8 h 16 M 0 12 h 16 M 0 14 h 16 M 0 15 h 16"
			/>
			<path stroke="var(--c2, #d89d7f)" d="M 0 9 h 16" />
			<path stroke="var(--c1, #985a45)" d="M 0 10 h 16 M 0 11 h 16 M 0 13 h 16" />
			<path
				transform="translate(-0.5 -0.5)"
				stroke="var(--c0, #0a0200)"
				d="M 2 13 v 1 M 6 9 v 3 M 10 13 v 1 M 14 9 v 3"
			/>
		</pattern>
		<symbol
			id="set-to-talk-tile-angle"
			viewBox="0 -0.5 16 16"
			width="1"
			height="1"
			shape-rendering="crispEdges"
		>
			<rect fill="var(--c4, #f8f8f8)" y="-0.5" width="16" height="16" />
			<path stroke="var(--c6, #387cbb)" d="M 1 1 h 15 M 1 2 h 15" />
			<path transform="translate(0.5 0.5)" stroke="var(--c6, #387cbb)" d="M 1 2 v 14 M 2 2 v 14" />
			<path
				stroke="var(--c0, #0a0200)"
				d="M 3 3 h 13 M 4 4 h 1 M 5 5 h 1 M 6 6 h 1 M 7 7 h 1 M 8 8 h 8 M 9 9 h 1 M 10 10 h 1 M 11 11 h 1 M 12 12 h 5 M 13 13 h 1 M 14 14 h 2 M 14 15 h 2"
			/>
			<path stroke="var(--c2, #d89d7f)" d="M 10 9 h 6" />
			<path stroke="var(--c1, #985a45)" d="M 11 10 h 5 M 12 11 h 4 M 14 13 h 2" />
			<path
				transform="translate(-0.5 -0.5)"
				stroke="var(--c0, #0a0200)"
				d="M 4 4 v 12 M 9 9 v 7 M 13 13 v 3"
			/>
			<path transform="translate(-0.5 -0.5)" stroke="var(--c2, #d89d7f)" d="M 10 10 v 6" />
			<path
				transform="translate(-0.5 -0.5)"
				stroke="var(--c1, #985a45)"
				d="M 11 11 v 5 M 12 12 v 4 M 14 14 v 2"
			/>
		</symbol>
		<symbol
			id="set-to-talk-tile-entrance"
			viewBox="0 -0.5 16 16"
			width="1"
			height="1"
			shape-rendering="crispEdges"
		>
			<rect fill="var(--c4, #f8f8f8)" y="-0.5" width="7" height="16" />
			<path stroke="var(--c0, #0a0200)" d="M 0 0 h 7 M 1 12 h 1 M 2 11 h 4 M 6 12 h 1" />
			<path
				transform="translate(-0.5 -0.5)"
				stroke="var(--c0, #0a0200)"
				d="M 1 1 v 15 M 8 1 v 15"
			/>
			<rect fill="var(--c3, #fcdfb5)" x="2" y=".5" width="3" height="10" />
			<path
				transform="translate(-0.5 -0.5)"
				stroke="var(--c2, #985a45)"
				d="M 2 1 v 11 M 3 1 v 2 M 3 5 v 4 M 3 14 v 2 M 4 3 v 2 M 4 8 v 3 M 4 13 v 1 M 5 13 v 1  M 6 14 v 2"
			/>
			<path transform="translate(-0.5 -0.5)" stroke="var(--c3, #fcdfb5)" d="M 6 1 v 2 M 6 6 v 2" />
		</symbol>
	</defs>

	<rect x="1" width="6" height="1" fill="url(#set-to-talk-tile-wall)" />
	<rect
		transform="translate(8 1) rotate(90)"
		width="4"
		height="1"
		fill="url(#set-to-talk-tile-wall)"
	/>
	<rect
		transform="translate(0 5) rotate(-90)"
		width="4"
		height="1"
		fill="url(#set-to-talk-tile-wall)"
	/>
	<rect
		transform="translate(3 6) rotate(180)"
		width="2"
		height="1"
		fill="url(#set-to-talk-tile-wall)"
	/>
	<rect
		transform="translate(7 6) rotate(180)"
		width="2"
		height="1"
		fill="url(#set-to-talk-tile-wall)"
	/>
	<use href="#set-to-talk-tile-angle" />
	<use transform="translate(8 0) rotate(90)" href="#set-to-talk-tile-angle" />
	<use transform="translate(8 6) rotate(180)" href="#set-to-talk-tile-angle" />
	<use transform="translate(0 6) rotate(270)" href="#set-to-talk-tile-angle" />
	<use transform="translate(5 5) scale(-1 1)" href="#set-to-talk-tile-entrance" />
	<use transform="translate(3 5)" href="#set-to-talk-tile-entrance" />
	<rect x="1" y="1" width="6" height="4" fill="url(#set-to-talk-tile-floor)" />

	<use style="cursor: pointer;" href="#set-to-talk-phone" x="5" y="1.5" width="1" height="1">
		<set
			id="setToTalkPhoneCall"
			begin="click"
			attributeName="cursor"
			attributeType="CSS"
			to="initial"
		/>
	</use>

	{#each options as _, i}
		<g>
			<set
				attributeName="display"
				to="none"
				begin="setToTalkPhoneCall{options.length - 1 - i}.begin"
			/>

			<use style="cursor: pointer;" href="#set-to-talk-phone" x="5" y="1.5" width="1" height="1">
				<set id="setToTalkPhoneCall{options.length - 1 - i}" begin="click" />
			</use>
		</g>
	{/each}

	{#each options as option, i}
		<g>
			<set attributeName="display" to="none" begin="0s; setToTalkPhoneCall.begin" />
			<set attributeName="display" to="initial" begin="setToTalkPhoneCall{i}.begin" />
			<g transform="translate(2 3)">
				<rect width="4" height="1.5" fill="var(--c0, #0a0200)">
					<set attributeName="opacity" to="0" />
					<set attributeName="opacity" to="1" begin="setToTalkPhoneCall{i}.begin" />
				</rect>
				<g transform="translate(0.2 0.55)">
					<g
						letter-spacing="0.02"
						font-size="0.32"
						fill="var(--c4, #f8f8f8)"
						font-family="sans-serif"
						font-style="italic"
					>
						{#each option.script as message, j}
							<text y={0.6 * j}>
								{#each message as { letter, delay }}
									<tspan>
										<set
											attributeName="fill-opacity"
											to="0"
											begin="0s; setToTalkPhoneCall{i}.begin"
										/>
										<set
											attributeName="fill-opacity"
											to="1"
											fill="freeze"
											begin="setToTalkPhoneCall{i}.begin + {delay}s"
										/>
										{letter}
									</tspan>
								{/each}
							</text>
						{/each}
					</g>
				</g>
			</g>
		</g>
	{/each}
</svg>
