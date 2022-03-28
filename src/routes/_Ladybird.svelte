<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let angle = spring(90, {
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
		const y = offsetY / h - 0.5;
		if (y < 0) return;
		const x = offsetX / w - 0.5;

		const degrees = (Math.atan2(y, x) * 180) / Math.PI;
		angle.set(degrees);
	}
</script>

<svelte:head>
	<link rel="icon" href="/ladybird.svg" type="image/svg+xml" />
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
		<marker id="m" viewBox="-1 -1 2 2">
			<circle fill="#38311e" r="1" />
		</marker>

		<circle id="b" r="25" />
		<mask id="mb">
			<use href="#b" fill="white" opacity="0.3" />
			<use href="#b" y="-3" />
			<g fill="white" stroke="white" stroke-width="0.5" stroke-linejoin="round">
				<path d="M 0 -2 l 3 50 h -6 z" />
			</g>
		</mask>
	</defs>

	<g transform="rotate({$angle})">
		<g transform="rotate(90)">
			<g transform="translate(0 -20)">
				<g transform="scale({$scale})">
					<g id="a">
						<g fill="none" stroke="#38311e" stroke-width="1.5" marker-end="url(#m)">
							<path d="M 0 0 l 12 -14" />
						</g>
					</g>
					<g transform="scale({$scale})">
						<use transform="scale(-1 1)" href="#a" />
						<circle fill="#38311e" r="14" />
					</g>
				</g>
			</g>

			<g transform="translate(0 -25)">
				<g transform="scale({$scale})">
					<g transform="translate(0 25)">
						<use href="#b" fill="#ff6c6c" />
						<use href="#b" fill="#38311e" mask="url(#mb)" />
						<g id="d">
							<g fill="#38311e">
								<circle cx="4" cy="-18" r="2" />
								<circle cx="8" cy="-8" r="4" />
								<circle cx="17" cy="-1" r="3" />
								<circle cx="9" cy="4" r="3" />
								<circle cx="14" cy="12" r="2" />
							</g>
						</g>
						<use transform="scale(-1 1)" href="#d" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>
