<script>
	import icons from './_icons.js';
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/">borntofrappe {@html icons.rocket}</a>
	{#if $page.path !== '/'}
		{#each $page.path
			.split('/')
			.slice(1)
			.reduce((acc, curr, index) => [...acc, { href: acc[index - 1] ? `${acc[index - 1].href}/${curr}` : `/${curr}`, path: curr }], []) as { href, path }}
			<a sveltekit:prefetch {href}
				>/ {path}
				{#if icons[path]}{@html icons[path]}{/if}</a
			>
		{/each}
	{/if}
</nav>

<style>
	nav > * + * {
		margin-left: 0.3em;
	}

	nav a {
		text-decoration: none;
		font-family: 'Maven Pro', sans-serif;
		font-weight: 700;
		padding: 0.25rem 0;
		display: inline-flex;
		align-items: center;
	}

	nav a :global(svg) {
		margin-left: 0.3rem;
		width: 1.5em;
		height: auto;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference]) nav a) {
			font-weight: 600;
		}
	}

	:global(html[data-preference='dark'] nav a) {
		font-weight: 600;
	}
</style>
