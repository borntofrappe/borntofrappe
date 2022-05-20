<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let scale = spring(1, {
		stiffness: 0.1,
		damping: 0.2
	});

	let offset = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let svg;
	let l, t;
	let w, h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { left, top, width, height } = svg.getBoundingClientRect();
		l = left;
		t = top;
		w = width;
		h = height;
	};

	const handleStart = () => scale.set(1.1);
	const handleEnd = () => {
		scale.set(1);
		offset.set({ x: 0, y: 0 });
	};
	const handleMove = ({ offsetX, offsetY }) => {
		const x = (offsetX / w - 0.5) * 10;
		const y = (offsetY / h - 0.5) * 10;
		offset.set({ x, y });
	};

	const points = Array(10)
		.fill()
		.map((_, i, { length }) => {
			const angle = (((360 / length) * i + 18) / 180) * Math.PI;
			const radius = i % 2 === 0 ? 15 : 35;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;
			return {
				x,
				y
			};
		});

	const d =
		`M ${points[0].x} ${points[0].y}` +
		points
			.slice(1)
			.reduce(
				(acc, curr, i) =>
					i % 2 === 0 ? `${acc} Q ${curr.x} ${curr.y}` : `${acc} ${curr.x} ${curr.y}`,
				''
			) +
		` ${points[0].x} ${points[0].y}`;
</script>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-55 -55 110 110"
	bind:this={svg}
	on:mousedown={handleStart}
	on:touchstart|preventDefault={handleStart}
	on:mouseup={handleEnd}
	on:mouseleave={handleEnd}
	on:touchend|preventDefault={handleEnd}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={(e) => {
		const { pageX: x, pageY: y } = e.touches[0];
		handleMove({
			offsetX: x - l,
			offsetY: y - t
		});
	}}
>
	<defs>
		<pattern id="moon-pattern-star" viewBox="-25 -25 50 50" width="1" height="1">
			<path {d} fill="#ffdb47" />
		</pattern>
	</defs>

	<g transform="scale({$scale})">
		<g fill="url(#moon-pattern-star)">
			<g transform="translate({$offset.x} {$offset.y})">
				<rect transform="translate(-44 -44)" width="18" height="18" />
				<rect transform="translate(22 28)" width="16" height="16" />
			</g>
			<g transform="translate({$offset.x * 0.5} {$offset.y * 0.5})">
				<rect transform="translate(-40 24)" width="12" height="12" />
				<rect transform="translate(26 -34)" width="14" height="14" />
			</g>
		</g>
	</g>

	<g
		transform="translate({$offset.x * 0.25} {$offset.y * 0.25}) scale({$scale **
			0.5}) rotate({$offset.y * 2})"
	>
		<g stroke-linecap="round" stroke-linejoin="round" transform="translate(-2 0)">
			<g fill="#ffdb47" stroke="#ffdb47">
				<path
					transform="rotate(-10)"
					stroke-width="8"
					d="M 21 -18 a 28 28 0 1 0 0 36 18.25 18.25 0 1 1 0 -36"
				/>
			</g>
			<g fill="#ff877a">
				<g transform="translate(-12 3) rotate(-5)">
					<g transform="translate({$offset.x * 0.2} {$offset.y * 0.2})">
						<g transform="scale({$scale * 1.1})">
							<ellipse rx="4" ry="3" stroke="none" />
						</g>
					</g>
				</g>
				<g transform="translate(-5 12)">
					<g transform="translate({$offset.x * 0.2} {$offset.y * 0.2})">
						<g transform="scale({$scale})">
							<path
								stroke="#ff877a"
								stroke-width="2"
								fill="#ff877a"
								d="M 0 0 v 1 a 3 3 0 0 0 3 3 3 3 0 0 0 2.5 -3 v -1z"
							/>
						</g>
					</g>
				</g>
			</g>
			<g transform="translate({$offset.x * 0.1} {$offset.y * 0.1})">
				<g transform="translate(-8 -10) rotate(10)">
					<g fill="none" stroke="currentColor">
						<path d="M -6 0 a 6 6 0 0 0 12 0" />

						<path d="M 0 6 v 2" />
						<path transform="rotate(25)" d="M 0 6 v 2" />
						<path transform="rotate(50)" d="M 0 6 v 2" />
						<path transform="rotate(75)" d="M 0 6 v 2" />
						<path transform="rotate(-25)" d="M 0 6 v 2" />
						<path transform="rotate(-50)" d="M 0 6 v 2" />
						<path transform="rotate(-75)" d="M 0 6 v 2" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>
