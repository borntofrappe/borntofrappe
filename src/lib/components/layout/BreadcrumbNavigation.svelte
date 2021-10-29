<script>
	import icons from '$lib/icons.js';

	// you should consider the relative URL and add one list item for each path
</script>

<nav aria-label="Breadcrumb navigation">
	<ol>
		<li><a href="/">borntofrappe {@html icons.rocket}</a></li>
	</ol>
</nav>

<style>
	nav ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav ol li {
		display: inline-block;
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

	nav a :global(svg) {
		margin-left: 0.3em;
		width: 1.5em;
		height: auto;
	}
</style>
