<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let svg;
	let w, h;
	let l, t;

	const angle = spring(0, {
		stiffness: 0.1,
		damping: 0.25
	});

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height, left, top } = svg.getBoundingClientRect();
		w = width;
		h = height;
		l = left;
		t = top;
	};

	const handleMove = (offset) => {
		const { offsetX, offsetY } = offset;
		const x = offsetX / w - 0.5;
		const y = offsetY / h - 0.5;

		if (y > 0) return;

		const theta = Math.atan2(y, x);
		const degrees = (theta * 180) / Math.PI + 90;

		angle.set(degrees);
	};
</script>

<svelte:window on:resize={handleSize} />

<svg
	viewBox="-50 -50 100 100"
	bind:this={svg}
	on:mousemove={(e) => {
		const { offsetX, offsetY } = e;
		handleMove({ offsetX, offsetY });
	}}
	on:touchmove|preventDefault={(e) => {
		const touch = e.touches[0];
		const { pageX: x, pageY: y } = touch;
		const offsetX = x - l;
		const offsetY = y - t;
		handleMove({
			offsetX,
			offsetY
		});
	}}
>
	<defs>
		<marker id="brianna-m" viewBox="-1 -1 2 2">
			<circle r="1" fill="#38311e" />
		</marker>
	</defs>
	<g transform="rotate({$angle})">
		<g transform="translate(0 -20)">
			<g fill="none" stroke="#38311e" stroke-width="1.5" marker-end="url(#brianna-m)">
				<path d="M 0 0 l 12 -14" />
				<path d="M 0 0 l -12 -14" />
			</g>
			<circle fill="#38311e" r="14" />
		</g>

		<g>
			<circle fill="#ff6c6c" r="25" />
			<g fill="#38311e">
				<g id="brianna-dots">
					<circle cx="4" cy="-18" r="2" />
					<circle cx="8" cy="-8" r="4" />
					<circle cx="18" cy="-1" r="3" />
					<circle cx="6" cy="5" r="3" />
					<circle cx="14" cy="12" r="2" />
					<circle cx="4" cy="18" r="2" />
				</g>
				<use href="#brianna-dots" transform="scale(-1 1)" />
			</g>
		</g>
	</g>
</svg>
