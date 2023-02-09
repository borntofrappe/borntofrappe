<script>
	import site from '$lib/utils/site.js';
	const { title, description } = site;

	import Header from './Header.svelte';
	import Showcase from './Showcase.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Header />
<Showcase />
<Footer />
