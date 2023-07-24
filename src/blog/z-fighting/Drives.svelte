<script>
	import { onMount } from 'svelte';
	import { Illustration, Anchor, Group, Shape, Ellipse, RoundedRect, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const element1 = element.querySelector('svg:nth-of-type(1)');
		const element2 = element.querySelector('svg:nth-of-type(2)');

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

		const illustration1 = new Illustration({
			element: element1,
			zoom: 3
		});

		const illustration2 = new Illustration({
			element: element2,
			zoom: 3
		});

		const road = new Anchor();

		new RoundedRect({
			addTo: road,
			width: 100,
			height: 100,
			fill: true,
			cornerRadius: 20,
			color: blue2,
			stroke: 10
		});

		new Ellipse({
			addTo: road,
			diameter: 80,
			fill: true,
			stroke: 0,
			color: blue1,
			translate: {
				z: 9
			}
		});

		new Ellipse({
			addTo: road,
			diameter: 30,
			fill: true,
			stroke: 0,
			color: blue3,
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
				stroke: 1,
				path: [
					{ x: x1, y: y1 },
					{ x: x2, y: y2 }
				],
				color: blue5
			});
		}

		const road1 = road.copyGraph({
			addTo: illustration1,
			rotate: {
				x: TAU / 9,
				z: (TAU / 64) * -1
			}
		});

		const road2 = road.copyGraph({
			addTo: illustration2,
			rotate: {
				x: TAU / 9,
				z: TAU / 64
			}
		});

		const group1 = new Group({
			addTo: road1,
			translate: {
				z: 11
			}
		});

		new Shape({
			addTo: group1,
			stroke: 10,
			color: yellow,
			translate: {
				y: 27.5
			}
		});

		new Shape({
			addTo: group1,
			stroke: 10,
			color: green,
			translate: {
				y: -27.5
			}
		});

		const tunnel = new Anchor({
			addTo: road2,
			translate: {
				z: 10
			},
			rotate: {
				z: road2.rotate.z * -1
			}
		});

		const rotatedTunnel = new Anchor({
			addTo: tunnel,
			rotate: {
				z: road2.rotate.z
			}
		});

		new Shape({
			addTo: rotatedTunnel,
			color: 'hsl(0 0% 0% / 0.1)',
			fill: true,
			stroke: 0,
			path: [
				{ x: -40, y: 0, z: 0 },
				{ x: -15, y: 0, z: 0 },
				{
					arc: [
						{ x: -15, y: -15, z: 0 },
						{ x: 0, y: -15, z: 0 }
					]
				},
				{
					arc: [
						{ x: 15, y: -15, z: 0 },
						{ x: 15, y: 0, z: 0 }
					]
				},
				{ x: 40, y: 0, z: 0 },
				{
					arc: [
						{ x: 40, y: -40, z: 0 },
						{ x: 0, y: -40, z: 0 }
					]
				},
				{
					arc: [
						{ x: -40, y: -40, z: 0 },
						{ x: -40, y: 0, z: 0 }
					]
				}
			],
			translate: {
				x: road2.rotate.z * 5,
				z: 5,
				y: 5
			}
		});

		new Shape({
			addTo: rotatedTunnel,
			color: blue4,
			fill: true,
			path: [
				{ x: -15, y: 0, z: 0 },
				{ x: -15, y: 0, z: 20 },
				{
					arc: [
						{ x: -15, y: 0, z: 32.5 },
						{ x: -27.5, y: 0, z: 32.5 }
					]
				},
				{
					arc: [
						{ x: -27.5, y: -27.5, z: 32.5 },
						{ x: 0, y: -27.5, z: 32.5 }
					]
				},
				{
					arc: [
						{ x: 27.5, y: -27.5, z: 32.5 },
						{ x: 27.5, y: 0, z: 32.5 }
					]
				},
				{
					arc: [
						{ x: 15, y: 0, z: 32.5 },
						{ x: 15, y: 0, z: 20 }
					]
				},
				{ x: 15, y: 0, z: 0 },
				{
					arc: [
						{ x: 15, y: -15, z: 0 },
						{ x: 0, y: -15, z: 0 }
					]
				},
				{
					arc: [
						{ x: -15, y: -15, z: 0 },
						{ x: -15, y: 0, z: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: rotatedTunnel,
			color: blue4,
			fill: true,
			path: [
				{ x: -40, y: 0, z: 20 },
				{
					arc: [
						{ x: -40, y: 0, z: 32.5 },
						{ x: -27.5, y: 0, z: 32.5 }
					]
				},
				{
					arc: [
						{ x: -27.5, y: -27.5, z: 32.5 },
						{ x: 0, y: -27.5, z: 32.5 }
					]
				},
				{
					arc: [
						{ x: 27.5, y: -27.5, z: 32.5 },
						{ x: 27.5, y: 0, z: 32.5 }
					]
				},
				{
					arc: [
						{ x: 40, y: 0, z: 32.5 },
						{ x: 40, y: 0, z: 20 }
					]
				},
				{
					arc: [
						{ x: 40, y: -40, z: 20 },
						{ x: 0, y: -40, z: 20 }
					]
				},
				{
					arc: [
						{ x: -40, y: -40, z: 20 },
						{ x: -40, y: 0, z: 20 }
					]
				}
			]
		});

		new Shape({
			addTo: rotatedTunnel,
			color: rotatedTunnel.rotate.z < 0 ? blue4 : blue5,
			fill: true,
			path: [
				{ x: -40, y: 0, z: 0 },
				{ x: -40, y: 0, z: 20 },
				{
					arc: [
						{ x: -40, y: -40, z: 20 },
						{ x: 0, y: -40, z: 20 }
					]
				},
				{ x: 0, y: -40, z: 0 },
				{
					arc: [
						{ x: -40, y: -40, z: 0 },
						{ x: -40, y: -0, z: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: rotatedTunnel,
			color: rotatedTunnel.rotate.z > 0 ? blue4 : blue5,
			fill: true,
			path: [
				{ x: 40, y: 0, z: 0 },
				{ x: 40, y: 0, z: 20 },
				{
					arc: [
						{ x: 40, y: -40, z: 20 },
						{ x: 0, y: -40, z: 20 }
					]
				},
				{ x: 0, y: -40, z: 0 },
				{
					arc: [
						{ x: 40, y: -40, z: 0 },
						{ x: 40, y: -0, z: 0 }
					]
				}
			]
		});

		const group2 = new Group({
			addTo: road2,
			translate: {
				z: 11
			}
		});

		new Shape({
			addTo: group2,
			stroke: 10,
			color: yellow,
			translate: {
				y: 27.5
			}
		});

		new Shape({
			addTo: group2,
			stroke: 10,
			color: red,
			translate: {
				y: -27.5
			}
		});

		illustration1.updateRenderGraph();
		illustration2.updateRenderGraph();

		let frame = null;

		const loop = () => {
			group1.rotate.z = (group1.rotate.z + 0.02) % TAU;
			group2.rotate.z = (group2.rotate.z + 0.02) % TAU;
			illustration1.updateRenderGraph();
			illustration2.updateRenderGraph();
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

<div bind:this={element}>
	<svg
		style="display: block;"
		viewBox="-66.66666666666667 -53.333333333333336 133.33333333333334 106.66666666666667"
		width="400"
		height="320"
	>
		<g stroke-linecap="round" stroke-linejoin="round">
			<path
				stroke="hsl(224 52% 70%)"
				stroke-width="10"
				fill="hsl(224 52% 70%)"
				d="M24.955,-40.37 C36.151,-41.215 45.716,-35.201 46.819,-26.625 L52.7,19.116 C53.802,27.693 45.952,35.021 34.756,35.865 L-24.955,40.37 C-36.151,41.215 -45.716,35.201 -46.819,26.625 L-52.7,-19.116 C-53.802,-27.693 -45.952,-35.021 -34.756,-35.865 L24.955,-40.37"
			/>
			<path
				fill="hsl(224 50% 73%)"
				d="M-3.921,-36.279 C18.471,-37.969 37.602,-25.942 39.807,-8.789 C42.013,8.364 26.312,23.02 3.921,24.709 C-18.471,26.399 -37.602,14.371 -39.807,-2.782 C-42.013,-19.935 -26.312,-34.59 -3.921,-36.279"
			/>
			<g stroke="hsl(225 46% 28%)" stroke-width="1" fill="none">
				<path d="M27.368,-8.493 L27.499,-6.29" />
				<path d="M26.098,0.213 L25.049,2.266" />
				<path d="M20.316,7.77 L18.267,9.319" />
				<path d="M11.021,12.873 L8.327,13.649" />
				<path d="M-0.18,14.638 L-3.053,14.508" />
				<path d="M-11.349,12.761 L-13.906,11.747" />
				<path d="M-20.556,7.565 L-22.353,5.843" />
				<path d="M-26.209,-0.049 L-26.936,-2.183" />
				<path d="M-27.33,-8.767 L-26.861,-10.943" />
				<path d="M-23.725,-17.08 L-22.142,-18.922" />
				<path d="M-16.018,-23.551 L-13.594,-24.74" />
				<path d="M-5.541,-27.062 L-2.695,-27.393" />
				<path d="M5.894,-27.005 L8.669,-26.42" />
				<path d="M16.309,-23.389 L18.534,-21.991" />
				<path d="M23.905,-16.841 L25.195,-14.87" />
			</g>
			<path
				fill="hsl(224 40% 66%)"
				d="M-1.47,-17.863 C6.927,-18.497 14.101,-13.987 14.928,-7.554 C15.755,-1.122 9.867,4.374 1.47,5.007 C-6.927,5.641 -14.101,1.131 -14.928,-5.302 C-15.755,-11.734 -9.867,-17.23 -1.47,-17.863"
			/>
			<path stroke="hsl(42 78% 65%)" stroke-width="10" fill="none" d="M2.695,13.894 Z" />
			<path stroke="hsl(162 63% 41%)" stroke-width="10" fill="none" d="M-2.695,-28.035 Z" />
		</g>
	</svg>

	<svg
		style="display: block;"
		viewBox="-66.66666666666667 -53.333333333333336 133.33333333333334 106.66666666666667"
		width="400"
		height="320"
	>
		<g stroke-linecap="round" stroke-linejoin="round">
			<path
				stroke="hsl(224 52% 70%)"
				stroke-width="10"
				fill="hsl(224 52% 70%)"
				d="M34.756,-35.865 C45.952,-35.021 53.802,-27.693 52.7,-19.116 L46.819,26.625 C45.716,35.201 36.151,41.215 24.955,40.37 L-34.756,35.865 C-45.952,35.021 -53.802,27.693 -52.7,19.116 L-46.819,-26.625 C-45.716,-35.201 -36.151,-41.215 -24.955,-40.37 L34.756,-35.865"
			/>
			<path
				stroke="hsl(225 46% 28%)"
				stroke-width="1"
				fill="hsl(225 46% 28%)"
				d="M-39.807,-9.431 L-39.807,-22.287 C-37.602,-39.44 -18.471,-51.467 3.921,-49.778 L3.921,-36.922 C-18.471,-38.612 -37.602,-26.584 -39.807,-9.431 Z"
			/>
			<path
				stroke="hsl(224 47% 45%)"
				stroke-width="1"
				fill="hsl(224 47% 45%)"
				d="M39.807,-3.424 L39.807,-16.28 C42.013,-33.433 26.312,-48.088 3.921,-49.778 L3.921,-36.922 C26.312,-35.233 42.013,-20.577 39.807,-3.424 Z"
			/>
			<path
				fill="hsl(224 50% 73%)"
				d="M3.921,-36.279 C26.312,-34.59 42.013,-19.935 39.807,-2.782 C37.602,14.371 18.471,26.399 -3.921,24.709 C-26.312,23.02 -42.013,8.364 -39.807,-8.789 C-37.602,-25.942 -18.471,-37.969 3.921,-36.279"
			/>
			<path
				fill="hsl(224 40% 66%)"
				d="M1.47,-17.863 C9.867,-17.23 15.755,-11.734 14.928,-5.302 C14.101,1.131 6.927,5.641 -1.47,5.007 C-9.867,4.374 -15.755,-1.122 -14.928,-7.554 C-14.101,-13.987 -6.927,-18.497 1.47,-17.863"
			/>
			<g stroke="hsl(225 46% 28%)" stroke-width="1" fill="none">
				<path d="M27.368,-4.363 L26.936,-2.183" />
				<path d="M23.905,3.986 L22.353,5.843" />
				<path d="M16.309,10.534 L13.906,11.747" />
				<path d="M5.894,14.149 L3.053,14.508" />
				<path d="M-5.541,14.206 L-8.327,13.649" />
				<path d="M-16.018,10.696 L-18.267,9.319" />
				<path d="M-23.725,4.224 L-25.049,2.266" />
				<path d="M-27.33,-4.089 L-27.499,-6.29" />
				<path d="M-26.209,-12.806 L-25.195,-14.87" />
				<path d="M-20.556,-20.421 L-18.534,-21.991" />
				<path d="M-11.349,-25.616 L-8.669,-26.42" />
				<path d="M-0.18,-27.494 L2.695,-27.393" />
				<path d="M11.021,-25.728 L13.594,-24.74" />
				<path d="M20.316,-20.626 L22.142,-18.922" />
				<path d="M26.098,-13.069 L26.861,-10.943" />
			</g>
			<path stroke="hsl(42 78% 65%)" stroke-width="10" fill="none" d="M-2.695,13.894 Z" />
			<path stroke="hsl(360 71% 66%)" stroke-width="10" fill="none" d="M2.695,-28.035 Z" />
			<path
				fill="hsl(0 0% 0% / 0.1)"
				d="M-39.8,-8.796 L-14.92,-6.919 C-14.093,-13.351 -6.919,-17.861 1.478,-17.228 C9.875,-16.594 15.762,-11.099 14.935,-4.666 L39.815,-2.789 C42.02,-19.942 26.32,-34.597 3.928,-36.287 C-18.463,-37.976 -37.594,-25.949 -39.8,-8.796 Z"
			/>
			<g stroke="hsl(224 47% 45%)" stroke-width="1" fill="hsl(224 47% 45%)">
				<path
					d="M-14.928,-7.554 L-14.928,-20.41 C-14.928,-24.93 -20.37,-28.855 -27.368,-29.383 C-25.851,-41.176 -12.699,-49.445 2.695,-48.283 C18.09,-47.122 28.884,-37.046 27.368,-25.254 C20.37,-25.782 14.928,-22.677 14.928,-18.157 L14.928,-5.302 C15.755,-11.734 9.867,-17.23 1.47,-17.863 C-6.927,-18.497 -14.101,-13.987 -14.928,-7.554 Z"
				/>
				<path
					d="M-39.807,-22.287 C-39.807,-26.807 -34.365,-29.911 -27.368,-29.383 C-25.851,-41.176 -12.699,-49.445 2.695,-48.283 C18.09,-47.122 28.884,-37.046 27.368,-25.254 C34.365,-24.726 39.807,-20.8 39.807,-16.28 C42.013,-33.433 26.312,-48.088 3.921,-49.778 C-18.471,-51.467 -37.602,-39.44 -39.807,-22.287 Z"
				/>
			</g>
		</g>
	</svg>
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	div > svg {
		flex-basis: 400px;
	}
</style>
