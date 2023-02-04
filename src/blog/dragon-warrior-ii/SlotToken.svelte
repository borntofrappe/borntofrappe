<script>
	import { createEventDispatcher } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { quadOut as easing } from 'svelte/easing';

	const dispatch = createEventDispatcher();

	export let sprites;
	export let start = false;
	export let value = null;

	$: active = start && value === null;

	const tween = tweened(0, { duration: 1500 });

	const animate = async () => {
		await tween.set(sprites.length);

		if (value !== null) {
			await tween.set(0, { duration: 0 });
			await tween.set(sprites.length + value, { easing, duration: 450 * (sprites.length + value) });
			dispatch('end');
		} else {
			await tween.set(0, { duration: 0 });
			animate();
		}
	};

	$: if (start) {
		animate();
	}

	const handleStop = () => {
		if (!active) return;

		dispatch('stop', {
			value: $tween
		});
	};
</script>

<g transform="translate(0 {$tween})">
	{#each sprites as sprite, y}
		<g transform="translate(0 {-y})">
			<use href="#{sprite}" x="0.1" y="0.1" width="0.8" height="0.8" />
			<use href="#{sprite}" x="0.1" y={-sprites.length + 0.1} width="0.8" height="0.8" />
		</g>
	{/each}
</g>

<g
	class="focus"
	role="button"
	aria-label="Stop token"
	tabindex={active ? '0' : '-1'}
	on:keydown={(e) => {
		const { key } = e;
		if (key === 'Enter' || key === ' ') {
			e.preventDefault();
			handleStop();
			e.target.blur();
		}
	}}
	style:cursor={value === null ? 'pointer' : 'initial'}
	on:click={handleStop}
>
	<g class="highlight" opacity="0">
		<rect width="1" height="1" opacity="0.1" fill="currentColor" />
	</g>
	<rect width="1" height="1" opacity="0" />
</g>

<style>
	.focus {
		outline: none;
	}

	.focus > .highlight {
		opacity: 0;
	}

	.focus:focus > .highlight {
		opacity: 1;
	}

	.focus:focus:not(:focus-visible) > .highlight {
		opacity: 0;
	}
</style>
