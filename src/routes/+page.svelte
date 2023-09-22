<script>
	import site from '$lib/utils/site.js';
	const { title, description } = site;

	import Main from './Main.svelte';
	import Showcase from './Showcase.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
		min-block-size: 100vb;
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
		inset-block-end: 0;
	"
>
	<Footer illustration="heart" />
</div>
