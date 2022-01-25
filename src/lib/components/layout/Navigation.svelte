<script>
	import { page } from '$app/stores';
	import icons from '$lib/icons';
</script>

<nav>
	<ul>
		<li>
			<a class:active={$page.url.pathname === '/'} href="/">borntofrappe {@html icons.rocket}</a>
		</li>
		<li>
			<a class:active={$page.url.pathname.startsWith('/blog')} sveltekit:prefetch href="/blog"
				>blog {@html icons.blog}</a
			>
		</li>
	</ul>
</nav>

<style>
	ul {
		padding: 0;
		margin: 0;
	}

	ul li {
		display: inline-block;
	}

	ul > li + li {
		margin-left: 0.5em;
	}

	:global(.webfonts) a {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		padding: 0.25em 0;
		display: flex;
		align-items: center;
		gap: 0 0.3em;
	}

	a:hover {
		color: inherit;
	}

	a.active {
		color: hsl(330, 79%, 56%);
		color: var(--accent-color);
	}

	a:hover > :global(svg),
	a:focus > :global(svg) {
		animation: wriggle 0.2s ease-in-out;
	}

	@keyframes wriggle {
		25% {
			transform: rotate(10deg);
		}
		75% {
			transform: rotate(-10deg);
		}
	}

	a > :global(svg) {
		width: 1.5em;
		height: auto;
	}
</style>
