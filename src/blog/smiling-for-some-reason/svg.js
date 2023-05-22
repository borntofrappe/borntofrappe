export default {
	'heart-beat': `<svg style="display: block;" viewBox="-50 -50 100 100">
	<title>A heart waiting to beat</title>
	<g
		fill="currentColor"
		stroke="currentColor"
		stroke-width="4"
		stroke-linejoin="round"
		stroke-linecap="round"
	>
		<animateTransform
			begin="click"
			attributeName="transform"
			type="scale"
			values="1; 1.2; 1"
			repeatCount="2"
			dur="0.5s"
			restart="whenNotActive"
			calcMode="spline"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
		/>
		<path
			d="M -30 -20 a 15 15 0 0 1 30 0 15 15 0 0 1 30 0 c 0 20 -20 30 -30 40 c -10 -10 -30 -20 -30 -40"
		/>
	</g>
</svg>`,
	'moon-tilt': `<svg style="display: block;" viewBox="-50 -50 100 100">
	<title>A moon tipped on its side</title>
	<g
		fill="currentColor"
		stroke="currentColor"
		stroke-width="8"
		stroke-linejoin="round"
		stroke-linecap="round"
	>
		<animateTransform
			begin="click"
			attributeName="transform"
			type="rotate"
			values="0; 20; 0"
			dur="1s"
			restart="whenNotActive"
			calcMode="spline"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
		/>
		<path d="M 0 -30 a 30 30 0 1 0 30 30 20 20 0 0 1 -30 -30" />
	</g>
</svg>`,
	'sun-turn': `<svg style="display: block;" viewBox="-50 -50 100 100">
	<title>A sun about to turn</title>
	<g
		fill="none"
		stroke="currentColor"
		stroke-width="6"
		stroke-linejoin="round"
		stroke-linecap="round"
	>
		<animateTransform
			begin="sunTurn.begin"
			attributeName="transform"
			type="rotate"
			values="0; 45"
			dur="1s"
			restart="whenNotActive"
			calcMode="spline"
			keySplines="0.5 0 0.5 1;"
		/>
		<path transform="translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(45) translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(90) translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(135) translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(180) translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(225) translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(270) translate(0 -35)" d="M 0 0 v -5" />
		<path transform="rotate(315) translate(0 -35)" d="M 0 0 v -5" />
	</g>
	<circle fill="currentColor" r="25" />
	<set id="sunTurn" begin="click" />
</svg>`,
	'lightning-strike': `<svg style="display: block;" viewBox="-48 -55 100 100">
	<title>Lightning ready to strike</title>
	<g>
		<animateTransform
			begin="lightningStrike.begin"
			attributeName="transform"
			type="scale"
			values="1 1; 1.2 1.2; 1.2 1.2; 1.2 1.2; 1 1"
			dur="1.5s"
			restart="whenNotActive"
			calcMode="spline"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
		/>
		<animateTransform
			begin="lightningStrike.begin"
			attributeName="transform"
			type="rotate"
			values="0; -3; 2; -2; 1; -1;  0"
			dur="1.5s"
			restart="whenNotActive"
			calcMode="spline"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
			additive="sum"
		/>
		<g
			fill="#ffd028"
			stroke="#ffd028"
			stroke-width="6"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path d="M 5 -40 l 0 30 20 0 -30 40 0 -30 -20 0z" />
		</g>
		<g fill="none" stroke="#48d1ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
			<path
				pathLength="1"
				stroke-dasharray="1 1 0.1"
				d="M 8 -45 l -15 10 20 10 -35 10 48 15 -40 15 20 10 -15 10"
			>
				<set attributeName="stroke-dashoffset" to="1" />
				<animate
					begin="lightningStrike.begin"
					attributeName="stroke-dashoffset"
					values="1; 2.1; 1"
					dur="1.5s"
					restart="whenNotActive"
					calcMode="spline"
					keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
				/>
			</path>
		</g>
	</g>
	<set id="lightningStrike" begin="click" />
</svg>`
};
