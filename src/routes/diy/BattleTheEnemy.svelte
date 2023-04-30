<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';

	const hp = 3;
	const delayPerLetter = 0.03;

	const start = 'battleTheEnemyBattle';

	const script = [...Array(hp - 1).fill('You hit for 1 point!'), 'You defeated the enemy!'].map(
		(message, i, { length }) => {
			const id = `battleTheEnemyHit${i}`;
			const initial = i === 0 ? `${start}.begin` : `battleTheEnemyHit${i - 1}.end`;
			const none = i === length - 1 ? `${id}.begin` : `${id}.end`;

			const show = `${id}.begin`;
			const dismiss = `battleTheEnemyHit${i + 1}.begin`;

			const characters = message.split('').map((character, i) => ({
				character,
				begin: `${show} + ${i * delayPerLetter}s`
			}));

			return {
				id,
				initial,
				none,
				show,
				dismiss,
				characters,
				hp: hp - i - 1
			};
		}
	);

	const message = 'An enemy appeared!';
	const show = `${start}.begin`;
	const dismiss = `${script[0].id}.begin`;
	const characters = message.split('').map((character, i) => ({
		character,
		begin: `${show} + ${i * delayPerLetter}s`
	}));
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Battle the enemy!</title>

	<rect fill="#86bded" width="80" height="50" />
	<path fill="#f9e382" d="M 0 50 v -23 c 20 -5 60 -5 80 0 v 23" />
	<g stroke-linecap="round" stroke-linejoin="round">
		<g fill="#f1f6f6" stroke="#f1f6f6">
			<path stroke-width="3" d="M 4 4 c 7 -1 6 3 10.5 5.5 c -3 1 -7 1 -11.5 0 c 3 -1 3 -4 1 -5.5" />
			<path
				stroke-width="2"
				d="M 12.5 14 c 10 0 8 1 13 2 c 5 2 20 1 33 -1 c 5 -1 4.5 -3 4 -3.5 c -9 -2.5 -2 -3 -2.5 -6.5 c -5 -3 -31.5 -3 -37 0.5 c 2 4 -2 3 -2.5 4 c -3 5 -8 3 -8 4.5"
			/>
			<path stroke-width="2" d="M 66 10 c 3 5 15 -1 9 -6.5 c 0 4 -4 4 -4 4 c -2 0 -2 2.5 -5 2.5" />
		</g>

		<g stroke="#59a258" fill="#59a258" stroke-width="1.5">
			<path
				d="M 3 20.5 c 3 0 6 3 10 3 c 3 0 4 -1.5 6 -1.5 c 2 0 4 2.5 6 2.5 c 3.5 1.5 0 3.5 -3 3.5 c -3 1 -1 2 -3 3 c -4.5 2 -3 3 -2 5 c 1 1 -3 2 2 4 c 1 0.5 2.5 2 -2 2 c -11 0 -7 4 -5 4.5 c 5 1 0 4 -1 4 c -12 3 -14 -4 -11 -4 c 4 0 4 -2 8.5 -4 c 3 -1.5 2 -3 0.5 -5 c -1 -1 2 -2 2 -2 c 2.5 -1 2 -4 5 -4.5 c 2 -1 7 -3 6 -5.5 c -2 -3 -5 1 -10 2 c -3 0.5 -5.5 3 -5.5 5 c 0 1 -4 1 -5 3 c -1 1 0 5 -3 5 c -4 0 -4 -16 0 -16 c 3 0 3 -4 4.5 -4"
			/>
			<path
				transform="translate(80 0) scale(-1 1)"
				d="M 3 20.5 c 3 0 6 3 10 3 c 3 0 4 -1.5 6 -1.5 c 2 0 4 2.5 6 2.5 c 3.5 1.5 0 3.5 -3 3.5 c -3 1 -1 2 -3 3 c -4.5 2 -3 3 -2 5 c 1 1 -3 2 2 4 c 1 0.5 2.5 2 -2 2 c -11 0 -7 4 -5 4.5 c 5 1 0 4 -1 4 c -12 3 -14 -4 -11 -4 c 4 0 4 -2 8.5 -4 c 3 -1.5 2 -3 0.5 -5 c -1 -1 2 -2 2 -2 c 2.5 -1 2 -4 5 -4.5 c 2 -1 7 -3 6 -5.5 c -2 -3 -5 1 -10 2 c -3 0.5 -5.5 3 -5.5 5 c 0 1 -4 1 -5 3 c -1 1 0 5 -3 5 c -4 0 -4 -16 0 -16 c 3 0 3 -4 4.5 -4"
			/>
		</g>

		<g fill="#455f58" stroke="#455f58" stroke-width="2.5">
			<path
				d="M 3 16.5 c 2 0 4 4 10 4 c 3 0 9 4 3 3.5 c -3 -0.5 -8 -0.5 -11 0 c -8 0 -4 -7.5 -2 -7.5"
			/>
			<path
				transform="translate(80 0) scale(-1 1)"
				d="M 3 16.5 c 2 0 4 4 10 4 c 3 0 9 4 3 3.5 c -3 -0.5 -8 -0.5 -11 0 c -8 0 -4 -7.5 -2 -7.5"
			/>
		</g>
	</g>

	<g>
		<set attributeName="display" to="none" />
		<set id={start} begin="battleTheEnemyStart.begin" attributeName="display" to="initial" />
		<g transform="translate(40 22)">
			{#each script as { id, initial, none }}
				<g style="cursor: pointer">
					<set begin="0s; {none}" attributeName="display" to="none" />
					<set begin={initial} attributeName="display" to="initial" />
					<animate
						{id}
						begin="click"
						attributeName="opacity"
						values="1;0;1"
						repeatCount="2"
						dur="0.2s"
						calcMode="discrete"
						restart="never"
					/>
					<g fill="#f7f7f7" stroke="currentColor" stroke-width="0.75">
						<path
							d="M 3.5 -0.75 l 3.5 3.5 a 2 2 0 1 1 -2 2 l -1 -1 v 4 q 2 0 2 2 0 1 -1 1 h -2.5 q -2 0 -2 -2 v -1 q 0 -0.5 -0.5 -0.5 -0.5 0 -0.5 0.5 v 1 q 0 2 -2 2 h -2.5 q -1 0 -1 -1 0 -2 2 -2 v -4 l -1 1 a 2 2 0 1 1 -2 -2 l 3.5 -3.5"
						/>
						<circle cy="-2.5" r="5" />
						<circle cx="1.8" cy="-3.5" r="0.9" />
						<circle cx="-1.8" cy="-3.5" r="0.9" />
						<rect x="-1.7" y="-1" width="3.4" height="1.7" rx="1" />
					</g>
				</g>
			{/each}
		</g>

		<g transform="translate(1 1)">
			<rect fill="currentColor" stroke="#f7f7f7" width="20" height="11" rx="1" />
			<g transform="translate(10 4.6)">
				<g
					fill="#f7f7f7"
					font-family="sans-serif"
					font-size="4"
					font-weight="bold"
					text-anchor="middle"
				>
					<text>Enemy</text>
					<text y="4.6"
						>HP:
						<tspan>
							{hp}
							<set begin={dismiss} attributeName="display" to="none" />
						</tspan>
						{#each script as { show, dismiss, hp }}
							<tspan>
								<set begin="0s; {dismiss}" attributeName="display" to="none" />
								<set begin={show} attributeName="display" to="initial" />
								{hp}
							</tspan>
						{/each}
					</text>
				</g>
			</g>
		</g>

		<g transform="translate(1 38)">
			<rect fill="currentColor" stroke="#f7f7f7" width="78" height="11" rx="1" />
			<g transform="translate(39 6.8)">
				<g
					fill="#f7f7f7"
					font-family="sans-serif"
					font-size="4"
					font-weight="bold"
					text-anchor="middle"
				>
					<text>
						<set begin="0s; {dismiss}" attributeName="display" to="none" />
						<set begin={show} attributeName="display" to="initial" />
						{#each characters as { character, begin }}
							<tspan>
								<set attributeName="fill-opacity" to="0" />
								<set {begin} attributeName="fill-opacity" to="1" />
								{character}
							</tspan>
						{/each}
					</text>
					{#each script as { show, dismiss, characters }}
						<text>
							<set begin="0s; {dismiss}" attributeName="display" to="none" />
							<set begin={show} attributeName="display" to="initial" />
							{#each characters as { character, begin }}
								<tspan>
									<set attributeName="fill-opacity" to="0" />
									<set {begin} attributeName="fill-opacity" to="1" />
									{character}
								</tspan>
							{/each}
						</text>
					{/each}
				</g>
			</g>
		</g>
	</g>

	<g style:cursor="pointer">
		<set id="battleTheEnemyStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<g transform="translate(0 -5)">
			<Title fill="url(#linear-gradient-text)">Battle!</Title>
		</g>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
