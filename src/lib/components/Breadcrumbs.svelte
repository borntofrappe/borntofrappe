<script>
	import { page } from '$app/stores';
	import icons from '$lib/icons.js';

	const root = {
		href: '/',
		text: 'borntofrappe',
		icon: icons.rocket
	};
</script>

<nav aria-label="Breadcrumb navigation" id="breadcrumb">
	<ol>
		{#each $page.path
			.split('/')
			.filter((d) => d)
			.reduce((acc, curr, i) => [...acc, { href: i === 0 ? `/${curr}` : `${acc[acc.length - 1].href}/${curr}`, text: `/ ${curr}`, icon: icons[curr] || '' }], [root]) as { href, text, icon }}
			<li>
				<a {href}>{text} {@html icon}</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	nav ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav ol > * + * {
		margin-left: 0.3em;
	}

	nav ol li {
		display: inline-block;
	}

	:global(.webfonts) nav a {
		font-family: JosefinSansBold, sans-serif;
	}

	nav a {
		text-decoration: none;
		font-weight: 700;
		padding: 0.25em 0;
		display: inline-flex;
		align-items: center;
	}

	nav a :global(svg) {
		margin-left: 0.3em;
		width: 1.5em;
		height: auto;
	}
</style>
