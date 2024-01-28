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

<div>
	<button {disabled} on:click={handleAnimation}>Animate</button>

	<svg viewBox="0 0 80 50">
		<defs>
			<pattern
				id="rope-pattern-check"
				viewBox="0 0 2 2"
				width="10"
				height="10"
				patternUnits="userSpaceOnUse"
			>
				<rect width="2" height="2" fill="hsl(0, 0%, 86%)" />
				<g fill="hsl(0, 0%, 84%)">
					<rect width="1" height="1" />
					<rect x="1" y="1" width="1" height="1" />
				</g>
			</pattern>
		</defs>

		<rect width="80" height="50" fill="url(#rope-pattern-check)" />

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
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

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
