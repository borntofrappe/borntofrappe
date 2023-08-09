<script>
	import { onMount } from 'svelte';
	import { Illustration, Anchor, Group, Box, Ellipse, Shape, TAU } from 'zdog';

	let svg = null;

	onMount(() => {
		const element = svg.querySelector('svg:first-of-type');

		const colorsMarker = {
			on: 'hsl(0 0% 98%)',
			off: 'hsl(160 2% 28%)'
		};

		const yellow = 'hsl(33 99% 64%)';
		const orange = 'hsl(28 74% 60%)';
		const white = 'hsl(35 100% 94%)';
		const whitish = 'hsl(51 9% 84%)';

		const illustration = new Illustration({
			element,
			zoom: 2,
			rotate: {
				x: (TAU / 36) * -1
			}
		});

		new Box({
			addTo: illustration,
			color: yellow,
			stroke: 20,
			width: 80,
			height: 80,
			depth: 80
		});

		const faces = new Anchor({
			addTo: illustration
		});

		const face = new Group();
		const topFace = new Group({
			addTo: illustration
		});

		const dot = new Ellipse({
			diameter: 12,
			color: orange,
			stroke: 0,
			fill: true
		});

		for (const [x, y] of [
			[-32, -32],
			[32, -32],
			[32, 32],
			[-32, 32]
		]) {
			dot.copy({
				addTo: face,
				translate: {
					x,
					y
				}
			});
		}

		const questionMark = {
			top: [
				{ x: 0, y: -3 },
				{ x: 10, y: -3 },
				{ x: 10, y: -14 },
				{ x: -10, y: -14 },
				{ x: -10, y: -5 },
				{ x: -20, y: -5 },
				{ x: -20, y: -5 },
				{ x: -20, y: -17 },
				{ x: -15, y: -22 },
				{ x: 17, y: -22 },
				{ x: 22, y: -17 },
				{ x: 22, y: 0 },
				{ x: 17, y: 5 },
				{ x: 7, y: 5 },
				{ x: 7, y: 15 },
				{ x: -7, y: 15 },
				{ x: -7, y: 4 }
			],
			bottom: [
				{ x: -7, y: 24 },
				{ x: 7, y: 24 },
				{ x: 7, y: 32 },
				{ x: -7, y: 32 }
			]
		};

		new Shape({
			addTo: face,
			color: whitish,
			stroke: 4,
			fill: true,
			path: questionMark.top,
			translate: {
				z: 2
			}
		});

		new Shape({
			addTo: face,
			color: white,
			stroke: 2,
			fill: true,
			path: questionMark.top,
			translate: {
				z: 4
			}
		});

		new Shape({
			addTo: face,
			color: whitish,
			stroke: 4,
			fill: true,
			path: questionMark.bottom,
			translate: {
				z: 2
			}
		});

		new Shape({
			addTo: face,
			color: white,
			stroke: 2,
			fill: true,
			path: questionMark.bottom,
			translate: {
				z: 4
			}
		});

		for (const { translate, rotate } of [
			{
				translate: {
					z: 50
				},
				rotate: {}
			},
			{
				translate: {
					z: -50
				},
				rotate: {
					y: TAU / 2
				}
			},
			{
				translate: {
					x: 50
				},
				rotate: {
					y: (TAU / 4) * -1
				}
			},
			{
				translate: {
					x: -50
				},
				rotate: {
					y: TAU / 4
				}
			}
		]) {
			face.copyGraph({
				addTo: faces,
				translate,
				rotate
			});
		}

		face.copyGraph({
			addTo: topFace,
			translate: {
				y: -50
			},
			rotate: {
				x: TAU / 4
			}
		});

		face.copyGraph({
			addTo: topFace,
			translate: {
				y: -100
			},
			rotate: {},
			visible: false
		});

		illustration.updateRenderGraph();

		let frame = null;

		const animate = () => {
			illustration.rotate.y = (illustration.rotate.y + 0.01) % TAU;

			illustration.updateRenderGraph();
			frame = requestAnimationFrame(animate);
		};

		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				svg.style.color = colorsMarker.on;
				frame = requestAnimationFrame(animate);
			} else {
				svg.style.color = colorsMarker.off;
				cancelAnimationFrame(frame);
			}
		};

		const observer = new IntersectionObserver(observation);
		observer.observe(svg);

		return () => {
			cancelAnimationFrame(frame);
			observer.unobserve(svg);
		};
	});
</script>

<svg
	bind:this={svg}
	style="display: block; color: hsl(160 2% 28%);"
	viewBox="0 0 300 300"
	width="300"
	height="300"
>
	<svg viewBox="-75 -75 150 150" width="300" height="300">
		<g stroke-linecap="round" stroke-linejoin="round">
			<path
				d="M40,-46.338 L40,-32.446 L40,46.338 L40,32.446 Z"
				stroke="hsl(33 99% 64%)"
				stroke-width="20"
				fill="hsl(33 99% 64%)"
			/>
			<g stroke="hsl(51 9% 84%)" stroke-width="4" fill="hsl(51 9% 84%)">
				<path
					d="M52,-2.954 L52,-4.691 L52,-15.524 L52,-12.051 L52,-3.188 L52,-1.451 L52,-1.451 L52,-13.269 L52,-19.061 L52,-24.618 L52,-20.562 L52,-3.82 L52,1.972 L52,3.709 L52,13.557 L52,15.988 L52,5.155 Z"
				/>
				<path d="M52,24.851 L52,22.42 L52,30.298 L52,32.729 Z" />
			</g>
			<g stroke="hsl(35 100% 94%)" stroke-width="2" fill="hsl(35 100% 94%)">
				<path
					d="M55,-2.954 L55,-4.691 L55,-15.524 L55,-12.051 L55,-3.188 L55,-1.451 L55,-1.451 L55,-13.269 L55,-19.061 L55,-24.618 L55,-20.562 L55,-3.82 L55,1.972 L55,3.709 L55,13.557 L55,15.988 L55,5.155 Z"
				/>
				<path d="M55,24.851 L55,22.42 L55,30.298 L55,32.729 Z" />
			</g>
			<path
				d="M-40,-32.446 L-40,-46.338 L-40,32.446 L-40,46.338 Z"
				stroke="hsl(33 99% 64%)"
				stroke-width="20"
				fill="hsl(33 99% 64%)"
			/>
			<g stroke="hsl(51 9% 84%)" stroke-width="4" fill="hsl(51 9% 84%)">
				<path
					d="M-52,-2.954 L-52,-1.218 L-52,-12.051 L-52,-15.524 L-52,-6.661 L-52,-8.397 L-52,-8.397 L-52,-20.215 L-52,-24.27 L-52,-18.714 L-52,-12.921 L-52,3.82 L-52,7.876 L-52,6.14 L-52,15.988 L-52,13.557 L-52,2.724 Z"
				/>
				<path d="M-52,22.42 L-52,24.851 L-52,32.729 L-52,30.298 Z" />
			</g>
			<g stroke="hsl(35 100% 94%)" stroke-width="2" fill="hsl(35 100% 94%)">
				<path
					d="M-55,-2.954 L-55,-1.218 L-55,-12.051 L-55,-15.524 L-55,-6.661 L-55,-8.397 L-55,-8.397 L-55,-20.215 L-55,-24.27 L-55,-18.714 L-55,-12.921 L-55,3.82 L-55,7.876 L-55,6.14 L-55,15.988 L-55,13.557 L-55,2.724 Z"
				/>
				<path d="M-55,22.42 L-55,24.851 L-55,32.729 L-55,30.298 Z" />
			</g>
			<path
				d="M-40,-32.446 L40,-32.446 L40,-46.338 L-40,-46.338 Z"
				stroke="hsl(33 99% 64%)"
				stroke-width="20"
				fill="hsl(33 99% 64%)"
			/>
			<g fill="hsl(28 74% 60%)">
				<path
					d="M-32,-55.839 C-28.625,-55.839 -26,-55.383 -26,-54.797 C-26,-54.211 -28.625,-53.755 -32,-53.755 C-35.375,-53.755 -38,-54.211 -38,-54.797 C-38,-55.383 -35.375,-55.839 -32,-55.839 "
				/>
				<path
					d="M32,-55.839 C35.375,-55.839 38,-55.383 38,-54.797 C38,-54.211 35.375,-53.755 32,-53.755 C28.625,-53.755 26,-54.211 26,-54.797 C26,-55.383 28.625,-55.839 32,-55.839 "
				/>
				<path
					d="M32,-44.726 C35.375,-44.726 38,-44.27 38,-43.684 C38,-43.098 35.375,-42.642 32,-42.642 C28.625,-42.642 26,-43.098 26,-43.684 C26,-44.27 28.625,-44.726 32,-44.726 "
				/>
				<path
					d="M-32,-44.726 C-28.625,-44.726 -26,-44.27 -26,-43.684 C-26,-43.098 -28.625,-42.642 -32,-42.642 C-35.375,-42.642 -38,-43.098 -38,-43.684 C-38,-44.27 -35.375,-44.726 -32,-44.726 "
				/>
			</g>
			<g stroke="hsl(51 9% 84%)" stroke-width="4" fill="hsl(51 9% 84%)">
				<path
					d="M0,-51.731 L10,-51.731 L10,-53.641 L-10,-53.641 L-10,-52.078 L-20,-52.078 L-20,-52.078 L-20,-54.162 L-15,-55.03 L17,-55.03 L22,-54.162 L22,-51.21 L17,-50.342 L7,-50.342 L7,-48.605 L-7,-48.605 L-7,-50.515 Z"
				/>
				<path d="M-7,-47.042 L7,-47.042 L7,-45.653 L-7,-45.653 Z" />
			</g>
			<g stroke="hsl(35 100% 94%)" stroke-width="2" fill="hsl(35 100% 94%)">
				<path
					d="M0,-54.685 L10,-54.685 L10,-56.596 L-10,-56.596 L-10,-55.033 L-20,-55.033 L-20,-55.033 L-20,-57.116 L-15,-57.985 L17,-57.985 L22,-57.116 L22,-54.164 L17,-53.296 L7,-53.296 L7,-51.56 L-7,-51.56 L-7,-53.47 Z"
				/>
				<path d="M-7,-49.997 L7,-49.997 L7,-48.608 L-7,-48.608 Z" />
			</g>
			<path
				d="M-40,-32.446 L40,-32.446 L40,46.338 L-40,46.338 Z"
				stroke="hsl(33 99% 64%)"
				stroke-width="20"
				fill="hsl(33 99% 64%)"
			/>
			<g fill="hsl(28 74% 60%)">
				<path
					d="M-32,-28.74 C-28.625,-28.74 -26,-26.155 -26,-22.831 C-26,-19.508 -28.625,-16.923 -32,-16.923 C-35.375,-16.923 -38,-19.508 -38,-22.831 C-38,-26.155 -35.375,-28.74 -32,-28.74 "
				/>
				<path
					d="M32,-28.74 C35.375,-28.74 38,-26.155 38,-22.831 C38,-19.508 35.375,-16.923 32,-16.923 C28.625,-16.923 26,-19.508 26,-22.831 C26,-26.155 28.625,-28.74 32,-28.74 "
				/>
				<path
					d="M32,34.287 C35.375,34.287 38,36.873 38,40.196 C38,43.52 35.375,46.105 32,46.105 C28.625,46.105 26,43.52 26,40.196 C26,36.873 28.625,34.287 32,34.287 "
				/>
				<path
					d="M-32,34.287 C-28.625,34.287 -26,36.873 -26,40.196 C-26,43.52 -28.625,46.105 -32,46.105 C-35.375,46.105 -38,43.52 -38,40.196 C-38,36.873 -35.375,34.287 -32,34.287 "
				/>
			</g>
			<g stroke="hsl(51 9% 84%)" stroke-width="4" fill="hsl(51 9% 84%)">
				<path
					d="M0,6.075 L10,6.075 L10,-4.758 L-10,-4.758 L-10,4.106 L-20,4.106 L-20,4.106 L-20,-7.712 L-15,-12.636 L17,-12.636 L22,-7.712 L22,9.03 L17,13.954 L7,13.954 L7,23.802 L-7,23.802 L-7,12.969 Z"
				/>
				<path d="M-7,32.665 L7,32.665 L7,40.544 L-7,40.544 Z" />
			</g>
			<g stroke="hsl(35 100% 94%)" stroke-width="2" fill="hsl(35 100% 94%)">
				<path
					d="M0,6.596 L10,6.596 L10,-4.237 L-10,-4.237 L-10,4.627 L-20,4.627 L-20,4.627 L-20,-7.191 L-15,-12.115 L17,-12.115 L22,-7.191 L22,9.551 L17,14.475 L7,14.475 L7,24.323 L-7,24.323 L-7,13.49 Z"
				/>
				<path d="M-7,33.186 L7,33.186 L7,41.064 L-7,41.064 Z" />
			</g>
		</g>
	</svg>

	<svg viewBox="0 -2 70 47" x="230" y="253" width="70" height="47">
		<g stroke-linecap="round" stroke-linejoin="round">
			<rect
				transform="skewX(-4)"
				fill="currentColor"
				stroke="hsl(60 8% 5%)"
				stroke-width="3"
				x="4.5"
				y="1.5"
				width="64"
				height="42"
				rx="5"
			/>
			<g transform="translate(0 -14)" stroke="hsl(73 100% 5%)" stroke-width="2">
				<path
					fill="hsl(73 100% 5%)"
					d="M 13 31 18 55 52 55 58 29 58 20 48 14 36 17 34 21 29 15 21 13 14 19 17 27"
				/>
				<path
					fill-rule="evenodd"
					fill="currentColor"
					d="M 36 17 48 14 58 20 58 29 53 35 39 36 36 17 M 44 21 L 51 24 50 29 45 30 Z"
				/>
				<path
					fill="currentColor"
					d="M 14 19 21 13 29 15 34 21 29 25 33 30 28 37 18 37 13 31 17 27 21 31 25 31 26 29 23 26 27 22 24 19 19 24 Z"
				/>
			</g>
		</g>
	</svg>
</svg>
