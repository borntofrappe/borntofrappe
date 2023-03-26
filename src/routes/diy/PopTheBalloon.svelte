<script>
	import Title from './Title.svelte';

	const angle = ((Math.floor(Math.random() * 180) + 180) / 180) * Math.PI;
	const dx = Math.cos(angle) * 80;
	const dy = Math.sin(angle) * 50;
	const dur = '5s';
</script>

<svg style="display: block;" viewBox="0 0 80 50">
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
				stroke-width="0.5"
				stroke-linejoin="round"
				stroke-linecap="round"
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
	</defs>
	<rect fill="#10c2ce" width="80" height="50" />

	<use transform="translate(15 15)" href="#pop-the-balloon-cloud" />
	<use transform="translate(65 35)" href="#pop-the-balloon-cloud" />

	<g transform="translate(40 30)">
		<g>
			<animateTransform
				begin="popTheBalloonStart.begin"
				end="popTheBalloonPopped.begin"
				attributeName="transform"
				type="translate"
				to="{dx} {dy}"
				{dur}
				fill="freeze"
			/>

			<g>
				<animateTransform
					begin="popTheBalloonStart.begin"
					end="popTheBalloonPopped.begin"
					attributeName="transform"
					type="translate"
					to="0 1"
					dur="0.35s"
					calcMode="discrete"
					repeatCount="indefinite"
					fill="freeze"
				/>
				<g transform="translate(0 -3)">
					<g style:cursor="pointer">
						<set id="popTheBalloonPopped" begin="click" attributeName="display" to="none" />
						<g stroke="currentColor" stroke-width="0.5">
							<path fill="none" d="M 0 0 q -0.75 0.75 0 1.5 t 0 1.5" />
							<path fill="currentColor" d="M -1.25 0 h 2.5 q 0 -1.5 -1.25 -1.5 t -1.25 1.5z" />
							<ellipse fill="#f70000" rx="7" ry="8" cy="-9" />
						</g>
					</g>
				</g>
			</g>

			<g>
				<animateTransform
					begin="popTheBalloonPopped.begin"
					attributeName="transform"
					type="translate"
					to="0 100"
					dur="2s"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.2 1"
					fill="freeze"
				/>
				<g stroke="currentColor" stroke-width="0.5">
					<g fill="url(#pop-the-balloon-pattern-present)">
						<rect x="-6" y="4" width="12" height="7" />
						<rect x="-7" width="14" height="4" />
					</g>
					<rect fill="#73ce3a" x="-2" y="-0.5" width="4" height="11.5" />
				</g>
			</g>
		</g>
	</g>

	<g style:cursor="pointer">
		<set id="popTheBalloonStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Pop!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
