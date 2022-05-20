<script>
	import AnimatedText from './_helpers/_AnimatedText.svelte';
	import Text from './_helpers/_Text.svelte';

	const size = 12;
	const padding = 3;

	const width = 80;
	const height = 50;

	const patterns = ['star', 'moon', 'sun'];

	const getX = () => padding + Math.floor(Math.random() * (width - size - padding * 2));
	const getY = () => padding + Math.floor(Math.random() * (height - size - padding * 2));

	const coords = [];
	let x = getX();
	let y = getY();

	while (coords.length < patterns.length * 2) {
		let overlaps = false;
		for (const { x: cx, y: cy } of coords) {
			if (x + size + 1 > cx && x - 1 < cx + size && y + size + 1 > cy && y - 1 < cy + size) {
				overlaps = true;
				break;
			}
		}
		if (overlaps) {
			x = getX();
			y = getY();
		} else {
			coords.push({
				x,
				y
			});
		}
	}

	const cards = patterns.reduce((acc, curr, i) => {
		const pair = Array(2)
			.fill()
			.map((_, j) => {
				const id = `matchInPairs${i}${j}`;
				const { x, y } = coords[i * 2 + j];
				const match = `matchInPairs${i}${j === 0 ? 1 : 0}`;

				const resets = patterns.reduce((a, c, k) => {
					if (k === i) return [...a];
					return [
						...a,
						...Array(2)
							.fill()
							.map((_, z) => `matchInPairs${k}${z}`)
					];
				}, []);

				return {
					id,
					x,
					y,
					match,
					resets,
					pattern: curr
				};
			});
		return [...acc, ...pair];
	}, []);

	const points = Array(10)
		.fill()
		.map((_, i, { length }) => {
			const angle = (((360 / length) * i + 18) / 180) * Math.PI;
			const radius = i % 2 === 0 ? 10 : 25;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;
			return {
				x,
				y
			};
		});
	const d =
		`M ${points[0].x} ${points[0].y}` +
		points
			.slice(1)
			.reduce(
				(acc, curr, i) =>
					i % 2 === 0 ? `${acc} Q ${curr.x} ${curr.y}` : `${acc} ${curr.x} ${curr.y}`,
				''
			) +
		` ${points[0].x} ${points[0].y}`;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern
			id="match-in-pairs-pattern-background"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#009e3a">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<rect id="match-in-pairs-background" width="80" height="50" />

		<pattern id="match-in-pairs-pattern-moon" viewBox="-25 -25 50 50" width="1" height="1">
			<g
				fill="#eeae31"
				stroke="#eeae31"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M 13 -7 a 14 14 0 1 0 0 14 9 9 0 1 1 0 -14" />
			</g>
		</pattern>

		<pattern id="match-in-pairs-pattern-sun" viewBox="-25 -25 50 50" width="1" height="1">
			<g>
				<circle fill="#eeae31" r="10" />
				<g fill="none" stroke="#eeae31" stroke-width="4" stroke-linecap="round">
					<path d="M 0 -14.5 v -4" />
					<path transform="rotate(45)" d="M 0 -14 v -3" />
					<path transform="rotate(90)" d="M 0 -14 v -3" />
					<path transform="rotate(135)" d="M 0 -14 v -3" />
					<path transform="rotate(180)" d="M 0 -14 v -3" />
					<path transform="rotate(225)" d="M 0 -14 v -3" />
					<path transform="rotate(270)" d="M 0 -14 v -3" />
					<path transform="rotate(315)" d="M 0 -14 v -3" />
				</g>
			</g>
		</pattern>

		<pattern id="match-in-pairs-pattern-star" viewBox="-25 -26 50 50" width="1" height="1">
			<path {d} fill="#eeae31" />
		</pattern>

		<pattern id="match-in-pairs-pattern-card" viewBox="-0.25 -0.25 10.5 10.5" width="1" height="1">
			<rect width="10" height="10" fill="#f7a629" stroke="#107c38" stroke-width="0.5" />
		</pattern>

		<pattern
			id="match-in-pairs-pattern-card-flipped"
			viewBox="-0.25 -0.25 10.5 10.5"
			width="1"
			height="1"
		>
			<rect width="10" height="10" fill="#f7d794" stroke="#107c38" stroke-width="0.5" />
		</pattern>

		{#each patterns as pattern}
			<g id="match-in-pairs-card-{pattern}">
				<g>
					<rect width={size} height={size} fill="url(#match-in-pairs-pattern-card)" />
				</g>
				<g transform="translate(-80 0)">
					<g transform="translate({size / 2} 0) scale(0.5 1) translate({(size / 2) * -1} 0)">
						<rect width={size} height={size} fill="url(#match-in-pairs-pattern-card)" />
					</g>
					<g fill="none" stroke="#f7f7f7" stroke-width="0.3" stroke-linecap="round">
						<path d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}" />
						<path
							transform="translate({size / 12} {size / 8})"
							d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}"
						/>
					</g>
				</g>
				<g transform="translate(-160 0)">
					<g transform="translate({size / 2} 0) scale(0.5 1) translate({(size / 2) * -1} 0)">
						<rect width={size} height={size} fill="url(#match-in-pairs-pattern-card-flipped)" />
						<rect width={size} height={size} fill="url(#match-in-pairs-pattern-{pattern})" />
					</g>
					<g fill="none" stroke="#f7f7f7" stroke-width="0.3" stroke-linecap="round">
						<path d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}" />
						<path
							transform="translate({size / 12} {size / 8})"
							d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}"
						/>
					</g>
				</g>
				<g transform="translate(-240 0)">
					<rect width={size} height={size} fill="url(#match-in-pairs-pattern-card-flipped)" />
					<rect width={size} height={size} fill="url(#match-in-pairs-pattern-{pattern})" />
				</g>
			</g>
		{/each}
	</defs>

	<use
		href="#match-in-pairs-background"
		fill="#6bce31"
		stroke="url(#match-in-pairs-pattern-background)"
		stroke-width="6"
	/>
	<g fill="none">
		<use href="#match-in-pairs-background" stroke="#eeae31" stroke-width="2" />
		<use href="#match-in-pairs-background" stroke="#d66d19" stroke-width="1.5" />
		<use href="#match-in-pairs-background" stroke="#c55108" stroke-width="1" />
		<use href="#match-in-pairs-background" stroke="#bd4908" stroke-width="0.5" />
	</g>

	<g>
		{#each cards as { id, x, y, match, resets, pattern }}
			<g transform="translate({x} {y})">
				<g style:cursor="pointer">
					<use href="#match-in-pairs-card-{pattern}">
						<set {id} begin="click" attributeName="display" to="none" fill="freeze" />
						<set begin="{id}Overlay.begin" attributeName="display" to="none" fill="freeze" />
						<set
							begin={resets.map((reset) => `${reset}Flip.end`).join(';')}
							end="{match}Overlay.begin"
							attributeName="display"
							to="initial"
							fill="freeze"
						/>
					</use>
				</g>
			</g>
		{/each}
	</g>

	<g>
		{#each cards as { id, x, y, match, resets, pattern }}
			<g display="none">
				<set begin="{id}.begin" attributeName="display" to="initial" fill="freeze" />
				<set
					begin={resets.map((reset) => `${reset}Flip.end`).join(';')}
					end="{match}Overlay.begin"
					attributeName="display"
					to="none"
					fill="freeze"
				/>
				<g transform="translate({x} {y})">
					<use href="#match-in-pairs-card-{pattern}">
						<animateTransform
							id="{id}Flip"
							begin="{id}.begin"
							attributeName="transform"
							type="translate"
							values="0 0; 80 0; 160 0; 240 0"
							dur="0.2s"
							calcMode="discrete"
							fill="freeze"
						/>
						<animateTransform
							begin={resets.map((reset) => `${reset}.begin`).join(';')}
							attributeName="transform"
							end="{match}Overlay.begin"
							type="translate"
							values="240 0; 160 0; 80 0; 0 0"
							dur="0.2s"
							calcMode="discrete"
							fill="freeze"
						/>
					</use>
				</g>
			</g>
		{/each}
	</g>

	<g>
		{#each cards as { id, x, y, match, resets, pattern }}
			<g display="none">
				<set begin="{match}.begin" attributeName="display" to="initial" fill="freeze" />
				<set
					begin={resets.map((reset) => `${reset}.begin`).join(';')}
					end="{id}Overlay.begin"
					attributeName="display"
					to="none"
					fill="freeze"
				/>
				<g transform="translate({x} {y})">
					<g>
						<use href="#match-in-pairs-card-{pattern}">
							<animateTransform
								begin="{id}Overlay.begin"
								attributeName="transform"
								type="translate"
								values="0 0; 80 0; 160 0; 240 0"
								dur="0.2s"
								calcMode="discrete"
								fill="freeze"
								restart="never"
							/>
						</use>
						<rect style:cursor="pointer" width={size} height={size} opacity="0">
							<set id="{id}Overlay" begin="click" attributeName="display" to="none" fill="freeze" />
						</rect>
					</g>
				</g>
			</g>
		{/each}
	</g>

	<g transform="translate({80 * patterns.length * -1} 0)">
		{#each cards as { id }}
			<animateTransform
				attributeName="transform"
				type="translate"
				by="80 0"
				dur="0.1s"
				fill="freeze"
				begin="{id}Overlay.begin + 1s"
				restart="never"
				calcMode="discrete"
			/>
		{/each}
		<g transform="translate(40 25)">
			<AnimatedText
				begin="{cards[0].id}Overlay.begin; {cards[1].id}Overlay.begin"
				end="matchInPairsEnd.begin"
				text="What a match!"
				fill="url(#linear-gradient-text)"
			/>
		</g>
		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set id="matchInPairsEnd" begin="click" attributeName="display" to="none" fill="freeze" />
		</rect>
	</g>

	<g style:cursor="pointer">
		<set begin="click" attributeName="display" to="none" fill="freeze" restart="never" />
		<g transform="translate(40 25)">
			<Text fill="url(#linear-gradient-text)">Pair up!</Text>
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
