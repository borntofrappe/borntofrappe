<script>
	import Header from '$lib/components/routes/Header.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
</svelte:head>

<Header
	title="Hello, world!"
	body="Welcome to my personal website, a small corner on the web where I try to convince you I'm a solid programmer."
/>

<main>
	<p>
		I'm building this website with <a href="https://kit.svelte.dev/">SvelteKit</a> and
		<a href="https://www.netlify.com/">Netlify</a>. You can check how it's going over
		<a href="https://github.com/borntofrappe/borntofrappe">on GitHub</a>.
	</p>
</main>

<style>
	main {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 4em;
	}
</style>
