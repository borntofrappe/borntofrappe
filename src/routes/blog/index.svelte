<script context="module">
	export async function load({ session }) {
		const { articles } = session;

		return {
			props: {
				articles
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let articles;
</script>

<Meta title="Blog | borntofrappe" description="There are {articles.length} articles in the blog." />

<main id="content">
	<header>
		<h1>Blog</h1>
		<p>I write on web development, game development, and anything that piques my interest.</p>
	</header>

	{#each articles as { slug, title, datetime, date, brief }}
		<article>
			<h2>
				<a href="/blog/{slug}">{title}</a>
			</h2>
			<time {datetime}>{date.toDateString()}</time>
			<p>{brief}</p>
		</article>
	{/each}
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 1em auto;
	}

	main > * + * {
		margin-top: 1em;
	}

	article > * + * {
		margin-top: 0.5em;
	}
</style>
