<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const arrowOffset = spring(35);
	const arrowAngle = spring(-60);

	const springOptions = {
		damping: 0.4,
		stiffness: 0.25
	};
	const chordOffset = spring(0, springOptions);
	const arrowDistance = spring(0, springOptions);

	let svg;
	let l;
	let w;

	let hasFocus;
	let wasLaunched;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { left, width } = svg.getBoundingClientRect();
		l = left;
		w = width;
	};

	const handleFocus = () => {
		hasFocus = true;

		if (wasLaunched) return;

		arrowOffset.set(0);
		arrowAngle.set(0);
	};

	const handleBlur = () => {
		hasFocus = false;

		if (wasLaunched) return;

		if (Math.floor($chordOffset) === 0) {
			arrowOffset.set(35);
			arrowAngle.set(-60);
			arrowDistance.set(0);
		} else {
			handleRelease();
		}
	};

	const handleCharge = ({ offsetX }) => {
		if (wasLaunched) return;

		const x = offsetX / w - 0.5;
		if (x < 0) return;

		arrowDistance.set(x * 50);
		chordOffset.set(x * 70);
	};

	const handleRelease = async () => {
		wasLaunched = true;

		arrowDistance.set(-120);
		await chordOffset.set(0);

		const timeout = setTimeout(() => {
			handleReset();
			clearTimeout(timeout);
		}, 2000);
	};

	const handleReset = async () => {
		arrowDistance.set(0);

		if (!hasFocus) {
			arrowOffset.set(35);
			arrowAngle.set(-60);
		}

		wasLaunched = false;
	};
</script>

<svelte:window on:resize={handleSize} />

<svg
	bind:this={svg}
	on:mouseenter={handleFocus}
	on:touchstart|preventDefault={handleFocus}
	on:mouseleave={handleBlur}
	on:touchend|preventDefault={handleBlur}
	on:mousemove={handleCharge}
	on:touchmove|preventDefault={(e) => {
		const { pageX: x } = e.touches[0];
		handleCharge({
			offsetX: x - l
		});
	}}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-60 -40 120 80"
>
	<defs>
		<path
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			id="b"
			d="M 0 -30 a 5 5 0 0 0 5 -5 5 5 0 0 1 -5 5 30 30 0 0 0 0 60 5 5 0 0 1 5 5 5 5 0 0 0 -5 -5 18 16 0 0 1 -14 -26 v -8 a 18 16 0 0 1 14 -26"
		/>
		<path id="h" d="M 0 0 l 3 -3 3 3 -3 3z" />
		<mask id="mb">
			<use href="#b" fill="white" stroke="white" opacity="0.5" />
			<use href="#b" stroke="black" x="-1.5" transform="scale(1.03)" />
			<use href="#h" fill="white" opacity="0.5" x="-1.2" transform="translate(-26 0) scale(1.2)" />
		</mask>

		<mask id="mh">
			<use href="#b" fill="white" stroke="white" />
			<use href="#h" x="-26" />
		</mask>
	</defs>

	<g fill="#3c413a" stroke="#3c413a" stroke-linecap="round" stroke-linejoin="round">
		<g transform="translate({$arrowDistance} 0)">
			<g transform="translate(1 0)">
				<g transform="translate({$arrowOffset} 0)">
					<g transform="rotate({$arrowAngle})">
						<g transform="rotate(-90)">
							<path d="M 0 -40 l 3 8 -3 2 -3 -2z v 40" />
							<path d="M 0 0 l 3 3 v 6 l -3 -3 -3 3 v -6z" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>

	<path fill="none" stroke="#6c413a" d="M 1 -30 c {$chordOffset} 20 {$chordOffset} 40 0 60" />

	<g mask="url(#mh)">
		<use href="#b" fill="#df724b" stroke="#df724b" />
		<use href="#b" stroke="black" mask="url(#mb)" />
	</g>
</svg>
