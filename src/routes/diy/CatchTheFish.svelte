<script>
	import Title from './Title.svelte';
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Fish!</title>

	<defs>
		<symbol id="catch-the-fish-target" viewBox="-0.25 -0.25 58.5 35.5">
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				d="M 0.5 22.5 8.5 14.5 M 1.5 25.5 2.5 24.5 M 3.5 27.5 4.5 26.5 M 5.5 29.5 6.5 28.5 M 8.5 30.5 9.5 29.5 M 10.5 20.5 11.5 19.5 M 11.5 23.5 12.5 22.5 M 11.5 31.5 Z M 12.5 14.5 18.5 8.5 M 14.5 32.5 15.5 31.5 M 17.5 5.5 20.5 2.5 M 17.5 33.5 18.5 32.5 M 18.5 16.5 Z M 18.5 28.5 21.5 25.5 M 19.5 19.5 20.5 18.5 M 20.5 10.5 23.5 7.5 M 20.5 22.5 21.5 21.5 M 20.5 34.5 21.5 33.5 M 22.5 28.5 Z M 23.5 3.5 25.5 1.5 M 24.5 22.5 25.5 21.5 M 24.5 30.5 25.5 29.5 M 24.5 34.5 25.5 33.5 M 26.5 8.5 28.5 6.5 M 27.5 23.5 28.5 22.5 M 27.5 31.5 31.5 27.5 M 28.5 2.5 30.5 0.5 M 28.5 34.5 29.5 33.5 M 29.5 25.5 30.5 24.5 M 31.5 7.5 32.5 6.5 M 32.5 34.5 34.5 32.5 M 33.5 1.5 Z M 35.5 3.5 36.5 2.5 M 36.5 6.5 37.5 5.5 M 38.5 9.5 39.5 8.5 M 38.5 32.5 41.5 29.5 M 42.5 10.5 43.5 9.5 M 44.5 13.5 46.5 11.5 M 45.5 29.5 49.5 25.5 M 48.5 14.5 49.5 13.5 M 51.5 27.5 Z M 52.5 12.5 Z M 53.5 29.5 Z M 55.5 31.5 57.5 29.5 M 56.5 10.5 M 56.5 14.5 57.5 13.5 M 56.5 18.5 57.5 17.5 M 56.5 22.5 57.5 21.5 M 56.5 26.5 57.5 25.5"
			/>
		</symbol>

		<symbol id="catch-the-fish-catch" viewBox="-0.25 -0.25 58.5 35.5">
			<circle fill="currentColor" cx="11.5" cy="21.5" r="2.25" />
			<path
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 0.5 22.5 C 5 15 14 10.5 18 9.5 C 23 8 30 6.5 36.5 7.5 C 41 8.5 45.5 11.5 49.5 16.5 Q 54 12 57.5 10.5 Q 56 21.5 57.5 32.5 Q 54 30 49.5 25.5 C 45 32 34 34.5 27 34.5 C 18 34.5 5 30 0.5 22.5 M 17 9.5 C 17 3 24 3.5 27 3 C 32 2.5 36.5 2 36.5 7.5 M 18.5 15.5 C 22 19.5 22 25 18 28.5 M 21.5 22.5 C 26 20 31.5 23 29.5 27.5 C 28 30 25 31 20.5 26"
			/>
		</symbol>

		<pattern
			id="catch-the-fish-pattern-sky"
			viewBox="-4 -4 8 8"
			width="4"
			height="4"
			patternUnits="userSpaceOnUse"
			patternTransform="rotate(45)"
		>
			<g fill="#f8f8f8">
				<circle r="0.7" cx="2" />
				<circle r="0.3" cx="-1.5" cy="-1" />
			</g>
		</pattern>
		<pattern
			id="catch-the-fish-pattern-mountain"
			viewBox="-3 -3 6 6"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
			patternTransform="rotate(45)"
		>
			<circle fill="#f8f8f8" r="0.9" />
		</pattern>
		<pattern
			id="catch-the-fish-pattern-side"
			viewBox="-3 -3 6 6"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
			patternTransform="rotate(45)"
		>
			<circle fill="#f8f8f8" r="1.5" />
		</pattern>
	</defs>

	<rect fill="#f8f8f8" width="80" height="50" />
	<rect fill="#10c0c8" width="80" height="16" />
	<rect fill="url(#catch-the-fish-pattern-sky)" width="80" height="16" />
	<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path
			fill="#c0c0c0"
			stroke="#c0c0c0"
			d="M 0.5 7 4 4 7 7 11 5 16 8 19 5 27 11 37 4 46 10 49 8 53 11 60 5 65 8 68 6 72 8 76 5 79.5 6 79.5 15 0.5 15 Z"
		/>
		<path
			fill="url(#catch-the-fish-pattern-mountain)"
			stroke="url(#catch-the-fish-pattern-mountain)"
			d="M 0.5 7 4 4 7 7 11 5 16 8 19 5 27 11 37 4 46 10 49 8 53 11 60 5 65 8 68 6 72 8 76 5 79.5 6 79.5 15 0.5 15 Z"
		/>
		<path
			fill="url(#catch-the-fish-pattern-side)"
			stroke="url(#catch-the-fish-pattern-side)"
			d="M 0.5 7 4 4 2 9 1 9 Z M 6 8 7 7 11 5 10 7 7 10 6 9 Z M 1 14 3 11 3 12 2 14 1 14 Z M 15 9 19 5 18 10 14 10 Z M 27 11 37 4 31 11 27 12 Z M 47 10 49 8 48 10 47 10 Z M 52 12 60 5 58 12 52 12 Z M 63 10 68 6 66 11 Z M 72 8 76 5 74 9 Z"
		/>
	</g>

	<g transform="translate(7 15)" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5">
		<path
			fill="#c868e8"
			d="M 15 17.6 C 16.4 18.4 16.4 19.4 16.4 20 16.4 22 13.2 23.4 11 23.4 8.2 23.4 6 21.6 6 19.8 6 18 7.2 17.6 7.6 17.2 5 16.8 3 14 3 11.4 3 6.8 6 4.4 9.6 4.2 11.4 4.2 13 4.6 13.6 5.2 14.6 4.6 16 4.6 17.2 4.8 19 5.4 19.2 7.6 17.6 8.6 19.8 11.2 18 16.6 15 17.6 15.6 16.2"
		/>
		<path
			fill="#f8f8f8"
			d="M 13.6 5.2 C 12.8 5.8 12.6 7.2 13.2 7.8 11.6 8 10.2 9.6 11.2 11.2 9.4 11.8 8.6 12.6 8.6 13.6 8.6 15 10.2 15.6 11.4 15.6 10.2 16.4 11 18 11.2 18 11.8 19 13.6 19 15 17.6 C 15.6 16.2 14.8 14.8 13.2 14.6 14.2 13.8 14.6 12.8 14.4 11.8 15.6 11.8 16.2 10.6 15.8 9.6 16.8 10 17.8 9.6 17.6 8.6 19.2 7.6 19 5.4 17.2 4.8 16 4.6 14.6 4.6 13.6 5.2"
		/>
		<path
			fill="#f8d898"
			d="M 17.6 8.6 C 19.8 11.2 18 16.6 15 17.6 15.6 16.2 14.8 14.8 13.2 14.6 14.2 13.8 14.6 12.8 14.4 11.8 15.6 11.8 16.2 10.6 15.8 9.6 16.8 10 17.8 9.6 17.6 8.6"
		/>
		<path
			display="none"
			stroke="#f80000"
			stroke-width="1"
			d="M 15.6 15.6 C 16.2 15 16.8 15 17.2 15"
		/>
		<path
			display="none"
			fill="#f80000"
			stroke="#f80000"
			stroke-width="0.5"
			d="M 15.4 14.2 C 15.6 15 15.8 15.4 16.2 15.6 16.6 15.4 16.8 15 17 14.2 L 16.4 13.6 Z"
		/>
		<path
			fill="none"
			stroke="#000000"
			d="M 15 17.6 C 16.4 18.4 16.4 19.4 16.4 20 16.4 22 13.2 23.4 11 23.4 8.2 23.4 6 21.6 6 19.8 6 18 7.2 17.6 7.6 17.2 5 16.8 3 14 3 11.4 3 6.8 6 4.4 9.6 4.2 11.4 4.2 13 4.6 13.6 5.2 14.6 4.6 16 4.6 17.2 4.8 19 5.4 19.2 7.6 17.6 8.6 19.8 11.2 18 16.6 15 17.6 15.6 16.2"
		/>
		<path
			fill="#000000"
			stroke="#000000"
			stroke-width="0.5"
			d="M 14 12.6 15.4 14.2 16.4 13.6 17 14.2 18.2 12.8 17.2 13.2 16.4 12.8 15.4 13.4 14 12.6"
		/>
		<ellipse fill="#000000" cx="17" cy="11.4" rx="0.5" />
		<path
			fill="#c868e8"
			stroke="#000000"
			d="M 11.4 24 C 11.4 22.4 13.6 21.6 14.8 21.6 16 21.6 18.2 22.2 18.2 24 Z"
		/>
		<path
			fill="#c868e8"
			stroke="#000000"
			d="M 17.4 13 C 17.4 14 18.2 14.8 19.2 14.8 20.6 14.8 21 13.6 21 13.2 21.2 11.8 20.2 11.6 19 11.6 18 11.8 17.4 12.2 17.4 13"
		/>
	</g>

	<g transform="translate(28 32)" stroke-linecap="round" stroke-linejoin="round">
		<path stroke="currentColor" stroke-width="0.3" d="M 19 -18 19 0" />
		<path
			fill="#c04800"
			stroke="#c04800"
			stroke-width="0.5"
			d="M 0.5 -0.5 A 200 200 0 0 1 19 -18 A 200 200 0 0 0 1 0 Z"
		/>
		<path
			transform="translate(19 2.4)"
			fill="none"
			stroke="#c04800"
			stroke-width="0.5"
			d="M -0.6 0.6 0 0 M 0 1.2 Z M 0.6 0.6 Z"
		/>
		<ellipse transform="translate(19 0)" rx="2.5" ry="1.5" />
	</g>

	<use transform="translate(80 50)" href="#catch-the-fish-target" width="15" height="9">
		<animateTransform
			id="catchTheFishEnter"
			begin="catchTheFishStart.begin + 0.5s"
			attributeName="transform"
			type="translate"
			values="80 50; 30 37; 50 37"
			dur="4.5s"
			calcMode="spline"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
			keyTimes="0; 0.7; 1"
			fill="freeze"
		/>
		<animateTransform
			id="catchTheFishSwim"
			begin="catchTheFishEnter.end"
			attributeName="transform"
			type="translate"
			values="50 37; 46 35; 51 36"
			dur="3s"
			calcMode="spline"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
			fill="freeze"
		/>
		<animateTransform
			id="catchTheFishBite"
			begin="catchTheFishSwim.end"
			attributeName="transform"
			type="translate"
			values="51 36; 43 32"
			dur="0.5s"
			calcMode="spline"
			keySplines="0.5 0 0.5 1"
			fill="freeze"
		/>
		<animateTransform
			id="catchTheFishEscape"
			begin="catchTheFishBite.end + 1s"
			end="catchTheFishCatch.begin"
			attributeName="transform"
			type="translate"
			to="-20 50"
			dur="0.5s"
			calcMode="spline"
			keySplines="0.5 0 0.5 1"
			fill="freeze"
		/>
		<animateTransform
			id="catchTheFishShow"
			begin="catchTheFishCatch.begin"
			attributeName="transform"
			type="translate"
			to="39.5 18"
			dur="0.1s"
			calcMode="spline"
			keySplines="0.5 0 0.5 1"
			fill="freeze"
		/>
		<animateTransform
			begin="catchTheFishShow.end"
			attributeName="transform"
			type="translate"
			values="39.75 18.25; 39.25 18.25; 39.75 17.75; 39.25 17.75"
			dur="0.3s"
			repeatCount="3"
			fill="freeze"
		/>
	</use>

	<rect style="cursor: pointer;" display="none" width="80" height="50" opacity="0.2">
		<set begin="catchTheFishBite.end" attributeName="display" to="initial" />
		<set begin="catchTheFishEscape.begin" attributeName="display" to="none" />
		<set id="catchTheFishCatch" begin="click" attributeName="display" to="none" />
	</rect>

	<g style:cursor="pointer">
		<set id="catchTheFishStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<g transform="translate(0 18)">
			<Title fill="url(#linear-gradient-text)">Catch!</Title>
		</g>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
