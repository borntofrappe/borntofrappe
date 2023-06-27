<script>
	import { onMount } from 'svelte';

	let animateMotion = null;
	let animating = false;

	onMount(() => {
		animateMotion.addEventListener('endEvent', () => {
			animating = false;
		});
	});

	const handleAnimation = () => {
		try {
			animateMotion.getStartTime();
		} catch {
			animateMotion.beginElement();
			animating = true;
		}
	};
</script>

<button disabled={animating} on:click={handleAnimation}> Take a loop </button>

<svg viewBox="-50 -40 100 80">
	<defs>
		<radialGradient
			id="animate-motion-gradient-stripes"
			spreadMethod="reflect"
			r="0.2"
			cx="1.25"
			fx="1.25"
			cy="0.5"
			fy="0.5"
		>
			<stop stop-color="#F7C948" offset="0" />
			<stop stop-color="#F7C948" offset="0.45" />
			<stop stop-color="#513C06" offset="0.55" />
			<stop stop-color="#513C06" offset="1" />
		</radialGradient>
	</defs>
	<g fill="none" stroke="currentColor" stroke-dasharray="2 4" stroke-linecap="round">
		<path d=" M 0 0 c -10 -20 -40 -20 -40 0 0 20 30 20 40 0 10 -20 40 -20 40 0 0 20 -30 20 -40 0" />
	</g>

	<g>
		<animateMotion
			bind:this={animateMotion}
			dur="4s"
			path="M 0 0 c -10 -20 -40 -20 -40 0 0 20 30 20 40 0 10 -20 40 -20 40 0 0 20 -30 20 -40 0"
			begin="indefinite"
		/>
		<g fill="none" stroke="#513C06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M -3 -1 l -2 1 2 1" />
			<path d="M 4 -0.5 l 2 -2" />
			<path d="M 4 -0.5 l 2 -2" transform="scale(1 -1)" />
		</g>
		<g
			fill="#2BB0ED"
			stroke="#2BB0ED"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="rotate(15)">
				<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
			</g>
			<g transform="scale(1 -1)">
				<g transform="rotate(15)">
					<path opacity="0.5" d="M 2 0 q 0 -6 -6 -6 0 6 6 6" />
				</g>
			</g>
		</g>
		<ellipse rx="4.45" ry="4.2" fill="#513C06" />
		<ellipse rx="4.5" ry="4.25" fill="url(#animate-motion-gradient-stripes)" />
		<circle cx="3.5" r="2.8" fill="#513C06" />
	</g>
</svg>

<style>
	button {
		cursor: pointer;
		display: block;
		padding: 0.5rem 0.75rem;
		margin-inline: auto;
		color: hsl(0, 0%, 97%);
		background: hsl(0, 0%, 12%);
		border: none;
		font-weight: 700;
		border-radius: 0.25rem;
		transition: opacity 0.2s cubic-bezier(0.37, 0, 0.63, 1),
			transform 0.2s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button[disabled] {
		opacity: 0.5;
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
