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
	import Meta from '$lib/components/Meta.svelte';

	export let error;
	export let status;
</script>

<Meta title="borntofrappe / {status}" description={error} />

<header>
	<h1>Oopsie</h1>
	<p>Something quite unexpected has happened.</p>
</header>

<main>
	<h2 class="visually-hidden">Status code {status}</h2>

	<p>Here's the error message for context</p>

	<pre><code>{error.message}</code></pre>

	<p>
		If you think this is a mistake and you are up to the task, please consider filing an issue
		<a
			href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug"
			>on GitHub</a
		>.
	</p>

	<p>
		If you need some guidance,
		<em>home is always a good place to start.</em>
	</p>

	<p>
		<a href="/">Go to home, page</a>
	</p>
</main>
