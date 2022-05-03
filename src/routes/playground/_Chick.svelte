<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let angle = spring(0, {
		stiffness: 0.1,
		damping: 0.25
	});

	let scale = spring(0.8, {
		stiffness: 0.1,
		damping: 0.2
	});

	let svg;
	let t;
	let h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { top, height } = svg.getBoundingClientRect();
		t = top;
		h = height;
	};

	const handleMove = ({ offsetY }) => {
		const y = 1 - offsetY / h;
		scale.set(0.8 + y * 0.2);
		angle.set(y * 90);
	};
</script>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-55 -60 110 100"
	bind:this={svg}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={(e) => {
		const { pageY: y } = e.touches[0];
		handleMove({
			offsetY: y - t
		});
	}}
>
	<g
		fill="#f0d584"
		stroke="#f0d584"
		stroke-width="8"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<g id="w">
			<g transform="translate(-27 -10)">
				<g transform="rotate({$angle})">
					<g transform="rotate(-90)">
						<path d="M 0 3 c -6 -5 -14 -8 -20 0 5 5 2 10 12 10 c 2 0 8 0 8 -10" />
					</g>
				</g>
			</g>
		</g>
		<use transform="scale(-1 1)" href="#w" />
	</g>

	<g fill="none" stroke="#fd971b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
		<g id="l">
			<g transform="translate(-10 18)">
				<g transform="rotate({$angle / 3})">
					<path d="M -3 0 v 7 m 0 0 l 7 7 -7 -4 -7 4z v8" />
				</g>
			</g>
		</g>
		<use transform="scale(-1 1)" href="#l" />
	</g>

	<g fill="#f9f5d0">
		<ellipse rx="28" ry="25" />
		<g stroke="#f9f5d0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
			<g transform="translate(0 -30)">
				<path d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0" />
			</g>
			<g transform="translate(0 -49.5)">
				<g transform="scale({$scale})">
					<g transform="scale(1.2)">
						<path stroke-width="3" d="M -5 0 c 5 0 11 -2 11 -5 0 5 2.5 5 5 3 0 5 -10 7 -16 2" />
					</g>
				</g>
			</g>
		</g>
	</g>

	<g fill="#542b19">
		<circle id="e" cx="-12" cy="-30" r="2.75" />
		<use transform="scale(-1 1)" href="#e" />
	</g>

	<g transform="translate(0 -20)">
		<g
			fill="#fd971b"
			stroke="#fd971b"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M -9 -2 c 6 6 12 6 18 0 c -7 -5 -11 -5 -18 0" />

			<g transform="scale({$scale})">
				<g
					fill="#fc531c"
					stroke="#fc531c"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M -6 -2 c 3 4 9 4 12 0 c -4 1 -8 1 -12 0" />
				</g>
			</g>
		</g>
	</g>
</svg>
