<script>
	import icons from '$lib/icons';
</script>

<nav>
	<a href="/">borntofrappe {@html icons.rocket}</a>
</nav>

<style>
	nav {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 0rem auto;
		padding: 0.5rem 0;
	}

	:global(.webfonts) a {
		font-family: JosefinsansBold, sans-serif;
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
