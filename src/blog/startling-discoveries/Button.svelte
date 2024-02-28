<button>
	Unlock
	<svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 100 100">
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="6"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M 77 84 C 60 87 47.5 78 47.5 63" />
			<path d="M 62 94 C 46 94 35 80 35 63 A 12.5 12.5 0 0 1 60 63" />
			<path d="M 37 93 C 18 81 20 39 47.5 38 A 25 25 0 0 1 72.5 63 L 72.5 64" />
			<path d="M 17 81 C 4 52 25 27 50 27 C 79 28 85 51 85 65" />
			<path d="M 10 36 C 25 10 75 10 90 36" />
			<path d="M 21 12 C 36 2 66 2 79 12" />
		</g>
	</svg>
</button>

<style>
	button {
		display: block;
		margin-inline: auto;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 1px;
		padding: 0.5rem 1.2rem;
		color: hsl(214 15% 91%);
		background: hsl(210 24% 16%);
		border: none;
		border-radius: 1e5px;
		transition: scale 0.1s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button > svg {
		color: hsl(178 78% 57%);
		inline-size: 2em;
		block-size: 2em;
		vertical-align: middle;
	}

	button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	g > path {
		opacity: 0;
		transition: opacity 0.3s cubic-bezier(0.37, 0, 0.63, 1);
		will-change: opacity;
	}

	button:active {
		scale: 0.975;
	}

	button:active g > path {
		opacity: 1;
	}

	button:active g > path:nth-child(1) {
		transition-delay: 0.05s;
	}

	button:active g > path:nth-child(2) {
		transition-delay: 0.1s;
	}

	button:active g > path:nth-child(3) {
		transition-delay: 0.15s;
	}

	button:active g > path:nth-child(4) {
		transition-delay: 0.2s;
	}

	button:active g > path:nth-child(5) {
		transition-delay: 0.25s;
	}

	button:active g > path:nth-child(6) {
		transition-delay: 0.3s;
	}

	@media (pointer: coarse) {
		button {
			font-size: 1.25rem;
		}
	}
</style>
