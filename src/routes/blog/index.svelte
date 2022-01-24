<script context="module">
	export async function load({ session }) {
		const { articles } = session;

		return {
			props: {
				articles: [...articles.values()]
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';
	import RelativeLink from '$lib/components/routes/RelativeLink.svelte';

	import { formatDate } from '$lib/utils';

	export let articles;
</script>

<Meta title="Blog | borntofrappe" description="There are {articles.length} articles in the blog." />

<Header>
	<h1>Blog</h1>
	<p>
		I write about code, games and anything which piques my interest. Among the three I hope you'll
		find something of value.
	</p>
</Header>

<main id="content">
	{#if articles.length === 0}
		<h2>Well, well, well</h2>
		<p>It seems there are no articles at the time of writing. Isn't it funny.</p>
		<p>At least we can all cherish how CSS handles layout with an unexpected set of elements.</p>
		<p>
			<RelativeLink href="/">Go to home page</RelativeLink>
		</p>
	{:else}
		{#each articles as { slug, title, datetime, date, brief }}
			<article>
				<h2>
					<a sveltekit:prefetch href="/blog/{slug}">{title}</a>
				</h2>
				<time {datetime}>{formatDate(date)}</time>
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

	main article:not(:first-of-type) h2 {
		font-size: 1.56rem;
		font-size: var(--size-600);
	}

	main article h2 a {
		text-decoration: none;
	}

	@supports ((mask-image: url()) or (-webkit-mask-image: url())) {
		main article:first-of-type h2 a {
			display: inline-flex;
			align-items: center;
		}

		main article:first-of-type h2 a::after {
			flex-shrink: 0;
			content: '';
			width: 1.5em;
			height: 1.5em;
			background: currentColor;
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
		}
	}

	main article time {
		display: inline-block;
		font-size: 1rem;
		font-size: var(--size-400);
		padding: 0.25em 1em;
		color: hsl(320, 100%, 19%);
		color: var(--pink-900);
		background: hsl(338, 100%, 86%);
		background: var(--pink-100);
		border-radius: 1rem;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) time {
			color: hsl(185, 94%, 87%);
			color: var(--cyan-100);
			background: hsl(185, 91%, 17%);
			background: var(--cyan-900);
		}
	}

	:global(html[data-preference='dark']) time {
		color: hsl(185, 94%, 87%);
		color: var(--cyan-100);
		background: hsl(185, 91%, 17%);
		background: var(--cyan-900);
	}

	@supports (display: grid) {
		main {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
			gap: 1.75em 1.5em;
		}

		main > * + * {
			margin-top: initial;
		}

		main article:first-of-type {
			grid-column: 1/-1;
		}

		@supports (grid-template-columns: subgrid) {
			main article {
				display: grid;
				grid-template-rows: subgrid;
				grid-row: span 3;
				justify-items: start;
				gap: 0.4rem 0;
			}

			main article > * + * {
				margin-top: 0;
			}
		}
	}
</style>
