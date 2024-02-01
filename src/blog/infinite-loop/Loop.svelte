<script>
	import { onMount } from 'svelte';

	const dash = 0.02;
	const dur = 10;

	let trigger = null;

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (!reducedMotion.matches) {
			trigger.beginElement();
		}
	});
</script>

<svg style="display: block;" viewBox="-65 -40 130 80">
	<title>Infinite loop</title>
	<rect fill="hsl(210 10% 23%)" x="-65" y="-40" width="130" height="80" rx="10" />
	<g fill="none" stroke-linecap="round">
		<path
			stroke="hsl(210 9% 31%)"
			stroke-width="4"
			d="M 22.5 -15 A 15 15 0 0 1 22.5 15 C 0 15 0 -15 -22.5 -15 A 15 15 0 0 0 -22.5 15 C 0 15 0 -15 22.5 -15"
		/>
		<path
			stroke="hsl(210 17% 95%)"
			stroke-width="3"
			pathLength="1"
			stroke-dasharray="{dash} {1 - dash}"
			stroke-dashoffset={dash}
			d="M 22.5 -15 A 15 15 0 0 1 22.5 15 C 0 15 0 -15 -22.5 -15 A 15 15 0 0 0 -22.5 15 C 0 15 0 -15 22.5 -15"
		>
			<animate
				begin="loopTrigger.begin"
				attributeName="stroke-dashoffset"
				to={(1 - dash) * -1}
				{dur}
				repeatCount="indefinite"
			/>
			<set attributeName="display" to="none" />
			<set
				bind:this={trigger}
				id="loopTrigger"
				begin="indefinite"
				attributeName="display"
				to="initial"
			/>
		</path>
	</g>
</svg>
