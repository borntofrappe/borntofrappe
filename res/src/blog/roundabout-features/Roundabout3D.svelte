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

	let svg = null;
	let illustration = null;
	let groupSpheres = null;
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

		groupSpheres = new Group({
			addTo: scene,
			translate: { z: 15 }
		});

		new Shape({
			addTo: groupSpheres,
			stroke: 30,
			color: 'hsl(200 85% 55%)',
			translate: { y: -r }
		});

		new Shape({
			addTo: groupSpheres,
			stroke: 30,
			color: 'hsl(40 90% 55%)',
			translate: { y: r }
		});

		illustration.rotate.x = TAU / 5;
		illustration.rotate.z = TAU / 16;
		illustration.updateRenderGraph();

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	const handleAnimation = (animate) => {
		if (svg === null || illustration === null || groupSpheres === null) return;

		if (animate) {
			frame = requestAnimationFrame(function loop() {
				groupSpheres.rotate.z = (groupSpheres.rotate.z + 0.02) % TAU;
				illustration.updateRenderGraph();
				frame = requestAnimationFrame(loop);
			});
		} else {
			cancelAnimationFrame(frame);
		}
	};
	$: handleAnimation(animate);
</script>

<div>
	<label>
		<input type="checkbox" bind:checked={animate} />
		<span>Lap around</span>
	</label>

	<svg
		bind:this={svg}
		style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 520px;"
		width="520"
		height="250"
	>
		<g transform="translate(260 125)">
			<g stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="hsl(0 0% 90%)"
					stroke="hsl(0 0% 90%)"
					stroke-width="1"
					d="M242.835,-35.813 C253.229,-34.482 257.964,-30.95 253.659,-27.738 L115.893,75.04 C111.588,78.252 100.155,79.715 89.762,78.385 L-242.835,35.813 C-253.229,34.482 -257.964,30.95 -253.659,27.738 L-115.893,-75.04 C-111.588,-78.252 -100.155,-79.715 -89.762,-78.385 L242.835,-35.813"
				/>
				<path
					fill="hsl(0 0% 97%)"
					stroke="hsl(0 0% 97%)"
					stroke-width="1"
					d="M57.403,-42.824 C135.355,-32.846 170.871,-6.35 138.582,17.738 C106.293,41.827 20.55,52.802 -57.403,42.824 C-135.355,32.846 -170.871,6.35 -138.582,-17.738 C-106.293,-41.827 -20.55,-52.802 57.403,-42.824"
				/>
				<path
					fill="hsl(0 0% 65%)"
					stroke="hsl(0 0% 65%)"
					stroke-width="1"
					d="M19.134,-14.275 C45.118,-10.949 56.957,-2.117 46.194,5.913 C35.431,13.942 6.85,17.601 -19.134,14.275 C-45.118,10.949 -56.957,2.117 -46.194,-5.913 C-35.431,-13.942 -6.85,-17.601 19.134,-14.275"
				/>
				<g fill="none" stroke="hsl(0 0% 65%)" stroke-width="4">
					<path d="M92.388,7.07 L89.803,8.84" />
					<path d="M79.968,13.799 L76.041,15.314" />
					<path d="M62.524,19.361 L57.501,20.527" />
					<path d="M41.151,23.409 L35.347,24.152" />
					<path d="M17.193,25.686 L10.973,25.96" />
					<path d="M-7.846,26.051 L-14.09,25.838" />
					<path d="M-32.392,24.48 L-38.268,23.794" />
					<path d="M-54.902,21.073 L-60.042,19.956" />
					<path d="M-73.963,16.042 L-78.043,14.566" />
					<path d="M-88.377,9.705 L-91.14,7.961" />
					<path d="M-97.237,2.459 L-98.511,0.558" />
					<path d="M-99.988,-5.241 L-99.692,-7.18" />
					<path d="M-96.456,-12.909 L-94.609,-14.765" />
					<path d="M-86.863,-20.066 L-83.581,-21.721" />
					<path d="M-71.813,-26.26 L-67.301,-27.611" />
					<path d="M-52.25,-31.103 L-46.793,-32.065" />
					<path d="M-29.404,-34.291 L-23.345,-34.803" />
					<path d="M-4.711,-35.623 L1.571,-35.653" />
					<path d="M20.279,-35.015 L26.387,-34.562" />
					<path d="M43.994,-32.506 L49.546,-31.597" />
					<path d="M64.945,-28.253 L69.591,-26.947" />
					<path d="M81.815,-22.524 L85.264,-20.901" />
					<path d="M93.544,-15.678 L95.579,-13.842" />
					<path d="M99.396,-8.146 L99.889,-6.211" />
					<path d="M99.002,-0.401 L97.922,1.511" />
				</g>
				<path fill="none" stroke="hsl(200 85% 55%)" stroke-width="30" d="M38.268,-42.815 Z" />
				<path fill="none" stroke="hsl(40 90% 55%)" stroke-width="30" d="M-38.268,14.284 Z" />
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
</style>
