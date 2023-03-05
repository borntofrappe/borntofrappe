<script>
	import Heading from '$lib/components/Heading.svelte';
	import site from '$lib/utils/site.js';

	const { title } = site;

	import { page } from '$app/stores';

	import Serena from './mignon/Serena.svelte';
	import icons from '$lib/utils/icons.js';
</script>

<svelte:head>
	<title>Status code {$page.status} | {title}</title>
	<meta name="description" content={$page.error.message} />
	<link rel="icon" href="icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div
	class="box"
	style:--padding="1rem"
	style:--color="hsl(209, 61%, 16%)"
	style:--background="hsl(210, 42%, 96%)"
	style:--selection-color="hsl(211, 39%, 23%)"
	style:--selection-background="hsl(210, 31%, 80%)"
>
	<div class="center stack" style:--leading="0">
		<main class="flow">
			<Heading level="h1" stroke="var(--color)" fill="var(--background)">Oopsie</Heading>
			<p>Something quite unexpected has happened, but let's try to be positive.</p>
			<p>Here's a possibly helpful message for context:</p>
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

		<div class="center" style:--measure="32rem">
			<Serena />
		</div>
	</div>
</div>
