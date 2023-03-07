<script>
	import { onMount } from 'svelte';

	let svg = null;
	let animate = false;

	onMount(() => {
		svg.querySelector('animateTransform').addEventListener('repeatEvent', () => {
			const baseLightness = Math.random() > 0.7 ? 5 : 85;
			const lightness = baseLightness + Math.floor(Math.random() * 15);
			const color = `hsl(0, 0%, ${lightness}%)`;
			svg.style.color = color;
		});
	});

	const handleAnimation = (begin = false) => {
		if (svg === null) return;

		const animateTransforms = svg.querySelectorAll('animateTransform');
		if (begin) {
			animateTransforms.forEach((animateTransform) => {
				animateTransform.beginElement();
			});
		} else {
			animateTransforms.forEach((animateTransform) => {
				animateTransform.endElement();
			});
		}
	};

	$: handleAnimation(animate);
</script>

<label>
	<input bind:checked={animate} type="checkbox" /> Toggle animation
</label>

<svg bind:this={svg} viewBox="0 0 100 100">
	<rect width="100" height="100" fill="#A7D8F0" />

	<circle r="22" cx="80" cy="20" fill="#F7D070" />

	<ellipse rx="200" ry="20" cx="50" cy="100" fill="#57AE5B" />

	<g transform="translate(-50 77.5)">
		<g>
			<animateTransform
				attributeName="transform"
				id="translate"
				type="translate"
				to="200 0"
				dur="7s"
				begin="indefinite"
				repeatCount="indefinite"
			/>
			<g transform="rotate(-5)">
				<animateTransform
					attributeName="transform"
					type="rotate"
					values="-5; 5; -5; 5; -5; 5; -5"
					dur="7s"
					begin="indefinite"
					repeatCount="indefinite"
					calcMode="spline"
					keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
				/>
				<g transform="translate(-2.5 0)">
					<g fill="none" stroke="#27241D" stroke-width="3.5" stroke-linecap="round">
						<path d="M -11 4 l -3 5" />
						<path d="M -7 6 l -3 5.5" />
						<path d="M 8.5 5.5 l 3 4.5" />
						<path d="M 11.5 3.5 l 3.5 3.5" />
					</g>
					<g fill="currentColor">
						<circle r="8" />
						<circle r="8" cx="4.5" cy="4.5" />
						<circle r="8" cx="-4.5" cy="4.5" />
						<circle r="8" cx="-4.5" cy="-4.5" />
						<circle r="8" cx="4.5" cy="-5" />
						<circle r="8" cx="10" />
						<circle r="8" cx="-10" cy="1" />
					</g>
					<g transform="translate(8 -5) rotate(-10)">
						<ellipse fill="#FACDCD" stroke="#FACDCD" rx="6.5" ry="7.5" />
						<g stroke="#27241D" stroke-linecap="round" stroke-linejoin="round">
							<path
								d="M 0 5 v 1 q 0.5 0.5 1 0 m -1 0 q -0.5 0.5 -1 0"
								fill="none"
								stroke-width="0.4"
							/>
							<path
								d="M -1 4.5 c 0.5 -0.5 1.5 -0.5 2 0 -0.5 0.75 -1.5 0.75 -2 0"
								fill="#27241D"
								stroke-width="0.5"
							/>
						</g>
						<circle fill="#27241D" r="1.25" cx="-3" cy="1.5" />
						<circle fill="#27241D" r="1.25" cx="3" cy="1.5" />
						<g fill="currentColor">
							<circle r="4" cx="-5" cy="-2" />
							<circle fill="black" opacity="0.025" r="4" cx="-5" cy="-2" />
							<circle r="4" cx="-2.5" cy="-5.5" />
							<circle fill="black" opacity="0.025" r="4" cx="-2.5" cy="-5.5" />
							<circle r="4" cx="2.5" cy="-5.5" />
							<circle fill="black" opacity="0.025" r="4" cx="2.5" cy="-5.5" />
							<circle r="4" cy="-1.75" />
							<circle fill="black" opacity="0.025" r="4" cy="-1.75" />
							<circle r="4" cx="5" cy="-2" />
							<circle fill="black" opacity="0.025" r="4" cx="5" cy="-2" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>

	<path fill="#AB091E" d="M 25 0 q -5 50 -25 75 10 20 10 25 l -10 0 l 0 -100" />
	<path
		transform="translate(-5 0)"
		fill="#CF1124"
		d="M 25 0 q -5 50 -25 75 10 20 10 25 l -10 0 l 0 -100"
	/>
	<path
		transform="translate(-15 0)"
		fill="#EF4E4E"
		d="M 25 0 q -5 50 -25 75 10 20 10 25 l -10 0 l 0 -100"
	/>
	<g transform="translate(100 0) scale(-1 1)">
		<path fill="#AB091E" d="M 25 0 q -5 50 -25 75 10 20 10 25 l -10 0 l 0 -100" />
		<path
			transform="translate(-5 0)"
			fill="#CF1124"
			d="M 25 0 q -5 50 -25 75 10 20 10 25 l -10 0 l 0 -100"
		/>
		<path
			transform="translate(-15 0)"
			fill="#EF4E4E"
			d="M 25 0 q -5 50 -25 75 10 20 10 25 l -10 0 l 0 -100"
		/>
	</g>

	<path
		fill="#EF4E4E"
		d="M 0 1.5 v 20 c 7.5 6 17.5 6 25 0 15 10 35 10 50 0 7.5 6 17.5 6 25 0 v -20"
	/>
	<path
		fill="#CF1124"
		d="M 0 0.9 v 20 c 7.5 6 17.5 6 25 0 15 10 35 10 50 0 7.5 6 17.5 6 25 0 v -20"
	/>
	<path
		fill="#AB091E"
		d="M 0 0 v 20 c 7.5 6 17.5 6 25 0 15 10 35 10 50 0 7.5 6 17.5 6 25 0 v -20"
	/>
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
		color: hsl(0, 0%, 99%);
	}
</style>
