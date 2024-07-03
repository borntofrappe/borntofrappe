<script>
	import Title from './Title.svelte';
	const id = 'grabTheMugSnap';
	const begin = `${id}.begin + ${Math.floor(Math.random() * 30) / 10 + 1}s`;
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<defs>
		<symbol id="grab-the-mug-glass" viewBox="0 0 30 42">
			<path
				fill="#ffffff"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 29 5 A 29 29 0 0 1 1 5 A 29 29 0 0 1 29 5 Q 28 25 25 39.5 Q 15 41.5 5 39.5 Q 2 25 1 5"
			/>
		</symbol>
		<symbol id="grab-the-mug-hand-snap-1" viewBox="-40 -40 80 80">
			<g stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#fddea5"
					d="M -9 -7 C -12 -14 -17 -21 -22 -26 -26 -31 -13 -35 -5 -27 -1 -21 4 -13 8 -11 14 -13 16 -10 19 3 26 3 28 12 28 16 28 23 19 33 1 34 -18 34 -24 32 -28 27 -34 22 -33 16 -28 14 -34 9 -29 -3 -16 4 -18 -2 -14 -6 -9 -7"
				/>
				<g stroke-width="0.7">
					<path
						fill="#f9fb4c"
						d="M -6 13 C -2 12 3 10 6 6 L 9 8.5 C 15 9 19 6 19 3 26 3 28 12 28 16 28 23 19 33 1 34 -18 34 -24 32 -28 27 -14 29 -7 24 -11 21 -7 24 1 14 -16 4 -12 6 -8 9.5 -6 13"
					/>
					<path
						fill="none"
						d="M 3 -1 C 3 -6 5 -10 8 -11 M 3 3 C 7 8 13 10 13 14 M -28 14 C -23 18 -16 20 -11 21 M -28 27 C -14 29 -7 24 -11 21 -7 24 1 14 -16 4 -4 12 3 4 3 0 4 -7 -3 -7 -9 -7"
					/>
				</g>
				<path
					fill="none"
					d="M -9 -7 C -12 -14 -17 -21 -22 -26 -26 -31 -13 -35 -5 -27 -1 -21 4 -13 8 -11 14 -13 16 -10 19 3 26 3 28 12 28 16 28 23 19 33 1 34 -18 34 -24 32 -28 27 -34 22 -33 16 -28 14 -34 9 -29 -3 -16 4 -18 -2 -14 -6 -9 -7"
				/>
			</g>
		</symbol>

		<symbol id="grab-the-mug-hand-snap-2" viewBox="-40 -40 80 80">
			<g stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#fddea5"
					d="M -10 -4 C -16 -10 -22 -15 -30 -18 -37 -22 -31 -33 -21 -28 -12 -24 -4 -15 1 -13 3 -19 10 -20 14 -16 18 -12 14 -9 12 -7 17 -4 20 -2 23 0 29 5 32 10 26 21 22 29 8 34 -3 33 -12 32 -20 29 -24 22 -26 17 -25 10 -20 9 -22 4 -18 1 -13 1 -14 -1 -13 -4 -10 -4"
				/>
				<g stroke-width="0.7">
					<path
						fill="#f9fb4c"
						d="M -24 22 C -20 22 -19 20 -17 19 -15 18 -12 18 -9 21 -5 25 2 22 2 18 6 19 10 15 9 11 13 13 18 8 16 5 20 5 23 3 23 0 29 5 32 10 26 21 22 29 8 34 -3 33 -12 32 -20 29 -24 22"
					/>
					<path
						fill="none"
						d="M -20 9 C -14 8 -3 11 2 18 M -13 1 C -5 1 4 5 9 11 M -10 -4 C -7 -4 -4 -4 1 -3 6 -2 11 0 16 5 M 1 -3 C 0 -7 0 -10 1 -13"
					/>
				</g>
				<path
					fill="none"
					d="M -10 -4 C -16 -10 -22 -15 -30 -18 -37 -22 -31 -33 -21 -28 -12 -24 -4 -15 1 -13 3 -19 10 -20 14 -16 18 -12 14 -9 12 -7 17 -4 20 -2 23 0 29 5 32 10 26 21 22 29 8 34 -3 33 -12 32 -20 29 -24 22 -26 17 -25 10 -20 9 -22 4 -18 1 -13 1 -14 -1 -13 -4 -10 -4"
				/>
			</g>
		</symbol>

		<symbol id="grab-the-mug-hand-snap-3" viewBox="-40 -40 80 80">
			<use x="-40" y="-40" width="80" height="80" href="#grab-the-mug-hand-snap-2" />
			<path
				fill="#f80000"
				d="M 35.37 -16.43 C 20.27 -14.64 17.13 -18.21 20.87 -32.95 9.14 -23.27 4.57 -24.58 -0.25 -39 -4.89 -24.52 -9.44 -23.15 -21.3 -32.68 -17.37 -17.99 -20.46 -14.38 -35.58 -15.98 -24.34 -5.74 -24.98 -1.04 -38.57 5.79 -23.58 8.32 -21.58 12.63 -29.32 25.72 -15.33 19.74 -11.32 22.29 -10.75 37.48 -2.22 24.9 2.53 24.87 11.22 37.34 11.59 22.14 15.57 19.55 29.63 25.35 21.72 12.36 23.67 8.02 38.63 5.3 24.96 -1.35 24.25 -6.05 35.37 -16.43 M 0 -24 A 24 24 0 0 1 0 24 A 24 24 0 0 1 0 -24"
			/>
		</symbol>

		<symbol id="grab-the-mug-hand-grab" viewBox="-24.882217407226562 -32.5 60.38221740722656 66.75">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#fddea5"
					d="M 20 33 C 34 28 35 20 35 8 35 -8 30 -12 21 -17 19.5 -18 18 -19 17 -22 14 -31 11 -32 7 -32 3 -32 1 -26 1 -22 1 -15 6 -12 6 -12 7 -11 7 -11 9 -10 -1 -8 -8 -5 -19 -4 -23 -3 -23 3 -19 4 -26 4 -26 13 -20 15 -26 17 -22 25 -16 25 -17 31 -11 33 -6 33 2 34 11 34 20 33"
				/>
				<g stroke-width="0.7">
					<path
						fill="#f9fb4c"
						d=" M 17 -22 C 17 -16 18 -10 6 -12 7 -11 7 -11 9 -10 21 -10 20 -2 17 0 23 4 23 10 18 13 22 16 22 22 18 24 21 27 21 29 20 33 34 28 35 20 35 8 35 -8 30 -12 21 -17 19.5 -18 18 -19 17 -22"
					/>
					<path
						fill="none"
						d="M -19 4 C -9 7 10 5 17 0 M -20 15 C -15 18 11 17 18 13 M -16 25 C -6 27 9 27 18 24"
					/>
				</g>
				<path
					fill="none"
					d="M 20 33 C 34 28 35 20 35 8 35 -8 30 -12 21 -17 19.5 -18 18 -19 17 -22 14 -31 11 -32 7 -32 3 -32 1 -26 1 -22 1 -15 6 -12 6 -12 7 -11 7 -11 9 -10 -1 -8 -8 -5 -19 -4 -23 -3 -23 3 -19 4 -26 4 -26 13 -20 15 -26 17 -22 25 -16 25 -17 31 -11 33 -6 33 2 34 11 34 20 33"
				/>
			</g>
		</symbol>
	</defs>
	<rect fill="#fdff58" width="80" height="50" />

	<g transform="translate(0 35)">
		<rect fill="#c34902" width="80" height="15" />
		<path
			transform="translate(0 0.5)"
			fill="none"
			stroke="#f79142"
			d="M 8 0 13 0 M 29 0 31 0 M 42 0 43 0 M 55 0 56 0 M 61 0 65 0 M 69 0 70 0 M 3 1 8 1 M 13 1 17 1 M 24 1 28 1 M 32 1 42 1 M 51 1 55 1 M 57 1 79 1 M 57 1 57 1 M 0 2 2 2 M 9 2 11 2 M 17 2 23 2 M 28 2 33 2 M 46 2 51 2 M 53 2 56 2 M 1 3 15 3 M 23 3 28 3 M 34 3 46 3 M 50 3 53 3 M 58 3 78 3 M 0 4 1 4 M 15 4 24 4 M 28 4 32 4 M 47 4 50 4 M 55 4 58 4 M 61 4 66 4 M 78 4 79 4 M 78 4 78 4 M 0 5 9 5 M 12 5 14 5 M 18 5 22 5 M 24 5 25 5 M 33 5 38 5 M 40 5 46 5 M 50 5 54 5 M 60 5 61 5 M 66 5 79 5 M 66 5 66 5 M 0 6 1 6 M 9 6 9 6 M 14 6 15 6 M 20 6 23 6 M 25 6 27 6 M 38 6 43 6 M 47 6 48 6 M 57 6 59 6 M 64 6 66 6 M 69 6 72 6 M 1 7 3 7 M 9 7 10 7 M 15 7 15 7 M 21 7 23 7 M 25 7 28 7 M 53 7 59 7 M 63 7 65 7 M 69 7 70 7 M 76 7 79 7 M 76 7 76 7 M 0 8 3 8 M 8 8 10 8 M 14 8 14 8 M 21 8 28 8 M 34 8 39 8 M 41 8 41 8 M 46 8 48 8 M 55 8 61 8 M 63 8 69 8 M 75 8 76 8 M 2 9 11 9 M 17 9 25 9 M 29 9 33 9 M 41 9 46 9 M 49 9 49 9 M 51 9 54 9 M 56 9 57 9 M 61 9 65 9 M 68 9 70 9 M 75 9 75 9 M 0 10 2 10 M 13 10 20 10 M 25 10 29 10 M 32 10 41 10 M 49 10 55 10 M 58 10 63 10 M 65 10 72 10 M 75 10 79 10 M 75 10 75 10 M 4 11 12 11 M 22 11 25 11 M 30 11 47 11 M 55 11 58 11 M 63 11 67 11 M 69 11 73 11 M 75 11 79 11 M 75 11 75 11 M 0 12 3 12 M 11 12 30 12 M 47 12 51 12 M 58 12 60 12 M 67 12 76 12 M 0 13 0 13 M 2 13 11 13 M 33 13 43 13 M 54 13 55 13 M 60 13 64 13 M 71 13 74 13 M 76 13 79 13 M 76 13 76 13 M 32 14 44 14 M 52 14 54 14 M 64 14 65 14"
		/>
		<path fill="none" stroke="#000000" stroke-width="0.6" d="M 0 0 80 0" />
	</g>
	<use href="#grab-the-mug-glass" width="15" height="21">
		<set attributeName="x" to="-15" />
		<set attributeName="y" to="25" />
		<animateTransform
			{begin}
			id="grabTheMugIn"
			end="grabTheMugGrab.begin"
			attributeName="transform"
			type="translate"
			to="80 0"
			dur="2s"
			fill="freeze"
		/>
		<animateTransform
			id="grabTheMugOut"
			begin="grabTheMugIn.end"
			end="grabTheMugGrab.begin"
			attributeName="transform"
			type="translate"
			values="80 0; 100 0"
			dur="0.5s"
		/>
		<set begin="grabTheMugOut.end" end="grabTheMugGrab.begin" attributeName="display" to="none" />
	</use>

	<rect style:cursor="pointer" display="none" width="80" height="50" opacity="0.2">
		<set begin="grabTheMugIn.begin" attributeName="display" to="initial" />
		<set id="grabTheMugGrab" begin="click" attributeName="display" to="none" />
		<set begin="grabTheMugIn.end" attributeName="display" to="none" />
	</rect>

	<use x="18" y="8" width="24" height="24">
		<animate
			{id}
			begin="grabTheMugStart.begin + 0.5s"
			attributeName="href"
			calcMode="discrete"
			dur="0.4s"
			values="#grab-the-mug-hand-snap-1; #grab-the-mug-hand-snap-1; #grab-the-mug-hand-snap-2; #grab-the-mug-hand-snap-2; #grab-the-mug-hand-snap-3; #grab-the-mug-hand-snap-2; #grab-the-mug-hand-snap-2"
		/>
	</use>

	<g style:cursor="pointer">
		<set id="grabTheMugStart" begin="click" attributeName="display" to="none" />

		<Title fill="url(#linear-gradient-text)">Grab!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
