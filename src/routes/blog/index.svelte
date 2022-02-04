<script context="module">
	export async function load({ session }) {
		const entries = [...session.entries.values()];

		return {
			props: {
				entries
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	export let entries;
</script>

<Meta title="Blog | borntofrappe" description="There are {entries.length} articles in the blog." />

<Header>
	<h1>Blog</h1>
	<p>
		Monday to Friday I tend to write about code. Over the weekend I sparingly write about games and
		anything which piques my interest. The hope is you'll find something of value in at least a day
		a week.
	</p>
</Header>

<main id="content">
	{#if entries.length === 0}
		<h2>Well, well, well</h2>
		<p>It seems there are no articles at the time of writing. Isn't it funny.</p>
		<p>At least we can all cherish how CSS handles layout with an unexpected set of elements.</p>
	{:else}
		{#each entries as { slug, title, datetime, date, brief }}
			<article>
				<h2>
					<a sveltekit:prefetch href="/blog/{slug}">{title}</a>
				</h2>
				<time {datetime}>{date.toDateString()}</time>
				<p>{brief}</p>
			</article>
		{/each}
	{/if}
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
		margin-top: 1em;
	}

	article > * + * {
		margin-top: 0.4em;
	}
</style>
