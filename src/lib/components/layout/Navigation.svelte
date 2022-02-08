<script>
	import { page } from '$app/stores';
	import icons from '$lib/icons';
</script>

<nav>
	<ul>
		<li>
			<a
				href="/"
				aria-current={$page.url.pathname === '/' ? 'page' : ''}
				class:active={$page.url.pathname === '/'}
			>
				borntofrappe {@html icons.rocket}</a
			>
		</li>
		<li>
			<a
				href="/blog"
				aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : ''}
				class:active={$page.url.pathname.startsWith('/blog')}
				sveltekit:prefetch
			>
				blog {@html icons.blog}</a
			>
		</li>
	</ul>
</nav>

<style>
	:global(.webfonts) a {
		font-family: JosefinsansBold, sans-serif;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.5em;
	}

	ul li::marker {
		content: '';
	}

	a {
		text-decoration: none;
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
		animation: wiggle 0.2s ease-in-out;
	}

	@keyframes wiggle {
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
