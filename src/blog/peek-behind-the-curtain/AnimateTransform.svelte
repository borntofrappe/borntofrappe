<script>
	import { onMount } from 'svelte';

	export let repeatEvent = true;
	let svg = null;
	let animate = false;

	onMount(() => {
		if (repeatEvent === false) return;
		svg.querySelector('animateTransform').addEventListener('repeatEvent', () => {
			const baseLightness = Math.random() > 0.7 ? 5 : 85;
			const lightness = baseLightness + Math.floor(Math.random() * 15);
			const color = `hsl(0, 0%, ${lightness}%)`;
			svg.style.color = color;
		});
	});

	const handleAnimation = (begin = false) => {
		if (svg === null) return;

		const animateTransform = svg.querySelector('animateTransform');
		if (begin) {
			animateTransform.beginElement();
		} else {
			animateTransform.endElement();
		}
	};

	$: handleAnimation(animate);
</script>

<label>
	<input bind:checked={animate} type="checkbox" /> Toggle animation
</label>

<svg bind:this={svg} viewBox="0 0 100 60">
	<g transform="translate(-50 32.5)">
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
				<ellipse fill="#F8C4FE" stroke="#F8C4FE" rx="6.5" ry="7.5" />
				<g stroke="#27241D" stroke-linecap="round" stroke-linejoin="round">
					<path d="M 0 5 v 1 q 0.5 0.5 1 0 m -1 0 q -0.5 0.5 -1 0" fill="none" stroke-width="0.4" />
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
