<a href="#content" class="visually-hidden" id="skip-to-content"> Skip to content </a>

<style>
	:global(.webfonts) #skip-to-content {
		font-family: JosefinSansBold, sans-serif;
	}

	#skip-to-content {
		outline: none;
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		text-decoration: none;
		font-weight: 700;
		font-size: 1rem;
		font-size: var(--size-400);
		border-radius: 2rem;
		border: none;
		padding: 0.5em 1em;
		padding-right: 2.5em;
		color: hsl(215, 10%, 98%);
		color: var(--grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--grey-0);
		box-shadow: 0 0 0.5rem -0.4rem hsl(215, 22%, 5%);
		box-shadow: 0 0 0.5rem -0.4rem var(--grey-0);
		z-index: 10;
	}

	#skip-to-content::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 0%;
		transform: translate(-100%, -50%);
		background: currentColor;
		width: 1em;
		height: 1em;
		border-radius: 50%;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		#skip-to-content::after {
			border-radius: initial;
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /%3E%3Cpath d="M -45 -20 h 28" /%3E%3Cpath d="M -45 0 h 28" /%3E%3Cpath d="M -45 20 h 28" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 3 -20 h 22 a 20 20 0 0 1 0 40 h -22 l 10 -10 -10 10 10 10" /%3E%3Cpath d="M -45 -20 h 28" /%3E%3Cpath d="M -45 0 h 28" /%3E%3Cpath d="M -45 20 h 28" /%3E%3C/g%3E%3C/svg%3E');
		}
	}
</style>
