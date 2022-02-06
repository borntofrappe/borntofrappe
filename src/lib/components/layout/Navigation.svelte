<script>
	import icons from '$lib/icons';
</script>

<nav>
	<ul>
		<li>
			<a href="/">borntofrappe {@html icons.rocket}</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/blog">blog {@html icons.blog}</a>
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
	}

	ul li {
		display: inline-block;
	}

	ul li + li {
		margin-left: 0.5em;
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
