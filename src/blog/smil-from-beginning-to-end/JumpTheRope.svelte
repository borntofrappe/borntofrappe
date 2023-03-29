<script>
	let checked = false;
	let animate = null;

	const durs = {
		jump: '0.7s',
		rope: '1s'
	};

	const handleChecked = (checked) => {
		if (!animate) return;
		if (checked) {
			animate.setAttribute('begin', 'jumpTheRope.end');
			animate.beginElement();
		} else {
			animate.setAttribute('begin', 'indefinite');
		}
	};

	$: handleChecked(checked);
</script>

<label>
	<input type="checkbox" bind:checked />
	<span>Toggle animation</span>
</label>

<svg viewBox="0 0 80 50">
	<rect width="80" height="50" fill="url(#jump-the-rope-pattern)" />

	<g transform="translate(40 37.75)">
		<g>
			<animateTransform
				begin="jumpTheRope.begin"
				attributeName="transform"
				type="translate"
				values="0 0; 0 -10; 0 0;"
				dur={durs.jump}
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
					id="jumpTheRope"
					begin="indefinite; jumpTheRope.end"
					restart="whenNotActive"
					attributeName="d"
					dur={durs.rope}
					values="M 0 0 c 20 10 60 10 80 0; M 0 0 c 20 -10 60 -10 80 0; M 0 0 c 20 10 60 10 80 0;"
				/>
			</path>
		</g>
	</g>

	<g transform="translate(40 37.75)">
		<g>
			<animateTransform
				begin="jumpTheRope.begin"
				attributeName="transform"
				type="translate"
				values="0 0; 0 -10; 0 0;"
				dur={durs.jump}
				calcMode="spline"
				keySplines="0.25 0 0.25 1; 0.55 0 0.25 1;"
			/>
			<use href="#jump-the-rope-hero" x="-4" y="-8" width="8" height="8">
				<animate
					begin="jumpTheRope.begin"
					attributeName="opacity"
					values="1; 0; 1"
					dur={durs.rope}
					calcMode="discrete"
					keyTimes="0; 0.5; 1"
				/>
			</use>
		</g>
	</g>
</svg>

<style>
	label {
		display: block;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}
</style>
