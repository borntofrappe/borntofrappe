<script>
	import '../app.css';

	import Sun from './playground/_Sun.svelte';
	import Footer from './_Footer.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<article>
	<Sun />
</article>

<Footer />

<style>
	article {
		min-height: 100vh;
		background: hsl(41, 100%, 97%);
		color: hsl(44, 30%, 17%);
		display: grid;
		place-items: center;
	}

	article > :global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
