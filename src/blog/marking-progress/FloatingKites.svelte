<div>
	<svg role="img" style="display: block;" viewBox="0 -82.5 85 82.5">
		<title>Three floating kites</title>
		<description
			>A set of kites floating in the air with a green color palette and frilly strings.</description
		>
		<defs>
			<marker
				id="kites-marker-ribbon"
				viewBox="0 0 3 6"
				orient="auto"
				refX="1.5"
				refY="3"
				markerWidth="8"
				markerHeight="8"
			>
				<g transform="translate(3 0) rotate(90)">
					<path
						fill="hsl(14, 57%, 50%)"
						d="M 0 0 q 1 0 3 1.2 q 2 -1.2 3 -1.2 q -0.5 1.5 0 3 q -1 0 -3 -1.2 q -2 1.2 -3 1.2 q 0.5 -1.5 0 -3"
					/>
				</g>
			</marker>

			<marker
				id="kites-marker-kite-0"
				viewBox="0 -0.2 37.5 50.4"
				orient="auto"
				refX="18.75"
				refY="25"
				markerWidth="32"
				markerHeight="32"
				markerUnits="userSpaceOnUse"
			>
				<g transform="translate(37.5 0) rotate(90)">
					<path
						fill="none"
						stroke="currentColor"
						stroke-width="0.4"
						stroke-linecap=""
						d="M 0 25 q 12.5 4 25 12.3 12.5 -8.3 25 -12.3"
					/>
					<path fill="hsl(182, 67%, 37%)" d="M 25 0 l -25 25 q 10 0 25 12.5 q 15 -12.5 25 -12.5z" />
					<path
						fill="hsl(183, 77%, 29%)"
						d="M 25 0 l -17.5 17.5 q 10 0 17.5 8.75 q 7.5 -8.75 17.5 -8.75z"
					/>
					<path fill="hsl(182, 81%, 22%)" d="M 25 0 l -10 10 q 5 0 10 5 q 5 -5 10 -5z" />
				</g>
			</marker>
			<marker
				id="kites-marker-kite-1"
				viewBox="0 0 60 50"
				orient="auto"
				refX="30"
				refY="25"
				markerWidth="32"
				markerHeight="32"
				markerUnits="userSpaceOnUse"
			>
				<g transform="translate(60 0) rotate(90)">
					<path fill="currentColor" d="M 25 0 l -25 25 l 25 35 25 -35z" />
					<path fill="hsl(182, 67%, 37%)" d="M 25 0 l -25 25 l 24.5 -0.5" />
					<path fill="hsl(183, 77%, 29%)" d="M 0 25 l 25 35 l -0.5 -34.5" />
					<path fill="hsl(182, 67%, 37%)" d="M 25 60 l 25 -35 l -24.5 0.5" />
					<path fill="hsl(183, 77%, 29%)" d="M 50 25 l -25 -25 l 0.5 24.5" />
					<g fill="none" stroke="currentColor" stroke-width="0.5">
						<path d="M 0 25 q 2 7.5 1 15 t 2 15" />
						<path transform="translate(50 0) scale(-1 1)" d="M 0 25 q 2 7.5 1 15 t 2 15" />
					</g>
				</g>
			</marker>
			<marker
				id="kites-marker-kite-2"
				viewBox="0 0 36 64"
				orient="auto"
				refX="18"
				refY="31"
				markerWidth="32"
				markerHeight="32"
				markerUnits="userSpaceOnUse"
			>
				<g transform="translate(36 0) rotate(90)">
					<path
						fill="hsl(183, 77%, 29%)"
						d="M 32 0 q -20 0 -30 20 a 8 8 0 0 1 7.5 7.5 a 8 8 0 0 1 10 5 a 10 10 0 0 1 12.5 2.5 a 10 10 0 0 1 12.5 -2.5 a 8 8 0 0 1 10 -5 a 8 8 0 0 1 7.5 -7.5 q -10 -20 -30 -20"
					/>
					<path
						fill="hsl(182, 67%, 37%)"
						d="M 9.5 27.5 a 8 8 0 0 1 10 5 a 13.5 13.5 0 0 1 25 0 a 8 8 0 0 1 10 -5 a 24 24 0 0 0 -45 0"
					/>
					<g fill="currentColor">
						<circle cx="2" cy="20" r="1.25" />
						<circle cx="32" cy="35" r="1.25" />
						<circle cx="61" cy="20" r="1.25" />
					</g>
					<g fill="currentColor">
						<circle cx="9.5" cy="27.5" r="1.25" />
						<circle cx="19.5" cy="32.5" r="1.25" />
						<circle cx="44.5" cy="32.5" r="1.25" />
						<circle cx="54.5" cy="27.5" r="1.25" />
					</g>
				</g>
			</marker>
		</defs>
		<g marker-mid="url(#kites-marker-ribbon)" fill="none" stroke="currentColor" stroke-width="0.5">
			<path marker-end="url(#kites-marker-kite-2)" d="M 0 0 q 4 -7 10 -5 t 10 -5 10 -5 20 -2.5" />
			<path
				marker-end="url(#kites-marker-kite-1)"
				d="M 0 -25 q 4 -6 10 -5 t 10 -5 10 -5 10 -5 10 -5 17.5 -5"
			/>
			<path marker-end="url(#kites-marker-kite-0)" d="M 0 -50 q 4 -5 10 -5 t 10 -5 15 -7.5" />
		</g>
	</svg>

	<slot />
</div>

<style>
	div > :global(* + *) {
		margin-block-start: 0.5rem;
	}

	@media (min-width: 30rem) {
		svg {
			margin-block-start: initial;
			margin-left: 1.5rem;
			float: right;
			width: 60%;
			max-width: 30rem;
			transform: scaleX(-1);
			shape-outside: polygon(
				63% 0%,
				40% 16%,
				24% 16%,
				2% 23%,
				10% 50%,
				30% 60%,
				45% 60%,
				37% 63%,
				30% 70%,
				27% 80%,
				28% 90%,
				35% 100%,
				100% 100%,
				100% 36%,
				71% 20%,
				67% 0%
			);
		}
	}
</style>
