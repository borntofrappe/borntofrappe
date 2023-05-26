<script>
	const targets = 3;
	const width = 80;
	const height = 50;

	const maxSize = 20;
	const aspectRatio = 30 / 47;

	const w = Math.min(maxSize, Math.floor(width / targets));
	const h = w / aspectRatio;
	const o = (width - w * targets) / 2;

	const from = `0 ${height}`;
	const to = `0 ${height - h - 2}`;
	const up = '0 2';
	const down = `0 ${Math.max(2, height - h - 8)}`;

	const hrefs = 3;
	const decay = 0.8;
	const baseId = 'pickUpProduce';
	const baseHref = '#pick-up-produce-crop-top-';

	const crops = Array(targets)
		.fill()
		.map((_, i) => {
			const x = i * w;

			const ids = {
				crop: `${baseId}Crop${i}`,
				harvest: `${baseId}Harvest${i}`,
				harvested: `${baseId}Harvested${i}`
			};

			const begins = {
				crop: `${Math.floor(Math.random() * 5) + 2}s`,
				harvest: `${ids.harvest}.begin`
			};

			begins.spoil = `${ids.crop}.end + ${(hrefs + 1) * decay}s`;

			const end = `${ids.harvest}.end`;

			const tops = Array(hrefs)
				.fill()
				.map((_, i) => {
					const begin = `${ids.crop}.end + ${(i + 1) * decay}s`;
					const end = `${ids.harvest}.begin`;
					const to = `${baseHref}${i}`;
					return {
						begin,
						end,
						to
					};
				});

			return {
				x,
				ids,
				begins,
				end,
				tops
			};
		});
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Pick up produce!</title>

	<defs>
		<pattern
			id="pick-up-produce-pattern-overlay"
			viewBox="0 0 2 2"
			width="2"
			height="2"
			patternUnits="userSpaceOnUse"
		>
			<g opacity="0.2" fill="#000000">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<g id="pick-up-produce-cloud">
			<path
				stroke="none"
				d="M 0 0 a 3.75 3.75 0 0 1 6 2 2.25 2.25 0 0 1 0 5 3.75 3.75 0 0 1 -6 1 3.75 3.75 0 0 1 -6 -1 2.25 2.25 0 0 1 0 -5 3.75 3.75 0 0 1 6 -2"
			/>
			<path
				fill="#000000"
				opacity="0.1"
				d="M 8.5 4.5 a 2.25 2.25 0 0 1 -2.5 2.5 3.75 3.75 0 0 1 -6 1 3.75 3.75 0 0 1 -6 -1 2.25 2.25 0 0 1 -2.5 -2.5 a 2 2 0 0 0 3.5 1 3 3 0 0 0 5 0 3 3 0 0 0 5 0 2 2 0 0 0 3.5 -1"
			/>
		</g>

		<g id="pick-up-produce-grass">
			<path d="M 0 34 l 1 -5 1 2 1 -5 1 5 1 1 0 -3 3 2 1 -2 2 2 0 -3 4 3 2 -2 2 3 2 -3 0 5z" />
			<path
				transform="translate(79 1) scale(-1 1)"
				d="M 0 34 l 1 -5 1 2 1 -5 1 5 1 1 0 -3 3 2 1 -2 2 2 0 -3 4 3 2 -2 2 3 2 -3 0 5z"
			/>
		</g>

		<g id="pick-up-produce-tree-front">
			<circle fill="#51a78e" r="10" />
			<circle opacity="0.5" fill="url(#pick-up-produce-pattern-overlay)" r="10" />
		</g>

		<g id="pick-up-produce-tree-back">
			<circle fill="#51a78e" r="10" />
			<circle opacity="0.2" fill="#000000" r="10" />
		</g>

		<path
			id="pick-up-produce-tree-trunk-shape"
			d="M 0 0 v -2 q 2 -10 -5 -17 v -2 q 2 0 6 5 q 0 -3 -4 -9 h 2 q 0 3 3 4 2 0 4 -6 h 2 q -3 7 -3 12 q 5 -10 10 -10 h 2 q -15 10 -7 23 v 2"
		/>

		<g id="pick-up-produce-tree-trunk">
			<use fill="#ffd794" href="#pick-up-produce-tree-trunk-shape" />
			<use
				opacity="0.3"
				fill="url(#pick-up-produce-pattern-overlay)"
				href="#pick-up-produce-tree-trunk-shape"
			/>
		</g>

		<symbol id="pick-up-produce-crop" viewBox="-15 -21 30 47">
			<g fill="none" stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
				<path transform="rotate(0) translate(0 21)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(15) translate(0 20.5)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(-15) translate(0 20.5)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(-30) translate(0 20)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(30) translate(0 20)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
			</g>

			<path fill="#ffdd9d" d="M 2 0 v 5 a 13 8 0 1 1 -4 0 v -5" />
			<path fill="#76d0ad" d="M -2 -6 v 5 h 4 v -5" />

			<g stroke="#c64e00" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#c64e00">
					<path transform="translate(3.25 9)" d="M 0 0 l 1.1 1.7 -1.1 1.7 -1.1 -1.7z" />
					<path transform="translate(-3.25 9)" d="M 0 0 l 1.1 1.7 -1.1 1.7 -1.1 -1.7z" />
				</g>
				<path fill="none" stroke="#c64e00" d="M -4 15 a 6 6 0 0 0 8 0" />
			</g>

			<path fill="#ffdd9d" d="M -1.5 -1 h 3 v 4 l -0.75 -0.75 -0.75 0.75 -0.75 -0.75 -0.75 0.75z" />
			<path opacity="0.1" d="M -1.5 -1 h 3 v 4 l -0.75 -0.75 -0.75 0.75 -0.75 -0.75 -0.75 0.75z" />

			<g stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
				<path fill="none" stroke-width="1.25" d="M 2 -6 v 11 a 13 8 0 1 1 -4 0 v -11" />
				<path fill="#ffdd9d" d="M -7 17 c -1 3 6 5 7 5 1 0 8 -2 7 -5" />
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-0" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#76d0ad" stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
					<path d="M 0 0 a 9 9 0 0 1 0 -14 9 9 0 0 1 0 14" />
					<path stroke-width="0.75" d="M 0 0 v -10" />
					<path d="M 0 0 c 0 -6 0 -10 8 -14 5 7 -1 14 -8 14" />
					<path transform="scale(-1 1)" d="M 0 0 c 0 -6 0 -10 8 -14 5 7 -1 14 -8 14" />
					<g stroke-width="0.75">
						<path d="M 0.25 0 q 4 -3.75 6.5 -9.75" />
						<path transform="scale(-1 1)" d="M 0.25 0 q 4 -3.75 6.5 -9.75" />
					</g>
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-1" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#76d0ad" stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
					<path transform="rotate(10)" d="M 0 0 c 8 -5 -2 -18 -6 -11 7 5 -2 5 6 11" />
					<path transform="rotate(-30)" d="M 0 0 c 8 -5 -2 -18 -6 -11 7 5 -2 5 6 11" />
					<path transform="scale(-1 1) rotate(-30)" d="M 0 0 c 8 -5 -2 -18 -6 -11 7 5 -2 5 6 11" />
					<g stroke-width="0.75">
						<path d="M 0.25 -0.25 c 2 -3 3 -7 6 -7.5" />
						<path transform="scale(-1 1)" d="M 0.25 -0.25 c 2 -3 3 -7 6 -7.5" />
					</g>
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-2" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#76d0ad" stroke="#a5570c" stroke-linecap="round" stroke-linejoin="round">
					<path d="M 0 0 c 8 -9 -3 -18 -6 -11 9 0 -4 5 6 11" />
					<g stroke-width="0.75">
						<path d="M 0 0 c -2 -4 2 -7 -1 -10" />
					</g>
					<path transform="scale(-1 1) rotate(-50)" d="M 0 -1 c 8 -9 -3 -18 -6 -11 9 0 -4 5 6 11" />
					<path transform="rotate(-50)" d="M 0 -1 c 8 -9 -3 -18 -6 -11 9 0 -4 5 6 11" />
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-spoiled" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#ffdd9d" stroke="#a5570c" stroke-linecap="round" stroke-linejoin="round">
					<path d="M 0 0 c 8 -9 -3 -18 -6 -11 9 0 -4 5 6 11" />
					<g stroke-width="0.75">
						<path d="M 0 0 c -2 -4 2 -7 -1 -10" />
					</g>
					<path transform="scale(-1 1) rotate(-50)" d="M 0 -1 c 8 -9 -3 -18 -6 -11 9 0 -4 5 6 11" />
					<path transform="rotate(-50)" d="M 0 -1 c 8 -9 -3 -18 -6 -11 9 0 -4 5 6 11" />
				</g>
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="#85dde1" />
	<rect width="80" height="50" fill="url(#pick-up-produce-pattern-overlay)" />

	<g fill="#fdfbfc">
		<use href="#pick-up-produce-cloud" x="50" y="6" />
		<use href="#pick-up-produce-cloud" x="69" y="3" />
	</g>

	<g stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round">
		<use fill="#51a78e" stroke="#51a78e" href="#pick-up-produce-grass" />
		<use fill="#000000" stroke="#000000" opacity="0.3" href="#pick-up-produce-grass" />
	</g>

	<g>
		<use href="#pick-up-produce-tree-back" x="-2" y="9" />
		<use href="#pick-up-produce-tree-back" x="9" y="9" />
		<use href="#pick-up-produce-tree-back" x="16" y="6" />

		<use href="#pick-up-produce-tree-trunk" x="5" y="34" />

		<use href="#pick-up-produce-tree-front" x="-3" y="5" />
		<use href="#pick-up-produce-tree-front" x="6" y="2" />
		<use href="#pick-up-produce-tree-front" x="18" y="2" />
		<use href="#pick-up-produce-tree-front" x="26" />
	</g>

	<g transform="translate({o} 0)">
		{#each crops as { x, ids, begins, end, tops }}
			<g style="cursor: pointer">
				<set
					begin="{begins.harvest}; {begins.spoil}"
					attributeType="CSS"
					attributeName="cursor"
					to="initial"
				/>
				<set begin={end} attributeName="display" to="none" />
				<g transform="translate({x} 0)">
					<g transform="translate({from})">
						<animateTransform
							id={ids.crop}
							begin={begins.crop}
							attributeName="transform"
							type="translate"
							{to}
							dur="0.35s"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
							fill="freeze"
						/>
						<animateTransform
							id={ids.harvest}
							begin="click"
							end={begins.spoil}
							attributeName="transform"
							type="translate"
							to={up}
							dur="0.25s"
							calcMode="spline"
							keyTimes="0; 1"
							keySplines="0.5 0 0.5 1;"
							fill="freeze"
						/>
						<use href="#pick-up-produce-crop" width={w} height={h} />
						<use href="#pick-up-produce-crop-top-0" width={w} height={h}>
							{#each tops as { begin, end, to }}
								<set {begin} {end} attributeName="href" {to} fill="freeze" />
							{/each}
							<set
								begin={begins.spoil}
								{end}
								attributeName="href"
								to="#pick-up-produce-crop-top-spoiled"
								fill="freeze"
							/>
						</use>
						<use opacity="0" href="#pick-up-produce-crop-top-0" width={w} height={h} />
					</g>
				</g>
			</g>
		{/each}
	</g>

	<g transform="translate(0 30)">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
			<g fill="#c64a00">
				<path d="M 7 2 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
				<path d="M 25 2 l 1 0 1 1 2 0 0 2 -2 1 -1 0 -1 -2 0 -2z" />
				<path d="M 45 2 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
				<path d="M 52 3 l 0 -1 2 -2 2 0 1 1 -1 2 -4 0z" />
				<path d="M  61 3 l 1 -2 1 0 1 1 -1 2 -1 0z" />
				<path d="M  75 4 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />
				<path
					d="M 0 3 l 1 0 2 -2 3 1 2 1 2 1 1 -1 2 0 1 -1 4 0 2 1 2 -1 3 1 1 2 3 -2 7 0 3 -1 1 0 2 1 5 0 1 -1 2 0 0 1 5 0 1 -2 5 0 1 2 2 -1 6 0 1 1 6 0 1 -1 1 0 H 81 V 51 H -1 V 33"
				/>
			</g>

			<g fill="none">
				<path d="M 3 8 l 1 -1 1 0 2 -1 2 1 -1 1 -2 0 -1 -1" />
				<path d="M 9 7 l 2 0 0 -1 3 0 0 3 -5 0 0 -2" />
				<path
					d="M 6 17 l 0 -1 1 0 1 1 0 -2 2 0 1 1 2 -1 1 0 1 1 4 0 -1 -2 3 0 2 1 -1 2 -3 0 0 -1 0 0"
				/>
				<path
					d="M 26 8 l -2 2 2 1 5 0 -1 -3 1 0 0 2 2 -1 1 2 2 -2 2 0 2 -2 2 0 1 2 2 0 0 1 2 -1 2 0"
				/>
				<path d="M  40 16 l 0 -2 1 0 3 0 1 1 -1 2 4 1 2 0 -2 -2 -3 0" />
				<path d="M 55 18 l 2 0 0 -1 2 0 1 -2 1 1 3 0 0 -2 1 3 2 0 0 1" />
				<path d="M  71 17 l 2 0 3 -3 -1 1 3 0 -3 0 -1 1 2 1 2 0" />
				<path d="M 58 10 l 2 -1 2 0 1 -2 2 0 0 2" />
				<path d="M 68 7 l -1 0 -1 0 0 2 1 1 1 0 2 -2 -4 0" />
			</g>
		</g>
	</g>

	<g style="pointer-events: none">
		<g transform="translate({o} 0)">
			{#each crops as { x, ids, begins, end, tops }}
				<g opacity="0">
					<set begin={end} attributeName="opacity" to="1" />
					<set begin={begins.spoil} end={begins.harvest} attributeName="display" to="none" />
					<g transform="translate({x} 0)">
						<g transform="translate({up})">
							<animateTransform
								id={ids.harvested}
								begin={end}
								attributeName="transform"
								type="translate"
								to={down}
								dur="0.35s"
								calcMode="spline"
								keyTimes="0; 1"
								keySplines="0.5 0 0.5 1;"
								fill="freeze"
							/>
							<use href="#pick-up-produce-crop" width={w} height={h} />
							<use href="#pick-up-produce-crop-top-0" width={w} height={h}>
								{#each tops as { begin, end, to }}
									<set {begin} {end} attributeName="href" {to} fill="freeze" />
								{/each}
							</use>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>
</svg>
