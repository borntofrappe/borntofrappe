<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';

	const targets = 3;
	const width = 80;
	const height = 50;

	const maxSize = 20;
	const aspectRatio = 30 / 47;

	const w = Math.min(maxSize, Math.floor(width / targets));
	const h = w / aspectRatio;
	const o = (width - w * targets) / 2;

	const from = `0 ${height}`;
	const to = `0 ${30 - h * 0.25}`;
	const up = '0 2';
	const down = `0 ${Math.max(2, height - h - 8)}`;

	const delay = 0.8;

	const baseId = 'pickUpProduce';
	const id = `${baseId}Start`;

	const baseHrefs = {
		top: '#pick-up-produce-crop-top-',
		mulch: '#pick-up-produce-mulch-'
	};
	const hrefs = {
		top: 3,
		mulch: 5
	};

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
				crop: `${id}.begin + ${Math.floor(Math.random() * 5) + 2}s`,
				harvest: `${ids.harvest}.begin`,
				spoiled: `${ids.crop}.end + ${(hrefs.top + 1) * delay}s`
			};

			const ends = {
				harvest: `${ids.harvest}.end`,
				harvested: `${ids.harvested}.end`
			};

			const tops = Array(hrefs.top)
				.fill()
				.map((_, i) => {
					const begin = `${ids.crop}.end + ${(i + 1) * delay}s`;
					const end = `${ids.harvest}.begin`;
					const to = `${baseHrefs.top}${i}`;
					return {
						begin,
						end,
						to
					};
				});

			const mulch = {
				begin: begins.harvest,
				values: Array(hrefs.mulch)
					.fill()
					.map((_, i) => `${baseHrefs.mulch}${i}`)
					.join('; ')
			};

			return {
				x,
				ids,
				begins,
				ends,
				tops,
				mulch
			};
		});

	const script = [
		'The whole lot!',
		'Almost all!',
		"That's a start...",
		...Array(targets - 2).fill('Not mulch...')
	].map((text) => {
		const begin = crops
			.map(({ begins, ends }) => `${begins.spoiled}; ${ends.harvested}`)
			.join('; ');

		return {
			text,
			begin
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
					<path stroke-width="1.25" d="M 3 -4 c 2 -5 -1 -9 -3 -10 c -2 1 -5 5 -3 10" />
					<path stroke-width="0.75" d="M 0 -4 l 0 -6.5" />
					<path
						stroke-width="1.25"
						d="M 2 0 c 6 -1 10 -9 6 -14 c -8 2 -8 9 -8 11 c 0 -2 0 -9 -8 -11 c -4 5 0 13 6 14"
					/>
					<g stroke-width="0.75">
						<path d="M 2.5 -2.75 c 2 -2 4 -6 4.25 -7.5" />
						<path transform="scale(-1 1)" d="M 2.5 -2.75 c 2 -2 4 -6 4.25 -7.5" />
					</g>
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-1" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#76d0ad" stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
					<path stroke-width="1.25" d="M 2 -4 c 2 -2 0 -10 -8 -10 c 0 8 6 5 4 10" />
					<path stroke-width="0.75" d="M 0.75 -6.5 c 0 -2 -2 -2 -3.75 -4.5" />
					<path
						stroke-width="1.25"
						d="M 2 0 c 5 -1 4 -7 9 -7 c -2 -6 -11 -2 -11 0 c 0 -2 -9 -6 -11 0 c 5 0 4 6 9 7"
					/>
					<g stroke-width="0.75">
						<path d="M 1.75 -3.5 c 2 -1 2 -4.25 5 -4.5" />
						<path transform="scale(-1 1)" d="M 1.75 -3.5 c 2 -1 2 -4.25 5 -4.5" />
					</g>
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-2" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#76d0ad" stroke="#a5570c" stroke-linecap="round" stroke-linejoin="round">
					<path stroke-width="1.25" d="M 2 -4 c 2 -2 0 -10 -8 -9 c 0 5 5 4 4 9" />
					<path stroke-width="0.75" d="M 0.5 -6 c 0 -1.5 -1 -3 -3 -4.5" />
					<path
						stroke-width="1.25"
						d="M 2 0 c 4 -2 3 -7 9 -5 c -2 -8 -11 -4 -11 -1 c 0 -3 -9 -7 -11 1 c 5 -2 4 3 9 5"
					/>
					<g stroke-width="0.75">
						<path d="M 2 -3.5 c 1.75 -1 2 -3 4.5 -3.5" />
						<path transform="scale(-1 1)" d="M 2 -3.5 c 1.75 -1 2 -3 4.5 -3.5" />
					</g>
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-crop-top-spoiled" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#ffdd9d" stroke="#a5570c" stroke-linecap="round" stroke-linejoin="round">
					<path stroke-width="1.25" d="M 2 -4.5 c 1 -1 0 -7 -6 -7 c 1 2 2 4 2 7" />
					<path stroke-width="0.75" d="M 0 -5.5 c 0 -1 0 -2 -1 -3.25" />
					<path
						stroke-width="1.25"
						d="M 2 0 c 3 0 2 -5 9 -4 c -2 -7 -10 -3 -11 -1 c -1 -2 -9 -6 -11 1 c 7 -1 6 4 9 4"
					/>
					<g stroke-width="0.75">
						<path d="M 1.5 -2.5 c 1.25 -1 2 -3 5 -3" />
						<path transform="scale(-1 1)" d="M 1.5 -2.5 c 1.25 -1 2 -3 5 -3" />
					</g>
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-mulch-0" viewBox="-15 -21 30 47">
			<g transform="translate(0 -5)">
				<g fill="#c64a00" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path transform="translate(2.5 0)" d="M -2 -1.5 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
					<path transform="translate(5 0" d="M -1 -1 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
					<path transform="translate(-5 0)" d="M  -2 0 l 1 -2 1 0 1 1 -1 2 -1 0z" />
					<path transform="translate(-2.5 0)" d="M  -2 0 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-mulch-1" viewBox="-15 -21 30 47">
			<g transform="translate(0 -5)">
				<g fill="#c64a00" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path transform="translate(3 -2)" d="M -2 -1.5 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
					<path transform="translate(6 -1)" d="M -1 -1 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
					<path transform="translate(-6 -1)" d="M  -2 0 l 1 -2 1 0 1 1 -1 2 -1 0z" />
					<path transform="translate(-3 -2)" d="M  -2 0 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-mulch-2" viewBox="-15 -21 30 47">
			<g transform="translate(0 -5)">
				<g fill="#c64a00" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path transform="translate(3.5 -4)" d="M -2 -1.5 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
					<path transform="translate(7 -2)" d="M -1 -1 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
					<path transform="translate(-7 -2)" d="M  -2 0 l 1 -2 1 0 1 1 -1 2 -1 0z" />
					<path transform="translate(-3.5 -4)" d="M  -2 0 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-mulch-3" viewBox="-15 -21 30 47">
			<g transform="translate(0 -5)">
				<g fill="#c64a00" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path transform="translate(4 -6)" d="M -2 -1.5 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
					<path transform="translate(8 -3)" d="M -1 -1 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
					<path transform="translate(-8 -3)" d="M  -2 0 l 1 -2 1 0 1 1 -1 2 -1 0z" />
					<path transform="translate(-4 -6)" d="M  -2 0 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />
				</g>
			</g>
		</symbol>

		<symbol id="pick-up-produce-mulch-4" viewBox="-15 -21 30 47">
			<g transform="translate(0 -5)">
				<g fill="#c64a00" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path transform="translate(4.5 -8)" d="M -2 -1.5 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
					<path transform="translate(9 -4)" d="M -1 -1 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
					<path transform="translate(-9 -4)" d="M  -2 0 l 1 -2 1 0 1 1 -1 2 -1 0z" />
					<path transform="translate(-4.5 -8)" d="M  -2 0 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />
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
		{#each crops as { x, ids, begins, ends, tops, mulch }}
			<g transform="translate({x} 0)">
				<g style="cursor: pointer">
					<set
						begin="{begins.harvest}; {begins.spoiled}"
						attributeType="CSS"
						attributeName="cursor"
						to="initial"
					/>
					<set begin={ends.harvest} attributeName="display" to="none" />
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
							end={begins.spoiled}
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
								begin={begins.spoiled}
								end={begins.harvest}
								attributeName="href"
								to="#pick-up-produce-crop-top-spoiled"
								fill="freeze"
							/>
						</use>
						<use opacity="0" href="#pick-up-produce-crop-top-0" width={w} height={h} />
					</g>
				</g>
				<g transform="translate({to})">
					<use href="#pick-up-produce-mulch" width={w} height={h}>
						<animate
							begin={mulch.begin}
							attributeName="href"
							values={mulch.values}
							dur="0.25s"
							calcMode="discrete"
						/>
					</use>
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
			{#each crops as { x, ids, begins, ends, tops }}
				<g opacity="0">
					<set begin={ends.harvest} attributeName="opacity" to="1" />
					<set begin={begins.spoiled} end={begins.harvest} attributeName="display" to="none" />
					<g transform="translate({x} 0)">
						<g transform="translate({up})">
							<animateTransform
								id={ids.harvested}
								begin={ends.harvest}
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

	<g transform="translate({80 * targets * -1} 0)">
		{#each crops as { begins, ends }}
			<animateTransform
				begin="{begins.spoiled}; {ends.harvested}"
				attributeName="transform"
				type="translate"
				by="80 0"
				fill="freeze"
				dur="1.5s"
				calcMode="discrete"
				restart="never"
			/>
		{/each}
		<g transform="translate(0 {50 * targets * -1})">
			{#each crops as { ends }}
				<animateTransform
					begin={ends.harvested}
					attributeName="transform"
					type="translate"
					by="0 50"
					fill="freeze"
					dur="0.1s"
					calcMode="discrete"
					restart="never"
				/>
			{/each}
			{#each script as { text, begin }, i}
				<g transform="translate(0 {50 * i})">
					<g transform="translate(0 -18)">
						<AnimatedTitle
							{text}
							fill="url(#linear-gradient-text)"
							{begin}
							end="pickUpProduceEnd.begin"
							repeatCount="indefinite"
						/>
					</g>
				</g>
			{/each}
		</g>
		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set id="pickUpProduceEnd" begin="click" attributeName="display" to="none" />
		</rect>
	</g>

	<g style:cursor="pointer">
		<set {id} begin="click" attributeName="display" to="none" />

		<Title fill="url(#linear-gradient-text)">Harvest!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
