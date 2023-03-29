<script>
	let animate = null;

	const handleAnimation = () => {
		animate.beginElement();
	};
</script>

<button on:click={handleAnimation}> Animate </button>

<svg viewBox="0 0 80 50">
	<rect width="80" height="50" fill="url(#jump-the-rope-pattern)" />

	<g transform="translate(40 37.75)">
		<g>
			<animateTransform
				begin="rope.begin"
				attributeName="transform"
				type="translate"
				values="0 0; 0 -10; 0 0;"
				dur="0.7s"
				calcMode="spline"
				keySplines="0.25 0 0.25 1; 0.55 0 0.25 1;"
			/>
			<use href="#jump-the-rope-hero" x="-4" y="-8" width="8" height="8" />
		</g>
	</g>

	<g transform="translate(0 30)">
		<g fill="none" stroke="hsl(0, 0%, 20%)" stroke-linecap="round">
			<path stroke-width="0.25" d="M 0 7.75 l 80 0" />
			<path stroke-width="0.5" d="M 0 0 c 20 10 60 10 80 0">
				<animate
					bind:this={animate}
					id="rope"
					begin="indefinite;"
					attributeName="d"
					dur="1s"
					values="M 0 0 c 20 10 60 10 80 0; M 0 0 c 20 -10 60 -10 80 0; M 0 0 c 20 10 60 10 80 0;"
				/>
			</path>
		</g>
	</g>

	<g transform="translate(40 37.75)">
		<g>
			<animateTransform
				begin="rope.begin"
				attributeName="transform"
				type="translate"
				values="0 0; 0 -10; 0 0;"
				dur="0.7s"
				calcMode="spline"
				keySplines="0.25 0 0.25 1; 0.55 0 0.25 1;"
			/>
			<use href="#jump-the-rope-hero" x="-4" y="-8" width="8" height="8">
				<animate
					begin="rope.begin"
					attributeName="opacity"
					values="1; 0; 1"
					dur="1s"
					calcMode="discrete"
					keyTimes="0; 0.5; 1"
				/>
			</use>
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
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
