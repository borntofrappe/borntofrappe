export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		<radialGradient
			id="gradient-stripes"
			spreadMethod="reflect"
			r="0.2"
			cx="1.25"
			fx="1.25"
			cy="0.5"
			fy="0.5"
		>
			<stop stop-color="#F7C948" offset="0" />
			<stop stop-color="#F7C948" offset="0.45" />
			<stop stop-color="#513C06" offset="0.55" />
			<stop stop-color="#513C06" offset="1" />
		</radialGradient>
	</defs>
</svg>`,
	'bee-is-in-motion': `<svg style="display: block;" viewBox="-55 -27.5 110 80">
	<g transform="translate(-2 1.5)">
		<g
			fill="#3F9142"
			stroke="#3F9142"
			stroke-width="4"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<g transform="translate(7 26) rotate(-10)">
				<path d="M 0 0 c 5 -7 15 -7 20 0 -5 7 -15 7 -20 0" />
			</g>
			<g transform="translate(2.5 27) scale(-0.9 1) rotate(10)">
				<path d="M 0 0 c 5 -7 15 -7 20 0 -5 7 -15 7 -20 0" />
			</g>
			<path d="M 0 0 q 5 10 5 45" />
		</g>

		<g transform="rotate(-5) scale(1 0.96)" fill="#D64545" stroke="#D64545">
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(45)" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(90)" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(135)" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(180)" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(225)" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(270)" />
			<path d="M 0 0 l 7 14 a 6.5 7 0 0 1 -15 0z" transform="rotate(315)" />
		</g>
		<g transform="rotate(-5)">
			<ellipse fill="#DE911D" rx="9" ry="8" stroke="#DE911D" />
			<g fill="black" opacity="0.2">
				<ellipse transform="translate(-5 2.5) rotate(45)" rx="2.5" ry="1.8" />
				<ellipse transform="translate(-1.75 5.5) rotate(20)" rx="1.4" ry="1.1" />
			</g>
		</g>
	</g>

	<g style="cursor: pointer">
		<animateMotion
			id="motion"
			dur="4s"
			path="M 0 0 c -10 -20 -40 -20 -40 0 0 20 30 20 40 0 10 -20 40 -20 40 0 0 20 -30 20 -40 0"
			begin="-3.999s; click"
			restart="whenNotActive"
			rotate="auto"
			fill="freeze"
		/>
		<g>
			<g
				fill="none"
				stroke="#513C06"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M -3 -1 l -2 1 2 1" />
				<path d="M 4 -0.5 l 2 -2" />
				<path d="M 4 -0.5 l 2 -2" transform="scale(1 -1)" />
			</g>
			<g
				fill="#2BB0ED"
				stroke="#2BB0ED"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<g transform="rotate(15)">
					<animateTransform
						attributeName="transform"
						type="rotate"
						dur="4s"
						values="15; -15; 15; -15; 15; -15; 15; -15; 15; -15; 15; -15; 15"
						begin="motion.begin"
					/>
					<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
				</g>
				<g transform="scale(1 -1)">
					<g transform="rotate(15)">
						<animateTransform
							attributeName="transform"
							type="rotate"
							dur="4s"
							values="15; -15; 15; -15; 15; -15; 15; -15; 15; -15; 15; -15; 15"
							begin="motion.begin"
						/>
						<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
					</g>
				</g>
			</g>
			<ellipse rx="4.45" ry="4.2" fill="#513C06" />
			<ellipse rx="4.5" ry="4.25" fill="url(#gradient-stripes)" />
			<circle cx="3.5" r="2.8" fill="#513C06" />

			<circle r="10" opacity="0" />
		</g>
	</g>
</svg>`,
	bee: `<svg style="display: block;" viewBox="-50 -40 100 80">
	<g>
		<g fill="none" stroke="#513C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M -3 -1 l -2 1 2 1" />
			<path d="M 4 -0.5 l 2 -2" />
			<path d="M 4 -0.5 l 2 -2" transform="scale(1 -1)" />
		</g>
		<g
			fill="#2BB0ED"
			stroke="#2BB0ED"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="rotate(15)">
				<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
			</g>
			<g transform="scale(1 -1)">
				<g transform="rotate(15)">
					<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
				</g>
			</g>
		</g>
		<ellipse rx="4.45" ry="4.2" fill="#513C06" />
		<ellipse rx="4.5" ry="4.25" fill="url(#gradient-stripes)" />
		<circle cx="3.5" r="2.8" fill="#513C06" />

		<circle r="10" opacity="0" />
	</g>
</svg>`,
	'bee-trajectory': `<svg style="display: block;" viewBox="-50 -40 100 80">
	<g>
		<g fill="none" stroke="#513C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M -3 -1 l -2 1 2 1" />
			<path d="M 4 -0.5 l 2 -2" />
			<path d="M 4 -0.5 l 2 -2" transform="scale(1 -1)" />
		</g>
		<g
			fill="#2BB0ED"
			stroke="#2BB0ED"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="rotate(15)">
				<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
			</g>
			<g transform="scale(1 -1)">
				<g transform="rotate(15)">
					<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
				</g>
			</g>
		</g>
		<ellipse rx="4.45" ry="4.2" fill="#513C06" />
		<ellipse rx="4.5" ry="4.25" fill="url(#gradient-stripes)" />
		<circle cx="3.5" r="2.8" fill="#513C06" />
	</g>
	<g fill="none" stroke="currentColor" stroke-dasharray="2 4" stroke-linecap="round">
		<path d=" M 0 0 c -10 -20 -40 -20 -40 0 0 20 30 20 40 0 10 -20 40 -20 40 0 0 20 -30 20 -40 0" />
	</g>
</svg>`,
	'animate-motion': `<svg style="display: block;" viewBox="-50 -40 100 80">
	<g fill="none" stroke="currentColor" stroke-dasharray="2 4" stroke-linecap="round">
		<path d=" M 0 0 c -10 -20 -40 -20 -40 0 0 20 30 20 40 0 10 -20 40 -20 40 0 0 20 -30 20 -40 0" />
	</g>

	<g style="cursor: pointer">
		<animateMotion
			dur="4s"
			path="M 0 0 c -10 -20 -40 -20 -40 0 0 20 30 20 40 0 10 -20 40 -20 40 0 0 20 -30 20 -40 0"
			rotate="auto"
			fill="freeze"
			begin="click"
			restart="whenNotActive"
		/>
		<g fill="none" stroke="#513C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M -3 -1 l -2 1 2 1" />
			<path d="M 4 -0.5 l 2 -2" />
			<path d="M 4 -0.5 l 2 -2" transform="scale(1 -1)" />
		</g>
		<g
			fill="#2BB0ED"
			stroke="#2BB0ED"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="rotate(15)">
				<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
			</g>
			<g transform="scale(1 -1)">
				<g transform="rotate(15)">
					<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
				</g>
			</g>
		</g>
		<ellipse rx="4.45" ry="4.2" fill="#513C06" />
		<ellipse rx="4.5" ry="4.25" fill="url(#gradient-stripes)" />
		<circle cx="3.5" r="2.8" fill="#513C06" />
	</g>
</svg>`
};
