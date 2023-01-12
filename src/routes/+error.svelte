<script>
	import { page } from '$app/stores';

	import icons from '$lib/utils/icons.js';
</script>

<svelte:head>
	<title>borntofrappe | {$page.status}</title>
	<meta name="description" content={$page.error.message} />
	<link rel="icon" href="icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<main>
		<h1>Oopsie</h1>
		<p>Something quite unexpected has happened.<br /> Here the error message for context:</p>
		<div class="code">
			<span>code {@html icons.editor}</span>
			<pre><code>{$page.error.message}</code></pre>
		</div>
		<p>
			If you think this is a mistake and you feel up to it, please consider filing an issue
			<a
				href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{$page.status}&body={$page
					.error.message}&labels=bug">on GitHub</a
			>.
		</p>
		<p>If you need some guidance, <em>home is always a good place to start.</em></p>
		<p><a href="/">Go to home, page</a></p>
	</main>
</div>

<style>
	main {
		max-width: 42rem;
		margin-inline: auto;
		padding: 2rem 1rem;
	}

	main > * + * {
		margin-top: 1em;
	}
</style>
