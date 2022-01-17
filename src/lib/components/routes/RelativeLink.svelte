<script>
	export let href;
</script>

<a {href}>
	<slot />
</a>

<style>
	:global(.webfonts) a {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}

	a {
		text-decoration: none;
		--transition-duration: 0.75s;
		position: relative;
		z-index: 5;
	}

	a:focus {
		outline: none;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		top: 100%;
		background: currentColor;
		transition: transform 0.75s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-sine);
		pointer-events: none;
		z-index: -5;
	}

	a::before {
		left: 0%;
		width: 100%;
		height: 2px;
		transform-origin: 0% 50%;
		transform: translate(0%, -50%) scaleX(0);
	}

	a:hover::before,
	a:focus::before {
		transform: translate(0%, -50%) scaleX(1);
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		a {
			display: inline-block;
			padding-bottom: 0.55em;
		}

		a::after {
			left: 50%;
			width: 100%;
			height: 1.75em;
			transform: translate(-50%, -50%) rotateX(0);
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.75) rotate(90)"%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3Cpath stroke-width="8" d="M 0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.75) rotate(90)"%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3Cpath stroke-width="8" d="M 0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
		}

		a:hover::after,
		a:focus::after {
			transform: translate(50%, -50%);
		}
	}
</style>
