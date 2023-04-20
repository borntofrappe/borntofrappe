<script>
	const delayPerCard = 0.17;
	const dur = 0.22;
	const seeds = ['heart', 'diamond', 'club', 'flower'];

	export let cards = Array(7)
		.fill()
		.map((_) => seeds[Math.floor(Math.random() * seeds.length)]);

	export let id = `deck${Math.random().toString().slice(-3)}`;

	const width = cards.length + 2;

	const deck = cards.map((seed, i, { length }) => {
		const x = length - i;
		const delay = delayPerCard * i;
		const begin = `${id}.begin + ${delay}s`;

		return {
			x,
			begin,
			seed,
			id: `${id}card${i}`
		};
	});

	let svg = null;
	let hasDealt = false;

	const handleKeydown = (e) => {
		if (hasDealt) return;
		if (e.key === 'Enter') {
			e.preventDefault();
			e.target.blur();

			hasDealt = true;

			const set = svg.querySelector(`set#${id}`);
			set.beginElement();

			const uses = svg.querySelectorAll('.deck use');
			uses.forEach((use) => {
				use.querySelector('animateTransform').addEventListener('endEvent', () => {
					use.querySelector('set').beginElement();
				});
			});
		}
	};
</script>

<svg
	style="display: block;"
	viewBox="0 0 {width} 1"
	bind:this={svg}
	tabindex={hasDealt ? '-1' : '0'}
	role="button"
	aria-label="Press enter to deal a few cards with SMIL animation."
	on:keydown={handleKeydown}
>
	<g class="deck">
		{#each [...deck].reverse() as { x, begin, id, seed } (id)}
			<use style="cursor: pointer" href="#deck-card-back" width="1" height="1">
				<animateTransform
					{begin}
					attributeName="transform"
					type="translate"
					values="0 0; {x} 0"
					{dur}
					fill="freeze"
					calcMode="spline"
					keySplines="0.1 0 0.75 1;"
				/>
				<set
					{id}
					begin="click"
					attributeType="CSS"
					attributeName="cursor"
					to="initial"
					restart="never"
				/>
				<set attributeName="href" to="#deck-card-{seed}" begin="{id}.begin" />
			</use>
		{/each}
	</g>

	<use style="cursor: pointer" href="#deck-card-back" width="1" height="1">
		<set {id} begin="click" attributeName="display" to="none" restart="never" />
	</use>
</svg>

<style>
	svg {
		display: block;
	}

	svg:focus:not(:focus-visible) {
		outline: none;
	}
</style>
