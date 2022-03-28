<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let angle = spring(20, {
		stiffness: 0.1,
		damping: 0.25
	});

	let scale = spring(1, {
		stiffness: 0.1,
		damping: 0.2
	});

	let svg;
	let w, h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	function handleStart() {
		scale.set(1.1);
	}

	function handleEnd() {
		scale.set(1);
	}

	function handleMove({ offsetX, offsetY }) {
		const x = offsetX / w - 0.5;
		if (x < 0) return;
		const y = offsetY / h - 0.5;

		const degrees = (Math.atan2(y, x) * 180) / Math.PI;
		angle.set(degrees);
	}
</script>

<svelte:head>
	<link rel="icon" href="/bee.svg" type="image/svg+xml" />
</svelte:head>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-50 -50 100 100"
	bind:this={svg}
	on:mousedown={handleStart}
	on:touchstart={handleStart}
	on:mouseup={handleEnd}
	on:touchend={handleEnd}
	on:mousemove={handleMove}
	on:touchmove={(e) => {
		const { clientX, clientY } = e.touches[0];
		handleMove({
			offsetX: clientX,
			offsetY: clientY
		});
	}}
>
	<defs>
		<circle id="h" r="13" />
		<mask id="mh">
			<use fill="white" href="#h" opacity="0.2" />
			<use href="#h" x="3" />
		</mask>

		<marker id="m" viewBox="-1 -1 2 2">
			<circle fill="#38311e" r="1" />
		</marker>

		<radialGradient
			id="g"
			cx="35%"
			cy="0%"
			r="20"
			spreadMethod="repeat"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset="0.5" stop-color="#38311e" />
			<stop offset="0.5" stop-color="#f8c760" />
		</radialGradient>

		<path transform="scale({$scale})" id="b" d="M 0 0 c -0 -20 -50 -30 -50 0 0 30 50 20 50 0" />
		<mask id="mb">
			<use fill="white" href="#b" opacity="0.2" />
			<use href="#b" x="5" y="-5" />
		</mask>

		<g id="w">
			<g opacity="0.5">
				<use href="#b" fill="#daefe6" />
				<ellipse rx="6" ry="3" fill="white" cx="-32" cy="-12" />
			</g>
		</g>
	</defs>

	<g transform="scale(1 1)">
		<g transform="rotate({$angle})">
			<g transform="scale(1 1)">
				<g transform="translate(20 0)">
					<g transform="translate(-5 0)">
						<g
							fill="#38311e"
							stroke="#38311e"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path transform="translate(-48 0) scale({$scale ** 5})" d="M 0 -5 l -8 4 8 4z" />
						</g>
						<use href="#b" fill="url(#g)" />
						<use href="#b" mask="url(#mb)" />
					</g>

					<g transform="translate(-10 0) scale(0.85)">
						<g transform="scale({$scale})">
							<g transform="rotate({$angle * 0.1 * 1})">
								<use href="#w" transform="rotate(10)" />
							</g>
							<g transform="rotate({$angle * 0.2 * -1})">
								<use href="#w" transform="rotate(30)" />
							</g>
						</g>
					</g>

					<g fill="none" stroke="#38311e" stroke-width="1.2" marker-end="url(#m)">
						<g id="a">
							<g transform="scale({$scale})">
								<path d="M 1.5 0 v -8 c 0 -10 8 -15 10 -15" />
							</g>
						</g>

						<use transform="scale(-1 1)" y="-3" href="#a" />
					</g>

					<g transform="scale({$scale})">
						<use href="#h" fill="#f8c760" />
						<use href="#h" mask="url(#mh)" />
					</g>

					<g transform="translate(0 0)">
						<g id="e">
							<g transform="scale({$scale ** 2})">
								<g fill="#38311e">
									<circle cx="7" cy="-3" r="3.5" />
									<circle cx="8" cy="-4" r="0.8" fill="white" />
								</g>
							</g>
						</g>
						<use x="-10" href="#e" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>
