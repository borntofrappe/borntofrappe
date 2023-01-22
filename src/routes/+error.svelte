<script>
	import { page } from '$app/stores';

	import Serena from './mignon/Serena.svelte';
	import icons from '$lib/utils/icons.js';
</script>

<svelte:head>
	<title>Status code {$page.status} | borntofrappe</title>
	<meta name="description" content={$page.error.message} />
	<link rel="icon" href="icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div id="root">
	<main>
		<h1>Oopsie</h1>
		<p>
			Something quite unexpected has happened, but let's try to be positive.<br />Here's a possibly
			helpful message for context:
		</p>
		<div class="code">
			<span>error {@html icons.bug}</span>
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
		<p>Cheer up and <a href="/">go to home, page</a></p>
	</main>

	<div id="mascot">
		<Serena />
	</div>
</div>

<style>
	#root {
		color: hsl(209, 61%, 16%);
		background: hsl(210, 36%, 97%);
		min-height: 100vh;
	}

	#root ::selection {
		color: hsl(210, 36%, 96%);
		background: hsl(205, 65%, 55%);
	}

	main {
		max-width: 42rem;
		margin-inline: auto;
		padding: 2rem 1rem;
	}

	main > * + * {
		margin-top: 0.75em;
	}

	.code {
		display: flex;
		flex-direction: column;
	}

	.code pre,
	.code > span {
		color: #e0def4;
		background: #232136;
	}

	.code pre {
		margin-top: 0;
		padding: 1rem;
		border-radius: 1rem;
		line-height: 1.75;
	}

	.code > span {
		align-self: flex-end;
		display: inline-flex;
		align-items: center;
		gap: 0 0.5rem;
		transform: translateX(-1.5rem);
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		padding: 0.4rem 1rem;
		font-weight: 700;
	}

	.code > span > :global(svg) {
		display: block;
		height: 1em;
		width: auto;
	}

	.code pre {
		overflow-x: auto;
	}

	.code pre::-webkit-scrollbar {
		height: 0.4rem;
	}

	.code pre::-webkit-scrollbar-thumb {
		background: var(--accent);
		border-radius: 0.2rem;
	}

	#mascot {
		max-width: 32rem;
		width: 100vmin;
		margin-inline: auto;
	}

	#mascot > :global(svg) {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
