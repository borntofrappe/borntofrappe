export default {
	sun: `<svg style="display: block;" viewBox="0 0 8 8">
	<title>Sun</title>
	<g fill="currentColor">
		<rect x="3" width="1" height="1" />
		<rect y="1" width="1" height="1" />
		<rect x="6" y="1" width="1" height="1" />
		<rect x="2" y="2" width="3" height="1" />
		<rect x="1" y="3" width="5" height="1" />
		<rect x="1" y="4" width="5" height="1" />
		<rect x="2" y="5" width="3" height="1" />
		<rect y="6" width="1" height="1" />
		<rect x="6" y="6" width="1" height="1" />
		<rect x="3" y="7" width="1" height="1" />
	</g>
</svg>`,
	star: `<svg style="display: block;" viewBox="0 0 8 8">
	<title>Star</title>
	<defs>
		<rect id="p" width="1" height="1" />
	</defs>
	<g fill="currentColor">
		<use href="#p" x="3" y="1" />
		<use href="#p" x="3" y="2" />
		<use href="#p" y="3" />
		<use href="#p" x="1" y="3" />
		<use href="#p" x="2" y="3" />
		<use href="#p" x="3" y="3" />
		<use href="#p" x="4" y="3" />
		<use href="#p" x="5" y="3" />
		<use href="#p" x="6" y="3" />
		<use href="#p" x="1" y="4" />
		<use href="#p" x="2" y="4" />
		<use href="#p" x="3" y="4" />
		<use href="#p" x="4" y="4" />
		<use href="#p" x="5" y="4" />
		<use href="#p" x="2" y="5" />
		<use href="#p" x="3" y="5" />
		<use href="#p" x="4" y="5" />
		<use href="#p" x="1" y="6" />
		<use href="#p" x="2" y="6" />
		<use href="#p" x="3" y="6" />
		<use href="#p" x="4" y="6" />
		<use href="#p" x="5" y="6" />
		<use href="#p" y="7" />
		<use href="#p" x="1" y="7" />
		<use href="#p" x="5" y="7" />
		<use href="#p" x="6" y="7" />
	</g>
</svg>`,
	offset: `<svg style="display: block;" viewBox="0 0 8 8">
	<title>Off by 0.5</title>
	<g stroke="currentColor">
	<g stroke-width="0.025">
		<path d="M 0 0 h 8 M 0 1 h 8 M 0 2 h 8 M 0 3 h 8 M 0 4 h 8 M 0 5 h 8 M 0 6 h 8 M 0 7 h 8 M 0 8 h 8" />
	</g>
		<path d="M 1 1 h 4 M 2 2 h 4 M 3 3 h 4" />
	</g>
</svg>`,
	moon: `<svg style="display: block;" viewBox="0 -0.5 8 8">
	<title>Moon</title>
	<g stroke="currentColor">
		<path d="M 1 1 h 4 M 2 2 h 4 M 3 3 h 4 M 3 4 h 4 M 3 5 h 4 M 2 6 h 4 M 1 7 h 4" />
	</g>
</svg>`,
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;" viewBox="0 0 16 16">
	<defs>
		<symbol viewBox="0 -0.5 16 16" id="d0">
			<g fill="none" stroke="currentColor">
				<g stroke="var(--c0, hsl(0, 0%, 10%))">
					<path
						d="M 5 0 h 6 M 4 1 h 9 M 4 2 h 10 M 3 3 h 10 M 3 4 h 12 M 4 5 h 10 M 4 6 h 9 M 1 7 h 14 M 0 8 h 16 M 1 9 h 15 M 1 10 h 15 M 1 11 h 15 M 2 12 h 14 M 3 13 h 12 M 5 14 h 9 M 4 15 h 8"
					/>
				</g>
				<g stroke="var(--c1, hsl(0, 0%, 50%))">
					<path
						d="M 5 5 h 2 M 8 5 h 2 M 1 8 h 4 M 5 9 h 1 M 13 9 h 2 M 5 10 h 2 M 9 10 h 2 M 14 10 h 1 M 3 11 h 1 M 6 11 h 5 M 14 11 h 1 M 14 12 h 1 M 5 13 h 2 M 8 13 h 3 M 13 13 h 1 M 8 14 h 2"
					/>
				</g>
				<g stroke="var(--c2, hsl(0, 0%, 97%))">
					<path
						d="M 5 3 h 1 M 5 4 h 1 M 8 4 h 1 M 7 6 h 1 M 5 7 h 1 M 7 7 h 2 M 10 7 h 1 M 6 8 h 4 M 3 9 h 1 M 11 9 h 2 M 2 10 h 2 M 11 10 h 1 M 2 11 h 1 M 4 11 h 1 M 11 11 h 1 M 3 12 h 2 M 11 12 h 1 M 12 13 h 1"
					/>
				</g>
			</g>
		</symbol>
		<symbol viewBox="0 -0.5 16 16" id="d1">
			<g fill="none" stroke="currentColor">
				<g stroke="var(--c0, hsl(0, 0%, 10%))">
					<path
						d="M 5 0 h 6 M 4 1 h 9 M 4 2 h 10 M 3 3 h 10 M 3 4 h 12 M 4 5 h 10 M 4 6 h 9 M 1 7 h 14 M 0 8 h 16 M 1 9 h 15 M 0 10 h 16 M 0 11 h 16 M 1 12 h 2 M 4 12 h 12 M 4 13 h 11 M 5 14 h 6 M 12 14 h 2 M 4 15 h 8"
					/>
				</g>
				<g stroke="var(--c1, hsl(0, 0%, 50%))">
					<path
						d="M 5 5 h 2 M 8 5 h 2 M 1 8 h 4 M 3 9 h 1 M 5 9 h 1 M 13 9 h 2 M 4 10 h 3 M 9 10 h 2 M 14 10 h 1 M 6 11 h 5 M 14 11 h 1 M 5 12 h 1 M 14 12 h 1 M 5 13 h 3 M 9 13 h 2 M 13 13 h 1 M 6 14 h 2"
					/>
				</g>
				<g stroke="var(--c2, hsl(0, 0%, 97%))">
					<path
						d="M 5 3 h 1 M 5 4 h 1 M 8 4 h 1 M 7 6 h 1 M 5 7 h 1 M 7 7 h 2 M 10 7 h 1 M 6 8 h 4 M 11 9 h 2 M 1 10 h 2 M 11 10 h 1 M 1 11 h 2 M 11 11 h 1 M 11 12 h 1 M 12 13 h 1"
					/>
				</g>
			</g>
		</symbol>
		<symbol viewBox="0 -0.5 16 16" id="u0">
			<g fill="none" stroke="currentColor">
				<g stroke="var(--c0, hsl(0, 0%, 10%))">
					<path
						d="M 5 0 h 6 M 4 1 h 8 M 3 2 h 9 M 4 3 h 9 M 2 4 h 11 M 3 5 h 9 M 4 6 h 8 M 1 7 h 14 M 0 8 h 16 M 0 9 h 15 M 0 10 h 15 M 0 11 h 15 M 0 12 h 1 M 3 12 h 11 M 1 13 h 12 M 2 14 h 9 M 4 15 h 8"
					/>
				</g>
				<g stroke="var(--c1, hsl(0, 0%, 50%))">
					<path
						d="M 1 8 h 4 M 11 8 h 4 M 3 9 h 1 M 5 9 h 1 M 10 9 h 1 M 12 9 h 1 M 5 10 h 6 M 6 11 h 4 M 1 12 h 3 M 5 12 h 1 M 2 13 h 2 M 5 13 h 3 M 9 13 h 2 M 6 14 h 2"
					/>
				</g>
				<g stroke="var(--c2, hsl(0, 0%, 97%))">
					<path
						d="M 9 1 h 1 M 10 2 h 1 M 5 7 h 1 M 10 7 h 1 M 6 8 h 4 M 2 10 h 1 M 13 10 h 1 M 2 11 h 1 M 12 11 h 2 M 12 12 h 1"
					/>
				</g>
			</g>
		</symbol>
		<symbol viewBox="0 -0.5 16 16" id="u1">
			<g fill="none" stroke="currentColor">
				<g stroke="var(--c0, hsl(0, 0%, 10%))">
					<path
						d="M 5 0 h 6 M 4 1 h 8 M 3 2 h 9 M 4 3 h 9 M 2 4 h 11 M 3 5 h 9 M 4 6 h 8 M 1 7 h 14 M 0 8 h 16 M 0 9 h 15 M 0 10 h 14 M 0 11 h 14 M 0 12 h 1 M 3 12 h 10 M 1 13 h 11 M 2 14 h 9 M 4 15 h 8"
					/>
				</g>
				<g stroke="var(--c1, hsl(0, 0%, 50%))">
					<path
						d="M 1 8 h 4 M 11 8 h 4 M 3 9 h 1 M 5 9 h 1 M 10 9 h 1 M 12 9 h 1 M 5 10 h 6 M 6 11 h 4 M 1 12 h 3 M 5 12 h 1 M 10 12 h 1 M 2 13 h 2 M 5 13 h 2 M 8 13 h 3 M 8 14 h 2"
					/>
				</g>
				<g stroke="var(--c2, hsl(0, 0%, 97%))">
					<path
						d="M 9 1 h 1 M 10 2 h 1 M 5 7 h 1 M 10 7 h 1 M 6 8 h 4 M 2 10 h 1 M 2 11 h 1 M 12 11 h 1"
					/>
				</g>
			</g>
		</symbol>
		<symbol viewBox="0 -0.5 16 16" id="r0">
			<g fill="none" stroke="currentColor">
				<g stroke="var(--c0, hsl(0, 0%, 10%))">
					<path
						d="M 6 0 h 6 M 4 1 h 9 M 2 2 h 11 M 3 3 h 10 M 1 4 h 11 M 2 5 h 10 M 13 5 h 2 M 3 6 h 9 M 13 6 h 3 M 4 7 h 8 M 13 7 h 3 M 3 8 h 13 M 2 9 h 14 M 3 10 h 13 M 3 11 h 13 M 3 12 h 9 M 13 12 h 3 M 13 13 h 2 M 4 13 h 6 M 5 14 h 6 M 5 15 h 6"
					/>
				</g>
				<g stroke="var(--c1, hsl(0, 0%, 50%))">
					<path
						d="M 14 6 h 1 M 14 7 h 1 M 14 8 h 1 M 3 9 h 3 M 7 9 h 1 M 14 9 h 1 M 8 10 h 2 M 14 10 h 1 M 9 11 h 2 M 14 11 h 1 M 4 12 h 1 M 14 12 h 1 M 8 13 h 1 M 6 14 h 4"
					/>
				</g>
				<g stroke="var(--c2, hsl(0, 0%, 97%))">
					<path
						d="M 7 2 h 1 M 10 2 h 1 M 6 3 h 1 M 10 3 h 1 M 9 4 h 2 M 6 5 h 1 M 8 5 h 3 M 6 6 h 3 M 8 7 h 1 M 10 7 h 1 M 8 8 h 3 M 12 9 h 1 M 5 10 h 2 M 12 10 h 1 M 5 11 h 3 M 6 12 h 2"
					/>
				</g>
			</g>
		</symbol>
		<symbol viewBox="0 -0.5 16 16" id="r1">
			<g fill="none" stroke="currentColor">
				<g stroke="var(--c0, hsl(0, 0%, 10%))">
					<path
						d="M 5 1 h 7 M 3 2 h 10 M 2 3 h 11 M 3 4 h 9 M 2 5 h 10 M 1 6 h 11 M 13 6 h 2 M 2 7 h 10 M 13 7 h 3 M 4 8 h 8 M 13 8 h 3 M 3 9 h 13 M 2 10 h 14 M 3 11 h 13 M 2 12 h 14 M 2 13 h 14 M 2 14 h 13 M 1 15 h 11"
					/>
				</g>
				<g stroke="var(--c1, hsl(0, 0%, 50%))">
					<path
						d="M 14 7 h 1 M 14 8 h 1 M 14 9 h 1 M 3 10 h 4 M 14 10 h 1 M 8 11 h 3 M 14 11 h 1 M 9 12 h 1 M 14 12 h 1 M 6 13 h 2 M 10 13 h 3 M 14 13 h 1 M 10 14 h 2"
					/>
				</g>
				<g stroke="var(--c2, hsl(0, 0%, 97%))">
					<path
						d="M 7 3 h 1 M 10 3 h 1 M 6 4 h 1 M 10 4 h 1 M 9 5 h 2 M 6 6 h 1 M 8 6 h 3 M 6 7 h 3 M 8 8 h 1 M 10 8 h 1 M 8 9 h 3 M 12 10 h 1 M 4 11 h 2 M 12 11 h 1 M 3 12 h 3 M 3 13 h 2 M 5 14 h 1"
					/>
				</g>
			</g>
		</symbol>
		<symbol viewBox="0 0 16 16" id="l0">
			<use transform="translate(16 0) scale(-1 1)" href="#r0" />
		</symbol>
		<symbol viewBox="0 0 16 16" id="l1">
			<use transform="translate(16 0) scale(-1 1)" href="#r1" />
		</symbol>
	</defs>
</svg>`,
	boy: `<svg style="display: block;" viewBox="0 -0.5 16 16">
	<title>Boy</title>
	<g fill="none" stroke="currentColor">
		<g stroke="var(--c0, hsl(0, 0%, 10%))">
			<path
				d="M 5 0 h 6 M 4 1 h 9 M 4 2 h 10 M 3 3 h 10 M 3 4 h 12 M 4 5 h 10 M 4 6 h 9 M 1 7 h 14 M 0 8 h 16 M 1 9 h 15 M 1 10 h 15 M 1 11 h 15 M 2 12 h 14 M 3 13 h 12 M 5 14 h 9 M 4 15 h 8"
			/>
		</g>
		<g stroke="var(--c1, hsl(0, 0%, 48%))">
			<path
				d="M 5 5 h 2 M 8 5 h 2 M 1 8 h 4 M 5 9 h 1 M 13 9 h 2 M 5 10 h 2 M 9 10 h 2 M 14 10 h 1 M 3 11 h 1 M 6 11 h 5 M 14 11 h 1 M 14 12 h 1 M 5 13 h 2 M 8 13 h 3 M 13 13 h 1 M 8 14 h 2"
			/>
		</g>
		<g stroke="var(--c2, hsl(0, 0%, 92%))">
			<path
				d="M 5 3 h 1 M 5 4 h 1 M 8 4 h 1 M 7 6 h 1 M 5 7 h 1 M 7 7 h 2 M 10 7 h 1 M 6 8 h 4 M 3 9 h 1 M 11 9 h 2 M 2 10 h 2 M 11 10 h 1 M 2 11 h 1 M 4 11 h 1 M 11 11 h 1 M 3 12 h 2 M 11 12 h 1 M 12 13 h 1"
			/>
		</g>
	</g>
</svg>`,
	step: `<svg
	style="display: block; --c0: #242424; --c1: #549b57; --c2: #fdfdfb;"
	shape-rendering="crispEdges"
	viewBox="0 0 1 1"
>
	<title>Colorful boy</title>
	<use style="cursor: pointer;" href="#d0" width="1" height="1">
		<animate
			attributeName="href"
			values="#d0; #d1"
			dur="0.4s"
			calcMode="discrete"
			begin="click"
			restart="whenNotActive"
		/>
	</use>
</svg>`,
	walk: `<svg
	style="display: block; --c0: #242424; --c1: #549b57; --c2: #fdfdfb;"
	shape-rendering="crispEdges"
	viewBox="0 0 2 2"
>
	<title>Game boy</title>
	<g style="cursor: pointer;">
		<animateTransform
			id="walk"
			attributeName="transform"
			type="translate"
			values="0 0;0 1; 1 1; 1 0; 0 0;"
			dur="3s"
			begin="click"
			restart="whenNotActive"
		/>
		<use href="#d0" width="1" height="1">
			<animate
				attributeName="href"
				calcMode="discrete"
				values="#d0; #d1; #d0; #d1; #d0; #d1; #r0; #r1; #r0; #r1; #r0; #r1; #u0; #u1; #u0; #u1; #u0; #u1; #l0; #l1; #l0; #l1; #l0; #l1;"
				dur="3s"
				begin="walk.begin"
				restart="whenNotActive"
			/>
		</use>
	</g>
</svg>`
};
