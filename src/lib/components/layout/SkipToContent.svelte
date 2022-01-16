<script>
	export let href = '#content';
</script>

<a {href} class="visually-hidden">Skip to content</a>

<style>
	:global(.webfonts) a {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}

	a {
		text-decoration: none;
		outline: none;
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		font-size: 1rem;
		font-size: var(--size-400);
		border-radius: 2rem;
		border: none;
		padding: 0.5em 1em;
		color: hsl(216, 33%, 97%);
		color: var(--cool-grey-000);
		background: hsl(210, 24%, 16%);
		background: var(--cool-grey-900);
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0 0.4em;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) a {
			color: hsl(210, 58%, 9%);
			color: var(--blue-grey-900);
			background: hsl(211, 36%, 95%);
			background: var(--blue-grey-000);
		}
	}

	:global(html[data-preference='dark']) a {
		color: hsl(210, 58%, 9%);
		color: var(--blue-grey-900);
		background: hsl(211, 36%, 95%);
		background: var(--blue-grey-000);
	}

	a::after {
		content: '';
		background: currentColor;
		width: 0.75em;
		height: 0.75em;
		border-radius: 50%;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		a::after {
			border-radius: initial;
			width: 1em;
			height: 1em;
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /%3E%3Cpath d="M -45 -20 h 28" /%3E%3Cpath d="M -45 0 h 28" /%3E%3Cpath d="M -45 20 h 28" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /%3E%3Cpath d="M -45 -20 h 28" /%3E%3Cpath d="M -45 0 h 28" /%3E%3Cpath d="M -45 20 h 28" /%3E%3C/g%3E%3C/svg%3E');
		}
	}
</style>
