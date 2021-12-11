<script context="module">
	export async function load({ session }) {
		const posts = Object.values(session.posts);

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	export let posts = [];
</script>

<Meta
	title="blog | borntofrappe"
	description="Blog for my personal website. This is where I write about web development, game development and anything that piques my interest. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header>
	<h1>Blog</h1>
	<p>I build, I learn, I write. Not necessarily in that order.</p>
</Header>

<main id="content">
	{#each posts as { title, brief, slug }}
		<article>
			<h2>
				<a href="/blog/{slug}">{title}</a>
			</h2>
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
		margin: 3em auto 6em;
	}

	main > * + * {
		margin-top: 0.75em;
	}
</style>
