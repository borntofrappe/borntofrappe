<script>
	const size = 9;
	const padding = 2;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<symbol id="pick-a-side-sprite-1" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g fill="currentColor">
					<path d="M -2.5 -2.3 v 2 h 1 a 1 1 0 0 1 -1 -1" />
					<path transform="scale(-1 1)" d="M -2.5 -2.3 v 2 h 1 a 1 1 0 0 1 -1 -1" />
				</g>
				<g fill="#f7f7f7">
					<circle r="2.5" cy="-2.3" />
					<path d="M -0.7 -0.7 h 1.4" />
					<g stroke-width="0.5">
						<path d="M -0.8 -1.6 h 0" stroke-linecap="square" />
						<path d="M 0.8 -1.6 h 0" stroke-linecap="square" />
					</g>
					<path
						d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 l 1.3 1.8 h -1.3 v 1.5 h -1.5 v -2 2 h -1.5 v -1.5 h -1.3 l 1.3 -1.8 h -1.5 v -1.5z"
					/>
				</g>
				<path fill="#bd4900" d="M -2.5 -2.3 a 2.5 2.5 0 0 1 5 0" />
				<path
					stroke-width="0.3"
					fill="#f70000"
					d="M 1.75 -4 l 0.75 -0.6 h 0.5 v 2 h -0.5 l -0.75 -0.6 -0.75 0.6 h -0.5 v -2 h 0.5z"
				/>
			</g>
		</symbol>
		<symbol id="pick-a-side-sprite-2" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g fill="#f7f7f7">
					<circle r="2.5" cy="-2.3" />
					<path d="M -0.7 -0.7 h 1.4" />
					<g stroke-width="0.5">
						<path d="M -0.8 -1.6 h 0" stroke-linecap="square" />
						<path d="M 0.8 -1.6 h 0" stroke-linecap="square" />
					</g>
					<path
						d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 v 3.3 h -1.5 v -2 2 h -1.5 v -3.3  h -1.5 v -1.5z"
					/>
				</g>
				<path fill="#bd4900" d="M -2.5 -2.3 a 2.5 2.5 0 0 1 5 0" />
			</g>
		</symbol>

		<pattern
			id="pick-a-side-pattern-stroke-1"
			viewBox="0 0 2 2"
			width="0.1"
			height="0.1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#f7ae42">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern
			id="pick-a-side-pattern-stroke-2"
			viewBox="0 0 2 2"
			width="0.1"
			height="0.1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#21c6ce">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern id="pick-a-side-pattern-grid-1" width="0.1" height="0.1" viewBox="-0.05 -0.05 1.1 1.1">
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-1)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
		<pattern id="pick-a-side-pattern-grid-2" width="0.1" height="0.1" viewBox="-0.05 -0.05 1.1 1.1">
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-2)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
	</defs>

	<rect width="80" height="50" fill="#f7f7f7" />

	<rect fill="url(#pick-a-side-pattern-grid-1)" y="18" width="40" height="40" />
	<rect fill="url(#pick-a-side-pattern-grid-2)" x="40" y="18" width="40" height="40" />

	<g transform="translate(20 {padding * 2})">
		<g transform="translate({-size / 2} 0)">
			<g transform="translate({-padding} {-padding})">
				<g stroke="currentColor" stroke-width="0.5">
					<rect width={size + padding * 2} height={size + padding * 2} rx={padding} fill="none" />
					<path
						fill="currentColor"
						d="M 0 {size} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
							-1} v {padding * -1} a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
							-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
					>
						<animate
							begin="pickASidePress1.begin"
							attributeName="d"
							to="M 0 {size +
								padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
								-1} v 0 a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
								-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
							dur="0.25s"
							fill="freeze"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
					</path>
				</g>
			</g>

			<g transform="translate(0 {-padding / 2})">
				<animateTransform
					id="pickASidePressed1"
					begin="pickASidePress1.begin"
					attributeName="transform"
					type="translate"
					to="0 0"
					dur="0.25s"
					fill="freeze"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.5 1;"
				/>

				<svg width={size} height={size}>
					<use href="#pick-a-side-sprite-1" />
				</svg>
			</g>

			<g style:cursor="pointer" opacity="0">
				<set
					id="pickASidePress1"
					begin="click"
					end="pickASidePress2.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<set
					begin="pickASidePress2.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<rect
					x="-{padding}"
					y="-{padding}"
					width={size + padding * 2}
					height={size + padding * 2}
					rx={padding}
				/>
			</g>
		</g>
	</g>

	<g transform="translate(60 {padding * 2})">
		<g transform="translate({-size / 2} 0)">
			<g transform="translate({-padding} {-padding})">
				<g stroke="currentColor" stroke-width="0.5">
					<rect width={size + padding * 2} height={size + padding * 2} rx={padding} fill="none" />
					<path
						fill="currentColor"
						d="M 0 {size} v {padding} a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
							-1} v {padding * -1} a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
							-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
					>
						<animate
							begin="pickASidePress2.begin"
							attributeName="d"
							to="M 0 {size +
								padding} v 0 a {padding} {padding} 0 0 0 {padding} {padding} h {size} a {padding} {padding} 0 0 0 {padding} {padding *
								-1} v 0 a {padding} {padding} 0 0 1 {padding * -1} {padding} h {size *
								-1} a {padding} {padding} 0 0 1 {padding * -1} {padding * -1}"
							dur="0.25s"
							fill="freeze"
							restart="never"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
						/>
					</path>
				</g>
			</g>

			<g transform="translate(0 {-padding / 2})">
				<animateTransform
					id="pickASidePressed2"
					begin="pickASidePress2.begin"
					attributeName="transform"
					type="translate"
					to="0 0"
					dur="0.25s"
					fill="freeze"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.5 1;"
				/>

				<svg width={size} height={size}>
					<use href="#pick-a-side-sprite-2" />
				</svg>
			</g>

			<g style:cursor="pointer" opacity="0">
				<set
					id="pickASidePress2"
					begin="click"
					end="pickASidePress1.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<set
					begin="pickASidePress1.begin"
					attributeName="display"
					to="none"
					fill="freeze"
					restart="never"
				/>
				<rect
					x="-{padding}"
					y="-{padding}"
					width={size + padding * 2}
					height={size + padding * 2}
					rx={padding}
				/>
			</g>
		</g>
	</g>

	<g transform="translate(40 10)">
		<g stroke="currentColor" stroke-width="0.5">
			<g>
				<animateTransform
					begin="pickASidePressed1.begin"
					attributeName="transform"
					type="rotate"
					to="50"
					dur="0.25s"
					fill="freeze"
					restart="never"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.5 1;"
				/>
				<path fill="#f7ae42" d="M -2 0 h -5 v 3 h 3 v -3" />
			</g>
			<g transform="scale(-1 1)">
				<g>
					<animateTransform
						begin="pickASidePressed2.begin"
						attributeName="transform"
						type="rotate"
						to="50"
						dur="0.25s"
						fill="freeze"
						restart="never"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.5 0 0.5 1;"
					/>
					<path fill="#21c6ce" d="M -2 0 h -5 v 3 h 3 v -3" />
				</g>
			</g>
		</g>
	</g>
</svg>
