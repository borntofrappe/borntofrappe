<script>
	import site from '$lib/utils/site.js';
	import AnimatedTitle from './AnimatedTitle.svelte';
	import Title from './Title.svelte';
	const { title } = site;
</script>

<svelte:head>
	<title>D.I.Y. | {title}</title>
	<meta
		name="description"
		content="Play a collection of touch-based games, crafted with care and animated, scalable vector graphics."
	/>
	<link rel="icon" href="/icons/diy.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Do it yourself!</h1>
	<p>
		Play a collection of touch-based games, crafted with care and animated, scalable vector
		graphics.
	</p>
</header>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		<linearGradient id="linear-gradient-text" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="hsl(206, 33%, 96%)" offset="0.33" />
			<stop stop-color="hsl(213, 32%, 89%)" offset="0.33" />
			<stop stop-color="hsl(213, 32%, 89%)" offset="0.67" />
			<stop stop-color="hsl(210, 31%, 80%)" offset="0.67" />
		</linearGradient>
	</defs>
</svg>

<div>
	<svg viewBox="0 0 80 50">
		<AnimatedTitle
			fill="url(#linear-gradient-text)"
			text="Do it yourself!"
			begin="0.2s"
			repeatCount="3"
		/>
	</svg>
</div>

<style>
	div {
		color: hsl(209, 61%, 16%);
		background: hsl(206, 33%, 96%);
		block-size: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		--_border-color: var(--border-color, currentColor);
	}

	div > svg {
		display: block;
		inline-size: 90vmin;
		max-inline-size: 36rem;
		block-size: auto;
		border-radius: 0.25rem;
		box-shadow: 0 -1rem 1rem hsla(209, 61%, 16%, 0.15), 0 0 0 0.1rem hsl(209, 61%, 16%),
			0 0 0 0.9rem var(--_border-color), 0 0 0 1.1rem hsl(209, 61%, 16%);
	}
</style>
