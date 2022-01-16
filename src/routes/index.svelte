<script>
	import Meta from '$lib/components/routes/Meta.svelte';
</script>

<Meta
	title="borntofrappe"
	description="Hello, and welcome to my personal website. My name is Gabriele Corti, and I code online @borntofrappe."
/>

<main>
	<h1>Hello. world!</h1>
	<p>Welcome to my personal website. My name is Gabriele Corti. I code online as borntofrappe.</p>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 0rem auto;
		padding: 0.5rem 0;
	}

	main > * + * {
		margin-top: 0.75em;
	}
</style>
