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

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		<linearGradient id="linear-gradient-text" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="#f1f5f8" offset="0.33" />
			<stop stop-color="#dae2ec" offset="0.33" />
			<stop stop-color="#dae2ec" offset="0.67" />
			<stop stop-color="#bcccdc" offset="0.67" />
		</linearGradient>
	</defs>
</svg>

<svg viewBox="0 0 80 50">
	<AnimatedTitle
		fill="url(#linear-gradient-text)"
		text="Do it yourself!"
		begin="0.2s"
		repeatCount="3"
	/>
</svg>
