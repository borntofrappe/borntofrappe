<script>
	import site from '$lib/utils/site.js';
	const { title, description } = site;

	import Main from './Main.svelte';
	import Showcase from './Showcase.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div
	style="
		background: var(--background, hsl(40, 23%, 97%));
		min-height: 100vh;
		z-index: 1;
		position: relative;
	"
>
	<Main />
	<Showcase />
</div>

<div
	style="
		position: sticky;
		bottom: 0;
	"
>
	<Footer />
</div>
