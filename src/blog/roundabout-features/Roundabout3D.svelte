<script>
	import { onMount } from 'svelte';
	import { Illustration, RoundedRect, Ellipse, Group, Shape, TAU } from 'zdog';

	const n = 100;
	const r = 100;
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
			const i2 = i * gap + 1;
			const { x: x1, y: y1 } = points[i1];
			const { x: x2, y: y2 } = points[i2];
			return {
				x1,
				y1,
				x2,
				y2
			};
		});

	let svg = null;
	let illustration = null;
	let groupCircles = null;
	let animate = false;
	let frame = null;

	onMount(() => {
		illustration = new Illustration({
			element: svg
		});

		const scene = new RoundedRect({
			addTo: illustration,
			width: 400,
			height: 400,
			fill: true,
			color: 'hsl(0 0% 90%)',
			cornerRadius: 20
		});

		new Ellipse({
			addTo: scene,
			diameter: 300,
			fill: true,
			color: 'hsl(0 0% 97%)'
		});

		const groupLines = new Group({
			addTo: scene,
			translate: { z: 5 }
		});

		for (const { x1, y1, x2, y2 } of lines) {
			new Shape({
				addTo: groupLines,
				stroke: 4,
				path: [
					{ x: x1, y: y1 },
					{ x: x2, y: y2 }
				],
				color: 'hsl(0 0% 65%)'
			});
		}

		new Ellipse({
			addTo: scene,
			diameter: 100,
			fill: true,
			color: 'hsl(0 0% 65%)'
		});

		groupCircles = new Group({
			addTo: scene,
			translate: { z: 15 }
		});

		new Shape({
			addTo: groupCircles,
			stroke: 30,
			color: 'hsl(200 85% 55%)',
			translate: { y: -r }
		});

		new Shape({
			addTo: groupCircles,
			stroke: 30,
			color: 'hsl(40 90% 55%)',
			translate: { y: r }
		});

		illustration.rotate.x = TAU / 5.5;
		illustration.rotate.z = (TAU / 16) * -1;
		illustration.updateRenderGraph();

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	const handleAnimation = (animate) => {
		if (svg === null || illustration === null || groupCircles === null) return;

		if (animate) {
			frame = requestAnimationFrame(function loop() {
				groupCircles.rotate.z = (groupCircles.rotate.z + 0.02) % TAU;
				illustration.updateRenderGraph();
				frame = requestAnimationFrame(loop);
			});
		} else {
			cancelAnimationFrame(frame);
		}
	};
	$: handleAnimation(animate);
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	<span>Lap around</span>
</label>

<svg bind:this={svg} style="display: block;" width="520" height="250">
	<g transform="translate(260 125)">
		<g stroke-linecap="round" stroke-linejoin="round">
			<path
				fill="hsl(0 0% 90%)"
				stroke="hsl(0 0% 90%)"
				stroke-width="1"
				d="M89.762,-105.374 C100.155,-107.162 111.588,-105.195 115.893,-100.877 L253.659,37.288 C257.964,41.606 253.229,46.355 242.835,48.144 L-89.762,105.374 C-100.155,107.162 -111.588,105.195 -115.893,100.877 L-253.659,-37.288 C-257.964,-41.606 -253.229,-46.355 -242.835,-48.144 L89.762,-105.374"
			/>
			<path
				stroke="hsl(0 0% 97%)"
				stroke-width="1"
				fill="hsl(0 0% 97%)"
				d="M-57.403,-57.569 C20.55,-70.982 106.293,-56.228 138.582,-23.846 C170.871,8.537 135.355,44.156 57.403,57.569 C-20.55,70.982 -106.293,56.228 -138.582,23.846 C-170.871,-8.537 -135.355,-44.156 -57.403,-57.569"
			/>
			<path
				d="M-19.134,-19.19 C6.85,-23.661 35.431,-18.743 46.194,-7.949 C56.957,2.846 45.118,14.719 19.134,19.19 C-6.85,23.661 -35.431,18.743 -46.194,7.949 C-56.957,-2.846 -45.118,-14.719 -19.134,-19.19"
				stroke="hsl(0 0% 65%)"
				stroke-width="1"
				fill="hsl(0 0% 65%)"
			/>

			<g fill="none" stroke="hsl(0 0% 65%)" stroke-width="4">
				<path d="M92.388,-20.445 L94.609,-18.004" />
				<path d="M99.002,-10.401 L99.692,-7.807" />
				<path d="M99.396,0.01 L98.511,2.594" />
				<path d="M93.544,10.136 L91.14,12.547" />
				<path d="M81.815,19.338 L78.043,21.425" />
				<path d="M64.945,27.04 L60.042,28.672" />
				<path d="M43.994,32.757 L38.268,33.831" />
				<path d="M20.279,36.13 L14.09,36.579" />
				<path d="M-4.711,36.947 L-10.973,36.742" />
				<path d="M-29.404,35.157 L-35.347,34.312" />
				<path d="M-52.25,30.872 L-57.501,29.439" />
				<path d="M-71.813,24.361 L-76.041,22.431" />
				<path d="M-86.863,16.034 L-89.803,13.728" />
				<path d="M-96.456,6.414 L-97.922,3.876" />
				<path d="M-99.988,-3.896 L-99.889,-6.505" />
				<path d="M-97.237,-14.246 L-95.579,-16.763" />
				<path d="M-88.377,-23.987 L-85.264,-26.254" />
				<path d="M-73.963,-32.506 L-69.591,-34.38" />
				<path d="M-54.902,-39.269 L-49.546,-40.632" />
				<path d="M-32.392,-43.85 L-26.387,-44.617" />
				<path d="M-7.846,-45.962 L-1.571,-46.085" />
				<path d="M17.193,-45.471 L23.345,-44.942" />
				<path d="M41.151,-42.409 L46.793,-41.261" />
				<path d="M62.524,-36.968 L67.301,-35.274" />
				<path d="M79.968,-29.491 L83.581,-27.355" />
			</g>
			<path fill="none" stroke="hsl(200 85% 55%)" stroke-width="30" d="M-38.268,-52.024 Z" />
			<path fill="none" stroke="hsl(40 90% 55%)" stroke-width="30" d="M38.268,24.735 Z" />
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
