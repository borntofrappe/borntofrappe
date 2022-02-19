<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	import site from '$lib/site';
	import Meta from '$lib/components/routes/Meta.svelte';
	import RelativeLink from '$lib/components/routes/RelativeLink.svelte';

	export let error;
	export let status;
</script>

<Meta title="{status} | {site.name}" description={error.message} />

<main>
	<h1>Oopsie</h1>
	<p>{error.message}</p>

	<p>
		You might have better luck
		<RelativeLink href="/log/archives">visiting the archives</RelativeLink>
	</p>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 1em auto;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}
</style>
