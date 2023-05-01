<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';

	const hpEnemy = 3;
	const hpYou = 3;
	const delayPerLetter = 0.03;

	const start = 'fightTheEnemyFight';

	const scriptEnemy = [
		...Array(hpEnemy - 1).fill('You hit for 1 point!'),
		'You defeated the enemy!'
	].map((message, i, { length }) => {
		const id = `fightTheEnemyHitEnemy${i}`;
		const initial = i === 0 ? `${start}.begin` : `fightTheEnemyHitEnemy${i - 1}.end`;
		const none = i === length - 1 ? `${id}.begin` : `${id}.end`;

		const show = `${id}.begin`;
		const dismiss = `fightTheEnemyHitEnemy${i + 1}.begin`;

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
			hp: hpEnemy - i - 1
		};
	});

	const scriptYou = [
		...Array(hpYou - 1).fill('You are hit for 1 point!'),
		'You were defeated...'
	].reduce((acc, curr, i) => {
		const id = `fightTheEnemyHitYou${i}`;

		const delay = Math.floor(Math.random() * 2 + 2);
		const offset =
			acc.length > 0 ? parseFloat(acc[acc.length - 1].begin.match(/([\d.]+)s$/)[1]) + delay : delay;

		const begin = `${start}.begin + ${offset}s`;

		const show = `${id}.begin`;
		const dismiss = `fightTheEnemyHitYou${i + 1}.begin`;

		const characters = curr.split('').map((character, i) => ({
			character,
			begin: `${show} + ${i * delayPerLetter}s`
		}));

		return [
			...acc,
			{
				id,
				begin,
				show,
				dismiss,
				characters,
				hp: hpYou - i - 1
			}
		];
	}, []);

	const message = 'An enemy appeared!';
	const show = `${start}.begin`;
	const dismiss = `${scriptEnemy[0].id}.begin; ${scriptYou[0].id}.begin`;
	const characters = message.split('').map((character, i) => ({
		character,
		begin: `${show} + ${i * delayPerLetter}s`
	}));

	const endEnemy = `${scriptEnemy[scriptEnemy.length - 1].id}.end + 1.8s`;
	const endYou = `${scriptYou[scriptYou.length - 1].id}.end + 1.8s`;
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Fight the enemy!</title>

	<rect width="80" height="50" fill="#faeab7" />
	<g stroke-linecap="round" stroke-linejoin="round">
		<g fill="#85734f" stroke="#85734f">
			<path
				d="M 0 45 c 18 0 20 -6 26 0 q 4 3 0 -6 t -2 -25 q -3 -8 -3 3 t 0 20 c 0 2 -2 2 -2 -1 q 0 -18 -2 -20 t -0 18 c 0 4 -6 4 -6 0 q 2 -16 -0 -16 t -2 10 c 0 2 -4 4 -4 -1 q 4 -24 -1 -22 t -4 5 v 35z"
			/>
			<path
				transform="translate(80 0) scale(-1 1)"
				d="M 0 45 c 18 0 20 -6 26 0 q 4 3 0 -6 t -2 -25 q -3 -8 -3 3 t 0 20 c 0 2 -2 2 -2 -1 q 0 -18 -2 -20 t -0 18 c 0 4 -6 4 -6 0 q 2 -16 -0 -16 t -2 10 c 0 2 -4 4 -4 -1 q 4 -24 -1 -22 t -4 5 v 35z"
			/>
		</g>
		<g fill="#313c2b">
			<path
				d="M 0 50 h 22 c 4 0 8 -6 1 -8 q -2 -1 -3 -4 t -6 -2 q -3 0 -3 -4 t 1 -16 c 1 -15 -10 -15 -8 -4 q 2 5 2 12 t -3 5 t -3 3 v 18z"
			/>
			<path
				transform="translate(80 0) scale(-1 1)"
				d="M 0 50 h 22 c 4 0 8 -6 1 -8 q -2 -1 -3 -4 t -6 -2 q -3 0 -3 -4 t 1 -16 c 1 -15 -10 -15 -8 -4 q 2 5 2 12 t -3 5 t -3 3 v 18z"
			/>
		</g>
		<g fill="#192821" stroke="#192821">
			<path
				d="M 0 50 h 22 q 2 0 2 -2 t -4 -4 -1 -28 q 1 -4 4 -4 t 3 -6 -10 -8 -18 -2 q -5 0 -5 5 t 5 6 q 2 1 3 5 t 8 -0 q 4 -2 4 5 t -1 20 c -2 10 -8 10 -8 0 q 0 -22 -4 -22 v 35z"
			/>
			<path
				transform="translate(80 0) scale(-1 1)"
				d="M 0 50 h 22 q 2 0 2 -2 t -4 -4 -1 -28 q 1 -4 4 -4 t 3 -6 -10 -8 -18 -2 q -5 0 -5 5 t 5 6 q 2 1 3 5 t 8 -0 q 4 -2 4 5 t -1 20 c -2 10 -8 10 -8 0 q 0 -22 -4 -22 v 35z"
			/>
		</g>
	</g>

	<g>
		<set attributeName="display" to="none" />
		<set id={start} begin="fightTheEnemyStart.begin" attributeName="display" to="initial" />
		<g transform="translate(40 21)">
			<g>
				{#each scriptYou as { id, begin }}
					<animateTransform
						{id}
						{begin}
						attributeName="transform"
						type="scale"
						values="1; 1.2; 1"
						dur="0.1s"
					/>

					<animateTransform
						{begin}
						attributeName="transform"
						type="translate"
						values="0 0; 0 -2; 0 0"
						dur="0.1s"
						additive="sum"
					/>
				{/each}
				{#each scriptEnemy as { id, initial, none }}
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
								d="M 5 -2 q 3 -5 5 -5 c 3 0 3 8 0 8 q -1.5 0 -1.5 -3 v 2 l -3.5 4.5 v 1 c 0 4 -2 7 -14 7 q 4 -2 4 -4 v -4 l -3.5 -4.5 v -2 q 0 3 -1.5 3 c -3 0 -3 -8 0 -8 q 2 0 5 5"
							/>
							<circle cx="1.8" cy="-3.5" r="0.9" />
							<circle cx="-1.8" cy="-3.5" r="0.9" />
							<rect x="-1.7" y="-1" width="3.4" height="1.7" rx="1" />
							<circle cy="-2.5" r="5" />
							<circle cx="1.8" cy="-3.5" r="0.9" />
							<circle cx="-1.8" cy="-3.5" r="0.9" />
							<rect x="-1.7" y="-1" width="3.4" height="1.7" rx="1" />
						</g>
					</g>
				{/each}
			</g>
		</g>

		<g>
			<animateTransform
				begin={scriptYou.map(({ show }) => show).join(';')}
				attributeName="transform"
				type="translate"
				values="0 0; 1 0; 0 0; -1 0; 0 0"
				dur="0.1s"
				repeatCount="2"
			/>
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
								{hpEnemy}
								<set begin={scriptEnemy[0].show} attributeName="display" to="none" />
							</tspan>
							{#each scriptEnemy as { show, dismiss, hp }}
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

			<g transform="translate(59 25.5)">
				<rect fill="currentColor" stroke="#f7f7f7" width="20" height="11" rx="1" />
				<g transform="translate(10 4.6)">
					<g
						fill="#f7f7f7"
						font-family="sans-serif"
						font-size="4"
						font-weight="bold"
						text-anchor="middle"
					>
						<text>You</text>
						<text y="4.6"
							>HP:
							<tspan>
								{hpYou}
								<set begin={scriptYou[0].show} attributeName="display" to="none" />
							</tspan>
							{#each scriptYou as { show, dismiss, hp }}
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
						{#each scriptEnemy as { show, dismiss, characters }}
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
						{#each scriptYou as { show, dismiss, characters }}
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
	</g>

	<g display="none">
		<set begin={endEnemy} attributeName="display" to="initial" fill="freeze" />

		<g transform="translate(0 -5)">
			<AnimatedTitle
				text="Level up!"
				fill="url(#linear-gradient-text)"
				begin={endEnemy}
				end="battleTheEnemyEndEnemy.begin"
				repeatCount="indefinite"
			/>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set
				id="battleTheEnemyEndEnemy"
				begin="click"
				attributeName="display"
				to="none"
				fill="freeze"
			/>
		</rect>
	</g>

	<g display="none">
		<set begin={endYou} attributeName="display" to="initial" fill="freeze" />

		<g transform="translate(0 -18)">
			<AnimatedTitle
				text="Oowoo..."
				fill="url(#linear-gradient-text)"
				begin={endYou}
				end="battleTheEnemyEndYou.begin"
				repeatCount="indefinite"
			/>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set
				id="battleTheEnemyEndYou"
				begin="click"
				attributeName="display"
				to="none"
				fill="freeze"
			/>
		</rect>
	</g>

	<g style:cursor="pointer">
		<set id="fightTheEnemyStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Fight!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
