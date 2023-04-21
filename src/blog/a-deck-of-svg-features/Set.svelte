<script>
	import { onMount } from 'svelte';

	const seeds = ['diamond', 'heart', 'club', 'flower'];

	export let copies = 4;

	const width = copies + 2;

	const deck = Array(copies)
		.fill()
		.map((_, i) => {
			const x = i + 1;
			const seed = seeds[Math.floor(Math.random() * seeds.length)];
			return {
				x,
				seed
			};
		});

	let svg = null;
	let hasRevealed = false;

	onMount(() => {
		svg.querySelector('set').addEventListener('beginEvent', () => {
			hasRevealed = true;
		});
	});

	const handleKeydown = (e) => {
		if (hasRevealed) return;
		if (e.key === 'Enter') {
			e.preventDefault();
			e.target.blur();

			const sets = svg.querySelectorAll('set');
			sets.forEach((set) => {
				set.beginElement();
			});
		}
	};
</script>

<svg
	style="display: block;"
	viewBox="0 0 {width} 1"
	bind:this={svg}
	tabindex={hasRevealed ? '-1' : '0'}
	role="button"
	aria-label="Press 'Enter' to reveal a few cards."
	on:keydown={handleKeydown}
>
	<g class="deck">
		{#each deck as { x, seed }}
			<use style="cursor: pointer" {x} href="#deck-card-back" width="1" height="1">
				<set begin="click" attributeName="href" to="#deck-card-{seed}" />
				<set begin="click" attributeType="CSS" attributeName="cursor" to="initial" />
			</use>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	svg:focus:not(:focus-visible) {
		outline: none;
	}
</style>
