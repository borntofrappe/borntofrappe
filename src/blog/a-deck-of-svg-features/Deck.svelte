<script>
	import { onMount } from 'svelte';

	const delayPerCard = 0.17;
	const dur = 0.22;
	const seeds = ['diamond', 'heart', 'club', 'flower'];

	export let cards = Array(7)
		.fill()
		.map((_) => seeds[Math.floor(Math.random() * seeds.length)]);

	export let id = `deck${Math.random().toString().slice(-3)}`;

	const width = cards.length + 2;

	const deck = cards.map((seed, i, { length }) => {
		const x = i + 1;
		const delay = delayPerCard * (length - 1 - i);
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

	onMount(() => {
		svg.querySelector(`set#${id}`).addEventListener('beginEvent', () => {
			hasDealt = true;
		});
	});

	const handleKeydown = (e) => {
		if (hasDealt) return;
		if (e.key === 'Enter') {
			e.preventDefault();
			e.target.blur();

			const set = svg.querySelector(`set#${id}`);
			set.beginElement();

			const uses = svg.querySelectorAll('.deck use');
			uses.forEach((use) => {
				use.querySelector('animate').addEventListener('endEvent', () => {
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
	aria-label="Press 'Enter' to deal a few cards with SMIL animation."
	on:keydown={handleKeydown}
>
	<g class="deck">
		{#each deck as { x, begin, id, seed }}
			<use style="cursor: pointer" href="#deck-card-back" width="1" height="1">
				<animate
					{begin}
					attributeName="x"
					values="0; {x}"
					{dur}
					fill="freeze"
					calcMode="spline"
					keySplines="0.1 0 0.75 1;"
					restart="never"
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
		<set {id} begin="click" attributeName="display" to="none" />
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
