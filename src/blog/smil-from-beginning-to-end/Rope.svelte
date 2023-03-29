<script>
	import { onMount } from 'svelte';

	let animate = null;
	let disabled = false;

	onMount(() => {
		animate.addEventListener('endEvent', () => {
			disabled = false;
		});
	});

	const handleAnimation = () => {
		if (disabled) return;

		disabled = true;
		animate.beginElement();
	};
</script>

<button {disabled} on:click={handleAnimation}>Animate</button>

<svg viewBox="0 0 80 50">
	<rect width="80" height="50" fill="url(#jump-the-rope-pattern)" />

	<g transform="translate(0 30)">
		<g fill="none" stroke="hsl(0, 0%, 20%)" stroke-width="0.5" stroke-linecap="round">
			<path d="M 0 0 c 20 10 60 10 80 0">
				<animate
					bind:this={animate}
					begin="indefinite;"
					restart="whenNotActive"
					attributeName="d"
					dur="1s"
					values="M 0 0 c 20 10 60 10 80 0; M 0 0 c 20 -10 60 -10 80 0; M 0 0 c 20 10 60 10 80 0;"
				/>
			</path>
		</g>
	</g>
</svg>

<style>
	button {
		display: block;
		margin-inline: auto;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 10%);
		border: none;
		border-radius: 2rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		transition: opacity 0.15s cubic-bezier(0.37, 0, 0.63, 1),
			transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:disabled {
		opacity: 0.7;
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
