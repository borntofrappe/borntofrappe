<script>
	import Heading from '$lib/components/Heading.svelte';
	import site from '$lib/utils/site.js';

	const { title } = site;

	import { page } from '$app/stores';

	import Serena from './mignon/Serena.svelte';
</script>

<svelte:head>
	<title>Status code {$page.status} | {title}</title>
	<meta name="description" content={$page.error.message} />
	<link rel="icon" href="icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div
	class="[ box ]"
	style="
		--padding: 1rem;
		--box-color: hsl(209 61% 16%); 
		--box-background: hsl(210 36% 96%); 
		--selection-color: hsl(211 39% 23%); 
		--selection-background: hsl(210 31% 80%);
		--highlight: hsl(212 33% 89%);
	"
>
	<div class="[ center stack ]" style="--leading: 0;">
		<main class="[ flow ]">
			<Heading level="h1" stroke="var(--box-color)" fill="var(--highlight)">Oopsie</Heading>
			<p>Something quite unexpected has happened, but let's try to be positive.</p>
			<p>Here's a possibly helpful message for context:</p>
			<pre class="language-bash"><code class="token string">{$page.error.message}</code></pre>
			<p>
				If you think this is a mistake and you feel up to it, please consider filing an issue
				<a
					href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{$page.status}&body={$page
						.error.message}&labels=bug">on GitHub</a
				>.
			</p>
			<p>If you need some guidance, <em>home is always a good place to start.</em></p>
			<p>Cheer up and <a href="/">go to home, page</a>.</p>
		</main>

		<div class="[ center ]" style="--measure: 32rem;">
			<Serena />
		</div>
	</div>
</div>
