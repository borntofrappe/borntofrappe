<script>
	import { onMount } from 'svelte';

	let open = false;

	onMount(() => {
		const listener = (e) => {
			if (e.matches) {
				open = false;
			} else {
				open = true;
			}
		};

		const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

		if (!reducedMotion.matches) {
			open = true;
		}

		reducedMotion.addEventListener('change', listener);

		return () => {
			reducedMotion.removeEventListener('change', listener);
		};
	});
</script>

<svg class:open style="display: block;" viewBox="-42 -36 84 84">
	<g stroke-linecap="round" stroke-linejoin="round">
		<path fill="hsl(3 76% 79%)" d="M -36 0 A 36 36 0 0 1 36 0" />
		<path fill="hsl(14 84% 85%)" d="M -29 0 A 29 29 0 0 1 29 0" />
		<rect fill="hsl(18 38% 95%)" x="-38" width="76" height="4" rx="2" />
		<rect fill="hsl(18 38% 95%)" x="-35" y="4" width="70" height="40" />
		<rect fill="hsl(3 76% 79%)" x="-36" y="44" width="72" height="4" rx="2" />
		<rect
			fill="hsl(4 87% 90%)"
			stroke="hsl(4 82% 80%)"
			stroke-width="2"
			x="-15"
			y="13"
			width="30"
			height="30"
		/>
		<rect
			class="window"
			opacity="0"
			fill="hsl(18 38% 95%)"
			fill-opacity="0.5"
			stroke="hsl(18 38% 99%)"
			stroke-width="2"
			pathLength="20"
			stroke-dasharray="0 0.5"
			x="-15"
			y="13"
			width="30"
			height="30"
		/>
		<g transform="translate(-35 4)">
			<path
				fill="hsl(3 76% 79%)"
				d="M 0 0 0 14 A 5 5 0 0 0 10 14 L 10 0 M 20 0 20 8 A 5 5 0 0 0 30 8 L 30 0 M 40 0 40 8 A 5 5 0 0 0 50 8 L 50 0 M 60 0 60 14 A 5 5 0 0 0 70 14 L 70 0"
			/>
			<path
				transform="translate(10 0)"
				fill="hsl(14 84% 85%)"
				d="M 0 0 0 10 A 5 5 0 0 0 10 10 L 10 0 M 20 0 20 6 A 5 5 0 0 0 30 6 L 30 0 M 40 0 40 10 A 5 5 0 0 0 50 10 L 50 0"
			/>
		</g>
		<text
			fill="hsl(21 100% 20%)"
			stroke="hsl(21 100% 20%)"
			stroke-width="0.5"
			font-family="serif"
			font-size="8"
			font-weight="700"
			letter-spacing="1"
			style="text-transform: uppercase;"
			text-anchor="middle"
			y="-6"
		>
			Tickets
		</text>
	</g>
</svg>

<style>
	svg .window {
		opacity: 0;
		stroke-dashoffset: 0;
		animation: offset 1s steps(3) infinite reverse paused;
	}

	svg.open .window {
		opacity: 1;
		animation-play-state: running;
	}

	@keyframes offset {
		0% {
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dashoffset: 5;
		}
		100% {
			stroke-dashoffset: 10;
		}
	}
</style>
