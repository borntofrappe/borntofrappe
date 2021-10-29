<script>
	import { page } from '$app/stores';
	import icons from '$lib/icons.js';

	$: breadcrumbs =
		$page.path === '/'
			? []
			: $page.path
					.slice(1)
					.split('/')
					.reduce(
						(acc, curr, i) => [
							...acc,
							{
								href: i === 0 ? `/${curr}` : `${acc[i - 1].href}/${curr}`,
								path: curr,
								icon: curr
							}
						],
						[]
					);
</script>

<nav aria-label="Breadcrumb navigation">
	<ol>
		<li>
			<a href="/">borntofrappe {@html icons.rocket}</a>
		</li>
		{#each breadcrumbs as { href, path, icon }}
			<li>
				<a {href}>/ {path} {@html icons[icon] || ' '}</a>
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
