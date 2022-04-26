<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { tweened, spring } from 'svelte/motion';
	import { quintOut as easing } from 'svelte/easing';

	let offset = tweened(1);
	let scale = tweened(1, {
		duration: 750,
		easing
	});

	let svg;
	let w;

	onMount(async () => {
		handleSize();

		await offset.set(0, {
			delay: 500,
			duration: 1500
		});

		offset = spring(0, {
			damping: 0.5
		});
	});

	const handleSize = () => {
		const { width } = svg.getBoundingClientRect();
		w = width;
	};

	function handleMove({ offsetX }) {
		if (!offset.damping) return;

		const x = offsetX / w;
		offset.set(1 - x);
	}

	$: if ($offset < 0.25 && $scale == 1) {
		scale.set(1.2);
	}
	$: if ($offset > 0.25 && $scale == 1.2) {
		scale.set(1);
	}
</script>

<svelte:head>
	<link rel="icon" href="/icons/rainbow.svg" type="image/svg+xml" />
</svelte:head>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-100 -60 200 120"
	bind:this={svg}
	on:mousemove={handleMove}
	on:touchmove={(e) => {
		const { clientY } = e.touches[0];
		handleMove({
			offsetX: clientY
		});
	}}
>
	<defs>
		<circle id="c" r="11" />
		<mask id="m">
			<use href="#c" fill="white" />
			<use href="#c" y="-2" fill="black" />
		</mask>
		<g id="cc">
			<use href="#c" />
			<use href="#c" fill="black" mask="url(#m)" opacity="0.1" />
		</g>
		<g id="ccc">
			<g fill="#f7fafa">
				<use href="#c" />
				<use transform="translate(-12.5 -5)" href="#c" />
				<use transform="translate(12.5 -5)" href="#c" />
				<use transform="translate(0 -10)" href="#c" />
				<use transform="translate(-20 0) rotate(80)" href="#cc" />
				<use transform="translate(20 0) rotate(-20)" href="#cc" />
				<use transform="translate(-15 10) rotate(30)" href="#cc" />
				<use transform="translate(15 10) rotate(-10)" href="#cc" />
				<use transform="translate(0 15) rotate(20)" href="#cc" />
			</g>
		</g>
	</defs>

	<g transform="translate(-55 25)">
		<g transform="rotate(-20)">
			<g transform="translate(0 -10)">
				<g fill="none" stroke-width="10" stroke-linecap="round">
					<g stroke="#ed979a">
						<path
							pathLength="1"
							stroke-dasharray="1"
							stroke-dashoffset={$offset}
							id="p"
							d="M -5 0 a 70 70 0 0 1 130 0"
						/>
					</g>
					<use stroke="#fedd5c" href="#p" y="10" />
					<use stroke="#59bfef" href="#p" y="20" />
					<use stroke="#e3f2f9" href="#p" y="30" />
				</g>
			</g>
			<g transform="translate(120 0)">
				<g transform="rotate(20) scale(-1 1)">
					<g transform="scale({$scale})">
						<use href="#ccc" />
					</g>
				</g>
			</g>
		</g>

		<use href="#ccc" transform="scale(1.2)" />
	</g>
</svg>
