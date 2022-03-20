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
	import Banner from '$lib/components/Banner.svelte';

	export let error;
	export let status;
</script>

<svelte:head>
	<title>{status} | borntofrappe</title>
	<meta name="description" content={error.message} />
</svelte:head>

<main>
	<Banner title="{status}...not quite right" />
	<p>It seems you've stumbled on an error page</p>

	<p>If you need some context, here's a possibly verbose error message.</p>

	<pre><code>{error.message}</code></pre>

	<p>If you need some guidance, <em>home is always a good place to start</em>.</p>

	<p>Go to <a href="/">home page</a></p>
</main>

<style>
	main {
		max-width: 40rem;
		margin: 1rem auto;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}
</style>
