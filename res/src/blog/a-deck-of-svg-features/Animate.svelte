<script>
	import { onMount } from 'svelte';

	const delayPerCard = 0.2;
	const dur = 0.2;

	export let copies = 4;

	export let id = `animate${Math.random().toString().slice(-3)}`;

	const width = copies + 2;

	const deck = Array(copies)
		.fill()
		.map((_, i, { length }) => {
			const x = i + 1;
			const delay = delayPerCard * (length - 1 - i);
			const begin = i === length - 1 ? 'click' : `${id}.begin + ${delay}s`;

			return {
				x,
				begin,
				id: i === length - 1 ? id : `${id}card${i}`
			};
		});

	let svg = null;
	let hasDealt = false;

	onMount(() => {
		svg.querySelector(`animate#${id}`).addEventListener('beginEvent', () => {
			hasDealt = true;
		});
	});

	const handleKeydown = (e) => {
		if (hasDealt) return;
		if (e.key === 'Enter') {
			e.preventDefault();
			e.target.blur();

			const animate = svg.querySelector(`animate#${id}`);
			animate.beginElement();
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
	<set />
	<g class="deck">
		{#each deck as { x, begin, id }}
			<use href="#deck-card-back" width="1" height="1">
				<animate {id} {begin} attributeName="x" to={x} {dur} fill="freeze" />
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
