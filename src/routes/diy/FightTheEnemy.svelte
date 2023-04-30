<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';

	const start = 'fightTheEnemyBattle';
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
					<text y="4.6">HP: 3</text>
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
					<text y="4.6">HP: 3</text>
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
					<text>An enemy appeared!</text>
				</g>
			</g>
		</g>
	</g>

	<g style:cursor="pointer">
		<set id="fightTheEnemyStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Fight!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
