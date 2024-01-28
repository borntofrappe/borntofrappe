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

<div>
	<label>
		<input type="checkbox" bind:checked />
		<span>Toggle animation</span>
	</label>

	<svg viewBox="0 0 80 50">
		<defs>
			<pattern
				id="jump-the-rope-pattern-check"
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
			<symbol id="jump-the-rope-hero" viewBox="-5.4 -5.4 10.8 10.8">
				<g
					stroke="hsl(0, 0%, 20%)"
					stroke-width="0.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect fill="hsl(0, 0%, 97%)" x="-5" y="-5" width="10" height="10" rx="1" />
					<path d="M -2 -2.5 v 2 M 2 -2.5 v 2 M -1.5 2 q 1.5 1 3 0" />
				</g>
			</symbol>
		</defs>

		<rect width="80" height="50" fill="url(#jump-the-rope-pattern-check)" />

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
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

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
