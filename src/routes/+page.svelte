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
	class="[ box ]"
	style="
		--box-color: var(--color);
		--box-background: var(--background);
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
