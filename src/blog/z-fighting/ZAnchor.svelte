<script>
	import { onMount } from 'svelte';
	import { Illustration, Anchor, Group, Shape, Ellipse, RoundedRect, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const red = 'hsl(360 71% 66%)';
		const green = 'hsl(162 63% 41%)';
		const yellow = 'hsl(42 78% 65%)';
		const blue1 = 'hsl(224 50% 73%)';
		const blue2 = 'hsl(224 52% 70%)';
		const blue3 = 'hsl(224 40% 66%)';
		const blue4 = 'hsl(224 47% 45%)';
		const blue5 = 'hsl(225 46% 28%)';
		const accent = 'hsl(222 56% 93%)';

		const n = 60;
		const r = 27.5;
		const gap = 4;
		const points = Array(n)
			.fill()
			.map((_, i, { length }) => {
				const angle = (((360 / length) * i) / 180) * Math.PI;
				const x = Math.cos(angle) * r;
				const y = Math.sin(angle) * r;
				return {
					x,
					y
				};
			});

		const lines = Array(Math.floor(points.length / gap))
			.fill()
			.map((_, i) => {
				const i1 = i * gap;
				const i2 = i1 + 1;
				const { x: x1, y: y1 } = points[i1];
				const { x: x2, y: y2 } = points[i2];
				return {
					x1,
					y1,
					x2,
					y2
				};
			});

		const illustration = new Illustration({
			element,
			zoom: 3
		});

		const road = new Anchor({
			addTo: illustration,
			rotate: {
				x: TAU / 9
			}
		});

		new RoundedRect({
			addTo: road,
			color: blue2,
			stroke: 10,
			fill: true,
			width: 100,
			height: 100,
			cornerRadius: 20
		});

		new Ellipse({
			addTo: road,
			color: blue1,
			stroke: 0,
			fill: true,
			diameter: 80,
			translate: {
				z: 9
			}
		});

		new Ellipse({
			addTo: road,
			color: blue3,
			stroke: 0,
			fill: true,
			diameter: 30,
			translate: {
				z: 10
			}
		});

		const groupLines = new Group({
			addTo: road,
			translate: {
				z: 10
			}
		});

		for (const { x1, y1, x2, y2 } of lines) {
			new Shape({
				addTo: groupLines,
				color: blue5,
				stroke: 1,
				path: [
					{ x: x1, y: y1 },
					{ x: x2, y: y2 }
				]
			});
		}

		const anchor = new Anchor({
			addTo: road,
			translate: {
				z: 11
			}
		});

		new Shape({
			addTo: anchor,
			color: yellow,
			stroke: 10,
			translate: {
				y: 27.5
			}
		});

		new Shape({
			addTo: anchor,
			color: green,
			stroke: 10,
			translate: {
				y: -27.5
			}
		});

		illustration.updateRenderGraph();

		let frame = null;

		const loop = () => {
			anchor.rotate.z = (anchor.rotate.z + 0.02) % TAU;
			illustration.updateRenderGraph();
			frame = requestAnimationFrame(loop);
		};

		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				frame = requestAnimationFrame(loop);
			} else {
				cancelAnimationFrame(frame);
			}
		};

		const observer = new IntersectionObserver(observation);
		observer.observe(element);

		return () => {
			observer.unobserve(element);
			cancelAnimationFrame(frame);
		};
	});
</script>

<svg
	bind:this={element}
	style="display: block;"
	viewBox="-66.66666666666667 -53.333333333333336 133.33333333333334 106.66666666666667"
	width="400"
	height="320"
>
	<g stroke-linecap="round" stroke-linejoin="round">
		<path stroke="hsl(162 63% 41%)" stroke-width="10" fill="none" d="M0,-28.137 Z" />
		<path
			stroke="hsl(224 52% 70%)"
			stroke-width="10"
			fill="hsl(224 52% 70%)"
			d="M30,-38.302 C41.25,-38.302 50,-31.599 50,-22.981 L50,22.981 C50,31.599 41.25,38.302 30,38.302 L-30,38.302 C-41.25,38.302 -50,31.599 -50,22.981 L-50,-22.981 C-50,-31.599 -41.25,-38.302 -30,-38.302 L30,-38.302"
		/>
		<path
			fill="hsl(224 50% 73%)"
			d="M0,-36.427 C22.5,-36.427 40,-23.021 40,-5.785 C40,11.451 22.5,24.857 0,24.857 C-22.5,24.857 -40,11.451 -40,-5.785 C-40,-23.021 -22.5,-36.427 0,-36.427"
		/>
		<g stroke="hsl(225 46% 28%)" stroke-width="1" fill="none">
			<path d="M27.5,-6.428 L27.349,-4.226" />
			<path d="M25.123,2.141 L23.816,4.105" />
			<path d="M18.401,9.227 L16.164,10.615" />
			<path d="M8.498,13.607 L5.718,14.178" />
			<path d="M-2.875,14.523 L-5.718,14.178" />
			<path d="M-13.75,11.816 L-16.164,10.615" />
			<path d="M-22.248,5.955 L-23.816,4.105" />
			<path d="M-26.899,-2.048 L-27.349,-4.226" />
			<path d="M-26.899,-10.808 L-26.154,-12.938" />
			<path d="M-22.248,-18.81 L-20.436,-20.524" />
			<path d="M-13.75,-24.672 L-11.185,-25.673" />
			<path d="M-2.875,-27.379 L0,-27.494" />
			<path d="M8.498,-26.463 L11.185,-25.673" />
			<path d="M18.401,-22.083 L20.436,-20.524" />
			<path d="M25.123,-14.996 L26.154,-12.938" />
		</g>
		<path
			fill="hsl(224 40% 66%)"
			d="M0,-17.919 C8.438,-17.919 15,-12.891 15,-6.428 C15,0.036 8.438,5.063 0,5.063 C-8.437,5.063 -15,0.036 -15,-6.428 C-15,-12.891 -8.437,-17.919 0,-17.919"
		/>
		<path stroke="hsl(42 78% 65%)" stroke-width="10" fill="none" d="M0,13.996 Z" />
	</g>
</svg>
