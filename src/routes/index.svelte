<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';
</script>

<Meta
	title="borntofrappe"
	description="Personal website of one Gabriele Corti, online @borntofrappe."
/>

<Header>
	<h1>Hello world!</h1>
</Header>

<main>
	<p>
		This is my website, and you are welcome<b>d</b>. It is built with <strong>SvelteKit</strong>, in
		its latest
		<code>1.0.0-next.253</code> version. It is deployed through <strong>Netlify</strong>, and
		available on
		<a href="https://borntofrappe.netlify.app">borntofrappe.netlify.app</a>.
	</p>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2em auto 6em;
	}
</style>
