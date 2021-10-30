<script>
	import { page } from '$app/stores';
	import icons from '$lib/icons.js';

	$: breadcrumbs = $page.path
		.replace(/\/$/, '')
		.split('/')
		.slice(1)
		.reduce(
			(acc, curr) => [
				...acc,
				{
					href: `${acc.length > 1 ? acc[acc.length - 1].href : ''}/${curr}`,
					path: `/ ${curr}`,
					icon: icons[curr] || ''
				}
			],
			[
				{
					href: '/',
					path: 'borntofrappe',
					icon: icons.rocket
				}
			]
		);
</script>

<nav aria-label="Breadcrumb navigation">
	<ol>
		{#each breadcrumbs as { href, path, icon }}
			<li>
				<a {href}>{path} {@html icon}</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	nav ol {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	nav ol > * + * {
		margin-left: 0.3em;
	}

	:global(.webfonts) nav a {
		font-family: JosefinsansSemibold, sans-serif;
	}

	nav a {
		text-decoration: none;
		font-weight: 600;
		padding: 0.25em 0;
		display: flex;
		align-items: center;
	}

	nav a > :global(svg) {
		margin-left: 0.3em;
		width: 1.5em;
		height: auto;
	}
</style>
