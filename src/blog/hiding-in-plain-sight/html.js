export default {
	gradient: `<svg style="display: block; max-inline-size: 18rem; margin-inline: auto;" viewBox="0 0 1 1">
	<defs>
		<linearGradient id="gradient-gradient">
			<stop stop-color="white" offset="0" />
			<stop stop-color="goldenrod" offset="1" />
		</linearGradient>
	</defs>
	<rect fill="url(#gradient-gradient)" width="1" height="1" />
</svg>`,
	transparent: `<svg style="display: block; max-inline-size: 18rem; margin-inline: auto;" viewBox="0 0 1 1">
	<defs>
		<linearGradient id="transparent-gradient-light">
			<stop stop-color="white" offset="0" />
			<stop stop-color="transparent" offset="1" />
		</linearGradient>
	</defs>
	<rect fill="goldenrod" width="1" height="1" />
	<rect fill="url(#transparent-gradient-light)" width="1" height="1" />
</svg>`,
	'transparent-css': `<div
	style="
		display: block;
        max-inline-size: 18rem;
        margin-inline: auto;
		inline-size: 100%;
		background: goldenrod;
		background-image: linear-gradient(white, transparent);
        "
>
	<div
		style="
		padding-block-end: 100%;
    "
	/>
</div>`,
	mask: `<svg style="display: block; max-inline-size: 18rem; margin-inline: auto;" viewBox="0 0 1 1">
	<defs>
		<linearGradient id="mask-gradient-lightness">
			<stop stop-color="white" offset="0" />
			<stop stop-color="black" offset="1" />
		</linearGradient>
		<mask id="mask-mask-light">
			<rect fill="url(#mask-gradient-lightness)" width="1" height="1" />
		</mask>
	</defs>
	<rect fill="goldenrod" width="1" height="1" />
	<rect mask="url(#mask-mask-light)" fill="white" width="1" height="1" />
</svg>`,
	'stop-opacity': `<svg style="display: block; max-inline-size: 18rem; margin-inline: auto;" viewBox="0 0 1 1">
	<defs>
		<linearGradient id="stop-opacity-gradient-light">
			<stop stop-color="white" offset="0" />
			<stop stop-opacity="0" stop-color="white" offset="1" />
		</linearGradient>
	</defs>
	<rect fill="goldenrod" width="1" height="1" />
	<rect fill="url(#stop-opacity-gradient-light)" width="1" height="1" />
</svg>`,
	picture: `<svg role="img" style="display: block;" viewBox="-4 -4 88 58">
	<title>An illuminating picture</title>
	<defs>
		<radialGradient id="picture-gradient-light">
			<stop stop-color="hsl(52 88% 72%)" stop-opacity="0.65" offset="0" />
			<stop stop-color="hsl(52 88% 72%)" stop-opacity="0" offset="1" />
		</radialGradient>

		<mask id="picture-mask-light">
			<rect fill="black" width="80" height="50" />
			<circle fill="white" cx="70" cy="12.5" r="75">
				<animate
					attributeName="r"
					values="75; 50; 75"
					begin="60s"
					dur="120s"
					calcMode="spline"
					keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
					repeatCount="indefinite"
				/>
			</circle>
		</mask>

		<g id="picture-sailing-boat">
			<rect fill="hsl(187 19% 27%)" y="1" width="8" height="1" rx="0.75" />
			<path fill="hsl(19 77% 19%)" d="M 0 0 q 0.5 1.5 1.5 1.5 l 5 0 q 1 0 1.5 -1.5" />
			<path fill="hsl(51 14% 90%)" d="M 4 0 l 0 -9 q -2.5 1 -3.25 8.5 l 3.25 0" />
			<path fill="hsl(51 14% 90%)" d="M 4 0 l 0 -9 q -2.5 1 -3.25 8.5 l 3.25 0" />
			<path fill="hsl(51 14% 90%)" d="M 4 0 l 0 -7 q 2 1 3 5 l -3 2" />
		</g>
	</defs>

	<rect fill="hsl(186 24% 54%)" width="80" height="50" />
	<rect fill="hsl(190 20% 35%)" y="38" width="80" height="12" />
	<rect fill="hsl(190 16% 31%)" y="40" width="80" height="10" />
	<rect fill="hsl(187 19% 27%)" y="48" width="80" height="2" />

	<g fill="hsl(188 30% 59%)">
		<path
			d="M 2.5 10 l 20 0 c 1.75 0 0.75 -2 0 -2 q -2 -1 -4 0 t -4 0 -4 0 t -4 0 t -4 0 c -0.75 0 -1.75 2 0 2"
		/>
		<path
			d="M 27.5 5 l 20 0 c 1.75 0 0.75 -2 0 -2 q -2 -1 -4 0 t -4 0 -4 0 t -4 0 t -4 0 c -0.75 0 -1.75 2 0 2"
		/>
		<path
			d="M 52.5 7.5 l 20 0 c 1.75 0 0.75 -2 0 -2 q -2 -1 -4 0 t -4 0 -4 0 t -4 0 t -4 0 c -0.75 0 -1.75 2 0 2"
		/>
	</g>

	<g transform="translate(70 12.5)">
		<path fill="hsl(0 0% 100%)" d="M -3 9.5 l 6 0 2 16 -10 0" />
		<path fill="hsl(51 14% 90%)" d="M 2 9.5 l 1 0 2.5 16 -1 0" />
		<rect fill="hsl(2 75% 57%)" x="-4" y="8" width="8" height="1.5" rx="0.5" />
		<path fill="hsl(0 0% 100%)" d="M -2.5 2 l 5 0 -0.5 2 0.75 4 -5.5 0 0.75 -4 -0.5 -2" />
		<path fill="hsl(51 14% 90%)" d="M 1.75 2 l 0.75 0 -0.5 2 0.75 4 -0.75 0 -0.75 -4" />
		<rect fill="hsl(0 0% 100%)" x="-1.75" y="-1.5" width="3.5" height="3.5" />
		<rect fill="hsl(2 75% 57%)" x="-2" y="-2.5" width="4" height="1" rx="0.5" />
		<circle fill="hsl(52 88% 72%)" r="0.75" />
		<g stroke="hsl(2 75% 57%)" stroke-width="0.4">
			<path d="M -2.8 1 h 5.6" />
			<path d="M -2.3 2 v -1.75" />
			<path d="M 0 2 v -1.75" />
			<path d="M 2.3 2 v -1.75" />
		</g>
	</g>

	<path
		fill="hsl(195 17% 23%)"
		d="M 60 38 l 20 0 l 0 -3 q -3 -1 -6 0 t -6 0 -6 0 c -2 0.25 -3 3 0 3"
	/>

	<g transform="translate(15 45)">
		<g>
			<animateTransform
				attributeName="transform"
				type="translate"
				values="0 0; -100 0"
				begin="60s"
				dur="120s"
				repeatCount="indefinite"
			/>
			<use href="#picture-sailing-boat" />
			<use x="100" href="#picture-sailing-boat" />
		</g>
	</g>

	<circle
		mask="url(#picture-mask-light)"
		fill="url(#picture-gradient-light)"
		cx="70"
		cy="12.5"
		r="75"
	/>

	<g fill="none">
		<rect stroke="hsl(19 77% 19%)" stroke-width="4" x="-2" y="-2" width="84" height="54" />
		<g stroke="hsl(18 76% 15%)">
			<rect stroke-width="0.5" x="0" y="0" width="80" height="50" />
			<rect stroke-width="0.75" x="-3.5" y="-3.5" width="87" height="57" />
		</g>
	</g>
</svg>`
};
